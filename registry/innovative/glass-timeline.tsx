"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  id: string
  title: string
  description?: string
  date?: string
  icon?: React.ReactNode
  status?: "completed" | "current" | "upcoming"
}

interface GlassTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[]
  orientation?: "vertical" | "horizontal"
}

const GlassTimeline = React.forwardRef<HTMLDivElement, GlassTimelineProps>(
  ({ className, items, orientation = "vertical", ...props }, ref) => {
    if (orientation === "horizontal") {
      return (
        <div ref={ref} className={cn("w-full overflow-x-auto", className)} {...props}>
          <div className="flex items-start gap-4 min-w-max px-4">
            {items.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="flex items-center">
                  {/* Node */}
                  <GlassTimelineNode status={item.status} icon={item.icon} />

                  {/* Connector */}
                  {index < items.length - 1 && (
                    <div
                      className={cn(
                        "w-24 h-0.5 mx-2",
                        item.status === "completed" ? "bg-linear-to-r from-cyan-500 to-blue-500" : "bg-white/20",
                      )}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="mt-4 text-center max-w-37.5">
                  <h4 className="font-medium text-white text-sm">{item.title}</h4>
                  {item.date && <p className="text-xs text-white/40 mt-1">{item.date}</p>}
                  {item.description && <p className="text-xs text-white/60 mt-2">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-4 pb-8 last:pb-0">
            {/* Node and line */}
            <div className="flex flex-col items-center">
              <GlassTimelineNode status={item.status} icon={item.icon} />
              {index < items.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 flex-1 mt-2",
                    item.status === "completed" ? "bg-linear-to-b from-cyan-500 to-blue-500" : "bg-white/20",
                  )}
                />
              )}
            </div>

            {/* Content card */}
            <div className="flex-1 pb-2">
              <GlassTimelineCard item={item} />
            </div>
          </div>
        ))}
      </div>
    )
  },
)
GlassTimeline.displayName = "GlassTimeline"

function GlassTimelineNode({ status, icon }: { status?: TimelineItem["status"]; icon?: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Glow for current */}
      {status === "current" && (
        <div className="absolute -inset-2 rounded-full bg-linear-to-r from-cyan-500/50 to-blue-500/50 blur-md animate-pulse" />
      )}

      <div
        className={cn(
          "relative w-10 h-10 rounded-full flex items-center justify-center",
          "border-2 transition-all duration-300",
          status === "completed" && "bg-linear-to-br from-cyan-500 to-blue-500 border-cyan-400/50",
          status === "current" && "bg-white/20 backdrop-blur-xl border-cyan-400/50",
          status === "upcoming" && "bg-white/5 backdrop-blur-xl border-white/20",
          !status && "bg-white/10 backdrop-blur-xl border-white/20",
        )}
      >
        {status === "completed" ? (
          <Check className="w-5 h-5 text-white" />
        ) : icon ? (
          <span className={cn("text-white/80", status === "current" && "text-cyan-400")}>{icon}</span>
        ) : (
          <div className={cn("w-3 h-3 rounded-full", status === "current" ? "bg-cyan-400" : "bg-white/40")} />
        )}
      </div>
    </div>
  )
}

function GlassTimelineCard({ item }: { item: TimelineItem }) {
  const isCurrent = item.status === "current"

  return (
    <div className="relative">
      {isCurrent && (
        <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-cyan-500/30 to-blue-500/30 blur-lg opacity-70" />
      )}

      <div
        className={cn(
          "relative rounded-xl border p-4",
          "backdrop-blur-xl transition-all duration-300",
          isCurrent ? "bg-white/15 border-white/30" : "bg-white/5 border-white/10 hover:bg-white/10",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-medium text-white">{item.title}</h4>
          {item.date && <span className="text-xs text-white/40 shrink-0">{item.date}</span>}
        </div>
        {item.description && <p className="mt-2 text-sm text-white/60">{item.description}</p>}
      </div>
    </div>
  )
}

export { GlassTimeline }
export type { TimelineItem }
