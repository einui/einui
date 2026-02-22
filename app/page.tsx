import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  LayoutGrid,
  Sparkles,
  ArrowRight,
  BookOpen,
  Zap,
  Palette,
  Code2,
  Github,
  Twitter,
  Globe,
  Accessibility,
  Moon,
  Copy,
  Blocks,
} from "lucide-react";
import { GlassAnnouncement } from "@/components/glass-announcement";
import { GlassBadge } from "@/registry/liquid-glass/glass-badge";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
} from "@/registry/liquid-glass/glass-card";
import { GlassProgress } from "@/registry/liquid-glass/glass-progress";
import { WidgetShowcase } from "@/components/home/widget-showcase";
import { ComponentGrid } from "@/components/home/component-grid";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Ein UI - Liquid Glass UI Library for React & Next.js",
  },
  description:
    "Ein UI is an open-source liquid glass component library for React & Next.js with shadcn-compatible, accessible components.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ein UI - Liquid Glass UI Library for React & Next.js",
    description:
      "Open-source liquid glass React components for Next.js. Shadcn-compatible, accessible, and built for modern apps.",
    url: SITE_URL,
  },
  twitter: {
    title: "Ein UI - Liquid Glass UI Library for React & Next.js",
    description:
      "Open-source liquid glass React components for Next.js. Shadcn-compatible, accessible, and built for modern apps.",
  },
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with performance in mind using Tailwind CSS v4",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Easily customize colors through CSS variables",
  },
  {
    icon: Moon,
    title: "Dark Mode Ready",
    description: "Beautiful dark mode with smooth transitions",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    description: "Built on Radix UI with full keyboard navigation",
  },
  { icon: Code2, title: "TypeScript", description: "Full TypeScript support with exported types" },
  { icon: Globe, title: "Responsive", description: "Mobile-first design that adapts seamlessly" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-950/20 via-transparent to-purple-950/10" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Announcement Banner */}
        <div className="flex justify-center pt-10">
          <GlassAnnouncement
            href="/docs/components/calendar-widget"
            label="New"
            variant="primary"
            size="sm"
          >
            Widgets are here — Calendar, Clock, Weather & more
          </GlassAnnouncement>
        </div>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-8 pb-20 lg:pt-16 md:pt-16 md:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              <span className="block">Liquid Glass</span>
              <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent lg:text-7xl">
                Components for React
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10  leading-relaxed">
              Open-source liquid glass UI library for React & Next.js with Shadcn-compatible,
              accessible components, clean TypeScript, and built-in dark mode.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/docs">
                <GlassButton variant="primary" size="lg" className="min-w-45">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </GlassButton>
              </Link>
              <Link href="/docs/components/glass-avatar">
                <GlassButton variant="outline" size="lg" className="min-w-45">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Components Docs
                </GlassButton>
              </Link>
            </div>
            {/* Install Command */}
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3">
                <code className="flex-1 text-sm text-cyan-400 font-mono text-left truncate">
                  npx shadcn@latest add @einui/glass-card
                </code>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/40 hover:text-white">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <ScrollIndicator targetId="widgets" />
          </div>
        </section>

        {/* Widget Showcase */}
        <section id="widgets" className="container mx-auto px-4 pb-24">
          <div className="text-center mb-12">
            <GlassBadge variant="primary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              New
            </GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive Widgets</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Beautiful glass-styled widgets for dashboards, apps, and more
            </p>
          </div>

          <WidgetShowcase />

          <div className="flex justify-center mt-8">
            <Link href="/docs/components/calendar-widget">
              <GlassButton variant="ghost">
                View all widgets
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            </Link>
          </div>
        </section>

        {/* Components Grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="text-center mb-12">
            <GlassBadge variant="default" className="mb-4">
              <LayoutGrid className="w-3 h-3 mr-1" />
              Components
            </GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              From buttons to complex morph cards, all with consistent glass styling
            </p>
          </div>

          <ComponentGrid />
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Ein UI?</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Built with modern best practices and developer experience in mind
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-linear-to-br from-cyan-500/10 to-purple-500/10 w-fit mb-4">
                  <feature.icon className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live Preview */}
        <section className="mb-20 px-4">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Live Preview</h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            See components in action
          </p>
          <GlassCard className="max-w-2xl mx-auto w-full">
            <GlassCardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Blocks className="w-6 h-6 text-white/60" />
                  <div>
                    <GlassCardTitle>Project Dashboard</GlassCardTitle>
                    <GlassCardDescription>Ein UI Component Library</GlassCardDescription>
                  </div>
                </div>
                <GlassBadge variant="success">Active</GlassBadge>
              </div>
            </GlassCardHeader>
            <GlassCardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/80">Development Progress</span>
                  <span className="text-sm text-white/60">95%</span>
                </div>
                <GlassProgress value={95} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-white">19</div>
                  <div className="text-xs text-white/60">Components</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-xs text-white/60">Innovative</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/60">TypeScript</div>
                </div>
              </div>
              <GlassButton variant="primary" className="text-center w-full" asChild>
                <a
                  href="https://github.com/ehsanghaffar/einui"
                  className="flex text-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="size-4 mr-2" />
                  View Source
                </a>
              </GlassButton>
            </GlassCardContent>
          </GlassCard>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 pb-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-white-svg.svg"
                width="30"
                height="30"
                alt="Einui Liquid Glass Components"
              />
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-base font-bold">
                EinUI
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <GlassButton variant="ghost" size="sm" asChild>
                <a href="https://github.com/ehsanghaffar" target="_blank">
                  <Github className="size-4" />
                </a>
              </GlassButton>
              <GlassButton variant="ghost" size="sm" asChild>
                <a href="https://twitter.com/ehsanghaffar" target="_blank">
                  <Twitter className="size-4" />
                </a>
              </GlassButton>
            </div>

            <p className="text-white/30 text-sm">
              Built by <span className="text-white/50">Ehsan</span>. MIT License.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
