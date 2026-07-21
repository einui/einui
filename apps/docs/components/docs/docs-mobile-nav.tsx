"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@einui/utils"
import { GlassButton } from "@einui/registry"
import {
  Menu,
  X,
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
  Moon,
  FileJson,
  Blocks,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "Introduction", href: "/docs", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <Download className="h-4 w-4" /> },
      { title: "Theming", href: "/docs/theming", icon: <Palette className="h-4 w-4" /> },
      { title: "Dark Mode", href: "/docs/dark-mode", icon: <Moon className="h-4 w-4" /> },
      { title: "CLI", href: "/docs/cli", icon: <Terminal className="h-4 w-4" /> },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Cards", href: "/components/cards", icon: <Square className="h-4 w-4" /> },
      { title: "Buttons", href: "/components/buttons", icon: <LayoutGrid className="h-4 w-4" /> },
      { title: "Dialogs", href: "/components/dialogs", icon: <MessageSquare className="h-4 w-4" /> },
      { title: "Inputs", href: "/components/inputs", icon: <TextCursorInput className="h-4 w-4" /> },
      { title: "Tabs", href: "/components/tabs", icon: <Layers className="h-4 w-4" /> },
    ],
  },
  {
    title: "Registry",
    items: [
      { title: "Overview", href: "/docs/registry", icon: <Package className="h-4 w-4" /> },
      { title: "registry.json", href: "/docs/registry/schema", icon: <FileJson className="h-4 w-4" /> },
    ],
  },
  {
    title: "Blocks",
    items: [{ title: "Admin Panel", href: "/samples/admin", icon: <PanelLeft className="h-4 w-4" /> }],
  },
]

export function DocsMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-black/60 backdrop-blur-2xl px-4 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-lg bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-slate-900/90">
              <Blocks className="h-4 w-4 text-white" />
            </div>
          </div>
          <span className="font-bold text-white">Ein UI</span>
        </Link>
        <GlassButton variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </GlassButton>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
            <nav className="p-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "mb-4 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all",
                  pathname === "/" ? "bg-white/15 text-white" : "text-white/60",
                )}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>

              {navigation.map((section) => (
                <div key={section.title} className="mb-4">
                  <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all",
                            pathname === item.href
                              ? "bg-linear-to-r from-cyan-500/20 to-purple-500/20 text-white"
                              : "text-white/60",
                          )}
                        >
                          {item.icon}
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
