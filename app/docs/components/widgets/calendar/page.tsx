import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { CalendarWidget, CompactCalendarWidget, EventsCalendarWidget } from "@/registry/widgets"

export const metadata: Metadata = {
  title: "Calendar Widgets",
  description: "Calendar widgets for displaying dates, events, and scheduling information with liquid glass styling.",
}

const calendarCode = `<CalendarWidget />

// With custom date
<CalendarWidget date={new Date(2025, 11, 18)} />

// With date selection handler
<CalendarWidget onDateSelect={(date) => console.log(date)} />`

const compactCode = `<CompactCalendarWidget />

// With specific date
<CompactCalendarWidget date={new Date(2025, 11, 18)} />`

const eventsCode = `<EventsCalendarWidget
  events={[
    { id: "1", title: "Team Standup", time: "9:00 AM", color: "bg-cyan-500" },
    { id: "2", title: "Design Review", time: "2:00 PM", color: "bg-purple-500" },
    { id: "3", title: "Client Call", time: "4:30 PM", color: "bg-amber-500" },
  ]}
/>`

export default function CalendarWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Calendar Widgets"
        description="Calendar widgets for displaying dates, events, and scheduling information."
      />

      <CLIInstall componentName="widgets/calendar-widget" />

      <ComponentPreview
        title="Calendar Widget"
        description="Interactive monthly calendar with date selection and navigation."
        preview={
          <div className="flex flex-wrap gap-6">
            <CalendarWidget />
            <CalendarWidget date={new Date(2025, 0, 1)} />
          </div>
        }
        code={calendarCode}
      />

      <ComponentPreview
        title="Compact Calendar"
        description="Minimal date display showing day, month, and date number."
        preview={
          <div className="flex flex-wrap gap-6">
            <CompactCalendarWidget />
            <CompactCalendarWidget date={new Date(2025, 11, 25)} />
          </div>
        }
        code={compactCode}
      />

      <ComponentPreview
        title="Events Calendar"
        description="Calendar widget with integrated event list and quick-add functionality."
        preview={
          <div className="flex flex-wrap gap-6">
            <EventsCalendarWidget
              events={[
                { id: "1", title: "Team Standup", time: "9:00 AM", color: "bg-cyan-500" },
                { id: "2", title: "Design Review", time: "2:00 PM", color: "bg-purple-500" },
                { id: "3", title: "Client Call", time: "4:30 PM", color: "bg-amber-500" },
              ]}
            />
            <EventsCalendarWidget events={[]} />
          </div>
        }
        code={eventsCode}
      />
    </div>
  )
}
