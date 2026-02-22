"use client";

import { CalendarWidget, CompactCalendarWidget } from "@/registry/widgets/calendar-widget";
import {
  AnalogClockWidget,
  DigitalClockWidget,
  StopwatchWidget,
} from "@/registry/widgets/clock-widget";
import { StockTickerWidget } from "@/registry/widgets/stock-widget";
import { HourlyWeatherWidget, ForecastWidget } from "@/registry/widgets/weather-widget";

const forecastData = [
  { day: "Mon", high: 31, low: 24, condition: "sunny" as const },
  { day: "Tue", high: 29, low: 23, condition: "cloudy" as const },
  { day: "Wed", high: 27, low: 22, condition: "rainy" as const },
  { day: "Thu", high: 30, low: 24, condition: "sunny" as const },
  { day: "Fri", high: 32, low: 25, condition: "sunny" as const },
];

export function WidgetShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <CompactCalendarWidget />
          <AnalogClockWidget size="lg" showNumbers={true} />
        </div>
        <CalendarWidget />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
        <HourlyWeatherWidget
          hours={[
            { time: "1 AM", temperature: 22, icon: "sun" },
            { time: "2 AM", temperature: 21, icon: "cloud" },
            { time: "3 AM", temperature: 20, icon: "rain" },
            { time: "4 AM", temperature: 19, icon: "cloud" },
            { time: "5 AM", temperature: 18, icon: "sun" },
            { time: "6 AM", temperature: 20, icon: "snow" },
            { time: "7 AM", temperature: 22, icon: "sun" },
            { time: "8 AM", temperature: 24, icon: "cloud" },
            { time: "9 AM", temperature: 26, icon: "sun" },
          ]}
        />
        <StockTickerWidget symbol="AAPL" price={198.45} change={2.34} changePercent={1.19} />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
        <ForecastWidget forecast={forecastData} />
        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4 xl:grid xl:grid-cols-2">
          <DigitalClockWidget showSeconds={false} className="w-full h-full" />
          <StopwatchWidget className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
