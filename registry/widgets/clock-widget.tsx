"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sun, Moon, Play, Pause, RotateCcw } from "lucide-react"

// Base Widget Container
interface GlassWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
  xl: "p-6",
}

const GlassWidgetBase = React.forwardRef<HTMLDivElement, GlassWidgetProps>(
  ({ className, children, size = "md", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-white/10",
          "bg-zinc-900/80 backdrop-blur-xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          "before:absolute before:inset-0 before:rounded-2xl",
          "before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none",
          sizeClasses[size],
          className,
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  },
)
GlassWidgetBase.displayName = "GlassWidgetBase"

// Analog Clock Widget
interface AnalogClockWidgetProps {
  time?: Date
  showNumbers?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

function AnalogClockWidget({ time, showNumbers = true, size = "md", className }: AnalogClockWidgetProps) {
  const [currentTime, setCurrentTime] = React.useState(time || new Date())

  React.useEffect(() => {
    if (time) {
      setCurrentTime(time)
      return
    }
    const interval = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [time])

  const seconds = currentTime.getSeconds()
  const minutes = currentTime.getMinutes()
  const hours = currentTime.getHours() % 12

  const secondDegrees = seconds * 6
  const minuteDegrees = minutes * 6 + seconds * 0.1
  const hourDegrees = hours * 30 + minutes * 0.5

  const sizeConfig = {
    sm: { container: "w-24 h-24", numbers: "text-[10px]", radius: 36 },
    md: { container: "w-32 h-32", numbers: "text-xs", radius: 42 },
    lg: { container: "w-40 h-40", numbers: "text-sm", radius: 50 },
  }

  const config = sizeConfig[size]
  const numbers = showNumbers ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : []

  return (
    <GlassWidgetBase className={cn("p-3", className)} size="sm">
      <div className={cn("relative", config.container)}>
        <div className="absolute inset-0 rounded-full border border-white/20 bg-zinc-900/50" />

        {numbers.map((num, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x = 50 + config.radius * Math.cos(angle)
          const y = 50 + config.radius * Math.sin(angle)
          return (
            <span
              key={num}
              className={cn("absolute text-white/70 font-light", config.numbers)}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {num}
            </span>
          )
        })}

        {!showNumbers &&
          Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
                style={{
                  left: `${50 + 42 * Math.cos(angle)}%`,
                  top: `${50 + 42 * Math.sin(angle)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )
          })}

        <div className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 z-20" />

        <div
          className="absolute left-1/2 top-1/2 w-1 rounded-full bg-white/90 origin-bottom"
          style={{
            height: size === "lg" ? "28px" : size === "md" ? "22px" : "18px",
            transform: `translateX(-50%) translateY(-100%) rotate(${hourDegrees}deg)`,
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 w-0.5 rounded-full bg-white/80 origin-bottom"
          style={{
            height: size === "lg" ? "36px" : size === "md" ? "28px" : "22px",
            transform: `translateX(-50%) translateY(-100%) rotate(${minuteDegrees}deg)`,
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 w-px bg-red-500 origin-bottom"
          style={{
            height: size === "lg" ? "40px" : size === "md" ? "32px" : "26px",
            transform: `translateX(-50%) translateY(-100%) rotate(${secondDegrees}deg)`,
          }}
        />
      </div>
    </GlassWidgetBase>
  )
}

// Digital Clock Widget
interface DigitalClockWidgetProps {
  time?: Date
  showSeconds?: boolean
  format?: "12h" | "24h"
  className?: string
}

function DigitalClockWidget({ time, showSeconds = true, format = "12h", className }: DigitalClockWidgetProps) {
  const [currentTime, setCurrentTime] = React.useState(time || new Date())

  React.useEffect(() => {
    if (time) {
      setCurrentTime(time)
      return
    }
    const interval = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [time])

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const displayHours = format === "12h" ? hours % 12 || 12 : hours
  const period = hours >= 12 ? "PM" : "AM"

  return (
    <GlassWidgetBase className={cn("flex flex-col items-center justify-center min-w-[140px]", className)}>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-light text-white tabular-nums">
          {displayHours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}
        </span>
        {showSeconds && (
          <span className="text-xl text-white/60 tabular-nums">:{seconds.toString().padStart(2, "0")}</span>
        )}
        {format === "12h" && <span className="text-sm text-white/50 ml-1">{period}</span>}
      </div>
    </GlassWidgetBase>
  )
}

// World Clock Widget
interface WorldClockWidgetProps {
  clocks: Array<{
    city: string
    timezone: string
    isDay?: boolean
  }>
  className?: string
}

function WorldClockWidget({ clocks, className }: WorldClockWidgetProps) {
  const [times, setTimes] = React.useState<string[]>([])

  React.useEffect(() => {
    const updateTimes = () => {
      const newTimes = clocks.map((clock) => {
        try {
          return new Date().toLocaleTimeString("en-US", {
            timeZone: clock.timezone,
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        } catch {
          return "--:--"
        }
      })
      setTimes(newTimes)
    }
    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [clocks])

  return (
    <GlassWidgetBase className={cn("min-w-[180px]", className)}>
      <div className="space-y-3">
        {clocks.map((clock, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">{clock.city}</span>
              {clock.isDay !== undefined &&
                (clock.isDay ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-300" />)}
            </div>
            <span className="text-white/80 text-lg tabular-nums">{times[i] || "--:--"}</span>
          </div>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

// Stopwatch Widget
interface StopwatchWidgetProps {
  className?: string
}

function StopwatchWidget({ className }: StopwatchWidgetProps) {
  const [time, setTime] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => setTime((t) => t + 10), 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const centiseconds = Math.floor((ms % 1000) / 10)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`
  }

  const reset = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <GlassWidgetBase className={cn("min-w-[160px]", className)}>
      <div className="text-3xl font-light text-white text-center mb-4 tabular-nums">{formatTime(time)}</div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/60 transition-colors"
          aria-label="Reset"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={cn(
            "p-3 rounded-full transition-colors",
            isRunning
              ? "bg-red-500/20 hover:bg-red-500/30 text-red-400"
              : "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400",
          )}
          aria-label={isRunning ? "Pause" : "Start"}
        >
          {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
      </div>
    </GlassWidgetBase>
  )
}

// Timer Widget
interface TimerWidgetProps {
  initialMinutes?: number
  className?: string
}

function TimerWidget({ initialMinutes = 5, className }: TimerWidgetProps) {
  const [timeLeft, setTimeLeft] = React.useState(initialMinutes * 60 * 1000)
  const [isRunning, setIsRunning] = React.useState(false)
  const [initialTime, setInitialTime] = React.useState(initialMinutes * 60 * 1000)

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1000)), 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const reset = () => {
    setIsRunning(false)
    setTimeLeft(initialTime)
  }

  const progress = (timeLeft / initialTime) * 100

  return (
    <GlassWidgetBase className={cn("min-w-[160px]", className)}>
      <div className="relative flex items-center justify-center mb-4">
        <svg className="w-24 h-24 -rotate-90">
          <circle cx="48" cy="48" r="44" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
          <circle
            cx="48"
            cy="48"
            r="44"
            stroke={timeLeft === 0 ? "#ef4444" : "#22c55e"}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={276.46}
            strokeDashoffset={276.46 * (1 - progress / 100)}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute text-2xl font-light text-white tabular-nums">{formatTime(timeLeft)}</div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/60 transition-colors"
          aria-label="Reset"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={cn(
            "p-3 rounded-full transition-colors",
            isRunning
              ? "bg-red-500/20 hover:bg-red-500/30 text-red-400"
              : "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400",
          )}
          aria-label={isRunning ? "Pause" : "Start"}
        >
          {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
      </div>
    </GlassWidgetBase>
  )
}

export { AnalogClockWidget, DigitalClockWidget, WorldClockWidget, StopwatchWidget, TimerWidget }
