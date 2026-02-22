"use client"

import * as React from "react"
import { motion, type HTMLMotionProps, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassWidgetBaseProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  glowEffect?: boolean
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green" | "amber" | "red"
  hoverScale?: boolean
  interactive?: boolean
}

const sizeClasses = {
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
  xl: "p-6",
}

const glowColors = {
  cyan: "from-cyan-500/30 via-blue-500/30 to-purple-500/30",
  purple: "from-purple-500/30 via-pink-500/30 to-purple-500/30",
  blue: "from-blue-500/30 via-indigo-500/30 to-blue-500/30",
  pink: "from-pink-500/30 via-rose-500/30 to-pink-500/30",
  green: "from-emerald-500/30 via-teal-500/30 to-emerald-500/30",
  amber: "from-amber-500/30 via-orange-500/30 to-amber-500/30",
  red: "from-red-500/30 via-rose-500/30 to-red-500/30",
}

const widgetVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      visualDuration: 0.4,
      bounce: 0.2,
    },
  },
  hover: {
    y: -2,
    transition: {
      type: "spring",
      visualDuration: 0.3,
      bounce: 0.4,
    },
  },
} as const

const glowVariants: Variants = {
  initial: { opacity: 0.4, scale: 0.98 },
  animate: {
    opacity: [0.4, 0.6, 0.4] as number[],
    scale: [0.98, 1, 0.98] as number[],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 0.8,
    scale: 1.02,
    transition: {
      type: "spring",
      visualDuration: 0.3,
      bounce: 0.3,
    },
  },
}

const GlassWidgetBase = React.forwardRef<HTMLDivElement, GlassWidgetBaseProps>(
  (
    {
      className,
      children,
      size = "md",
      glowEffect = true,
      glowColor = "cyan",
      hoverScale = true,
      interactive = true,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        className="relative h-full"
        initial="hidden"
        animate="visible"
        whileHover={interactive && hoverScale ? "hover" : undefined}
        variants={widgetVariants}
      >
        {/* Glow effect */}
        {glowEffect && (
          <motion.div
            className={cn("absolute -inset-0.5 rounded-2xl bg-linear-to-r blur-xl", glowColors[glowColor])}
            variants={glowVariants}
            initial="initial"
            animate="animate"
            whileHover={interactive ? "hover" : undefined}
            aria-hidden="true"
          />
        )}

        {/* Widget container */}
        <motion.div
          ref={ref}
          className={cn(
            "relative h-full rounded-2xl border border-white/20",
            "bg-white/10 backdrop-blur-xl",
            "shadow-[0_8px_32px_rgba(0,0,0,0.37)]",
            // Inner highlight linear
            "before:absolute before:inset-0 before:rounded-2xl",
            "before:bg-linear-to-b before:from-white/20 before:to-transparent before:pointer-events-none",
            // Inner shadow for depth
            "after:absolute after:inset-px after:rounded-[calc(1rem-1px)]",
            "after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] after:pointer-events-none",
            sizeClasses[size],
            className,
          )}
          role="article"
          {...props}
        >
          <div className="relative z-10 h-full">{children}</div>
        </motion.div>
      </motion.div>
    )
  },
)
GlassWidgetBase.displayName = "GlassWidgetBase"

export { GlassWidgetBase }
export type { GlassWidgetBaseProps }
