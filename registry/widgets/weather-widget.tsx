"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sun, Moon, Cloud, CloudRain, CloudSnow, Wind, Droplets, Eye, Thermometer } from "lucide-react"

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

type WeatherCondition = "sunny" | "cloudy" | "rainy" | "snowy" | "night" | "night-cloudy"

const WeatherIcon = ({ condition, className }: { condition: WeatherCondition; className?: string }) => {
  switch (condition) {
    case "sunny":
      return <Sun className={cn("text-amber-400", className)} />
    case "cloudy":
      return <Cloud className={cn("text-gray-400", className)} />
    case "rainy":
      return <CloudRain className={cn("text-blue-400", className)} />
    case "snowy":
      return <CloudSnow className={cn("text-blue-200", className)} />
    case "night":
      return <Moon className={cn("text-blue-300", className)} />
    case "night-cloudy":
      return <Cloud className={cn("text-gray-500", className)} />
    default:
      return <Sun className={cn("text-amber-400", className)} />
  }
}

// Current Weather Widget
interface CurrentWeatherWidgetProps {
  location: string
  temperature: number
  feelsLike?: number
  high?: number
  low?: number
  condition?: WeatherCondition
  humidity?: number
  windSpeed?: number
  className?: string
}

function CurrentWeatherWidget({
  location,
  temperature,
  feelsLike,
  high,
  low,
  condition = "sunny",
  humidity,
  windSpeed,
  className,
}: CurrentWeatherWidgetProps) {
  const conditionText: Record<WeatherCondition, string> = {
    sunny: "Sunny",
    cloudy: "Cloudy",
    rainy: "Rainy",
    snowy: "Snowy",
    night: "Clear Night",
    "night-cloudy": "Partly Cloudy",
  }

  return (
    <GlassWidgetBase className={cn("min-w-[200px]", className)}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-white font-medium">{location}</div>
          {feelsLike !== undefined && <div className="text-white/50 text-sm">Feels like {feelsLike}°</div>}
        </div>
        <WeatherIcon condition={condition} className="w-8 h-8" />
      </div>

      <div className="text-5xl font-light text-white mb-2">{temperature}°</div>

      <div className="text-white/60 text-sm mb-3">{conditionText[condition]}</div>

      <div className="flex items-center gap-4 text-sm">
        {high !== undefined && (
          <span className="flex items-center gap-1 text-white/60">
            <Thermometer className="w-3 h-3" /> H: {high}°
          </span>
        )}
        {low !== undefined && <span className="flex items-center gap-1 text-white/60">L: {low}°</span>}
      </div>

      {(humidity !== undefined || windSpeed !== undefined) && (
        <div className="flex items-center gap-4 text-sm mt-2 pt-2 border-t border-white/10">
          {humidity !== undefined && (
            <span className="flex items-center gap-1 text-white/50">
              <Droplets className="w-3 h-3" /> {humidity}%
            </span>
          )}
          {windSpeed !== undefined && (
            <span className="flex items-center gap-1 text-white/50">
              <Wind className="w-3 h-3" /> {windSpeed} km/h
            </span>
          )}
        </div>
      )}
    </GlassWidgetBase>
  )
}

// Large Weather Widget
interface LargeWeatherWidgetProps {
  location: string
  temperature: number
  condition?: WeatherCondition
  date?: Date
  className?: string
}

function LargeWeatherWidget({
  location,
  temperature,
  condition = "sunny",
  date = new Date(),
  className,
}: LargeWeatherWidgetProps) {
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" })
  const monthName = date.toLocaleDateString("en-US", { month: "short" })
  const dayNum = date.getDate()

  const conditionText: Record<WeatherCondition, string> = {
    sunny: "Sunny",
    cloudy: "Cloudy",
    rainy: "Rainy",
    snowy: "Snowy",
    night: "Clear",
    "night-cloudy": "Cloudy",
  }

  return (
    <GlassWidgetBase className={cn("min-w-[160px] flex flex-col items-center justify-center", className)} size="lg">
      <WeatherIcon condition={condition} className="w-12 h-12 mb-2" />
      <div className="text-6xl font-light text-white">{temperature}°</div>
      <div className="text-white/80 text-lg mt-1">{conditionText[condition]}</div>
      <div className="text-white/50 text-sm mt-1">
        {dayName} {monthName} {dayNum}
      </div>
      <div className="text-white/40 text-xs mt-0.5">{location}</div>
    </GlassWidgetBase>
  )
}

