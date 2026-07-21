import Link from "next/link";
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@einui/registry";
import { GlassButton } from "@einui/registry";
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy";
import { ArrowRight, ArrowLeft, Terminal, Zap, Package } from "lucide-react";

const commands = [
  {
    name: "add",
    description: "Add a component to your project",
    usage: "npx shadcn@latest add [component]",
    example: "npx shadcn@latest add @einui/glass-card",
  },
  {
    name: "diff",
    description: "Check for differences between local and remote components",
    usage: "npx shadcn@latest diff [component]",
    example: "npx shadcn@latest diff @einui/glass-button",
  },
];

export default function CLIPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
            Tools
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CLI</h1>
        <p className="text-xl text-white/60 leading-relaxed">
          Use the Shadcn CLI to install Ein UI components into your project.
        </p>
      </div>

      {/* Quick Start */}
      <GlassCard className="mb-8">
        <GlassCardHeader>
          <GlassCardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            Quick Start
          </GlassCardTitle>
          <GlassCardDescription>Install your first component in seconds</GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent className="space-y-4">
          <p className="text-white/70">
            Ein UI uses the standard Shadcn CLI. If you don&apos;t have it set up, run:
          </p>
          <CodeBlockWithCopy code="npx shadcn@latest init" />

          <p className="text-white/70">Then add any Ein UI component:</p>
          <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-card" />
        </GlassCardContent>
      </GlassCard>

      {/* Commands */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Commands</h2>

        <div className="space-y-4">
          {commands.map((cmd) => (
            <GlassCard key={cmd.name}>
              <GlassCardHeader>
                <GlassCardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-cyan-400" />
                  {cmd.name}
                </GlassCardTitle>
                <GlassCardDescription>{cmd.description}</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent className="space-y-3">
                <div>
                  <p className="text-xs text-white/50 mb-2">Usage</p>
                  <CodeBlockWithCopy code={cmd.usage} />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-2">Example</p>
                  <CodeBlockWithCopy code={cmd.example} />
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Registry Configuration */}
      <GlassCard className="mb-12">
        <GlassCardHeader>
          <GlassCardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-purple-400" />
            Registry Configuration
          </GlassCardTitle>
          <GlassCardDescription>
            Add the Ein registry for easier component installation
          </GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent className="space-y-4">
          <p className="text-white/70">
            Add the Ein registry namespace to your{" "}
            <code className="bg-white/10 px-2 py-0.5 rounded">components.json</code>:
          </p>
          <CodeBlockWithCopy
            code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@einui/utils",
    "ui": "@einui/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@einui": "https://ui.eindev.ir/r/{name}"
  }
}`}
            filename="components.json"
          />

          <p className="text-white/70">Now you can install components using the short syntax:</p>
          <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-card @einui/glass-button" />
        </GlassCardContent>
      </GlassCard>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/docs/dark-mode">
          <GlassButton variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Dark Mode
          </GlassButton>
        </Link>
        <Link href="/docs/registry">
          <GlassButton variant="primary" className="group">
            Registry
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </Link>
      </div>
    </div>
  );
}
