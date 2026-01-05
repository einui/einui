"use client"

import { BarChart3, TrendingUp, Users, Zap, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, XCircle } from "lucide-react"
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/registry/liquid-glass/glass-card"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { GlassBadge } from "@/registry/liquid-glass/glass-badge"
import { GlassProgress } from "@/registry/liquid-glass/glass-progress"
import { GlassAvatar, GlassAvatarFallback, GlassAvatarImage } from "@/registry/liquid-glass/glass-avatar"

const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+20.1%", trend: "up", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
  { label: "Active Users", value: "2,345", change: "+15%", trend: "up", icon: Users, color: "from-blue-400 to-cyan-500" },
  { label: "Performance", value: "94.2%", change: "+5.2%", trend: "up", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { label: "Conversions", value: "1,234", change: "-2.4%", trend: "down", icon: BarChart3, color: "from-purple-400 to-pink-500" },
]

const recentActivity = [
  { id: 1, user: "Sarah Anderson", avatar: "", action: "completed task", target: "Homepage redesign", time: "2 min ago", status: "success" },
  { id: 2, user: "Mike Chen", avatar: "", action: "started working on", target: "API integration", time: "15 min ago", status: "info" },
  { id: 3, user: "Emma Watson", avatar: "", action: "commented on", target: "Bug fix #234", time: "1 hour ago", status: "info" },
  { id: 4, user: "John Smith", avatar: "", action: "closed issue", target: "Performance optimization", time: "3 hours ago", status: "success" },
  { id: 5, user: "Lisa Park", avatar: "", action: "reopened", target: "Login flow issue", time: "5 hours ago", status: "warning" },
]

const projects = [
  { name: "Mobile App v2.0", progress: 85, status: "On Track", deadline: "Jan 15", team: ["SA", "MC", "JP"] },
  { name: "API Documentation", progress: 60, status: "At Risk", deadline: "Jan 20", team: ["EW", "JS"] },
  { name: "Dashboard Redesign", progress: 100, status: "Completed", deadline: "Dec 30", team: ["LP", "SA", "MC", "EW"] },
  { name: "Security Audit", progress: 35, status: "On Track", deadline: "Feb 1", team: ["JS", "JP"] },
]

const chartData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 75 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 85 },
  { day: "Sat", value: 40 },
  { day: "Sun", value: 70 },
]

export default function DashboardBlockPage() {
  return (
    <div className="w-full space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <GlassCard key={stat.label} className="group hover:scale-[1.02] transition-transform duration-300">
              <GlassCardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-white/60">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-400" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-400" />
                      )}
                      <span className={`text-xs font-medium ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-white/40">vs last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-linear-to-br ${stat.color} shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Card */}
        <div className="lg:col-span-2">
          <GlassCard className="h-full">
            <GlassCardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <GlassCardTitle>Revenue Overview</GlassCardTitle>
                  <GlassCardDescription>Weekly performance metrics</GlassCardDescription>
                </div>
                <div className="flex gap-2">
                  <GlassButton variant="ghost" size="sm">Week</GlassButton>
                  <GlassButton variant="outline" size="sm">Month</GlassButton>
                  <GlassButton variant="ghost" size="sm">Year</GlassButton>
                </div>
              </div>
            </GlassCardHeader>
            <GlassCardContent>
              <div className="h-64 flex items-end justify-between gap-3 px-2">
                {chartData.map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative group">
                      <div
                        className="w-full rounded-t-lg bg-linear-to-t from-cyan-500 to-blue-500 transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 cursor-pointer"
                        style={{ height: `${item.value * 2}px` }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                        ${(item.value * 100).toLocaleString()}
                      </div>
                    </div>
                    <span className="text-xs text-white/50">{item.day}</span>
                  </div>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle>Quick Actions</GlassCardTitle>
            <GlassCardDescription>Common tasks at a glance</GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent className="space-y-3">
            <GlassButton variant="primary" className="w-full justify-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Generate Report
            </GlassButton>
            <GlassButton variant="outline" className="w-full justify-center">
              <Users className="h-4 w-4 mr-2" />
              Invite Team Member
            </GlassButton>
            <GlassButton variant="outline" className="w-full justify-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Export Analytics
            </GlassButton>
            <GlassButton variant="ghost" className="w-full justify-center">
              <Clock className="h-4 w-4 mr-2" />
              Schedule Meeting
            </GlassButton>
          </GlassCardContent>
        </GlassCard>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <GlassCard>
          <GlassCardHeader>
            <div className="flex items-center justify-between">
              <div>
                <GlassCardTitle>Recent Activity</GlassCardTitle>
                <GlassCardDescription>Latest updates from your team</GlassCardDescription>
              </div>
              <GlassButton variant="ghost" size="sm">View All</GlassButton>
            </div>
          </GlassCardHeader>
          <GlassCardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <GlassAvatar className="h-8 w-8">
                    <GlassAvatarImage src={item.avatar} />
                    <GlassAvatarFallback className="text-xs bg-linear-to-br from-cyan-400 to-blue-500">
                      {item.user.split(" ").map((n) => n[0]).join("")}
                    </GlassAvatarFallback>
                  </GlassAvatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80">
                      <span className="font-medium text-white">{item.user}</span>{" "}
                      {item.action}{" "}
                      <span className="text-cyan-400">{item.target}</span>
                    </p>
                    <p className="text-xs text-white/40 mt-0.5">{item.time}</p>
                  </div>
                  {item.status === "success" && <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />}
                  {item.status === "warning" && <XCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </GlassCardContent>
        </GlassCard>

        {/* Active Projects */}
        <GlassCard>
          <GlassCardHeader>
            <div className="flex items-center justify-between">
              <div>
                <GlassCardTitle>Active Projects</GlassCardTitle>
                <GlassCardDescription>Track your team&apos;s progress</GlassCardDescription>
              </div>
              <GlassButton variant="ghost" size="sm">View All</GlassButton>
            </div>
          </GlassCardHeader>
          <GlassCardContent className="space-y-5">
            {projects.map((project) => (
              <div key={project.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium text-white">{project.name}</p>
                    <GlassBadge
                      variant={
                        project.status === "Completed" ? "success" :
                        project.status === "At Risk" ? "warning" : "default"
                      }
                      className="text-xs"
                    >
                      {project.status}
                    </GlassBadge>
                  </div>
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, i) => (
                      <GlassAvatar key={i} className="h-6 w-6 border-2 border-slate-900">
                        <GlassAvatarFallback className="text-[10px] bg-linear-to-br from-purple-400 to-pink-500">
                          {member}
                        </GlassAvatarFallback>
                      </GlassAvatar>
                    ))}
                    {project.team.length > 3 && (
                      <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/60 border-2 border-slate-900">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <GlassProgress value={project.progress} className="h-2" />
                  <div className="flex justify-between text-xs">
                    <span className="text-white/40">{project.progress}% complete</span>
                    <span className="text-white/40">Due {project.deadline}</span>
                  </div>
                </div>
              </div>
            ))}
          </GlassCardContent>
        </GlassCard>
      </div>
    </div>
  )
}
