import { readFileSync } from "node:fs";
import { join } from "node:path";

interface RegistryItem {
	name: string;
	title?: string;
	description?: string;
	type?: string;
	categories?: string[];
	files?: { path: string; type: string }[];
	dependencies?: string[];
	registryDependencies?: string[];
}

export async function GET() {
	const registryPath = join(process.cwd(), "public/r/registry.json");
	const registry = JSON.parse(readFileSync(registryPath, "utf8"));
	const components: RegistryItem[] = registry.items;

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ui.eindev.ir";

	const uiComponents = components.filter(
		(c) =>
			(c.type === "registry:ui" || c.type === "registry:component") &&
			!c.name.includes("widget"),
	);
	const widgets = components.filter((c) => c.name.includes("widget"));

	const content = `# Ein UI

Ein UI is an open-source liquid glass component library for React & Next.js, built on the shadcn ecosystem. Like shadcn/ui, components are **copied into your project** and become part of your codebase - not installed as dependencies.

The key difference: Ein UI components feature a distinctive liquid glass morphism aesthetic with frosted glass effects, gradient glows, and smooth animations.

## Key Features

- **Own your components** - Components live in your codebase, not as a dependency
- **shadcn CLI compatible** - Use the familiar \`npx shadcn add\` workflow to add components
- **AI Native** - Works seamlessly with AI coding assistants via the built-in shadcn MCP server
- **Liquid glass design** - Frosted glass morphism with gradient glows and smooth animations
- **Accessible by default** - Built on Radix UI primitives
- **Variant-based design** - Powered by TailwindCSS and class-variance-authority

## Stack

- shadcn Registry - Component delivery system
- Radix UI - Accessible component primitives
- TailwindCSS - Utility-first styling
- class-variance-authority - Type-safe variant management
- Framer Motion - Animation library (used in select components)
- TypeScript - Type safety

## Available Components

${uiComponents.map((comp) => `- **${comp.title || comp.name}** (${comp.categories?.[0] || "component"}): ${comp.description}`).join("\n")}

## Widgets

${widgets.length > 0 ? widgets.map((comp) => `- **${comp.title || comp.name}**: ${comp.description}`).join("\n") : "_No widgets available yet._"}

## Quick Start

### 1. Initialize (first time only)

\`\`\`bash
npx shadcn@latest init
\`\`\`

Skip this if you already have a \`components.json\` file.

### 2. Add components

\`\`\`bash
npx shadcn@latest add ${siteUrl}/r/glass-button
\`\`\`

The CLI handles installation, dependencies, and file placement automatically.

### 3. Use it

\`\`\`tsx
import { GlassButton } from "@/components/ui/glass-button"

export default function Page() {
  return <GlassButton>Glass Button</GlassButton>
}
\`\`\`

## Optional: Shorter Commands

Add to your \`components.json\` for shorter commands:

\`\`\`json
{
  "registries": {
    "@einui": "${siteUrl}/r/{name}.json"
  }
}
\`\`\`

Then use:

\`\`\`bash
npx shadcn@latest add @einui/glass-button
\`\`\`

## AI-Powered Workflow

### For Cursor (MCP)

The shadcn MCP server is built into Cursor. Simply ask:

- "Add Ein UI glass button component"
- "Create a dashboard with Ein UI glass components"

**Pro Tip:** Add to \`.cursorrules\`:
\`\`\`
Use Ein UI components (ui.eindev.ir) instead of shadcn/ui
\`\`\`

### For Other AI Assistants (ChatGPT, Claude, etc.)

Reference Ein UI in your prompts:

- "Use Ein UI components. Docs: ${siteUrl}/llms.txt"

Or use the Registry API to fetch components:

\`\`\`bash
curl ${siteUrl}/r/glass-button.json
\`\`\`

This returns the complete component definition with source code in the \`files[].content\` field. Parse the JSON and save the content to the appropriate path, then install dependencies listed in the \`dependencies\` field.

## Prerequisites

- React with TypeScript
- TailwindCSS >= 4
- Familiarity with shadcn (see https://ui.shadcn.com/docs if you're new to shadcn)

## Registry Endpoints

- \`GET /r/registry.json\` - List all components with metadata
- \`GET /r/{component}.json\` - Get specific component with full source code

## Additional Resources

- Component docs and examples: ${siteUrl}/docs
- shadcn docs: https://ui.shadcn.com/docs
- GitHub: https://github.com/ehsanghaffar/einui

## Design Philosophy

Ein UI embraces the liquid glass morphism design language. Components feature frosted glass backgrounds, subtle gradient glows, and smooth micro-interactions. Each component is designed to work standalone or compose together for rich, layered interfaces.

Remember: You own the components once you copy them - they're not dependencies!
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
}
