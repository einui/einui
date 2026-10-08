"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassWidgetBase, type GlassWidgetBaseProps } from "./base-widget";
import { TrendingDown, TrendingUp } from "lucide-react";

type GlowColor = NonNullable<GlassWidgetBaseProps["glowColor"]>;

export interface AreaChartDataPoint {
  label: string;
  value: number;
}

export interface AreaChartWidgetProps {
  title?: string;
  subtitle?: string;
  value?: string | number;
  change?: string;
  data?: AreaChartDataPoint[];
  glowColor?: GlowColor;
  className?: string;
}

// The chart is authored in a fixed viewBox so stroke widths stay crisp at any size.
const VIEW_WIDTH = 280;
const PLOT_LEFT = 10;
const PLOT_RIGHT = VIEW_WIDTH - 10;
const PLOT_TOP = 12;
const PLOT_BOTTOM = 78;
const LABEL_Y = 92;
// Past this many points the x-axis labels collide, so we thin them out.
const MAX_LABELS = 8;

const chartPalettes: Record<GlowColor, { stops: [string, string, string]; fill: string }> = {
  cyan: { stops: ["#22d3ee", "#3b82f6", "#a855f7"], fill: "34, 211, 238" },
  purple: { stops: ["#c084fc", "#d946ef", "#818cf8"], fill: "192, 132, 252" },
  blue: { stops: ["#60a5fa", "#3b82f6", "#22d3ee"], fill: "96, 165, 250" },
  pink: { stops: ["#f472b6", "#e879f9", "#c084fc"], fill: "244, 114, 182" },
  green: { stops: ["#34d399", "#22d3ee", "#a3e635"], fill: "52, 211, 153" },
  amber: { stops: ["#fbbf24", "#fb923c", "#f472b6"], fill: "251, 191, 36" },
  red: { stops: ["#fb7185", "#f43f5e", "#c084fc"], fill: "251, 113, 133" },
};

/**
 * Builds a smooth cubic path from points using Catmull-Rom control points, so the
 * curve eases between samples instead of drawing hard corners.
 */
function buildSmoothPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }

  return path;
}

export function AreaChartWidget({
  title = "Analytics",
  subtitle = "Performance overview",
  value = "$42,850",
  change = "+12.4%",
  data = [],
  glowColor = "cyan",
  className,
}: AreaChartWidgetProps) {
  // Gradient ids must be unique per instance, otherwise the first widget on the
  // page wins and every later chart paints with the wrong colors.
  const uid = React.useId();
  const areaGradientId = `area-grad-${uid}`;
  const lineGradientId = `line-grad-${uid}`;
  const palette = chartPalettes[glowColor];

  const points = React.useMemo(() => {
    if (data.length === 0) return [];

    const values = data.map((point) => point.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    // A flat series has no span, so fall back to 1 to keep the math finite.
    const span = max - min || 1;
    const paddedMin = min - span * 0.1;
    const paddedMax = max + span * 0.1;
    const plotSpan = paddedMax - paddedMin;

    return data.map((point, index) => ({
      label: point.label,
      value: point.value,
      x:
        data.length === 1
          ? (PLOT_LEFT + PLOT_RIGHT) / 2
          : PLOT_LEFT + (index / (data.length - 1)) * (PLOT_RIGHT - PLOT_LEFT),
      y: PLOT_BOTTOM - ((point.value - paddedMin) / plotSpan) * (PLOT_BOTTOM - PLOT_TOP),
    }));
  }, [data]);

  const linePath = buildSmoothPath(points);
  const areaPath =
    points.length > 0
      ? `${linePath} L ${points[points.length - 1].x} ${PLOT_BOTTOM} L ${points[0].x} ${PLOT_BOTTOM} Z`
      : "";

  const isNegative = change?.trim().startsWith("-") ?? false;
  const TrendIcon = isNegative ? TrendingDown : TrendingUp;
  const labelStep = Math.max(1, Math.ceil(points.length / MAX_LABELS));

  return (
    <GlassWidgetBase className={cn("flex flex-col justify-between", className)} glowColor={glowColor}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-white">{title}</h3>
          <p className="truncate text-xs text-white/50">{subtitle}</p>
        </div>
        {value !== undefined && (
          <div className="shrink-0 text-right">
            <div className="text-lg font-semibold tabular-nums text-white">{value}</div>
            {change && (
              <div
                className={cn(
                  "flex items-center justify-end gap-1 text-xs tabular-nums",
                  isNegative ? "text-red-400" : "text-emerald-400",
                )}
              >
                <TrendIcon className="size-3" aria-hidden="true" />
                <span>{change}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {points.length === 0 ? (
        <div className="my-4 flex h-32 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-xs text-white/40">
          No data
        </div>
      ) : (
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} 100`}
          className="mt-4 h-32 w-full overflow-visible"
          role="img"
          aria-label={`${title} — ${subtitle}`}
        >
          <defs>
            <linearGradient id={areaGradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`rgba(${palette.fill}, 0.4)`} />
              <stop offset="100%" stopColor={`rgba(${palette.fill}, 0)`} />
            </linearGradient>
            <linearGradient id={lineGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={palette.stops[0]} />
              <stop offset="50%" stopColor={palette.stops[1]} />
              <stop offset="100%" stopColor={palette.stops[2]} />
            </linearGradient>
          </defs>

          <g aria-hidden="true">
            <line
              x1={PLOT_LEFT}
              y1={PLOT_TOP}
              x2={PLOT_RIGHT}
              y2={PLOT_TOP}
              stroke="rgba(255,255,255,0.07)"
              strokeDasharray="4 4"
            />
            <line
              x1={PLOT_LEFT}
              y1={PLOT_BOTTOM}
              x2={PLOT_RIGHT}
              y2={PLOT_BOTTOM}
              stroke="rgba(255,255,255,0.1)"
            />
          </g>

          {areaPath && <path d={areaPath} fill={`url(#${areaGradientId})`} />}

          {linePath && (
            <path
              d={linePath}
              fill="none"
              stroke={`url(#${lineGradientId})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {points.map((point, index) => (
            <circle
              key={`${point.label}-${index}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill={palette.stops[0]}
              stroke="white"
              strokeWidth="1.5"
              className="transition-all duration-300 hover:[r:4.5]"
            />
          ))}

          {/* Labels live in the SVG so each one stays locked to the point it describes. */}
          <g fontSize="9" fill="rgba(255,255,255,0.4)" aria-hidden="true">
            {points.map((point, index) => {
              if (index % labelStep !== 0 && index !== points.length - 1) return null;

              const anchor =
                index === 0 ? "start" : index === points.length - 1 ? "end" : "middle";

              return (
                <text
                  key={`label-${point.label}-${index}`}
                  x={point.x}
                  y={LABEL_Y}
                  textAnchor={anchor}
                >
                  {point.label}
                </text>
              );
            })}
          </g>
        </svg>
      )}
    </GlassWidgetBase>
  );
}
