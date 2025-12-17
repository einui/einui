import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import {
  CurrentWeatherWidget,
  LargeWeatherWidget,
  ForecastWidget,
  HourlyForecastWidget,
  WeatherDetailsWidget,
} from "@/components/liquid-glass/widgets"

export const metadata: Metadata = {
  title: "Weather Widgets",
  description: "Weather widgets for current conditions, forecasts, and detailed weather information.",
}

const currentCode = `<CurrentWeatherWidget
  location="San Francisco"
  temperature={18}
  feelsLike={16}
  high={22}
  low={14}
  condition="cloudy"
  humidity={68}
  windSpeed={15}
/>`

const largeCode = `<LargeWeatherWidget
  location="Mumbai"
  temperature={29}
  condition="sunny"
/>`

const forecastCode = `<ForecastWidget
  forecast={[
    { day: "Mon", high: 22, low: 14, condition: "sunny" },
    { day: "Tue", high: 24, low: 15, condition: "sunny" },
    { day: "Wed", high: 20, low: 13, condition: "cloudy" },
    { day: "Thu", high: 18, low: 12, condition: "rainy" },
    { day: "Fri", high: 21, low: 14, condition: "cloudy" },
  ]}
/>`

const hourlyCode = `<HourlyForecastWidget
  forecast={[
    { time: "Now", temperature: 18, condition: "cloudy" },
    { time: "2PM", temperature: 20, condition: "sunny" },
    { time: "4PM", temperature: 22, condition: "sunny" },
    { time: "6PM", temperature: 19, condition: "cloudy" },
    { time: "8PM", temperature: 16, condition: "night" },
  ]}
/>`

const detailsCode = `<WeatherDetailsWidget
  uvIndex={6}
  visibility={10}
  pressure={1013}
  humidity={68}
  dewPoint={12}
  windSpeed={15}
  windDirection="NW"
/>`

export default function WeatherWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Weather Widgets"
        description="Weather display widgets for current conditions, forecasts, and detailed metrics."
      />

      <CLIInstall componentName="widgets/weather-widget" />

      <ComponentPreview
        title="Current Weather Widget"
        description="Display current weather with temperature, conditions, and basic metrics."
        preview={
          <div className="flex flex-wrap gap-6">
            <CurrentWeatherWidget
              location="San Francisco"
              temperature={18}
              feelsLike={16}
              high={22}
              low={14}
              condition="cloudy"
              humidity={68}
              windSpeed={15}
            />
            <CurrentWeatherWidget
              location="Mumbai"
              temperature={35}
              feelsLike={38}
              high={37}
              low={28}
              condition="sunny"
              humidity={45}
              windSpeed={8}
            />
          </div>
        }
        code={currentCode}
      />

      <ComponentPreview
        title="Large Weather Widget"
        description="Prominent weather display for dashboards and home screens."
        preview={
          <div className="flex flex-wrap gap-6">
            <LargeWeatherWidget location="Mumbai" temperature={29} condition="sunny" />
            <LargeWeatherWidget location="London" temperature={8} condition="rainy" />
          </div>
        }
        code={largeCode}
      />

      <ComponentPreview
        title="Forecast Widget"
        description="5-day weather forecast with high/low temperatures."
        preview={
          <div className="flex flex-wrap gap-6">
            <ForecastWidget
              forecast={[
                { day: "Mon", high: 22, low: 14, condition: "sunny" },
                { day: "Tue", high: 24, low: 15, condition: "sunny" },
                { day: "Wed", high: 20, low: 13, condition: "cloudy" },
                { day: "Thu", high: 18, low: 12, condition: "rainy" },
                { day: "Fri", high: 21, low: 14, condition: "cloudy" },
              ]}
            />
            <ForecastWidget
              forecast={[
                { day: "Sat", high: 35, low: 28, condition: "sunny" },
                { day: "Sun", high: 36, low: 29, condition: "sunny" },
                { day: "Mon", high: 34, low: 27, condition: "cloudy" },
                { day: "Tue", high: 32, low: 26, condition: "rainy" },
                { day: "Wed", high: 33, low: 27, condition: "sunny" },
              ]}
            />
          </div>
        }
        code={forecastCode}
      />

      <ComponentPreview
        title="Hourly Forecast Widget"
        description="Scrollable hourly weather forecast."
        preview={
          <HourlyForecastWidget
            forecast={[
              { time: "Now", temperature: 18, condition: "cloudy" },
              { time: "2PM", temperature: 20, condition: "sunny" },
              { time: "4PM", temperature: 22, condition: "sunny" },
              { time: "6PM", temperature: 19, condition: "cloudy" },
              { time: "8PM", temperature: 16, condition: "night" },
              { time: "10PM", temperature: 14, condition: "night" },
            ]}
          />
        }
        code={hourlyCode}
      />

      <ComponentPreview
        title="Weather Details Widget"
        description="Detailed weather metrics including UV, visibility, pressure, and more."
        preview={
          <div className="flex flex-wrap gap-6">
            <WeatherDetailsWidget
              uvIndex={6}
              visibility={10}
              pressure={1013}
              humidity={68}
              dewPoint={12}
              windSpeed={15}
              windDirection="NW"
            />
            <WeatherDetailsWidget
              uvIndex={9}
              visibility={15}
              pressure={1008}
              humidity={42}
              windSpeed={22}
              windDirection="E"
            />
          </div>
        }
        code={detailsCode}
      />
    </div>
  )
}
