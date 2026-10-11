"use client"

import { useState } from "react"
import Link from "next/link"
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@/registry/liquid-glass/glass-card"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { GlassBadge } from "@/registry/liquid-glass/glass-badge"
import {
  getInstallCommand,
  getRegistryUrl,
  registryCatalog,
  registryNamespace,
} from "@/lib/docs/docs-content"
import { Package, Copy, Check, ExternalLink, Layers, Sparkles, ArrowLeft } from "lucide-react"

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
  const registryConfig = `"registries": { "${registryNamespace}": "${getRegistryUrl()}" }`
  const exampleInstallCommand = getInstallCommand("glass-card")
  const exampleItemUrl = getRegistryUrl("glass-card")
  const registryIndexUrl = getRegistryUrl("registry")

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
              Add Ein UI registry items to your project using the shadcn CLI
            </GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent className="space-y-6">
            {/* Registry Configuration */}
            <div>
              <h3 className="text-white font-medium mb-3">1. Add the registry to your components.json</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 flex items-center justify-between">
                <code>{registryConfig}</code>
                <CopyButton text={registryConfig} />
              </div>
            </div>

            {/* Install Command */}
            <div>
              <h3 className="text-white font-medium mb-3">2. Install components</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 flex items-center justify-between">
                <code>{exampleInstallCommand}</code>
                <CopyButton text={exampleInstallCommand} />
              </div>
            </div>

            {/* Direct URL */}
            <div>
              <h3 className="text-white font-medium mb-3">Or install directly via URL</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 flex items-center justify-between overflow-x-auto">
                <code className="whitespace-nowrap">npx shadcn@latest add {exampleItemUrl}</code>
                <CopyButton text={`npx shadcn@latest add ${exampleItemUrl}`} />
              </div>
            </div>
          </GlassCardContent>
        </GlassCard>

        {/* Components Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="h-6 w-6 text-purple-400" />
            Available Registry Items
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registryCatalog.map((item) => (
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
                    <code className="truncate">{registryNamespace}/{item.name}</code>
                    <CopyButton text={getInstallCommand(item.name)} />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/r/${item.name}.json`} target="_blank" className="flex-1">
                      <GlassButton variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View JSON
                      </GlassButton>
                    </Link>
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
                <p className="text-white/60 text-sm">
                  Full registry manifest with all {registryCatalog.length} items
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href={registryIndexUrl} target="_blank" className="bg-black/30 px-4 py-2 rounded-lg text-white/80 font-mono text-sm">
                  {registryIndexUrl}
                </Link>
                <CopyButton text={registryIndexUrl} />
              </div>
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>
    </div>
  )
}
