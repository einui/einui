"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { motion, type Variants } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const checkVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  checked: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.2,
      bounce: 0.5,
    },
  },
  unchecked: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export interface GlassCheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string
}

const GlassCheckbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, GlassCheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || "glass-checkbox-id"

    return (
      <div className="flex items-center gap-3">
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          className={cn(
            "peer h-5 w-5 shrink-0 rounded-md",
            "bg-white/10 backdrop-blur-xl border border-white/30",
            "shadow-[0_2px_8px_rgba(0,0,0,0.2)]",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-linear-to-r data-[state=checked]:from-cyan-500/60 data-[state=checked]:to-blue-500/60",
            "data-[state=checked]:border-white/40",
            className,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-white")} asChild>
            <motion.div variants={checkVariants} initial="initial" animate="checked" exit="unchecked">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </motion.div>
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium text-white/80 cursor-pointer select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            {label}
          </label>
        )}
      </div>
    )
  },
)
GlassCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { GlassCheckbox }
