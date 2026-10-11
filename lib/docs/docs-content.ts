import registry from "@/registry.json";

export const registryBaseUrl = "https://ui.eindev.ir/r/{name}.json";
export const registryNamespace = "@einui";

export const gettingStartedPages = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Theming", href: "/docs/theming" },
  { title: "Dark mode", href: "/docs/dark-mode" },
  { title: "CLI", href: "/docs/cli" },
] as const;

export const recommendedComponentSlugs = [
  "glass-button",
  "glass-card",
  "glass-input",
  "glass-dialog",
  "glass-tabs",
] as const;

export const projectRequirements = [
  "A React project with Tailwind CSS configured",
  "shadcn initialized in the project",
  "A current Node.js release supported by your project",
] as const;

interface RegistryItem {
  name: string;
  title?: string;
  type: string;
  description?: string;
  dependencies?: string[];
  files?: { path: string }[];
}

const registryItems = registry.items as RegistryItem[];

export const registryCatalog = registryItems.map((item) => ({
  name: item.name,
  title: item.title ?? item.name,
  description: item.description ?? "",
  type: item.type.replace(/^registry:/, ""),
}));

export const installableComponents = registryItems
  .filter(
    (item) =>
      (item.type === "registry:ui" || item.type === "registry:component") &&
      !item.files?.some((file) => file.path.startsWith("registry/widgets/"))
  )
  .map((item) => ({
    name: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "Ein UI component.",
    dependencies: item.dependencies ?? [],
    command: `npx shadcn@latest add ${registryNamespace}/${item.name}`,
  }));

export const recommendedComponents = recommendedComponentSlugs
  .map((slug) => installableComponents.find((item) => item.name === slug))
  .filter((item): item is (typeof installableComponents)[number] => Boolean(item));

export const blockOrder = [
  "login-page",
  "signup-page",
  "forgot-password-page",
  "pricing-page",
  "admin-panel",
] as const;

const blockDetails = {
  "login-page": {
    route: "/docs/blocks/login",
    title: "Login page",
    description: "A focused sign-in flow with email and password fields, password visibility, and social sign-in actions.",
    features: ["Email and password fields", "Password visibility toggle", "Loading state", "Google and GitHub actions", "Responsive layout"],
  },
  "signup-page": {
    route: "/docs/blocks/signup",
    title: "Sign-up page",
    description: "A complete account-creation flow with password requirements, confirmation matching, and terms agreement.",
    features: ["First and last name fields", "Five password requirements", "Password confirmation feedback", "Terms agreement", "Disabled and loading states"],
  },
  "forgot-password-page": {
    route: "/docs/blocks/forgot-password",
    title: "Forgot password page",
    description: "A recovery flow that moves from email submission to a clear confirmation state with resend guidance.",
    features: ["Email validation", "Submission and confirmation states", "Resend and alternate-email actions", "Recovery tips", "Responsive layout"],
  },
  "pricing-page": {
    route: "/docs/blocks/pricing",
    title: "Pricing page",
    description: "A three-tier pricing surface with monthly and yearly billing, a highlighted plan, and clear feature lists.",
    features: ["Starter, Professional, and Enterprise tiers", "Monthly and yearly billing", "Highlighted recommended plan", "Feature lists", "Responsive card layout"],
  },
  "admin-panel": {
    route: "/docs/blocks/admin",
    title: "Admin panel",
    description: "A dashboard starting point with metrics, searchable users, storage, recent activity, and settings sections.",
    features: ["Metric summary cards", "Searchable user table", "Add-user dialog", "Storage and activity widgets", "General, notification, and security tabs"],
  },
} as const;

export const blockItems = blockOrder
  .map((name) => {
    const registryItem = registryItems.find((item) => item.name === name);
    const detail = blockDetails[name];
    return registryItem
      ? {
          ...detail,
          name,
          dependencies: registryItem.dependencies ?? [],
          registryDescription: registryItem.description ?? detail.description,
        }
      : undefined;
  })
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export function getInstallCommand(name: string) {
  return `npx shadcn@latest add ${registryNamespace}/${name}`;
}

export function getRegistryUrl(name = "{name}") {
  return registryBaseUrl.replace("{name}", name);
}
