import type { Metadata } from "next";
import Link from "next/link";
import { Blocks, Home, Search } from "lucide-react";
import { GlassCard, GlassCardContent } from "@einui/registry";
import { GlassButton } from "@einui/registry";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900/50 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <GlassCard className="max-w-md w-full text-center relative z-10">
        <GlassCardContent className="py-12">
          <div className="relative h-12 w-12 rounded-xl bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900/90 backdrop-blur-sm">
              <Blocks className="h-6 w-6 text-white" />
            </div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white/80 mb-2">Page Not Found</h2>
          <p className="text-white/60 mb-8">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <GlassButton variant="primary" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </GlassButton>
            </Link>
            <Link href="/docs">
              <GlassButton variant="outline" className="w-full sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                Browse Docs
              </GlassButton>
            </Link>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}
