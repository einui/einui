"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react"

// Base Widget Container
interface GlassWidgetProps extends Omit<HTMLMotionProps<"div">, "ref"> {
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
          "before:bg-linear-to-b before:from-white/5 before:to-transparent before:pointer-events-none",
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

// Calendar Widget
interface CalendarWidgetProps {
  date?: Date
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  className?: string
}

function CalendarWidget({ date = new Date(), selectedDate, onDateSelect, className }: CalendarWidgetProps) {
  const [currentMonth, setCurrentMonth] = React.useState(date)
  const selected = selectedDate || date

  const monthName = currentMonth.toLocaleDateString("en-US", { month: "short" })
  const year = currentMonth.getFullYear()

  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
  const startPadding = firstDay.getDay()
  const daysInMonth = lastDay.getDate()

  const days = Array.from({ length: startPadding + daysInMonth }, (_, i) => {
    if (i < startPadding) return null
    return i - startPadding + 1
  })

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const isSelected = (day: number) => {
    return (
      day === selected.getDate() &&
      currentMonth.getMonth() === selected.getMonth() &&
      currentMonth.getFullYear() === selected.getFullYear()
    )
  }

  const isToday = (day: number) => {
    const today = new Date()
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    )
  }

  return (
    <GlassWidgetBase className={cn("min-w-60", className)} size="sm">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={prevMonth}
          className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-white font-medium">
          {monthName} {year}
        </span>
        <button
          onClick={nextMonth}
          className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="text-xs text-white/40 py-1 font-medium">
            {d}
          </div>
        ))}
        {days.map((day, i) => (
          <button
            key={i}
            onClick={() => {
              if (day && onDateSelect) {
                onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
              }
            }}
            disabled={day === null}
            className={cn(
              "text-xs py-1.5 rounded-full transition-all",
              day === null && "invisible",
              day !== null && "text-white/70 hover:bg-white/10 cursor-pointer",
              day !== null && isSelected(day) && "bg-white/20 text-white font-medium",
              day !== null && isToday(day) && !isSelected(day) && "ring-1 ring-white/30",
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

// Compact Calendar Widget
interface CompactCalendarWidgetProps {
  date?: Date
  className?: string
}

function CompactCalendarWidget({ date = new Date(), className }: CompactCalendarWidgetProps) {
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" })
  const monthName = date.toLocaleDateString("en-US", { month: "short" })
  const dayNumber = date.getDate()

  return (
    <GlassWidgetBase className={cn("flex flex-col items-center justify-center min-w-30", className)}>
      <div className="flex items-center gap-1.5 text-base">
        <span className="text-white/60">{dayName}</span>
        <span className="text-red-500 font-medium">{monthName}</span>
      </div>
      <div className="text-6xl font-light text-white tracking-tight">{dayNumber}</div>
    </GlassWidgetBase>
  )
}

// Events Calendar Widget
interface Event {
  id: string
  title: string
  time: string
  color?: string
}

interface EventsCalendarWidgetProps {
  date?: Date
  events?: Event[]
  className?: string
}

function EventsCalendarWidget({ date = new Date(), events = [], className }: EventsCalendarWidgetProps) {
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
  const monthName = date.toLocaleDateString("en-US", { month: "long" })
  const dayNumber = date.getDate()

  return (
    <GlassWidgetBase className={cn("min-w-65", className)} size="lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-white/60 text-sm">{dayName}</div>
          <div className="text-white text-2xl font-light">
            {monthName} {dayNumber}
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-white/10 text-white/60 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {events.length > 0 ? (
        <div className="space-y-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={cn("w-1 h-8 rounded-full", event.color || "bg-cyan-500")} />
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm truncate">{event.title}</div>
                <div className="text-white/50 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-white/40 text-sm">No events today</div>
      )}
    </GlassWidgetBase>
  )
}

export { CalendarWidget, CompactCalendarWidget, EventsCalendarWidget, GlassWidgetBase }
