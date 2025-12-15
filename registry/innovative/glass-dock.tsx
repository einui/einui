"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
}

type DockOrientation = "horizontal" | "vertical"

interface GlassDockProps extends React.HTMLAttributes<HTMLDivElement> {
  items: DockItem[]
  magnification?: number
  baseSize?: number
  maxSize?: number
  orientation?: DockOrientation
  glassIntensity?: "low" | "medium" | "high"
}

const glassConfig = {
  low: {
    bg: "bg-white/5",
    blur: "backdrop-blur-xl",
    border: "border-white/10",
    itemBg: "bg-white/5",
    itemHover: "hover:bg-white/10",
  },
  medium: {
    bg: "bg-white/10",
    blur: "backdrop-blur-2xl",
    border: "border-white/20",
    itemBg: "bg-white/10",
    itemHover: "hover:bg-white/20",
  },
  high: {
    bg: "bg-white/15",
    blur: "backdrop-blur-3xl",
    border: "border-white/30",
    itemBg: "bg-white/15",
    itemHover: "hover:bg-white/25",
  },
}

const GlassDock = React.forwardRef<HTMLDivElement, GlassDockProps>(
  (
    {
      className,
      items,
      magnification = 1.5,
      baseSize = 48,
      maxSize = 72,
      orientation = "horizontal",
      glassIntensity = "high",
      ...props
    },
    ref,
  ) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
    const [mousePos, setMousePos] = React.useState<number | null>(null)
    const dockRef = React.useRef<HTMLDivElement>(null)
    const glass = glassConfig[glassIntensity]
    const isVertical = orientation === "vertical"

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent) => {
        if (!dockRef.current) return
        const rect = dockRef.current.getBoundingClientRect()
        setMousePos(isVertical ? e.clientY - rect.top : e.clientX - rect.left)
      },
      [isVertical],
    )

    const handleMouseLeave = React.useCallback(() => {
      setMousePos(null)
      setHoveredIndex(null)
    }, [])

    const getScale = React.useCallback(
      (index: number) => {
        if (mousePos === null || !dockRef.current) return 1

        const itemSize = baseSize + 16
        const itemCenter = index * itemSize + itemSize / 2
        const distance = Math.abs(mousePos - itemCenter)
        const maxDistance = itemSize * 2

        if (distance > maxDistance) return 1

        const scale = 1 + (magnification - 1) * (1 - distance / maxDistance)
        return Math.min(scale, magnification)
      },
      [mousePos, baseSize, magnification],
    )

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div
          className={cn(
            "absolute rounded-3xl opacity-60 blur-2xl",
            "bg-linear-to-r from-cyan-500/30 via-blue-500/25 to-purple-500/30",
            isVertical ? "-inset-y-4 -inset-x-6" : "-inset-x-4 -inset-y-6",
          )}
        />
        <div
          className={cn(
            "absolute rounded-3xl opacity-40 blur-xl",
            "bg-linear-to-r from-white/20 to-white/10",
            isVertical ? "-inset-y-2 -inset-x-3" : "-inset-x-2 -inset-y-3",
          )}
        />

        <div
          ref={dockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          role="toolbar"
          aria-label="Application dock"
          className={cn(
            "relative gap-2 px-4 py-3 rounded-2xl",
            glass.bg,
            glass.blur,
            glass.border,
            "border",
            "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.1)]",
            isVertical ? "flex flex-col items-center" : "flex items-end",
          )}
        >
          <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] pointer-events-none" />

          {items.map((item, index) => {
            const scale = getScale(index)
            const isHovered = hoveredIndex === index
            const size = baseSize * scale

            const DockItemContent = (
              <div
                key={item.id}
                className={cn("relative flex items-center", isVertical ? "flex-row" : "flex-col")}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{
                  [isVertical ? "width" : "height"]: maxSize,
                  display: "flex",
                  [isVertical ? "justifyContent" : "alignItems"]: "flex-end",
                }}
              >
                <div
                  className={cn(
                    "absolute px-3 py-1.5 rounded-xl",
                    "bg-white/15 backdrop-blur-2xl border border-white/30",
                    "text-white text-sm font-medium whitespace-nowrap",
                    "shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]",
                    "transition-all duration-200",
                    isVertical
                      ? cn(
                          "-right-2 translate-x-full",
                          isHovered ? "opacity-100 translate-x-full" : "opacity-0 translate-x-[calc(100%-8px)]",
                        )
                      : cn("-top-12", isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"),
                    !isHovered && "pointer-events-none",
                  )}
                >
                  {/* Tooltip glass highlight */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-b from-white/15 to-transparent pointer-events-none" />
                  <span className="relative">{item.label}</span>
                  <div
                    className={cn(
                      "absolute w-2.5 h-2.5 bg-white/15 backdrop-blur-2xl border border-white/30",
                      "transform rotate-45",
                      isVertical
                        ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-t-0 border-r-0"
                        : "left-1/2 -bottom-1.5 -translate-x-1/2 border-t-0 border-l-0",
                    )}
                  />
                </div>

                <button
                  onClick={item.onClick}
                  aria-label={item.label}
                  className={cn(
                    "relative flex items-center justify-center rounded-xl",
                    glass.itemBg,
                    "backdrop-blur-xl border border-white/20",
                    "transition-all duration-200 ease-out",
                    glass.itemHover,
                    "shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]",
                    item.active &&
                      "bg-white/25 border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)]",
                  )}
                  style={{
                    width: size,
                    height: size,
                    transform: isVertical
                      ? `translateX(${(maxSize - size) / 2}px)`
                      : `translateY(${(maxSize - size) / 2}px)`,
                  }}
                >
                  {/* Button glass highlights */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-b from-white/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-transparent to-white/10 pointer-events-none" />

                  {/* Active glow */}
                  {item.active && (
                    <div className="absolute -inset-1.5 rounded-2xl bg-linear-to-r from-cyan-500/40 to-blue-500/40 blur-md -z-10" />
                  )}

                  <span
                    className="relative text-white/90"
                    style={{
                      transform: `scale(${scale})`,
                      transition: "transform 0.2s ease-out",
                    }}
                  >
                    {item.icon}
                  </span>
                </button>

                {item.active && (
                  <div
                    className={cn(
                      "absolute w-1.5 h-1.5 rounded-full",
                      "bg-linear-to-r from-cyan-400 to-blue-400",
                      "shadow-[0_0_8px_rgba(6,182,212,0.8),0_0_16px_rgba(6,182,212,0.4)]",
                      isVertical ? "-left-1" : "-bottom-1",
                    )}
                  />
                )}
              </div>
            )

            if (item.href) {
              return (
                <a key={item.id} href={item.href} className="contents">
                  {DockItemContent}
                </a>
              )
            }

            return <React.Fragment key={item.id}>{DockItemContent}</React.Fragment>
          })}
        </div>
      </div>
    )
  },
)
GlassDock.displayName = "GlassDock"

export { GlassDock }
export type { DockItem, DockOrientation }
