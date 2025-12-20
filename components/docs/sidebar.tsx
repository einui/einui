"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Download,
  Palette,
  Terminal,
  Package,
  Layers,
  LayoutGrid,
  Square,
  MessageSquare,
  TextCursorInput,
  PanelLeft,
  Home,
  ChevronRight,
  Moon,
  FileJson,
  Github,
  ExternalLink,
  CircleDot,
  ToggleLeft,
  Sliders,
  User,
  CheckCircle,
  Info,
  Command,
  Bell,
  MousePointer,
  Droplets,
  Clock,
  Gauge,
  Dock,
  Sparkles,
  Blocks,
  Calendar,
  Cloud,
  ListTodo,
  TrendingUp,
  Trophy,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "Introduction", href: "/docs", icon: <BookOpen className="size-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <Download className="size-4" /> },
      { title: "Theming", href: "/docs/theming", icon: <Palette className="size-4" /> },
      { title: "Dark Mode", href: "/docs/dark-mode", icon: <Moon className="size-4" /> },
      { title: "CLI", href: "/docs/cli", icon: <Terminal className="size-4" /> },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Avatar", href: "/docs/components/glass-avatar", icon: <User className="size-4" /> },
      { title: "Badge", href: "/docs/components/glass-badge", icon: <Info className="size-4" /> },
      {
        title: "Buttons",
        href: "/docs/components/glass-button",
        icon: <LayoutGrid className="size-4" />,
      },
      { title: "Cards", href: "/docs/components/glass-card", icon: <Square className="size-4" /> },
      {
        title: "Dialogs",
        href: "/docs/components/glass-dialog",
        icon: <MessageSquare className="size-4" />,
      },
      {
        title: "Inputs",
        href: "/docs/components/glass-input",
        icon: <TextCursorInput className="size-4" />,
      },
      {
        title: "Progress",
        href: "/docs/components/glass-progress",
        icon: <CheckCircle className="size-4" />,
      },
      {
        title: "Slider",
        href: "/docs/components/glass-slider",
        icon: <Sliders className="size-4" />,
      },
      {
        title: "Switch",
        href: "/docs/components/glass-switch",
        icon: <ToggleLeft className="size-4" />,
      },
      { title: "Tabs", href: "/docs/components/glass-tabs", icon: <Layers className="size-4" /> },
      {
        title: "Tooltip",
        href: "/docs/components/glass-tooltip",
        icon: <CircleDot className="size-4" />,
      },
    ],
  },
  {
    title: "Innovative",
    items: [
      {
        title: "Command Palette",
        href: "/docs/components/glass-command-palette",
        icon: <Command className="size-4" />,
        isNew: true,
      },
      {
        title: "Dock",
        href: "/docs/components/glass-dock",
        icon: <Dock className="size-4" />,
        isNew: true,
      },
      {
        title: "Gauge",
        href: "/docs/components/glass-gauge",
        icon: <Gauge className="size-4" />,
        isNew: true,
      },
      {
        title: "Morph Card",
        href: "/docs/components/glass-morph-card",
        icon: <MousePointer className="size-4" />,
        isNew: true,
      },
      {
        title: "Notifications",
        href: "/docs/components/glass-notification",
        icon: <Bell className="size-4" />,
        isNew: true,
      },

      {
        title: "Ripple",
        href: "/docs/components/glass-ripple",
        icon: <Droplets className="size-4" />,
        isNew: true,
      },
      {
        title: "Timeline",
        href: "/docs/components/glass-timeline",
        icon: <Clock className="size-4" />,
        isNew: true,
      },

      // { title: "Spotlight", href: "/docs/components/spotlight", icon: <Sparkles className="size-4" />, isNew: true },
    ],
  },
  {
    title: "Widgets",
    items: [
      {
        title: "Calendar",
        href: "/docs/components/calendar-widget",
        icon: <Calendar className="size-4" />,
        isNew: true,
      },
      {
        title: "Clock",
        href: "/docs/components/clock-widget",
        icon: <Clock className="size-4" />,
        isNew: true,
      },
    ],
  },
  {
    title: "Registry",
    items: [
      { title: "Overview", href: "/docs/registry", icon: <Package className="size-4" /> },
      // { title: "registry.json", href: "/docs/registry/schema", icon: <FileJson className="size-4" /> },
    ],
  },
  {
    title: "Blocks",
    items: [
      { title: "Admin Panel", href: "/docs/blocks/admin", icon: <PanelLeft className="size-4" /> },
    ],
  },
];

export function UnifiedSidebar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [pathname]);

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/10 bg-black/60 backdrop-blur-2xl lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-white/10 px-6">
          <Link href="/">
            <Blocks className="size-5" />
          </Link>
        </div>

        {/* Navigation */}
        <nav ref={navRef} className="flex-1 overflow-y-auto px-4 py-6">
          {/* Home link */}
          <Link
            href="/"
            ref={pathname === "/" ? activeLinkRef : null}
            className={cn(
              "mb-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              pathname === "/"
                ? "bg-white/15 text-white"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <Home className="size-4" />
            Home
          </Link>

          {navigation.map((section) => (
            <div key={section.title} className="mb-6">
              <h4 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        ref={isActive ? activeLinkRef : null}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-linear-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {item.icon}
                        {item.title}
                        {item.isNew && !isActive && (
                          <span className="ml-auto rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-400">
                            New
                          </span>
                        )}
                        {isActive && <ChevronRight className="ml-auto size-4 text-white/40" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 space-y-3">
          <a
            href="https://github.com/ehsanghaffar/einui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Github className="size-4" />
            GitHub
            <ExternalLink className="ml-auto h-3 w-3" />
          </a>
          <div className="rounded-xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-3">
            <p className="text-xs text-white/50">
              Built by{" "}
              <a href="https://eindev.ir" target="_blank" className="text-white/80 font-medium">
                Ehsan
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
