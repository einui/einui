"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@einui/utils"

const GlassProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <div className="relative">
    <div className="absolute -inset-1 rounded-full bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-md opacity-50" />
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full",
        "bg-white/10 backdrop-blur-xl border border-white/20",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full transition-all duration-500 ease-out rounded-full",
          "bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400",
          "shadow-[0_0_12px_rgba(59,130,246,0.5)]",
        )}
        style={{ width: `${value || 0}%` }}
      />
    </ProgressPrimitive.Root>
  </div>
))
GlassProgress.displayName = ProgressPrimitive.Root.displayName

export { GlassProgress }
