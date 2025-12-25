"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Blocks } from "lucide-react";
import { generateNavigation } from "@/contants/nav-items";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navigation = generateNavigation();

  return (
    <div className="lg:hidden">
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="flex h-full items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-lg bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-slate-900/90 backdrop-blur-sm">
                <Blocks className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold text-white">Ein UI</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              {/* Home link */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "mb-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                  pathname === "/"
                    ? "bg-white/15 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>

              {navigation.map((section) => (
                <div key={section.title} className="mb-4">
                  <h4 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                            pathname === item.href
                              ? "bg-linear-to-r from-cyan-500/20 to-purple-500/20 text-white"
                              : "text-white/60 hover:bg-white/5 hover:text-white"
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
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
