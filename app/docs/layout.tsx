import type React from "react";
import { AppSidebar } from "@/components/docs/sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden py-12 lg:py-16">
      <SidebarProvider defaultOpen={true}>
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Animated linear orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <AppSidebar />
        <MobileNav />

        <main className="relative w-full lg:pl-72 pt-16 lg:pt-0">
          <div className="min-h-screen">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