// Forecast Widget
interface ForecastDay {
  day: string
  high: number
  low: number
  condition: WeatherCondition
}

interface ForecastWidgetProps {
  forecast?: ForecastDay[]
  className?: string
}

function ForecastWidget({ forecast = [], className }: ForecastWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[180px]", className)}>
      <h3 className="text-white/60 text-sm mb-3">5-Day Forecast</h3>
      <div className="space-y-2.5">
        {forecast.map((day, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-white/70 text-sm w-10">{day.day}</span>
            <WeatherIcon condition={day.condition} className="w-5 h-5" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white/50 tabular-nums">{day.low}°</span>
              <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-amber-400 rounded-full"
                  style={{ width: `${((day.high - day.low) / 20) * 100}%` }}
                />
              </div>
              <span className="text-white tabular-nums">{day.high}°</span>
            </div>
          </div>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

// Hourly Forecast Widget
interface HourlyForecast {
  time: string
  temperature: number
  condition: WeatherCondition
}

interface HourlyForecastWidgetProps {
  forecast?: HourlyForecast[]
  className?: string
}

function HourlyForecastWidget({ forecast = [], className }: HourlyForecastWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[300px]", className)}>
      <h3 className="text-white/60 text-sm mb-3">Hourly</h3>
      <div className="flex items-center gap-4 overflow-x-auto pb-2">
        {forecast.map((hour, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[50px]">
            <span className="text-white/50 text-xs">{hour.time}</span>
            <WeatherIcon condition={hour.condition} className="w-5 h-5" />
            <span className="text-white text-sm tabular-nums">{hour.temperature}°</span>
          </div>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

// Weather Details Widget
interface WeatherDetailsWidgetProps {
  uvIndex?: number
  visibility?: number
  pressure?: number
  humidity?: number
  dewPoint?: number
  windSpeed?: number
  windDirection?: string
  className?: string
}

function WeatherDetailsWidget({
  uvIndex,
  visibility,
  pressure,
  humidity,
  dewPoint,
  windSpeed,
  windDirection,
  className,
}: WeatherDetailsWidgetProps) {
  const details = [
    uvIndex !== undefined && { label: "UV Index", value: uvIndex, icon: <Sun className="w-4 h-4" /> },
    visibility !== undefined && { label: "Visibility", value: `${visibility} km`, icon: <Eye className="w-4 h-4" /> },
    pressure !== undefined && {
      label: "Pressure",
      value: `${pressure} hPa`,
      icon: <Thermometer className="w-4 h-4" />,
    },
    humidity !== undefined && { label: "Humidity", value: `${humidity}%`, icon: <Droplets className="w-4 h-4" /> },
    dewPoint !== undefined && { label: "Dew Point", value: `${dewPoint}°`, icon: <Droplets className="w-4 h-4" /> },
    windSpeed !== undefined && {
      label: "Wind",
      value: `${windSpeed} km/h ${windDirection || ""}`,
      icon: <Wind className="w-4 h-4" />,
    },
  ].filter(Boolean) as { label: string; value: string | number; icon: React.ReactNode }[]

  return (
    <GlassWidgetBase className={cn("min-w-[240px]", className)}>
      <h3 className="text-white/60 text-sm mb-3">Weather Details</h3>
      <div className="grid grid-cols-2 gap-3">
        {details.map((detail, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-white/40">{detail.icon}</span>
            <div>
              <div className="text-white/50 text-xs">{detail.label}</div>
              <div className="text-white text-sm">{detail.value}</div>
            </div>
          </div>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

export {
  CurrentWeatherWidget,
  LargeWeatherWidget,
  ForecastWidget,
  HourlyForecastWidget,
  WeatherDetailsWidget,
  WeatherIcon,
}
export type { WeatherCondition }
