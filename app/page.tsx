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
  GitBranch,
  Bird,
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
    title: "Ship faster",
    description: "Tailwind CSS v4 keeps the styling close to your code and quick to adapt.",
  },
  {
    icon: Palette,
    title: "Make it yours",
    description: "Tune the visual language with CSS variables instead of rewriting components.",
  },
  {
    icon: Moon,
    title: "Dark by design",
    description: "A considered dark surface with light-mode tokens ready when you need them.",
  },
  {
    icon: Accessibility,
    title: "Accessible at the core",
    description: "Radix primitives bring keyboard navigation and interaction states along for free.",
  },
  { icon: Code2, title: "Type-safe", description: "Typed props and exported types keep composition predictable." },
  { icon: Globe, title: "Ready anywhere", description: "Responsive patterns that hold together from phone to desktop." },
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
            href="/docs/components/glass-orb"
            label="New"
            variant="purple"
            size="sm"
          >
            New Interactive Widgets: Waveform, Orb, and more!
          </GlassAnnouncement>
        </div>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 md:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="max-w-2xl text-left">
              <div className="hero-reveal hero-reveal-1 mb-6 flex items-center gap-3 text-sm text-cyan-200/70">
                <span className="h-px w-10 bg-cyan-400/60" />
                A component library for expressive interfaces
              </div>
              <h1 className="hero-reveal hero-reveal-2 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
                Components that
                <span className="mt-2 block bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  feel alive.
                </span>
              </h1>
              <p className="hero-reveal hero-reveal-3 mt-7 max-w-xl text-lg leading-8 text-white/55 md:text-xl">
                Liquid glass components for React and Next.js that bring depth, motion, and clarity
                to the interfaces you build.
              </p>

              <div className="hero-reveal hero-reveal-4 mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <Link href="/docs">
                  <GlassButton variant="primary" size="lg" className="min-w-45">
                    Explore components
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </GlassButton>
                </Link>
                <Link href="/docs/installation">
                  <GlassButton variant="outline" size="lg" className="min-w-45">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read the setup
                  </GlassButton>
                </Link>
              </div>

              <div className="hero-reveal hero-reveal-4 mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
                <span>Radix primitives</span>
                <span>Tailwind v4</span>
                <span>TypeScript first</span>
              </div>
            </div>

            <div className="hero-reveal hero-reveal-3 relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-8 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
              <GlassCard className="relative overflow-hidden border-white/20 bg-white/8 p-1 shadow-[0_30px_100px_rgba(6,182,212,0.12)]">
                <div className="rounded-[calc(1rem-1px)] border border-white/10 bg-black/25 p-5">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Interface pulse</p>
                      <p className="mt-1 text-xs text-white/40">A small preview of the system</p>
                    </div>
                    <GlassBadge variant="success">Live</GlassBadge>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-end gap-6">
                    <div>
                      <p className="text-xs text-white/40">Components shipped</p>
                      <p className="mt-2 text-5xl font-semibold tracking-[-0.06em] text-white">19</p>
                    </div>
                    <div className="flex h-20 items-end gap-1.5" aria-label="Activity visualization">
                      {[34, 58, 42, 76, 51, 88, 64, 96].map((height, index) => (
                        <span
                          key={height}
                          className="w-2 rounded-full bg-linear-to-t from-cyan-400/50 to-purple-300"
                          style={{ height: `${height}%`, opacity: 0.45 + index / 20 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-white/45">Ready for your next build</span>
                      <span className="text-cyan-200">95%</span>
                    </div>
                    <GlassProgress value={95} />
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                    <code className="truncate text-xs text-cyan-200/80">
                      npx shadcn@latest add @einui/glass-card
                    </code>
                    <Copy className="ml-3 size-4 shrink-0 text-white/35" aria-hidden="true" />
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <ScrollIndicator targetId="widgets" />
          </div>
        </section>

        {/* Widget Showcase */}
        <section id="widgets" className="container mx-auto px-4 py-32">
          <div className="text-center mb-16">
            <GlassBadge variant="primary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              New
            </GlassBadge>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Interactive Widgets</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Ready-made pieces for dashboards, data views, and everyday product moments.
            </p>
          </div>

          <WidgetShowcase />

          <div className="flex justify-center mt-12">
            <Link href="/docs/components/calendar-widget">
              <GlassButton variant="ghost">
                View all widgets
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            </Link>
          </div>
        </section>

        {/* Components Grid */}
        <section className="container mx-auto px-4 py-32 border-t border-white/5">
          <div className="text-center mb-20">
            <GlassBadge variant="default" className="mb-4">
              <LayoutGrid className="w-3 h-3 mr-1" />
              All Components
            </GlassBadge>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Build the interface, not the scaffolding</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Start with the primitives, then reach for richer patterns when the interface calls for them.
            </p>
          </div>

          <ComponentGrid />
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-32 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Why Ein UI?</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Built with modern best practices and developer experience in mind
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/7 bg-white/2.5 p-6 transition-colors hover:border-cyan-300/20 hover:bg-white/4.5 "
              >
                <div className="mb-7">
                  <div className="w-fit rounded-xl bg-linear-to-br from-cyan-500/10 to-purple-500/10 p-2.5">
                    <feature.icon className="w-5 h-5 text-white/70 transition-colors group-hover:text-cyan-200" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live Preview */}
        <section className="container mx-auto px-4 py-32 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Ready to use</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              All components are production-ready and designed to work seamlessly in your projects.
            </p>
          </div>
          <GlassCard className="max-w-3xl mx-auto w-full">
            <GlassCardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Blocks className="w-6 h-6 text-white/60" />
                  <div>
                    <GlassCardTitle>Ein UI Library</GlassCardTitle>
                    <GlassCardDescription>Open-source component collection</GlassCardDescription>
                  </div>
                </div>
                <GlassBadge variant="success">Live</GlassBadge>
              </div>
            </GlassCardHeader>
            <GlassCardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/80">Implementation Status</span>
                  <span className="text-sm text-cyan-200">100%</span>
                </div>
                <GlassProgress value={100} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold text-white">19</div>
                  <div className="text-xs text-white/60 mt-1">Components</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-xs text-white/60 mt-1">Widgets</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/60 mt-1">TypeScript</div>
                </div>
              </div>
              <GlassButton variant="primary" className="w-full" asChild>
                <a
                  href="https://github.com/ehsanghaffar/einui"
                  className="flex justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="size-4 mr-2" />
                  Explore on GitHub
                </a>
              </GlassButton>
            </GlassCardContent>
          </GlassCard>
        </section>
        <div id="pos-article-text-121173"></div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
            <div className="flex items-center gap-3">
              <GlassButton variant="ghost" size="sm" asChild>
                <a href="https://github.com/ehsanghaffar" target="_blank" rel="noopener noreferrer">
                  <GitBranch className="size-4" />
                </a>
              </GlassButton>
              <GlassButton variant="ghost" size="sm" asChild>
                <a href="https://twitter.com/ehsanghaffar" target="_blank" rel="noopener noreferrer">
                  <Bird className="size-4" />
                </a>
              </GlassButton>
            </div>

            <p className="text-white/40 text-sm text-center">
              Built by <span className="text-white/60">Ehsan Ghaffar</span> under MIT License.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
