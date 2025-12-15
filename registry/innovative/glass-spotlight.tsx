"use client"

import * as React from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SpotlightStep {
  target: string // CSS selector
  title: string
  description: string
  placement?: "top" | "bottom" | "left" | "right"
}

interface GlassSpotlightProps {
  steps: SpotlightStep[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onComplete?: () => void
}

function GlassSpotlight({ steps, open = false, onOpenChange, onComplete }: GlassSpotlightProps) {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [targetRect, setTargetRect] = React.useState<DOMRect | null>(null)

  const step = steps[currentStep]

  React.useEffect(() => {
    if (!open || !step) return

    const target = document.querySelector(step.target)
    if (target) {
      const rect = target.getBoundingClientRect()
      setTargetRect(rect)
      target.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [open, step, currentStep])

  React.useEffect(() => {
    const handleResize = () => {
      if (!step) return
      const target = document.querySelector(step.target)
      if (target) {
        setTargetRect(target.getBoundingClientRect())
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [step])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      onComplete?.()
      onOpenChange?.(false)
      setCurrentStep(0)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleClose = () => {
    onOpenChange?.(false)
    setCurrentStep(0)
  }

  if (!open || !targetRect) return null

  const padding = 8
  const tooltipWidth = 320

  // Calculate tooltip position
  let tooltipStyle: React.CSSProperties = {}
  const placement = step.placement || "bottom"

  switch (placement) {
    case "top":
      tooltipStyle = {
        left: targetRect.left + targetRect.width / 2 - tooltipWidth / 2,
        bottom: window.innerHeight - targetRect.top + padding + 12,
      }
      break
    case "bottom":
      tooltipStyle = {
        left: targetRect.left + targetRect.width / 2 - tooltipWidth / 2,
        top: targetRect.bottom + padding + 12,
      }
      break
    case "left":
      tooltipStyle = {
        right: window.innerWidth - targetRect.left + padding + 12,
        top: targetRect.top + targetRect.height / 2 - 60,
      }
      break
    case "right":
      tooltipStyle = {
        left: targetRect.right + padding + 12,
        top: targetRect.top + targetRect.height / 2 - 60,
      }
      break
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay with cutout */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="spotlight-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect
              x={targetRect.left - padding}
              y={targetRect.top - padding}
              width={targetRect.width + padding * 2}
              height={targetRect.height + padding * 2}
              rx="12"
              fill="black"
            />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.75)" mask="url(#spotlight-mask)" />
      </svg>

      {/* Spotlight border */}
      <div
        className="absolute rounded-xl pointer-events-none animate-pulse"
        style={{
          left: targetRect.left - padding,
          top: targetRect.top - padding,
          width: targetRect.width + padding * 2,
          height: targetRect.height + padding * 2,
          boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)",
        }}
      />

      {/* Tooltip */}
      <div
        className="fixed z-50"
        style={{
          ...tooltipStyle,
          width: tooltipWidth,
        }}
      >
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-2 rounded-xl bg-linear-to-r from-cyan-500/30 to-blue-500/30 blur-lg opacity-70" />

          {/* Card */}
          <div className="relative rounded-xl border border-white/20 bg-black/90 backdrop-blur-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Glass highlight */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-b from-white/10 to-transparent pointer-events-none" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/40">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <h4 className="font-semibold text-white mb-2">{step.title}</h4>
              <p className="text-sm text-white/60 mb-4">{step.description}</p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm",
                    "transition-colors",
                    currentStep === 0
                      ? "text-white/20 cursor-not-allowed"
                      : "text-white/60 hover:text-white hover:bg-white/10",
                  )}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                <button
                  onClick={handleNext}
                  className={cn(
                    "flex items-center gap-1 px-4 py-1.5 rounded-lg text-sm font-medium",
                    "bg-linear-to-r from-cyan-500 to-blue-500 text-white",
                    "hover:from-cyan-400 hover:to-blue-400 transition-all",
                  )}
                >
                  {currentStep === steps.length - 1 ? "Finish" : "Next"}
                  {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { GlassSpotlight }
export type { SpotlightStep }
