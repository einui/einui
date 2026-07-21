import Link from "next/link"
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@einui/registry"
import { GlassButton } from "@einui/registry"
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy"
import { ArrowRight, ArrowLeft, Moon, Sun } from "lucide-react"

export default function DarkModePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400">
            Customization
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dark Mode</h1>
        <p className="text-xl text-white/60 leading-relaxed">
          Ein UI components are designed dark-first, with optional light mode support.
        </p>
      </div>

      {/* Dark First */}
      <GlassCard className="mb-8">
        <GlassCardHeader>
          <GlassCardTitle className="flex items-center gap-2">
            <Moon className="h-5 w-5 text-indigo-400" />
            Dark-First Design
          </GlassCardTitle>
          <GlassCardDescription>Ein UI is optimized for dark backgrounds</GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent>
          <p className="text-white/70 mb-4">
            The liquid glass aesthetic works best on dark backgrounds where the transparency, blur effects, and glowing
            gradients can truly shine. All components are designed with dark mode as the primary use case.
          </p>
          <CodeBlockWithCopy
            code={`/* Recommended background */
.app-background {
  background: linear-gradient(
    to bottom right,
    #0f172a,  /* slate-900 */
    #1e1b4b,  /* purple tint */
    #0f172a   /* slate-900 */
  );
}`}
          />
        </GlassCardContent>
      </GlassCard>

      {/* Theme Provider */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Theme Provider</h2>

        <GlassCard className="mb-6">
          <GlassCardHeader>
            <GlassCardTitle>Using next-themes</GlassCardTitle>
            <GlassCardDescription>Set up theme switching with next-themes</GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent className="space-y-4">
            <CodeBlockWithCopy code="npm install next-themes" />

            <CodeBlockWithCopy
              code={`// components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}`}
              filename="theme-provider.tsx"
            />
          </GlassCardContent>
        </GlassCard>

        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-400" />
              Light Mode Support
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent>
            <p className="text-white/70 mb-4">
              While dark mode is recommended, you can add light mode support with adjusted variables:
            </p>
            <CodeBlockWithCopy
              code={`.light {
  --glass-bg: rgba(0, 0, 0, 0.03);
  --glass-border: rgba(0, 0, 0, 0.08);
  --text-primary: rgba(0, 0, 0, 0.9);
  --text-secondary: rgba(0, 0, 0, 0.6);

  /* Softer glows for light mode */
  --glow-cyan: rgba(6, 182, 212, 0.15);
  --glow-purple: rgba(147, 51, 234, 0.15);
}`}
              filename="globals.css"
            />
          </GlassCardContent>
        </GlassCard>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/docs/theming">
          <GlassButton variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Theming
          </GlassButton>
        </Link>
        <Link href="/docs/cli">
          <GlassButton variant="primary" className="group">
            CLI
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </Link>
      </div>
    </div>
  )
}
