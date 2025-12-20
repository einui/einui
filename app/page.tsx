import Link from "next/link";

import {
  Square,
  LayoutGrid,
  MessageSquare,
  TextCursorInput,
  Layers,
  PanelLeft,
  Sparkles,
  ArrowRight,
  Package,
  BookOpen,
  Zap,
  Palette,
  Code2,
  Star,
  Github,
  Twitter,
  Globe,
  Accessibility,
  Moon,
  Info,
  User,
  CheckCircle,
  ToggleLeft,
  Sliders,
  CircleDot,
  Copy,
  Command,
  Bell,
  MousePointer,
  Droplets,
  Clock,
  Gauge,
  Dock,
  Blocks,
} from "lucide-react";
import { GlassGauge } from "@/registry/innovative/glass-gauge";
import { GlassMorphCard } from "@/registry/innovative/glass-morph-card";
import { GlassAnnouncement } from "@/components/glass-announcement";
import { GlassBadge } from "@/registry/liquid-glass/glass-badge";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardContent } from "@/registry/liquid-glass/glass-card";
import { GlassProgress } from "@/registry/liquid-glass/glass-progress";
import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from "@/registry/liquid-glass/glass-tabs";

const components = [
  {
    title: "Cards",
    description: "Flexible container with glass morphism",
    href: "/docs/components/glass-card",
    icon: Square,
  },
  {
    title: "Buttons",
    description: "Interactive buttons with glow effects",
    href: "/docs/components/glass-button",
    icon: LayoutGrid,
  },
  {
    title: "Dialogs",
    description: "Modal dialogs with backdrop blur",
    href: "/docs/components/glass-dialog",
    icon: MessageSquare,
  },
  {
    title: "Inputs",
    description: "Form inputs with focus animations",
    href: "/docs/components/glass-input",
    icon: TextCursorInput,
  },
  {
    title: "Tabs",
    description: "Tabbed interfaces with transitions",
    href: "/docs/components/glass-tabs",
    icon: Layers,
  },
  {
    title: "Badge",
    description: "Status indicators with colors",
    href: "/docs/components/glass-badge",
    icon: Info,
  },
  {
    title: "Avatar",
    description: "User profiles with glow effects",
    href: "/docs/components/glass-avatar",
    icon: User,
  },
  {
    title: "Progress",
    description: "Animated linear progress bars",
    href: "/docs/components/glass-progress",
    icon: CheckCircle,
  },
  {
    title: "Switch",
    description: "Toggle switches with animations",
    href: "/docs/components/glass-switch",
    icon: ToggleLeft,
  },
  {
    title: "Slider",
    description: "Range sliders with linear tracks",
    href: "/docs/components/glass-slider",
    icon: Sliders,
  },
  {
    title: "Tooltip",
    description: "Contextual glass tooltips",
    href: "/docs/components/glass-tooltip",
    icon: CircleDot,
  },
];

