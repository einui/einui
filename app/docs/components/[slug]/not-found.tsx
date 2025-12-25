import { GlassButton, GlassCard, GlassCardContent } from "@/registry/liquid-glass"
import Link from "next/link"


export default function ComponentNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
      <GlassCard className="max-w-md text-center">
        <GlassCardContent className="pt-8 pb-8 space-y-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-white">Component Not Found</h1>
          <p className="text-white/60">The component you're looking for doesn't exist or may have been moved.</p>
          <div className="pt-4">
            <GlassButton asChild variant="primary">
              <Link href="/docs">Back to Documentation</Link>
            </GlassButton>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  )
}
