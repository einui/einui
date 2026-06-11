"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react";
import { GlassWidgetBase } from "./base-widget";

// Helper: returns the start-of-month Date for a given date
function getMonthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

interface CalendarWidgetProps {
  date?: Date;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
}

function CalendarWidget({
  date,
  selectedDate,
  onDateSelect,
  className,
}: CalendarWidgetProps) {
  const [internalDate, setInternalDate] = React.useState<Date | null>(date ?? null);

  // Always create the month state (avoid conditional hooks). Use a deterministic fallback date.
  const [currentMonth, setCurrentMonth] = React.useState<Date>(() =>
    getMonthStart(date ?? new Date(0))
  );

  // On mount/client, set "now" if no date prop was provided.
  React.useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!date) setInternalDate(new Date());
  }, [date]);

  // When internalDate is ready, sync currentMonth.
  React.useLayoutEffect(() => {
    if (internalDate) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentMonth(getMonthStart(internalDate));
    }
  }, [internalDate]);

  if (!internalDate) {
    // Lightweight client-side loading state to avoid using `new Date()` during prerender
    return (
      <GlassWidgetBase className={cn("min-w-60 p-4", className)} glowColor="purple">
        <div className="h-6 w-36 bg-white/8 rounded animate-pulse" />
        <div className="h-36 w-full mt-3 bg-white/8 rounded animate-pulse" />
      </GlassWidgetBase>
    );
  }

  const selected = selectedDate ?? internalDate;

  const monthName = currentMonth.toLocaleDateString("en-US", { month: "short" });
  const year = currentMonth.getFullYear();

  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const startPadding = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const days = Array.from({ length: startPadding + daysInMonth }, (_, i) => {
    if (i < startPadding) return null;
    return i - startPadding + 1;
  });

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isSelected = (day: number) => {
    return (
      day === selected.getDate() &&
      currentMonth.getMonth() === selected.getMonth() &&
      currentMonth.getFullYear() === selected.getFullYear()
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  return (
    <GlassWidgetBase className={cn("min-w-60", className)} size="sm" glowColor="purple">
      {/* ...existing UI... */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={prevMonth}
          className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-white font-medium">
          {monthName} {year}
        </span>
        <button
          onClick={nextMonth}
          className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
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
                onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
              }
            }}
            disabled={day === null}
            className={cn(
              "text-xs py-1.5 rounded-full transition-all",
              day === null && "invisible",
              day !== null && "text-white/70 hover:bg-white/15 cursor-pointer",
              day !== null && isSelected(day) && "bg-white/25 text-white font-medium shadow-sm",
              day !== null && isToday(day) && !isSelected(day) && "ring-1 ring-cyan-400/50"
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </GlassWidgetBase>
  );
}

interface CompactCalendarWidgetProps {
  date?: Date;
  className?: string;
}

function CompactCalendarWidget({ date, className }: CompactCalendarWidgetProps) {
  const [internalDate, setInternalDate] = React.useState<Date | null>(date ?? null);
  React.useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!date) setInternalDate(new Date());
  }, [date]);

  if (!internalDate) {
    // Render a lightweight client-side loading state to avoid using `new Date()` during prerender
    return (
      <GlassWidgetBase
        className={cn("flex flex-col items-center justify-center min-w-30", className)}
        glowColor="purple"
      >
        <div className="h-4 w-20 bg-white/8 rounded animate-pulse" />
        <div className="h-12 w-16 mt-2 bg-white/8 rounded animate-pulse" />
      </GlassWidgetBase>
    );
  }

  const dayName = internalDate.toLocaleDateString("en-US", { weekday: "short" });
  const monthName = internalDate.toLocaleDateString("en-US", { month: "short" });
  const dayNumber = internalDate.getDate();

  return (
    <GlassWidgetBase
      className={cn("flex flex-col items-center justify-center min-w-30", className)}
      glowColor="purple"
    >
      <div className="flex items-center gap-1.5 text-base">
        <span className="text-white/60">{dayName}</span>
        <span className="text-cyan-400 font-medium">{monthName}</span>
      </div>
      <div className="text-6xl font-light text-white tracking-tight">{dayNumber}</div>
    </GlassWidgetBase>
  );
}

interface Event {
  id: string;
  title: string;
  time: string;
  color?: string;
}

interface EventsCalendarWidgetProps {
  date?: Date;
  events?: Event[];
  className?: string;
}

function EventsCalendarWidget({
  date,
  events = [],
  className,
}: EventsCalendarWidgetProps) {
  const [internalDate, setInternalDate] = React.useState<Date | null>(date ?? null);
  React.useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!date) setInternalDate(new Date());
  }, [date]);

  if (!internalDate) {
    return (
      <GlassWidgetBase className={cn("min-w-65", className)} size="lg" glowColor="purple">
        <div className="h-6 w-24 bg-white/8 rounded animate-pulse" />
        <div className="h-24 w-full mt-3 bg-white/8 rounded animate-pulse" />
      </GlassWidgetBase>
    );
  }

  const dayName = internalDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = internalDate.toLocaleDateString("en-US", { month: "long" });
  const dayNumber = internalDate.getDate();

  return (
    <GlassWidgetBase className={cn("min-w-65", className)} size="lg" glowColor="purple">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-white/60 text-sm">{dayName}</div>
          <div className="text-white text-2xl font-light">
            {monthName} {dayNumber}
          </div>
        </div>
        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {events.length > 0 ? (
        <div className="space-y-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
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
  );
}

export { CalendarWidget, CompactCalendarWidget, EventsCalendarWidget };
