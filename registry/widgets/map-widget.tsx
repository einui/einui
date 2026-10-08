"use client"

import { cn } from "@/lib/utils"
import { GlassWidgetBase, type GlassWidgetBaseProps } from "./base-widget"
import { Activity, Globe } from "lucide-react"

type GlowColor = NonNullable<GlassWidgetBaseProps["glowColor"]>

const ROWS = 12
const COLS = 16

// Stylized landmass mask so the dot grid reads as a map rather than noise.
function isLandCell(row: number, col: number): boolean {
  return (
    (row >= 2 && row <= 9 && col >= 4 && col <= 11) ||
    (row >= 5 && row <= 7 && col >= 2 && col <= 5) ||
    (row === 3 && col === 12)
  )
}

export interface MapWidgetProps {
  title?: string
  subtitle?: string
  activePoints?: number
  regionName?: string
  glowColor?: GlowColor
  className?: string
}

export function MapWidget({
  title = "Network Map",
  subtitle = "Global Nodes",
  activePoints = 1420,
  regionName = "Region-Alpha",
  glowColor = "cyan",
  className,
}: MapWidgetProps) {
  return (
    <GlassWidgetBase className={cn("flex flex-col justify-between", className)} glowColor={glowColor}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-white">{title}</h3>
          <p className="truncate text-xs text-white/50">{subtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/80 backdrop-blur-md">
          <Globe className="size-3.5 animate-pulse text-cyan-400" aria-hidden="true" />
          <span>{regionName}</span>
        </div>
      </div>

      {/* Dotted map area */}
      <div
        className="relative my-3 flex min-h-35 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4"
        role="img"
        aria-label={`${title} node map for ${regionName}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-blue-500/5 to-transparent"
          aria-hidden="true"
        />

        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {Array.from({ length: ROWS * COLS }).map((_, index) => {
            const row = Math.floor(index / COLS)
            const col = index % COLS
            const isLand = isLandCell(row, col)
            const isActiveNode = isLand && (index % 5 === 0 || index % 7 === 0)

            return (
              <div
                key={index}
                className={cn(
                  "size-2 rounded-full transition-all duration-300",
                  isLand
                    ? isActiveNode
                      ? "scale-110 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                      : "bg-blue-500/40"
                    : "bg-white/5"
                )}
              />
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-2 text-xs text-white/60">
        <span className="flex items-center gap-1">
          <Activity className="size-3.5 text-emerald-400" aria-hidden="true" />
          Active Nodes
        </span>
        <span className="text-sm font-semibold tabular-nums text-white">
          {activePoints.toLocaleString()}
        </span>
      </div>
    </GlassWidgetBase>
  )
}
