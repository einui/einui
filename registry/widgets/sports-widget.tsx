"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

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

// Live Score Widget (Football/Soccer)
interface LiveScoreWidgetProps {
  isLive?: boolean
  homeTeam: {
    name: string
    shortName?: string
    logo?: string
    score: number
  }
  awayTeam: {
    name: string
    shortName?: string
    logo?: string
    score: number
  }
  matchTime?: string
  competition?: string
  className?: string
}

function LiveScoreWidget({
  isLive = true,
  homeTeam,
  awayTeam,
  matchTime = "45'",
  competition = "Premier League",
  className,
}: LiveScoreWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[200px]", className)}>
      {isLive && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-500 text-sm font-medium">Live</span>
        </div>
      )}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
            {homeTeam.logo ? (
              <img src={homeTeam.logo || "/placeholder.svg"} alt={homeTeam.name} className="w-10 h-10 object-contain" />
            ) : (
              <span className="text-xs text-white/60 font-medium">
                {homeTeam.shortName || homeTeam.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-4xl font-light text-white">{homeTeam.score}</span>
        </div>
        <div className="text-white/40 text-sm font-medium">{matchTime}</div>
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
            {awayTeam.logo ? (
              <img src={awayTeam.logo || "/placeholder.svg"} alt={awayTeam.name} className="w-10 h-10 object-contain" />
            ) : (
              <span className="text-xs text-white/60 font-medium">
                {awayTeam.shortName || awayTeam.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-4xl font-light text-white">{awayTeam.score}</span>
        </div>
      </div>
      <div className="text-center text-white/50 text-sm mt-3">{competition}</div>
    </GlassWidgetBase>
  )
}

// Cricket Score Widget
interface CricketScoreWidgetProps {
  matchType?: string
  team1: {
    name: string
    flag?: string
    score: string
    overs: string
  }
  team2: {
    name: string
    flag?: string
    score: string
    overs: string
  }
  summary?: string
  isLive?: boolean
  className?: string
}

function CricketScoreWidget({
  matchType = "ODI",
  team1,
  team2,
  summary,
  isLive = true,
  className,
}: CricketScoreWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[200px]", className)}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/60 text-sm">{matchType}</span>
        {isLive && (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-xs">Live</span>
          </div>
        )}
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {team1.flag && <span className="text-lg">{team1.flag}</span>}
            <span className="text-white font-medium">{team1.name}</span>
          </div>
          <span className="text-white/80 tabular-nums">
            {team1.score} <span className="text-white/50">({team1.overs})</span>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {team2.flag && <span className="text-lg">{team2.flag}</span>}
            <span className="text-white font-medium">{team2.name}</span>
          </div>
          <span className="text-white/80 tabular-nums">
            {team2.score} <span className="text-white/50">({team2.overs})</span>
          </span>
        </div>
      </div>

      {summary && (
        <div className="text-sm text-white/50 mt-3 pt-3 border-t border-white/10">
          {summary.split(/(\d+)/).map((part, i) =>
            /\d+/.test(part) ? (
              <span key={i} className="text-amber-400 font-medium">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </div>
      )}
    </GlassWidgetBase>
  )
}

// Basketball Score Widget
interface BasketballScoreWidgetProps {
  isLive?: boolean
  homeTeam: {
    name: string
    shortName?: string
    logo?: string
    score: number
  }
  awayTeam: {
    name: string
    shortName?: string
    logo?: string
    score: number
  }
  quarter?: string
  timeLeft?: string
  competition?: string
  className?: string
}

function BasketballScoreWidget({
  isLive = true,
  homeTeam,
  awayTeam,
  quarter = "Q3",
  timeLeft = "5:42",
  competition = "NBA",
  className,
}: BasketballScoreWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[220px]", className)}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/60 text-sm">{competition}</span>
        {isLive && (
          <div className="flex items-center gap-2">
            <span className="text-white/60 text-sm">{quarter}</span>
            <span className="text-white font-medium tabular-nums">{timeLeft}</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              {homeTeam.logo ? (
                <img src={homeTeam.logo || "/placeholder.svg"} alt={homeTeam.name} className="w-6 h-6 object-contain" />
              ) : (
                <span className="text-xs text-white/60">{homeTeam.shortName || homeTeam.name.slice(0, 3)}</span>
              )}
            </div>
            <span className="text-white font-medium">{homeTeam.name}</span>
          </div>
          <span className="text-white text-2xl font-light tabular-nums">{homeTeam.score}</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              {awayTeam.logo ? (
                <img src={awayTeam.logo || "/placeholder.svg"} alt={awayTeam.name} className="w-6 h-6 object-contain" />
              ) : (
                <span className="text-xs text-white/60">{awayTeam.shortName || awayTeam.name.slice(0, 3)}</span>
              )}
            </div>
            <span className="text-white font-medium">{awayTeam.name}</span>
          </div>
          <span className="text-white text-2xl font-light tabular-nums">{awayTeam.score}</span>
        </div>
      </div>
    </GlassWidgetBase>
  )
}

// Upcoming Match Widget
interface UpcomingMatchWidgetProps {
  homeTeam: {
    name: string
    shortName?: string
    logo?: string
  }
  awayTeam: {
    name: string
    shortName?: string
    logo?: string
  }
  date: string
  time: string
  competition?: string
  venue?: string
  className?: string
}

function UpcomingMatchWidget({
  homeTeam,
  awayTeam,
  date,
  time,
  competition = "Premier League",
  venue,
  className,
}: UpcomingMatchWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[220px]", className)}>
      <div className="text-center mb-4">
        <span className="text-white/50 text-sm">{competition}</span>
      </div>

      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
            {homeTeam.logo ? (
              <img src={homeTeam.logo || "/placeholder.svg"} alt={homeTeam.name} className="w-12 h-12 object-contain" />
            ) : (
              <span className="text-sm text-white/60 font-medium">
                {homeTeam.shortName || homeTeam.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-white/80 text-sm text-center">{homeTeam.name}</span>
        </div>
        <span className="text-white/40 text-lg font-light">vs</span>
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
            {awayTeam.logo ? (
              <img src={awayTeam.logo || "/placeholder.svg"} alt={awayTeam.name} className="w-12 h-12 object-contain" />
            ) : (
              <span className="text-sm text-white/60 font-medium">
                {awayTeam.shortName || awayTeam.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-white/80 text-sm text-center">{awayTeam.name}</span>
        </div>
      </div>

      <div className="text-center border-t border-white/10 pt-3">
        <div className="text-white font-medium">{time}</div>
        <div className="text-white/50 text-sm">{date}</div>
        {venue && <div className="text-white/40 text-xs mt-1">{venue}</div>}
      </div>
    </GlassWidgetBase>
  )
}

// Standings Widget
interface Team {
  position: number
  name: string
  shortName?: string
  played: number
  won: number
  drawn: number
  lost: number
  points: number
}

interface StandingsWidgetProps {
  title?: string
  teams?: Team[]
  className?: string
}

function StandingsWidget({ title = "Standings", teams = [], className }: StandingsWidgetProps) {
  return (
    <GlassWidgetBase className={cn("min-w-[280px]", className)} size="sm">
      <h3 className="text-white font-medium mb-3">{title}</h3>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-white/40 px-2 pb-2 border-b border-white/10">
          <span className="w-5">#</span>
          <span className="flex-1">Team</span>
          <span className="w-6 text-center">P</span>
          <span className="w-6 text-center">W</span>
          <span className="w-6 text-center">D</span>
          <span className="w-6 text-center">L</span>
          <span className="w-8 text-center">Pts</span>
        </div>
        {teams.map((team) => (
          <div
            key={team.position}
            className={cn(
              "flex items-center gap-2 text-sm px-2 py-1.5 rounded-lg",
              team.position <= 4 && "bg-emerald-500/10",
              team.position > teams.length - 3 && "bg-red-500/10",
            )}
          >
            <span className="w-5 text-white/50 text-xs">{team.position}</span>
            <span className="flex-1 text-white/80 truncate">{team.shortName || team.name}</span>
            <span className="w-6 text-center text-white/50 tabular-nums">{team.played}</span>
            <span className="w-6 text-center text-white/50 tabular-nums">{team.won}</span>
            <span className="w-6 text-center text-white/50 tabular-nums">{team.drawn}</span>
            <span className="w-6 text-center text-white/50 tabular-nums">{team.lost}</span>
            <span className="w-8 text-center text-white font-medium tabular-nums">{team.points}</span>
          </div>
        ))}
      </div>
    </GlassWidgetBase>
  )
}

export { LiveScoreWidget, CricketScoreWidget, BasketballScoreWidget, UpcomingMatchWidget, StandingsWidget }
