"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@einui/utils"

const GlassSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        "relative h-2 w-full grow overflow-hidden rounded-full",
        "bg-white/10 backdrop-blur-xl border border-white/20",
      )}
    >
      <SliderPrimitive.Range
        className={cn(
          "absolute h-full rounded-full",
          "bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400",
          "shadow-[0_0_8px_rgba(59,130,246,0.4)]",
        )}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block h-5 w-5 rounded-full cursor-grab active:cursor-grabbing",
        "bg-white border-2 border-white/50",
        "shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
        "transition-all duration-200",
        "hover:scale-110 hover:shadow-[0_0_16px_rgba(59,130,246,0.5)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        "disabled:pointer-events-none disabled:opacity-50",
      )}
    />
  </SliderPrimitive.Root>
))
GlassSlider.displayName = SliderPrimitive.Root.displayName

export { GlassSlider }
