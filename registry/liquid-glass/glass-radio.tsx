"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const indicatorVariants = {
  initial: { scale: 0, opacity: 0 },
  checked: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      visualDuration: 0.2,
      bounce: 0.5,
    },
  },
}

const GlassRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-3", className)} {...props} ref={ref} />
})
GlassRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface GlassRadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string
}

const GlassRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  GlassRadioGroupItemProps
>(({ className, label, id, ...props }, ref) => {
  const radioId = id || `glass-radio-${props.value}`

  return (
    <div className="flex items-center gap-3">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={radioId}
        className={cn(
          "aspect-square h-5 w-5 rounded-full",
          "bg-white/10 backdrop-blur-xl border border-white/30",
          "shadow-[0_2px_8px_rgba(0,0,0,0.2)]",
          "transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:border-cyan-400/60",
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex w-full h-full items-center justify-center">
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
            initial="initial"
            animate="checked"
            variants={indicatorVariants as Variants}
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.5,
            }}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {label && (
        <label htmlFor={radioId} className="text-sm font-medium text-white/80 cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  )
})
GlassRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { GlassRadioGroup, GlassRadioGroupItem }