const innovativeComponents = [
  {
    title: "Command Palette",
    description: "Spotlight search with Cmd+K",
    href: "/docs/components/glass-command-palette",
    icon: Command,
    isNew: true,
  },
  {
    title: "Notifications",
    description: "Toast system with progress",
    href: "/docs/components/glass-notification",
    icon: Bell,
    isNew: true,
  },
  {
    title: "Morph Card",
    description: "3D perspective tilt effects",
    href: "/docs/components/glass-morph-card",
    icon: MousePointer,
    isNew: true,
  },
  {
    title: "Ripple",
    description: "Material-style touch feedback",
    href: "/docs/components/glass-ripple",
    icon: Droplets,
    isNew: true,
  },
  {
    title: "Timeline",
    description: "Chronological event display",
    href: "/docs/components/glass-timeline",
    icon: Clock,
    isNew: true,
  },
  {
    title: "Gauge",
    description: "Circular progress meters",
    href: "/docs/components/glass-gauge",
    icon: Gauge,
    isNew: true,
  },
  {
    title: "Dock",
    description: "macOS-style magnifying dock",
    href: "/docs/components/glass-dock",
    icon: Dock,
    isNew: true,
  },
  {
    title: "Spotlight",
    description: "Onboarding tour highlights",
    href: "/docs/components/glass-spotlight",
    icon: Sparkles,
    isNew: true,
  },
];

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
    <main className="min-h-screen relative overflow-hidden">
      {/* linear background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Animated linear orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <header className="text-center mb-16 md:mb-24">
          {/* Announcement Banner for New Widgets */}
          <div className="flex justify-center mb-6">
            <GlassAnnouncement
              href="/docs/components/calendar-widget"
              label="New"
              variant="purple"
              size="lg"
            >
              Introducing New Widgets
            </GlassAnnouncement>
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative h-12 w-12 rounded-xl bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900/90 backdrop-blur-sm">
                <Blocks className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <GlassBadge variant="primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Tailwind CSS v4
            </GlassBadge>
            <GlassBadge variant="default">Shadcn UI</GlassBadge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance tracking-tight">
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ein UI
            </span>
            <span className="block text-white/90 text-4xl md:text-5xl mt-2">
              Liquid Glass Components
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl mb-10 text-balance">
            Beautiful, responsive Shadcn components with frosted glass morphism. Built for modern
            web applications with full dark mode support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/docs">
              <GlassButton variant="primary" size="lg">
                <BookOpen className="size-4 mr-2" />
                Documentation
              </GlassButton>
            </Link>
            <Link href="/docs/components/glass-avatar">
              <GlassButton variant="outline" size="lg">
                Browse Components
                <ArrowRight className="size-4 ml-2" />
              </GlassButton>
            </Link>
          </div>
        </header>

        {/* Innovative Components Showcase */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">
            Innovative Components
          </h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            New components with unique interactions and animations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* Interactive Morph Card Demo */}
            <GlassMorphCard glowColor="cyan" className="col-span-1">
              <div className="p-6 text-center">
                <MousePointer className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">3D Morph Card</h3>
                <p className="text-white/60 text-sm">Hover to see the tilt effect</p>
                <GlassButton variant="primary" size="sm" className="mt-4" asChild>
                  <Link href="/docs/components/glass-morph-card">View Component</Link>
                </GlassButton>
              </div>
            </GlassMorphCard>

            {/* Gauge Demo */}
            <div className="flex items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <GlassGauge value={85} size="md" colorScheme="gradient" label="Progress" />
            </div>

            {/* Command Palette Hint */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
              <Command className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Command Palette</h3>
              <p className="text-white/60 text-sm mb-3">
                Press{" "}
                <kbd className="px-2 py-1 rounded bg-white/10 text-white/80 text-xs">Cmd+K</kbd>
              </p>
              <Link href="/docs/components/glass-command-palette">
                <GlassBadge variant="primary" size="sm">
                  Try it
                </GlassBadge>
              </Link>
            </div>
          </div>

          {/* Innovative Components Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {innovativeComponents.map((component) => (
              <Link key={component.href} href={component.href} className="group">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all text-center">
                  <component.icon className="w-5 h-5 text-white/60 mx-auto mb-2 group-hover:text-cyan-400 transition-colors" />
                  <p className="text-white text-sm font-medium">{component.title}</p>
                  {component.isNew && (
                    <GlassBadge variant="primary" size="sm" className="mt-2">
                      New
                    </GlassBadge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Install with Tabs */}
        <section className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Get Started in Seconds
          </h2>
          <GlassTabs defaultValue="cli" className="w-full">
            <div className="flex justify-center mb-4">
              <GlassTabsList>
                <GlassTabsTrigger value="cli">CLI</GlassTabsTrigger>
                <GlassTabsTrigger value="manual">Manual</GlassTabsTrigger>
              </GlassTabsList>
            </div>
            <GlassTabsContent value="cli">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-white/60">Install via Shadcn CLI</p>
                  <GlassBadge variant="success" size="sm">
                    Recommended
                  </GlassBadge>
                </div>
                <div className="flex items-center gap-2 bg-black/30 rounded-xl p-3">
                  <code className="flex-1 text-sm md:text-base text-cyan-400 font-mono overflow-x-auto">
                    npx shadcn@latest add @einui/glass-card
                  </code>
                  <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white">
                    <Copy className="size-4" />
                  </button>
                </div>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="manual">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6">
                <p className="text-sm text-white/60 mb-3">Copy component code directly</p>
                <code className="block text-sm text-cyan-400 font-mono">
                  Visit /docs/components/cards for full source code
                </code>
              </div>
            </GlassTabsContent>
          </GlassTabs>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Why Ein UI?</h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            Built with modern best practices
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-purple-500/20 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Base Components Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Base Components</h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            Essential building blocks for any interface
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {components.map((component) => (
              <Link key={component.href} href={component.href} className="group">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <component.icon className="size-4 text-white/60 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-white font-medium text-sm">{component.title}</span>
                  </div>
                  <p className="text-white/40 text-xs">{component.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Live Preview */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Live Preview</h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            See components in action
          </p>
          <GlassCard className="max-w-2xl mx-auto">
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
        {/* Blocks */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Blocks</h2>
          <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
            Ready-to-use page templates
          </p>
          <Link href="/docs/blocks/admin" className="block group max-w-2xl mx-auto">
            <GlassCard className="transition-transform duration-300 group-hover:scale-[1.02]">
              <GlassCardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-linear-to-br from-cyan-500/30 to-purple-500/30">
                    <PanelLeft className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <GlassCardTitle>Admin Panel</GlassCardTitle>
                    <GlassCardDescription>
                      Full-featured admin dashboard with analytics and user management
                    </GlassCardDescription>
                  </div>
                </div>
              </GlassCardHeader>
              <GlassCardContent>
                <span className="text-sm text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View demo <ArrowRight className="size-4" />
                </span>
              </GlassCardContent>
            </GlassCard>
          </Link>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/10 justify-items-center">
          <div className="flex justify-center gap-4 mb-6">
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
          <p className="text-white/40 text-sm">
            Built by <span className="text-white/70 font-medium">Ehsan</span>. Open source under MIT
            license.
          </p>
        </footer>
      </div>
    </main>
  );
}
