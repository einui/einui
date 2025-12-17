import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import {
  TodoWidget,
  GoalsWidget,
  StatsWidget,
  FocusTimerWidget,
  HabitTrackerWidget,
} from "@/components/liquid-glass/widgets"
import { CheckCircle2, Clock, Zap, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Productivity Widgets",
  description: "Productivity widgets including todo lists, goals, stats, focus timer, and habit tracking.",
}

const todoCode = `<TodoWidget
  title="Today's Tasks"
  initialTodos={[
    { id: "1", text: "Review pull requests", completed: true },
    { id: "2", text: "Update documentation", completed: false },
    { id: "3", text: "Team meeting", completed: false },
  ]}
/>`

const goalsCode = `<GoalsWidget
  goals={[
    { id: "1", title: "Weekly commits", current: 12, target: 20, color: "bg-cyan-500" },
    { id: "2", title: "Code reviews", current: 8, target: 10, color: "bg-purple-500" },
    { id: "3", title: "Documentation", current: 3, target: 5, color: "bg-amber-500" },
  ]}
/>`

const statsCode = `<StatsWidget
  title="Today"
  stats={[
    { label: "Tasks", value: 12, change: 20, icon: <CheckCircle2 className="w-4 h-4" /> },
    { label: "Hours", value: "6.5", change: -5, icon: <Clock className="w-4 h-4" /> },
    { label: "Streak", value: 7, icon: <Zap className="w-4 h-4" /> },
    { label: "Goals", value: "3/5", icon: <Target className="w-4 h-4" /> },
  ]}
/>`

const focusCode = `<FocusTimerWidget />

// Custom durations
<FocusTimerWidget workMinutes={50} breakMinutes={10} />`

const habitCode = `<HabitTrackerWidget
  habits={[
    { id: "1", name: "Exercise", completedDays: [true, true, false, true, true, false, true] },
    { id: "2", name: "Read", completedDays: [true, true, true, true, false, true, true] },
    { id: "3", name: "Meditate", completedDays: [false, true, true, false, true, true, false] },
  ]}
/>`

export default function ProductivityWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Productivity Widgets"
        description="Widgets for task management, goal tracking, statistics, and focus sessions."
      />

      <CLIInstall componentName="widgets/productivity-widget" />

      <ComponentPreview
        title="Todo Widget"
        description="Interactive task list with add, complete, and delete functionality."
        preview={
          <div className="flex flex-wrap gap-6">
            <TodoWidget
              title="Today's Tasks"
              initialTodos={[
                { id: "1", text: "Review pull requests", completed: true },
                { id: "2", text: "Update documentation", completed: false },
                { id: "3", text: "Team meeting", completed: false },
              ]}
            />
            <TodoWidget title="Shopping List" />
          </div>
        }
        code={todoCode}
      />

      <ComponentPreview
        title="Goals Widget"
        description="Progress tracking for multiple goals with visual bars."
        preview={
          <div className="flex flex-wrap gap-6">
            <GoalsWidget
              goals={[
                { id: "1", title: "Weekly commits", current: 12, target: 20, color: "bg-cyan-500" },
                { id: "2", title: "Code reviews", current: 8, target: 10, color: "bg-purple-500" },
                { id: "3", title: "Documentation", current: 3, target: 5, color: "bg-amber-500" },
              ]}
            />
            <GoalsWidget
              goals={[
                { id: "1", title: "Reading pages", current: 150, target: 200, color: "bg-emerald-500" },
                { id: "2", title: "Workout days", current: 4, target: 5, color: "bg-rose-500" },
              ]}
            />
          </div>
        }
        code={goalsCode}
      />

      <ComponentPreview
        title="Stats Widget"
        description="Key metrics display with change indicators."
        preview={
          <div className="flex flex-wrap gap-6">
            <StatsWidget
              title="Today"
              stats={[
                { label: "Tasks", value: 12, change: 20, icon: <CheckCircle2 className="w-4 h-4" /> },
                { label: "Hours", value: "6.5", change: -5, icon: <Clock className="w-4 h-4" /> },
                { label: "Streak", value: 7, icon: <Zap className="w-4 h-4" /> },
                { label: "Goals", value: "3/5", icon: <Target className="w-4 h-4" /> },
              ]}
            />
            <StatsWidget
              title="This Week"
              stats={[
                { label: "Commits", value: 47, change: 15 },
                { label: "PRs", value: 8, change: 33 },
              ]}
            />
          </div>
        }
        code={statsCode}
      />

      <ComponentPreview
        title="Focus Timer (Pomodoro)"
        description="Pomodoro-style focus timer with work/break cycles."
        preview={
          <div className="flex flex-wrap gap-6">
            <FocusTimerWidget />
            <FocusTimerWidget workMinutes={50} breakMinutes={10} />
          </div>
        }
        code={focusCode}
      />

      <ComponentPreview
        title="Habit Tracker"
        description="Weekly habit completion grid with visual indicators."
        preview={
          <div className="flex flex-wrap gap-6">
            <HabitTrackerWidget
              habits={[
                { id: "1", name: "Exercise", completedDays: [true, true, false, true, true, false, true] },
                { id: "2", name: "Read", completedDays: [true, true, true, true, false, true, true] },
                { id: "3", name: "Meditate", completedDays: [false, true, true, false, true, true, false] },
              ]}
            />
          </div>
        }
        code={habitCode}
      />
    </div>
  )
}
