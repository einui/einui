"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circular" | "text" | "card"
  width?: string | number
  height?: string | number
  lines?: number
}

const shimmerVariants = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  },
}

const GlassSkeleton = React.forwardRef<HTMLDivElement, GlassSkeletonProps>(
  ({ className, variant = "default", width, height, lines = 1, ...props }, ref) => {
    const baseClasses = cn(
      "relative overflow-hidden",
      "bg-white/5 backdrop-blur-sm",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
      "before:animate-[shimmer_2s_infinite]",
    )

    const variantClasses = {
      default: "rounded-xl",
      circular: "rounded-full",
      text: "rounded-md h-4",
      card: "rounded-2xl min-h-[120px]",
    }

    if (variant === "text" && lines > 1) {
      return (
        <div className="space-y-2" ref={ref} {...props}>
          {Array.from({ length: lines }).map((_, index) => (
            <motion.div
              key={index}
              className={cn(baseClasses, variantClasses.text, index === lines - 1 && "w-3/4", className)}
              style={{
                width: index === lines - 1 ? "75%" : width,
                height,
                backgroundSize: "400% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: index * 0.1,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      )
    }

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        // Ensure onDrag prop is not forwarded to motion.div
        {...(() => {
          const { onDrag, ...rest } = props as any
          return rest
        })()}
        style={{
          width,
          height,
          backgroundSize: "400% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        aria-hidden="true"
        role="status"
        aria-label="Loading..."
        {...props}
      />
    )
  },
)
GlassSkeleton.displayName = "GlassSkeleton"

export { GlassSkeleton }
