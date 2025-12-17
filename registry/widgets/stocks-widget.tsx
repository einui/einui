"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react"

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

// Stock Ticker Widget
interface StockTickerWidgetProps {
  symbol: string
  name?: string
  price: number
  change: number
  changePercent: number
  chartData?: number[]
  className?: string
}

function StockTickerWidget({
  symbol,
  name,
  price,
  change,
  changePercent,
  chartData,
  className,
}: StockTickerWidgetProps) {
  const isPositive = change >= 0
  const color = isPositive ? "text-emerald-500" : "text-red-500"

  return (
    <GlassWidgetBase className={cn("min-w-[180px]", className)}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className="text-white font-medium">{symbol}</span>
        </div>
        <span className={cn("text-sm tabular-nums", color)}>
          {isPositive ? "+" : ""}
          {change.toFixed(2)}
        </span>
      </div>

      {chartData && chartData.length > 0 && (
        <div className="h-12 flex items-end gap-px my-3">
          {chartData.map((value, i) => {
            const max = Math.max(...chartData)
            const min = Math.min(...chartData)
            const height = ((value - min) / (max - min || 1)) * 100
            return (
              <div
                key={i}
                className={cn("flex-1 rounded-t transition-all", isPositive ? "bg-emerald-500/60" : "bg-red-500/60")}
                style={{ height: `${Math.max(height, 10)}%` }}
              />
            )
          })}
        </div>
      )}

      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-light text-white tabular-nums">{price.toFixed(2)}</div>
          {name && <div className="text-sm text-white/50 truncate max-w-[120px]">{name}</div>}
        </div>
        <span className={cn("text-sm tabular-nums", color)}>
          {isPositive ? "+" : ""}
          {changePercent.toFixed(2)}%
        </span>
      </div>
    </GlassWidgetBase>
  )
}

// Compact Stock Widget
interface CompactStockWidgetProps {
  symbol: string
  price: number
  change: number
  changePercent: number
  className?: string
}

function CompactStockWidget({ symbol, price, change, changePercent, className }: CompactStockWidgetProps) {
  const isPositive = change >= 0

  return (
    <GlassWidgetBase className={cn("min-w-[140px]", className)} size="sm">
      <div className="flex items-center justify-between">
        <span className="text-white font-medium">{symbol}</span>
        <span className={cn("flex items-center gap-0.5 text-sm", isPositive ? "text-emerald-500" : "text-red-500")}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(changePercent).toFixed(2)}%
        </span>
      </div>
      <div className="text-xl font-light text-white mt-1 tabular-nums">${price.toFixed(2)}</div>
    </GlassWidgetBase>
  )
}

// Portfolio Widget
interface PortfolioItem {
  symbol: string
  name: string
  shares: number
  avgCost: number
  currentPrice: number
}

interface PortfolioWidgetProps {
  title?: string
  totalValue?: number
  totalChange?: number
  holdings?: PortfolioItem[]
  className?: string
}

function PortfolioWidget({
  title = "Portfolio",
  totalValue = 0,
  totalChange = 0,
  holdings = [],
  className,
}: PortfolioWidgetProps) {
  const isPositive = totalChange >= 0

  return (
    <GlassWidgetBase className={cn("min-w-[280px]", className)} size="lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white/60 text-sm">{title}</h3>
          <div className="text-2xl font-light text-white tabular-nums">${totalValue.toLocaleString()}</div>
        </div>
        <span className={cn("flex items-center gap-1 text-sm", isPositive ? "text-emerald-500" : "text-red-500")}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {isPositive ? "+" : ""}
          {totalChange.toFixed(2)}%
        </span>
      </div>

      <div className="space-y-2">
        {holdings.map((item) => {
          const value = item.shares * item.currentPrice
          const gain = ((item.currentPrice - item.avgCost) / item.avgCost) * 100
          const isGain = gain >= 0

          return (
            <div key={item.symbol} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
              <div>
                <div className="text-white font-medium">{item.symbol}</div>
                <div className="text-white/50 text-xs">{item.shares} shares</div>
              </div>
              <div className="text-right">
                <div className="text-white tabular-nums">${value.toFixed(2)}</div>
                <div className={cn("text-xs tabular-nums", isGain ? "text-emerald-500" : "text-red-500")}>
                  {isGain ? "+" : ""}
                  {gain.toFixed(2)}%
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </GlassWidgetBase>
  )
}

// Market Overview Widget
interface MarketIndex {
  name: string
  value: number
  change: number
  changePercent: number
}

interface MarketOverviewWidgetProps {
  indices?: MarketIndex[]
  className?: string
}

function MarketOverviewWidget({ indices = [], className }: MarketOverviewWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[240px]", className)}>
      <h3 className="text-white/60 text-sm mb-4">Market Overview</h3>
      <div className="space-y-3">
        {indices.map((index) => {
          const isPositive = index.change >= 0
          return (
            <div key={index.name} className="flex items-center justify-between">
              <span className="text-white/80">{index.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-white tabular-nums">{index.value.toLocaleString()}</span>
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-sm tabular-nums",
                    isPositive ? "text-emerald-500" : "text-red-500",
                  )}
                >
                  {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {Math.abs(index.changePercent).toFixed(2)}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </GlassWidgetBase>
  )
}

// Crypto Widget
interface CryptoWidgetProps {
  symbol: string
  name: string
  price: number
  change24h: number
  marketCap?: string
  volume24h?: string
  sparkline?: number[]
  className?: string
}

function CryptoWidget({
  symbol,
  name,
  price,
  change24h,
  marketCap,
  volume24h,
  sparkline,
  className,
}: CryptoWidgetProps) {
  const isPositive = change24h >= 0

  return (
    <GlassWidgetBase className={cn("min-w-[200px]", className)}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-white font-medium">{symbol}</div>
          <div className="text-white/50 text-sm">{name}</div>
        </div>
        <span className={cn("text-sm tabular-nums", isPositive ? "text-emerald-500" : "text-red-500")}>
          {isPositive ? "+" : ""}
          {change24h.toFixed(2)}%
        </span>
      </div>

      {sparkline && sparkline.length > 0 && (
        <div className="h-10 flex items-end gap-px mb-3">
          {sparkline.map((value, i) => {
            const max = Math.max(...sparkline)
            const min = Math.min(...sparkline)
            const height = ((value - min) / (max - min || 1)) * 100
            return (
              <div
                key={i}
                className={cn("flex-1 rounded-t", isPositive ? "bg-emerald-500/50" : "bg-red-500/50")}
                style={{ height: `${Math.max(height, 5)}%` }}
              />
            )
          })}
        </div>
      )}

      <div className="text-2xl font-light text-white mb-2 tabular-nums">${price.toLocaleString()}</div>

      {(marketCap || volume24h) && (
        <div className="flex items-center gap-4 text-xs text-white/50">
          {marketCap && <span>MCap: {marketCap}</span>}
          {volume24h && <span>Vol: {volume24h}</span>}
        </div>
      )}
    </GlassWidgetBase>
  )
}

export { StockTickerWidget, CompactStockWidget, PortfolioWidget, MarketOverviewWidget, CryptoWidget }
