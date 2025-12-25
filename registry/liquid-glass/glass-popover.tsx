"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

const GlassPopover = PopoverPrimitive.Root

const GlassPopoverTrigger = PopoverPrimitive.Trigger

const GlassPopoverAnchor = PopoverPrimitive.Anchor

const GlassPopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-xl p-4",
        "bg-white/10 backdrop-blur-2xl border border-white/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        "outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        // Glass highlight
        "before:absolute before:inset-0 before:rounded-xl",
        "before:bg-gradient-to-b before:from-white/15 before:to-transparent before:pointer-events-none",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
GlassPopoverContent.displayName = PopoverPrimitive.Content.displayName

export { GlassPopover, GlassPopoverTrigger, GlassPopoverContent, GlassPopoverAnchor }
