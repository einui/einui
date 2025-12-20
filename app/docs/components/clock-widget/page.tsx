import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/page-header";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CLIInstall } from "@/components/docs/cli-install";
import {
  AnalogClockWidget,
  DigitalClockWidget,
  StopwatchWidget,
  TimerWidget,
  WorldClockWidget,
} from "@/registry/widgets/clock-widget";

export const metadata: Metadata = {
  title: "Clock Widgets",
  description:
    "Clock widgets including analog, digital, world clock, stopwatch, and timer with liquid glass styling.",
};

const analogCode = `<AnalogClockWidget />

// Without numbers
<AnalogClockWidget showNumbers={false} />

// Different sizes
<AnalogClockWidget size="sm" />
<AnalogClockWidget size="lg" />`;

const digitalCode = `<DigitalClockWidget />

// 24-hour format
<DigitalClockWidget format="24h" />

// Without seconds
<DigitalClockWidget showSeconds={false} />`;

const worldClockCode = `<WorldClockWidget
  clocks={[
    { city: "New York", timezone: "America/New_York", isDay: true },
    { city: "London", timezone: "Europe/London", isDay: true },
    { city: "Tokyo", timezone: "Asia/Tokyo", isDay: false },
  ]}
/>`;

const stopwatchCode = `<StopwatchWidget />`;

const timerCode = `<TimerWidget initialMinutes={5} />
<TimerWidget initialMinutes={25} />`;

export default function ClockWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Clock Widgets"
        description="Time-related widgets including analog clocks, digital displays, world clocks, and timers."
      />

      <CLIInstall componentName="widgets/clock-widget" />

      <ComponentPreview
        title="Analog Clock"
        description="Real-time analog clock with customizable number display and sizes."
        preview={
          <div className="flex flex-wrap items-center gap-6">
            <AnalogClockWidget size="sm" />
            <AnalogClockWidget />
            <AnalogClockWidget size="lg" showNumbers={false} />
          </div>
        }
        code={analogCode}
      />

      <ComponentPreview
        title="Digital Clock"
        description="Digital time display with 12/24 hour format options."
        preview={
          <div className="flex flex-wrap gap-6">
            <DigitalClockWidget />
            <DigitalClockWidget format="24h" showSeconds={false} />
          </div>
        }
        code={digitalCode}
      />

      <ComponentPreview
        title="World Clock"
        description="Display multiple timezone clocks with day/night indicators."
        preview={
          <div className="flex flex-wrap gap-6">
            <WorldClockWidget
              clocks={[
                { city: "New York", timezone: "America/New_York", isDay: true },
                { city: "London", timezone: "Europe/London", isDay: true },
                { city: "Tokyo", timezone: "Asia/Tokyo", isDay: false },
              ]}
            />
            <WorldClockWidget
              clocks={[
                { city: "Mumbai", timezone: "Asia/Kolkata", isDay: true },
                { city: "Sydney", timezone: "Australia/Sydney", isDay: false },
              ]}
            />
          </div>
        }
        code={worldClockCode}
      />

      <ComponentPreview
        title="Stopwatch"
        description="Interactive stopwatch with start, pause, and reset controls."
        preview={
          <div className="flex flex-wrap gap-6">
            <StopwatchWidget />
          </div>
        }
        code={stopwatchCode}
      />

      <ComponentPreview
        title="Timer"
        description="Countdown timer with visual progress ring."
        preview={
          <div className="flex flex-wrap gap-6">
            <TimerWidget initialMinutes={5} />
            <TimerWidget initialMinutes={1} />
          </div>
        }
        code={timerCode}
      />
    </div>
  );
}
