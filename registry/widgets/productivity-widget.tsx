"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { CheckCircle2, Circle, Plus, Trash2, Target, Zap, TrendingUp } from "lucide-react"

// Base Widget Container
const GlassWidgetBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" | "xl" }
>(({ className, children, size = "md", ...props }, ref) => {
  const sizeClasses = { sm: "p-3", md: "p-4", lg: "p-5", xl: "p-6" }
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
})
GlassWidgetBase.displayName = "GlassWidgetBase"

// Todo Widget
interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoWidgetProps {
  title?: string
  initialTodos?: Todo[]
  className?: string
}

function TodoWidget({ title = "Tasks", initialTodos = [], className }: TodoWidgetProps) {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodos)
  const [newTodo, setNewTodo] = React.useState("")

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo.trim(), completed: false }])
      setNewTodo("")
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const completedCount = todos.filter((t) => t.completed).length

  return (
    <GlassWidgetBase className={cn("min-w-[240px]", className)} size="lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">{title}</h3>
        <span className="text-white/50 text-sm">
          {completedCount}/{todos.length}
        </span>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add task..."
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
        />
        <button
          onClick={addTodo}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 transition-colors"
          aria-label="Add task"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2 max-h-[200px] overflow-y-auto">
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 group"
          >
            <button onClick={() => toggleTodo(todo.id)} className="text-white/60 hover:text-white transition-colors">
              {todo.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5" />}
            </button>
            <span className={cn("flex-1 text-sm", todo.completed ? "text-white/40 line-through" : "text-white/80")}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="opacity-0 group-hover:opacity-100 p-1 text-white/40 hover:text-red-400 transition-all"
              aria-label="Delete task"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
        {todos.length === 0 && <p className="text-center text-white/30 text-sm py-4">No tasks yet</p>}
      </div>
    </GlassWidgetBase>
  )
}

// Goals Widget
interface Goal {
  id: string
  title: string
  current: number
  target: number
  color?: string
}

interface GoalsWidgetProps {
  goals?: Goal[]
  className?: string
}

function GoalsWidget({ goals = [], className }: GoalsWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[240px]", className)} size="lg">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-white/60" />
        <h3 className="text-white font-medium">Goals</h3>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progress = Math.min((goal.current / goal.target) * 100, 100)
          return (
            <div key={goal.id}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-white/80 text-sm">{goal.title}</span>
                <span className="text-white/50 text-xs">
                  {goal.current}/{goal.target}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full", goal.color || "bg-cyan-500")}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          )
        })}
        {goals.length === 0 && <p className="text-center text-white/30 text-sm py-4">No goals set</p>}
      </div>
    </GlassWidgetBase>
  )
}

// Stats Widget
interface Stat {
  label: string
  value: string | number
  change?: number
  icon?: React.ReactNode
}

interface StatsWidgetProps {
  title?: string
  stats?: Stat[]
  className?: string
}

function StatsWidget({ title = "Today", stats = [], className }: StatsWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[200px]", className)}>
      <h3 className="text-white/60 text-sm mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-1">
              {stat.icon && <span className="text-white/40">{stat.icon}</span>}
              <span className="text-white/50 text-xs">{stat.label}</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white text-xl font-light">{stat.value}</span>
              {stat.change !== undefined && (
                <span className={cn("text-xs", stat.change >= 0 ? "text-emerald-500" : "text-red-500")}>
                  {stat.change >= 0 ? "+" : ""}
                  {stat.change}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

// Focus Timer Widget (Pomodoro)
interface FocusTimerWidgetProps {
  workMinutes?: number
  breakMinutes?: number
  className?: string
}

function FocusTimerWidget({ workMinutes = 25, breakMinutes = 5, className }: FocusTimerWidgetProps) {
  const [mode, setMode] = React.useState<"work" | "break">("work")
  const [timeLeft, setTimeLeft] = React.useState(workMinutes * 60)
  const [isRunning, setIsRunning] = React.useState(false)
  const [sessions, setSessions] = React.useState(0)

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    } else if (timeLeft === 0) {
      if (mode === "work") {
        setSessions((s) => s + 1)
        setMode("break")
        setTimeLeft(breakMinutes * 60)
      } else {
        setMode("work")
        setTimeLeft(workMinutes * 60)
      }
      setIsRunning(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft, mode, workMinutes, breakMinutes])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const totalTime = mode === "work" ? workMinutes * 60 : breakMinutes * 60
  const progress = ((totalTime - timeLeft) / totalTime) * 100

  return (
    <GlassWidgetBase className={cn("min-w-[200px]", className)} size="lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className={cn("w-5 h-5", mode === "work" ? "text-amber-400" : "text-emerald-400")} />
          <span className="text-white font-medium">{mode === "work" ? "Focus" : "Break"}</span>
        </div>
        <span className="text-white/50 text-sm">{sessions} sessions</span>
      </div>

      <div className="relative flex items-center justify-center mb-4">
        <svg className="w-28 h-28 -rotate-90">
          <circle cx="56" cy="56" r="50" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
          <circle
            cx="56"
            cy="56"
            r="50"
            stroke={mode === "work" ? "#f59e0b" : "#22c55e"}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={314.16}
            strokeDashoffset={314.16 * (1 - progress / 100)}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute text-3xl font-light text-white tabular-nums">
          {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>

      <button
        onClick={() => setIsRunning(!isRunning)}
        className={cn(
          "w-full py-2.5 rounded-xl font-medium transition-colors",
          isRunning
            ? "bg-white/10 hover:bg-white/20 text-white/80"
            : mode === "work"
              ? "bg-amber-500/20 hover:bg-amber-500/30 text-amber-400"
              : "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400",
        )}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </GlassWidgetBase>
  )
}

// Habit Tracker Widget
interface Habit {
  id: string
  name: string
  completedDays: boolean[]
}

interface HabitTrackerWidgetProps {
  habits?: Habit[]
  daysToShow?: number
  className?: string
}

function HabitTrackerWidget({ habits = [], daysToShow = 7, className }: HabitTrackerWidgetProps) {
  const days = Array.from({ length: daysToShow }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (daysToShow - 1 - i))
    return d.toLocaleDateString("en-US", { weekday: "short" }).charAt(0)
  })

  return (
    <GlassWidgetBase className={cn("min-w-[280px]", className)} size="lg">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-white/60" />
        <h3 className="text-white font-medium">Habits</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 pl-24">
          {days.map((day, i) => (
            <span key={i} className="w-6 text-center text-xs text-white/40">
              {day}
            </span>
          ))}
        </div>

        {habits.map((habit) => (
          <div key={habit.id} className="flex items-center gap-2">
            <span className="w-20 text-sm text-white/70 truncate">{habit.name}</span>
            <div className="flex gap-2">
              {habit.completedDays.slice(-daysToShow).map((completed, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-6 h-6 rounded-md flex items-center justify-center transition-colors",
                    completed ? "bg-emerald-500/30 text-emerald-400" : "bg-white/5 text-white/20",
                  )}
                >
                  {completed && <CheckCircle2 className="w-4 h-4" />}
                </div>
              ))}
            </div>
          </div>
        ))}
        {habits.length === 0 && <p className="text-center text-white/30 text-sm py-4">No habits tracked</p>}
      </div>
    </GlassWidgetBase>
  )
}

export { TodoWidget, GoalsWidget, StatsWidget, FocusTimerWidget, HabitTrackerWidget }
