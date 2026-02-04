import type React from "react"
import type { Metadata } from "next"
import { buildComponentMetadata } from "@/lib/seo"

const componentTitle = "Command Palette"
const componentDescription =
  "A spotlight-style command palette with keyboard navigation, search filtering, customizable positioning, and glass morphism styling. Press Cmd+K to open."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-command-palette",
})

export default function CommandPaletteLayout({ children }: { children: React.ReactNode }) {
  return children
}
