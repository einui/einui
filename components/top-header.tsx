"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Github, Star, Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { headerNavItems } from "@/contants/nav-items";

export function TopHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16">
        {/* Glass background with linear border */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-white/10" />

        {/* Subtle linear glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />

        <div className="container relative mx-auto h-full px-4 flex items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {headerNavItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className="size-4" />
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* GitHub Star Badge - Desktop */}
            <a
              href="https://github.com/ehsanghaffar/einui"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-xl bg-linear-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 px-3.5 py-2 text-sm font-medium text-white/90 hover:from-yellow-500/20 hover:to-orange-500/20 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300 group"
            >
              <Github className="size-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <ExternalLink className="size-3 text-white/40 group-hover:text-white/60 transition-colors" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 transform",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {headerNavItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      New
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Mobile GitHub Link */}
            <a
              href="https://github.com/ehsanghaffar/einui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 mt-2 border-t border-white/5 pt-5"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
              <Star className="ml-auto size-4 text-yellow-400" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
