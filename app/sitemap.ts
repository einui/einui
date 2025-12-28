import { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ui.eindev.ir"

// All component routes for sitemap
const componentRoutes = [
  "glass-card",
  "glass-button",
  "glass-dialog",
  "glass-input",
  "glass-tabs",
  "glass-badge",
  "glass-avatar",
  "glass-progress",
  "glass-switch",
  "glass-slider",
  "glass-tooltip",
  "glass-command-palette",
  "glass-notification",
  "glass-morph-card",
  "glass-ripple",
  "glass-timeline",
  "glass-gauge",
  "glass-dock",
  "glass-spotlight",
]

const docsRoutes = [
  "",
  "/installation",
  "/theming",
  "/dark-mode",
  "/cli",
  "/registry",
  "/registry/schema",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Homepage
  const homeRoute = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  }

  // Documentation pages
  const docPages = docsRoutes.map((route) => ({
    url: `${SITE_URL}/docs${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 0.9 : 0.8,
  }))

  // Component pages
  const componentPages = componentRoutes.map((component) => ({
    url: `${SITE_URL}/docs/components/${component}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blocks/samples
  const blockPages = [
    {
      url: `${SITE_URL}/docs/blocks/admin`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // Registry page
  const registryPage = {
    url: `${SITE_URL}/registry`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }

  return [homeRoute, ...docPages, ...componentPages, ...blockPages, registryPage]
}
