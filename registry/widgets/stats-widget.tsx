"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Minus,
  Activity,
  Users,
  DollarSign,
  Zap,
  Target,
} from "lucide-react";
import { GlassWidgetBase } from "./base-widget";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease" | "neutral";
  };
  icon?: React.ReactNode;
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green" | "amber" | "red";
  className?: string;
}

function StatCard({
  title,
  value,
  change,
  icon,
  glowColor = "cyan",
  className,
}: StatCardProps) {
  const changeColors = {
    increase: "text-emerald-400",
    decrease: "text-red-400",
    neutral: "text-white/50",
  };

  const ChangeIcon = change?.type === "increase" ? ArrowUp : change?.type === "decrease" ? ArrowDown : Minus;

  return (
    <GlassWidgetBase
      className={cn("min-w-48", className)}
      size="md"
      glowColor={glowColor}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-white/60 text-sm">{title}</div>
        {icon && <div className="text-white/40">{icon}</div>}
      </div>
      <div className="text-3xl font-light text-white mb-2">{value}</div>
      {change && (
        <div className={cn("flex items-center gap-1 text-xs", changeColors[change.type])}>
          <ChangeIcon className="w-3 h-3" />
          <span>{Math.abs(change.value)}%</span>
          <span className="text-white/50">vs last period</span>
        </div>
      )}
    </GlassWidgetBase>
  );
}

interface MetricStatProps {
  label: string;
  value: number;
  max?: number;
  unit?: string;
  icon?: React.ReactNode;
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green" | "amber" | "red";
  className?: string;
}

function MetricStat({
  label,
  value,
  max = 100,
  unit = "",
  icon,
  glowColor = "blue",
  className,
}: MetricStatProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <GlassWidgetBase
      className={cn("min-w-56", className)}
      size="md"
      glowColor={glowColor}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon && <div className="text-white/60">{icon}</div>}
          <div className="text-white/60 text-sm">{label}</div>
        </div>
        <div className="text-white font-medium">
          {value}
          {unit && <span className="text-white/60 text-sm ml-1">{unit}</span>}
        </div>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            glowColor === "cyan" && "bg-linear-to-r from-cyan-500 to-blue-500",
            glowColor === "purple" && "bg-linear-to-r from-purple-500 to-pink-500",
            glowColor === "blue" && "bg-linear-to-r from-blue-500 to-indigo-500",
            glowColor === "pink" && "bg-linear-to-r from-pink-500 to-rose-500",
            glowColor === "green" && "bg-linear-to-r from-emerald-500 to-teal-500",
            glowColor === "amber" && "bg-linear-to-r from-amber-500 to-orange-500",
            glowColor === "red" && "bg-linear-to-r from-red-500 to-rose-500"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-white/40 text-xs mt-2">
        {percentage.toFixed(0)}% of {max}
        {unit}
      </div>
    </GlassWidgetBase>
  );
}

interface ComparisonStatProps {
  title: string;
  current: number;
  previous: number;
  format?: (value: number) => string;
  icon?: React.ReactNode;
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green" | "amber" | "red";
  className?: string;
}

function ComparisonStat({
  title,
  current,
  previous,
  format = (v) => v.toString(),
  icon,
  glowColor = "green",
  className,
}: ComparisonStatProps) {
  // Handle division by zero: if previous is 0, calculate change differently
  let change: number;
  let isNew = false;
  let isZero = false;

  if (previous === 0) {
    if (current === 0) {
      change = 0;
      isZero = true;
    } else if (current > 0) {
      // Going from 0 to positive value - treat as "new"
      change = 0;
      isNew = true;
    } else {
      // Going from 0 to negative value - treat as decrease
      change = -100;
    }
  } else {
    change = ((current - previous) / previous) * 100;
  }

  const isIncrease = change > 0;
  const isDecrease = change < 0;

  return (
    <GlassWidgetBase
      className={cn("min-w-52", className)}
      size="md"
      glowColor={glowColor}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-white/60 text-sm">{title}</div>
        {icon && <div className="text-white/40">{icon}</div>}
      </div>
      <div className="text-4xl font-light text-white mb-2">{format(current)}</div>
      <div className="flex items-center gap-2">
        {isIncrease ? (
          <TrendingUp className="w-4 h-4 text-emerald-400" />
        ) : isDecrease ? (
          <TrendingDown className="w-4 h-4 text-red-400" />
        ) : (
          <Minus className="w-4 h-4 text-white/50" />
        )}
        <span
          className={cn(
            "text-sm",
            isIncrease && "text-emerald-400",
            isDecrease && "text-red-400",
            !isIncrease && !isDecrease && "text-white/50"
          )}
        >
          {isNew ? (
            "New"
          ) : isZero ? (
            "0%"
          ) : (
            <>
              {isIncrease ? "+" : ""}
              {change.toFixed(1)}%
            </>
          )}
        </span>
        <span className="text-white/40 text-xs">from {format(previous)}</span>
      </div>
    </GlassWidgetBase>
  );
}

interface StatsGridProps {
  stats: Array<{
    title: string;
    value: string | number;
    change?: {
      value: number;
      type: "increase" | "decrease" | "neutral";
    };
    icon?: React.ReactNode;
    glowColor?: "cyan" | "purple" | "blue" | "pink" | "green" | "amber" | "red";
  }>;
  className?: string;
}

function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
}

interface CircularProgressStatProps {
  label: string;
  value: number;
  max?: number;
  unit?: string;
  icon?: React.ReactNode;
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green" | "amber" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
}

function CircularProgressStat({
  label,
  value,
  max = 100,
  unit = "",
  icon,
  glowColor = "cyan",
  size = "md",
  className,
}: CircularProgressStatProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = size === "lg" ? 50 : size === "md" ? 42 : 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const sizeConfig = {
    sm: { container: "w-32 h-32", text: "text-2xl", label: "text-xs" },
    md: { container: "w-40 h-40", text: "text-3xl", label: "text-sm" },
    lg: { container: "w-48 h-48", text: "text-4xl", label: "text-base" },
  };

  const config = sizeConfig[size];

  const strokeColors = {
    cyan: "#06b6d4",
    purple: "#a855f7",
    blue: "#3b82f6",
    pink: "#ec4899",
    green: "#10b981",
    amber: "#f59e0b",
    red: "#ef4444",
  };

  return (
    <GlassWidgetBase
      className={cn("flex flex-col items-center justify-center", className)}
      size="md"
      glowColor={glowColor}
    >
      <div className={cn("relative", config.container)}>
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={strokeColors[glowColor]}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {icon && <div className="text-white/60 mb-1">{icon}</div>}
          <div className={cn("font-light text-white", config.text)}>
            {value}
            {unit && <span className="text-white/60 text-lg ml-1">{unit}</span>}
          </div>
          <div className={cn("text-white/50 mt-1", config.label)}>{label}</div>
        </div>
      </div>
    </GlassWidgetBase>
  );
}

export {
  StatCard,
  MetricStat,
  ComparisonStat,
  StatsGrid,
  CircularProgressStat,
};

