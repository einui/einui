"use client"

import type React from "react"

import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from "@einui/registry"
import { CodeBlock } from "./code-block"

interface ComponentPreviewProps {
  title: string
  description: string
  preview: React.ReactNode
  code: string
}

export function ComponentPreview({ title, description, preview, code }: ComponentPreviewProps) {
  return (
    <div className="mb-12">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-white/60">{description}</p>
      </div>

      <GlassTabs defaultValue="preview" className="w-full">
        <GlassTabsList>
          <GlassTabsTrigger value="preview">Preview</GlassTabsTrigger>
          <GlassTabsTrigger value="code">Code</GlassTabsTrigger>
        </GlassTabsList>

        <GlassTabsContent value="preview">
          <div className="relative mt-4">
            <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-sm" />
            <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 min-h-50 flex items-center justify-center">
              {preview}
            </div>
          </div>
        </GlassTabsContent>

        <GlassTabsContent value="code">
          <div className="mt-4">
            <CodeBlock code={code} />
          </div>
        </GlassTabsContent>
      </GlassTabs>
    </div>
  )
}
