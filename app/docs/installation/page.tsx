import Link from "next/link";
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@/registry/liquid-glass/glass-card";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import {
  GlassTabs,
  GlassTabsList,
  GlassTabsTrigger,
  GlassTabsContent,
} from "@/registry/liquid-glass/glass-tabs";
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy";
import { ArrowRight, ArrowLeft, Download, Package, Terminal, FileCode } from "lucide-react";

const installCommands = {
  "glass-card": "npx shadcn@latest add @einui/glass-card",
  "glass-button": "npx shadcn@latest add @einui/glass-button",
  "glass-input": "npx shadcn@latest add @einui/glass-input",
  "glass-dialog": "npx shadcn@latest add @einui/glass-dialog",
  "glass-tabs": "npx shadcn@latest add @einui/glass-tabs",
  "glass-badge": "npx shadcn@latest add @einui/glass-badge",
  "glass-avatar": "npx shadcn@latest add @einui/glass-avatar",
  "glass-progress": "npx shadcn@latest add @einui/glass-progress",
  "glass-switch": "npx shadcn@latest add @einui/glass-switch",
  "glass-slider": "npx shadcn@latest add @einui/glass-slider",
  "glass-tooltip": "npx shadcn@latest add @einui/glass-tooltip",
};

export default function InstallationPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16 ">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400">
            Get Started
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Installation</h1>
        <p className="text-xl text-white/60 leading-relaxed">
          How to install Ein UI components and configure your project.
        </p>
      </div>

      {/* Prerequisites */}
      <GlassCard className="mb-8">
        <GlassCardHeader>
          <GlassCardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-cyan-400" />
            Prerequisites
          </GlassCardTitle>
          <GlassCardDescription>Make sure you have the following installed</GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent className="space-y-4">
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Next.js 14+ (App Router recommended)</li>
            <li>Tailwind CSS v4</li>
            <li>Shadcn UI initialized in your project</li>
          </ul>
          <p className="text-sm text-white/50">
            New to Shadcn? Run{" "}
            <code className="bg-white/10 px-2 py-0.5 rounded">npx shadcn@latest init</code> first.
          </p>
        </GlassCardContent>
      </GlassCard>

      {/* Installation Methods */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Installation Methods</h2>

        <GlassTabs defaultValue="cli">
          <GlassTabsList className="mb-6">
            <GlassTabsTrigger value="cli">
              <Terminal className="h-4 w-4 mr-2" />
              CLI
            </GlassTabsTrigger>
            <GlassTabsTrigger value="manual">
              <FileCode className="h-4 w-4 mr-2" />
              Manual
            </GlassTabsTrigger>
          </GlassTabsList>

          <GlassTabsContent value="cli">
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle>Using the Shadcn CLI</GlassCardTitle>
                <GlassCardDescription>
                  The fastest way to add components to your project
                </GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-3">1. Add a single component</h4>
                  <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-card" />
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">2. Add multiple components</h4>
                  <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-button @einui/glass-input" />
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">
                    3. Using the @ein registry namespace
                  </h4>
                  <p className="text-sm text-white/60 mb-3">
                    Add the registry to your components.json first:
                  </p>
                  <CodeBlockWithCopy
                    code={`{
  "registries": {
    "@einui": "@einui/{name}"
  }
}`}
                    filename="components.json"
                  />
                  <p className="text-sm text-white/60 mt-4 mb-3">
                    Then install using the namespace:
                  </p>
                  <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-card" />
                </div>
              </GlassCardContent>
            </GlassCard>
          </GlassTabsContent>

          <GlassTabsContent value="manual">
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle>Manual Installation</GlassCardTitle>
                <GlassCardDescription>Copy the component source code directly</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-3">1. Copy the component</h4>
                  <p className="text-sm text-white/60 mb-3">
                    Visit the component page and copy the source code into your project at:
                  </p>
                  <CodeBlockWithCopy code="components/liquid-glass/glass-card.tsx" />
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">2. Install dependencies</h4>
                  <CodeBlockWithCopy code="npm install clsx tailwind-merge" />
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">3. Add CSS variables</h4>
                  <p className="text-sm text-white/60 mb-3">
                    Add the liquid glass styles to your globals.css:
                  </p>
                  <CodeBlockWithCopy
                    code={`/* Liquid Glass Utilities */
.glass-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg,
    rgba(6, 182, 212, 0.3),
    rgba(147, 51, 234, 0.3)
  );
  border-radius: inherit;
  opacity: 0.7;
  z-index: -1;
  filter: blur(8px);
}`}
                    filename="globals.css"
                  />
                </div>
              </GlassCardContent>
            </GlassCard>
          </GlassTabsContent>
        </GlassTabs>
      </div>

      {/* All Components */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">All Components</h2>
        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-purple-400" />
              CLI Commands
            </GlassCardTitle>
            <GlassCardDescription>Copy any command to install the component</GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent>
            <div className="space-y-3">
              {Object.entries(installCommands).map(([name, command]) => (
                <div key={name} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/80 font-medium min-w-30">{name}</span>
                  <div className="flex-1 min-w-0">
                    <CodeBlockWithCopy code={command} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/docs">
          <GlassButton variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Introduction
          </GlassButton>
        </Link>
        <Link href="/docs/theming">
          <GlassButton variant="primary" className="group">
            Theming
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </Link>
      </div>
    </div>
  );
}
