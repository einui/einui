"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassMorphCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  intensity?: number
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green"
  disabled?: boolean
}

const glowColors = {
  cyan: "from-cyan-500/40 to-blue-500/40",
  purple: "from-purple-500/40 to-pink-500/40",
  blue: "from-blue-500/40 to-indigo-500/40",
  pink: "from-pink-500/40 to-rose-500/40",
  green: "from-emerald-500/40 to-teal-500/40",
}

const GlassMorphCard = React.forwardRef<HTMLDivElement, GlassMorphCardProps>(
  ({ className, children, intensity = 15, glowColor = "cyan", disabled = false, ...props }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [transform, setTransform] = React.useState({ rotateX: 0, rotateY: 0 })
    const [lightPosition, setLightPosition] = React.useState({ x: 50, y: 50 })
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled || !cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -intensity
        const rotateY = ((x - centerX) / centerX) * intensity

        setTransform({ rotateX, rotateY })
        setLightPosition({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        })
      },
      [intensity, disabled],
    )

    const handleMouseLeave = React.useCallback(() => {
      setTransform({ rotateX: 0, rotateY: 0 })
      setLightPosition({ x: 50, y: 50 })
      setIsHovered(false)
    }, [])

    const handleMouseEnter = React.useCallback(() => {
      setIsHovered(true)
    }, [])

    return (
      <div ref={ref} className={cn("relative", className)} style={{ perspective: "1000px" }} {...props}>
        {/* Glow effect */}
        <div
          className={cn(
            "absolute -inset-2 rounded-2xl bg-linear-to-r blur-xl transition-opacity duration-300",
            glowColors[glowColor],
            isHovered ? "opacity-80" : "opacity-40",
          )}
        />

        {/* Card container */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className={cn(
            "relative rounded-2xl border border-white/20",
            "bg-white/10 backdrop-blur-xl",
            "shadow-[0_8px_32px_rgba(0,0,0,0.37)]",
            "overflow-hidden transition-transform duration-200 ease-out",
            !disabled && "cursor-pointer",
          )}
          style={{
            transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Dynamic light reflection */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Glass highlight */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/20 to-transparent pointer-events-none" />

          {/* Edge highlight */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
            style={{
              boxShadow: isHovered
                ? `inset 2px 2px 10px rgba(255,255,255,0.2), inset -2px -2px 10px rgba(0,0,0,0.1)`
                : `inset 1px 1px 2px rgba(255,255,255,0.1)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
            {children}
          </div>
        </div>
      </div>
    )
  },
)
GlassMorphCard.displayName = "GlassMorphCard"

export { GlassMorphCard }
