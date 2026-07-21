import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@einui/ui": path.resolve(__dirname, "../ui/src"),
      "@einui/utils": path.resolve(__dirname, "../utils/src"),
      "@einui/hooks": path.resolve(__dirname, "../hooks/src"),
    },
  },
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});
