import { GlassSkeleton } from "@/registry/liquid-glass";


export function DocPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      {/* Header skeleton */}
      <div className="mb-8 space-y-4">
        <GlassSkeleton className="h-10 w-64" />
        <GlassSkeleton className="h-5 w-full max-w-lg" />
      </div>

      {/* CLI Install skeleton */}
      <div className="mb-8">
        <GlassSkeleton className="h-12 w-full rounded-xl" />
      </div>

      {/* Component previews skeleton */}
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <GlassSkeleton className="h-6 w-48" />
            <GlassSkeleton className="h-4 w-72" />
            <GlassSkeleton className="h-64 w-full rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  )
}
