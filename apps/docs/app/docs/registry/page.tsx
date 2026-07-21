"use client"

import { useState } from "react"
import Link from "next/link"
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@einui/registry"
import { GlassButton } from "@einui/registry"
import { GlassBadge } from "@einui/registry"
import { Package, Copy, Check, ExternalLink, Layers, Sparkles, ArrowLeft } from "lucide-react"

const registryItems = [
  {
    name: "glass-cards",
    title: "Glass Card",
    description: "Card with transparency and glow effects",
    type: "component",
  },
  {
    name: "glass-buttons",
    title: "Glass Button",
    description: "Button with multiple variants and glow",
    type: "component",
  },
  {
    name: "glass-inputs",
    title: "Glass Input",
    description: "Input field with focus glow animation",
    type: "component",
  },
  {
    name: "glass-tabs",
    title: "Glass Tabs",
    description: "Tabs with smooth transitions",
    type: "component",
  },
  {
    name: "glass-dialogs",
    title: "Glass Dialog",
    description: "Modal dialog with backdrop blur",
    type: "component",
  },
  {
    name: "glass-badge",
    title: "Glass Badge",
    description: "Badge with multiple color variants",
    type: "component",
  },
  {
    name: "glass-avatar",
    title: "Glass Avatar",
    description: "Avatar with gradient glow",
    type: "component",
  },
  {
    name: "glass-progress",
    title: "Glass Progress",
    description: "Progress bar with animated gradient",
    type: "component",
  },
  {
    name: "glass-switch",
    title: "Glass Switch",
    description: "Toggle switch with glow effect",
    type: "component",
  },
  {
    name: "glass-slider",
    title: "Glass Slider",
    description: "Range slider with gradient track",
    type: "component",
  },
  {
    name: "glass-tooltip",
    title: "Glass Tooltip",
    description: "Tooltip with glass styling",
    type: "component",
  },
  {
    name: "admin-panel",
    title: "Admin Panel",
    description: "Complete admin dashboard block",
    type: "block",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-white/70" />}
    </button>
  )
}

export default function RegistryPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  return (
    <div className="container max-w-5xl mx-auto px-4 ">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <GlassButton variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </GlassButton>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Ein Registry</h1>
              <p className="text-white/60 mt-1">Shadcn-compatible Liquid Glass Components</p>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <GlassCard className="mb-12">
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              Quick Installation
            </GlassCardTitle>
            <GlassCardDescription>
              Add Ein Liquid Glass components to your project using the shadcn CLI
            </GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent className="space-y-6">
            {/* Registry Configuration */}
            <div>
              <h3 className="text-white font-medium mb-3">1. Add the registry to your components.json</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 flex items-center justify-between">
                <code>{`"registries": { "@einui": "${baseUrl}/api/r/{name}" }`}</code>
                <CopyButton text={`"registries": { "@einui": "${baseUrl}/api/r/{name}" }`} />
              </div>
            </div>

            {/* Install Command */}
            <div>
              <h3 className="text-white font-medium mb-3">2. Install components</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 flex items-center justify-between">
                <code>npx shadcn@latest add @ein/glass-card</code>
                <CopyButton text="npx shadcn@latest add @ein/glass-card" />
              </div>
            </div>

            {/* Direct URL */}
            <div>
              <h3 className="text-white font-medium mb-3">Or install directly via URL</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 flex items-center justify-between overflow-x-auto">
                <code className="whitespace-nowrap">npx shadcn@latest add {baseUrl}/api/r/glass-card</code>
                <CopyButton text={`npx shadcn@latest add ${baseUrl}/api/r/glass-card`} />
              </div>
            </div>
          </GlassCardContent>
        </GlassCard>

        {/* Components Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="h-6 w-6 text-purple-400" />
            Available Components
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registryItems.map((item) => (
            <GlassCard key={item.name} className="group">
              <GlassCardHeader>
                <div className="flex items-start justify-between">
                  <GlassCardTitle className="text-lg">{item.title}</GlassCardTitle>
                  <GlassBadge variant={item.type === "block" ? "primary" : "warning"}>{item.type}</GlassBadge>
                </div>
                <GlassCardDescription>{item.description}</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <div className="space-y-3">
                  {/* Install command */}
                  <div className="bg-black/20 rounded-lg p-3 font-mono text-xs text-white/70 flex items-center justify-between">
                    <code className="truncate">@einui/{item.name}</code>
                    <CopyButton text={`npx shadcn@latest add @einui/${item.name}`} />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/r/${item.name}.json`} target="_blank" className="flex-1">
                      <GlassButton variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View JSON
                      </GlassButton>
                    </Link>
                    {item.type === "component" && (
                      <Link href={`/docs/components/${item.name.replace("glass-", "")}`} className="flex-1">
                        <GlassButton variant="ghost" size="sm" className="w-full">
                          Preview
                        </GlassButton>
                      </Link>
                    )}
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Registry URL */}
        <GlassCard className="mt-12">
          <GlassCardContent className="py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-medium">Registry Index URL</h3>
                <p className="text-white/60 text-sm">Full registry manifest with all components</p>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-black/30 px-4 py-2 rounded-lg text-white/80 font-mono text-sm">
                  {baseUrl}/r/registry.json
                </code>
                <CopyButton text={`${baseUrl}/r/registry.json`} />
              </div>
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>
    </div>
  )
}
