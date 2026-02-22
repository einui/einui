"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

interface GlassRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "cyan" | "purple" | "white" | "blue"
  duration?: number
  disabled?: boolean
}

const rippleColors = {
  cyan: "bg-cyan-400/30",
  purple: "bg-purple-400/30",
  white: "bg-white/30",
  blue: "bg-blue-400/30",
}

const GlassRipple = React.forwardRef<HTMLDivElement, GlassRippleProps>(
  ({ className, children, color = "white", duration = 600, disabled = false, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([])
    const containerRef = React.useRef<HTMLDivElement>(null)

    const createRipple = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (disabled || !containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        let x: number, y: number

        if ("touches" in e) {
          x = e.touches[0].clientX - rect.left
          y = e.touches[0].clientY - rect.top
        } else {
          x = e.clientX - rect.left
          y = e.clientY - rect.top
        }

        const size = Math.max(rect.width, rect.height) * 2

        const newRipple: Ripple = {
          id: Date.now(),
          x,
          y,
          size,
        }

        setRipples((prev) => [...prev, newRipple])

        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
        }, duration)
      },
      [disabled, duration],
    )

    return (
      <div ref={ref} className={cn("relative overflow-hidden cursor-pointer", className)} {...props}>
        <div ref={containerRef} className="absolute inset-0" onMouseDown={createRipple} onTouchStart={createRipple}>
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className={cn(
                "absolute rounded-full pointer-events-none",
                "animate-[ripple_0.6s_ease-out_forwards]",
                rippleColors[color],
              )}
              style={{
                left: ripple.x - ripple.size / 2,
                top: ripple.y - ripple.size / 2,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 pointer-events-none">{children}</div>
      </div>
    )
  },
)
GlassRipple.displayName = "GlassRipple"

// Button with built-in ripple
interface GlassRippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline"
  rippleColor?: "cyan" | "purple" | "white" | "blue"
}

const GlassRippleButton = React.forwardRef<HTMLButtonElement, GlassRippleButtonProps>(
  ({ className, children, variant = "default", rippleColor = "white", ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([])
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    React.useImperativeHandle(ref, () => buttonRef.current!)

    const createRipple = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const size = Math.max(rect.width, rect.height) * 2

      const newRipple: Ripple = { id: Date.now(), x, y, size }
      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 600)
    }, [])

    const variants = {
      default: "bg-white/20 backdrop-blur-xl border border-white/30 text-white hover:bg-white/30",
      primary:
        "bg-linear-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 backdrop-blur-xl border border-white/30 text-white",
      outline: "bg-transparent backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/10",
    }

    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative overflow-hidden rounded-xl px-6 py-3 font-medium",
          "transition-all duration-300 ease-out",
          "hover:scale-105 active:scale-95",
          variants[variant],
          className,
        )}
        onMouseDown={createRipple}
        {...props}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className={cn(
              "absolute rounded-full pointer-events-none",
              "animate-[ripple_0.6s_ease-out_forwards]",
              rippleColors[rippleColor],
            )}
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
        <span className="relative z-10">{children}</span>
      </button>
    )
  },
)
GlassRippleButton.displayName = "GlassRippleButton"

export { GlassRipple, GlassRippleButton }
