"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@einui/utils"

const GlassTooltipProvider = TooltipPrimitive.Provider

const GlassTooltip = TooltipPrimitive.Root

const GlassTooltipTrigger = TooltipPrimitive.Trigger

const GlassTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-lg px-3 py-1.5",
        "bg-white/15 backdrop-blur-xl border border-white/20",
        "text-xs text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
GlassTooltipContent.displayName = TooltipPrimitive.Content.displayName

export { GlassTooltip, GlassTooltipTrigger, GlassTooltipContent, GlassTooltipProvider }
