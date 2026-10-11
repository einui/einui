import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import registry from "@/registry.json";
import componentsConfig from "@/components.json";
import {
  getRegistryUrl,
  registryCatalog,
  registryNamespace,
} from "@/lib/docs/docs-content";

interface RegistryItem {
  name: string;
  type: string;
  files: { path: string }[];
  registryDependencies?: string[];
}

const sourceItems = registry.items as RegistryItem[];
const registryNames = new Set(sourceItems.map((item) => item.name));

describe("published registry contract", () => {
  it("keeps the namespace, project config, and manifest identity aligned", () => {
    expect(registry.$schema).toBe("https://ui.shadcn.com/schema/registry.json");
    expect(registryNamespace).toBe("@einui");
    expect(getRegistryUrl()).toBe("https://ui.eindev.ir/r/{name}.json");
    expect(componentsConfig.registries[registryNamespace]).toBe(getRegistryUrl());
    expect(registry.name).toBe(registryNamespace.slice(1));
    expect(registry.homepage).toBe("https://ui.eindev.ir");
  });

  it("publishes the manifest catalog without stale or duplicate item names", () => {
    const publishedIndex = JSON.parse(
      readFileSync(resolve(process.cwd(), "public/r/registry.json"), "utf8"),
    );
    const sourceNames = sourceItems.map((item) => item.name);
    const publishedNames = publishedIndex.items.map(
      (item: { name: string }) => item.name,
    );

    expect(new Set(sourceNames).size).toBe(sourceNames.length);
    expect(registryCatalog.map((item) => item.name)).toEqual(sourceNames);
    expect(publishedIndex.$schema).toBe(
      "https://ui.shadcn.com/schema/registry.json",
    );
    expect(publishedNames).toEqual(sourceNames);
    expect(publishedIndex.name).toBe(registry.name);
    expect(publishedIndex.homepage).toBe(registry.homepage);
  });

  it("publishes each item with its source files and resolvable dependencies", () => {
    for (const item of sourceItems) {
      const publishedItem = JSON.parse(
        readFileSync(
          resolve(process.cwd(), `public/r/${item.name}.json`),
          "utf8",
        ),
      );

      expect(publishedItem.$schema).toBe(
        "https://ui.shadcn.com/schema/registry-item.json",
      );
      expect(publishedItem.name).toBe(item.name);
      expect(publishedItem.type).toBe(item.type);
      expect(publishedItem.files).toHaveLength(item.files.length);

      for (const file of publishedItem.files as {
        path: string;
        content: string;
      }[]) {
        expect(file.content).toBe(
          readFileSync(resolve(process.cwd(), file.path), "utf8"),
        );
      }

      for (const dependency of item.registryDependencies ?? []) {
        const match = dependency.match(
          /^https:\/\/ui\.eindev\.ir\/r\/([a-z0-9-]+)\.json$/,
        );
        if (!match) {
          throw new Error(`Invalid registry dependency URL: ${dependency}`);
        }

        const dependencyName = match[1];
        expect(registryNames.has(dependencyName)).toBe(true);
        expect(dependency).toBe(getRegistryUrl(dependencyName));
      }
    }
  });
});
