import Link from "next/link";
import type { Metadata } from "next";
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@/registry/liquid-glass/glass-card";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy";
import { ArrowRight, Sparkles, Code2, Palette, Blocks, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Liquid Glass UI Docs for React & Next.js",
  description:
    "Installation, theming, and component docs for Ein UI, the liquid glass React & Next.js UI library.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "Liquid Glass UI Docs for React & Next.js",
    description:
      "Installation, theming, and component docs for Ein UI, the liquid glass React & Next.js UI library.",
    url: "/docs",
  },
  twitter: {
    title: "Liquid Glass UI Docs for React & Next.js",
    description:
      "Installation, theming, and component docs for Ein UI, the liquid glass React & Next.js UI library.",
  },
};

export default function IntroductionPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400">
            Documentation
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ein UI Documentation
        </h1>
        <p className="text-xl text-white/60 leading-relaxed">
          Ein UI is an open-source liquid glass component library for React & Next.js. Use these
          docs to install the registry, customize themes, and ship beautiful glass UI components.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Popular Components</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs/components/glass-button" className="text-cyan-300 hover:text-cyan-200">
            Liquid Glass Button (React)
          </Link>
          <Link href="/docs/components/glass-card" className="text-cyan-300 hover:text-cyan-200">
            Liquid Glass Card (React)
          </Link>
          <Link href="/docs/components/glass-input" className="text-cyan-300 hover:text-cyan-200">
            Liquid Glass Input (React)
          </Link>
          <Link
            href="/docs/components/glass-notification"
            className="text-cyan-300 hover:text-cyan-200"
          >
            Liquid Glass Notifications (React)
          </Link>
          <Link href="/docs/components/glass-dock" className="text-cyan-300 hover:text-cyan-200">
            Liquid Glass Dock (React)
          </Link>
        </div>
      </div>

      {/* Quick Start */}
      <GlassCard className="mb-8">
        <GlassCardHeader>
          <GlassCardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            Quick Start
          </GlassCardTitle>
          <GlassCardDescription>
            Get up and running in seconds with a single command
          </GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent>
          <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-card" />
          <p className="mt-4 text-sm text-white/60">Or add all components at once:</p>
          <CodeBlockWithCopy code="npx shadcn@latest add @einui/glass-button @einui/glass-input" />
        </GlassCardContent>
      </GlassCard>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              Liquid Glass Design
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent>
            <p className="text-white/60 text-sm">
              Beautiful transparency effects, smooth gradients, and sleek glow animations that bring
              your UI to life.
            </p>
          </GlassCardContent>
        </GlassCard>

        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2 text-lg">
              <Code2 className="h-5 w-5 text-purple-400" />
              Open Code
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent>
            <p className="text-white/60 text-sm">
              Full access to component source code. Copy, paste, and customize to fit your exact
              needs.
            </p>
          </GlassCardContent>
        </GlassCard>

        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2 text-lg">
              <Palette className="h-5 w-5 text-pink-400" />
              Tailwind CSS v4
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent>
            <p className="text-white/60 text-sm">
              Built with the latest Tailwind CSS v4 features including CSS variables and the new
              theming system.
            </p>
          </GlassCardContent>
        </GlassCard>

        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2 text-lg">
              <Blocks className="h-5 w-5 text-green-400" />
              Shadcn Compatible
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent>
            <p className="text-white/60 text-sm">
              Works seamlessly with the Shadcn CLI. Install components directly into your project
              structure.
            </p>
          </GlassCardContent>
        </GlassCard>
      </div>

      {/* Philosophy Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Philosophy</h2>
        <div className="prose prose-invert max-w-none">
          <GlassCard className="mb-6">
            <GlassCardContent className="py-6">
              <blockquote className="border-l-2 border-cyan-500 pl-4 italic text-white/70">
                &quot;This is not a component library. It is how you build your component
                library.&quot;
              </blockquote>
            </GlassCardContent>
          </GlassCard>

          <p className="text-white/70 mb-4">
            Ein UI follows the same principles as Shadcn UI - components are not installed as a
            package dependency. Instead, you get the actual source code copied into your project.
          </p>

          <p className="text-white/70 mb-4">This approach gives you:</p>

          <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
            <li>Full control over every line of code</li>
            <li>Easy customization without fighting overrides</li>
            <li>No dependency bloat or version conflicts</li>
            <li>AI-friendly code that LLMs can understand and modify</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <Link href="/docs/installation">
          <GlassButton variant="primary" className="group">
            Installation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </Link>
      </div>
    </div>
  );
}
