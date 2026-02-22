"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CLIInstall } from "@/components/docs/cli-install";
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
} from "@/registry/liquid-glass/glass-card";
import { GlassButton } from "@/registry/liquid-glass/glass-button";
import { GlassInput } from "@/registry/liquid-glass/glass-input";
import { GlassBadge } from "@/registry/liquid-glass/glass-badge";
import { GlassProgress } from "@/registry/liquid-glass/glass-progress";
import { GlassAvatar, GlassAvatarFallback } from "@/registry/liquid-glass/glass-avatar";
import {
  GlassTabs,
  GlassTabsList,
  GlassTabsTrigger,
  GlassTabsContent,
} from "@/registry/liquid-glass/glass-tabs";
import {
  GlassDialog,
  GlassDialogTrigger,
  GlassDialogContent,
  GlassDialogHeader,
  GlassDialogTitle,
  GlassDialogDescription,
  GlassDialogFooter,
} from "@/registry/liquid-glass/glass-dialog";
import { Label } from "@/components/ui/label";
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  Plus,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  Bell,
  Shield,
  Database,
  Folder,
} from "lucide-react";
import { OpenInV0Button } from "@/components/open-in-v0-button";

const stats = [
  { title: "Total Users", value: "12,456", change: "+12.5%", trend: "up", icon: Users },
  { title: "Revenue", value: "$54,321", change: "+8.2%", trend: "up", icon: DollarSign },
  { title: "Growth", value: "23.1%", change: "+4.3%", trend: "up", icon: TrendingUp },
  { title: "Active Now", value: "573", change: "-2.1%", trend: "down", icon: Activity },
];

const users = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "active" },
  { name: "Bob Smith", email: "bob@example.com", role: "User", status: "active" },
  { name: "Carol Williams", email: "carol@example.com", role: "User", status: "pending" },
  { name: "David Brown", email: "david@example.com", role: "Moderator", status: "active" },
  { name: "Eva Davis", email: "eva@example.com", role: "User", status: "active" },
  { name: "Frank Miller", email: "frank@example.com", role: "User", status: "active" },
];

export default function AdminBlockPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <PageHeader
        title="Admin Panel"
        description="A complete admin dashboard block featuring analytics, user management, and settings panels."
      />

      <CLIInstall componentName="admin-panel" />
      <div className="flex justify-end">
        <OpenInV0Button component="admin-panel" />
      </div>
      {/* admin panel */}
      <div className="my-8 border-2 border-white/10 rounded-2xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl overflow-hidden relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="relative p-5">
          <div className="max-h-200 overflow-y-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <GlassCard key={stat.title}>
                  <GlassCardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-white/60 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {stat.trend === "up" ? (
                            <ArrowUpRight className="h-3 w-3 text-green-400" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 text-red-400" />
                          )}
                          <span
                            className={`text-xs ${stat.trend === "up" ? "text-green-400" : "text-red-400"
                              }`}
                          >
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10">
                        <stat.icon className="h-5 w-5 text-white/60" />
                      </div>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Users Table */}
              <div className="lg:col-span-2">
                <GlassCard>
                  <GlassCardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <GlassCardTitle>Users</GlassCardTitle>
                        <GlassCardDescription>Manage your team members</GlassCardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                          <GlassInput
                            className="pl-9 w-full sm:w-48"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <GlassDialog>
                          <GlassDialogTrigger asChild>
                            <GlassButton variant="primary" size="sm">
                              <Plus className="h-4 w-4 mr-1" /> Add
                            </GlassButton>
                          </GlassDialogTrigger>
                          <GlassDialogContent>
                            <GlassDialogHeader>
                              <GlassDialogTitle>Add New User</GlassDialogTitle>
                              <GlassDialogDescription>
                                Create a new user account.
                              </GlassDialogDescription>
                            </GlassDialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="flex flex-col gap-2">
                                <Label className="text-white/80">Name</Label>
                                <GlassInput placeholder="Full name" />
                              </div>
                              <div className="flex flex-col gap-2">
                                <Label className="text-white/80">Email</Label>
                                <GlassInput placeholder="email@example.com" />
                              </div>
                            </div>
                            <GlassDialogFooter>
                              <GlassButton variant="outline">Cancel</GlassButton>
                              <GlassButton variant="primary">Create User</GlassButton>
                            </GlassDialogFooter>
                          </GlassDialogContent>
                        </GlassDialog>
                      </div>
                    </div>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-2 text-xs font-medium text-white/40 uppercase">
                              User
                            </th>
                            <th className="text-left py-3 px-2 text-xs font-medium text-white/40 uppercase hidden sm:table-cell">
                              Role
                            </th>
                            <th className="text-left py-3 px-2 text-xs font-medium text-white/40 uppercase">
                              Status
                            </th>
                            <th className="py-3 px-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr
                              key={user.email}
                              className="border-b border-white/5 hover:bg-white/5 transition-colors"
                            >
                              <td className="py-3 px-2">
                                <div className="flex items-center gap-3">
                                  <GlassAvatar className="h-8 w-8">
                                    <GlassAvatarFallback className="text-xs">
                                      {user.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </GlassAvatarFallback>
                                  </GlassAvatar>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                      {user.name}
                                    </p>
                                    <p className="text-xs text-white/50 truncate">{user.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-2 hidden sm:table-cell">
                                <span className="text-sm text-white/70">{user.role}</span>
                              </td>
                              <td className="py-3 px-2">
                                <GlassBadge variant={user.status === "active" ? "success" : "warning"}>
                                  {user.status}
                                </GlassBadge>
                              </td>
                              <td className="py-3 px-2">
                                <GlassButton variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </GlassButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </div>

              {/* Sidebar Widgets */}
              <div className="space-y-6">
                {/* Storage */}
                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle className="flex items-center gap-2">
                      <Database className="h-4 w-4" /> Storage
                    </GlassCardTitle>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <GlassProgress value={68} className="mb-3" />
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">68.5 GB used</span>
                      <span className="text-white/40">100 GB</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Folder className="h-4 w-4 text-cyan-400" />
                          <span className="text-white/70">Documents</span>
                        </div>
                        <span className="text-white/50">24.5 GB</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Folder className="h-4 w-4 text-purple-400" />
                          <span className="text-white/70">Media</span>
                        </div>
                        <span className="text-white/50">32.1 GB</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Folder className="h-4 w-4 text-blue-400" />
                          <span className="text-white/70">Backups</span>
                        </div>
                        <span className="text-white/50">11.9 GB</span>
                      </div>
                    </div>
                  </GlassCardContent>
                </GlassCard>

                {/* Activity */}
                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Recent Activity</GlassCardTitle>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="space-y-4">
                      {[
                        { action: "User signed up", time: "2 min ago" },
                        { action: "New order #1234", time: "15 min ago" },
                        { action: "Payment received", time: "1 hour ago" },
                        { action: "Server backup completed", time: "3 hours ago" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-cyan-400" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white/80 truncate">{item.action}</p>
                            <p className="text-xs text-white/40">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </div>
            </div>

            {/* Settings Tabs */}
            <GlassCard>
              <GlassCardHeader>
                <GlassCardTitle>Settings</GlassCardTitle>
                <GlassCardDescription>Manage your application preferences</GlassCardDescription>
              </GlassCardHeader>
              <GlassCardContent>
                <GlassTabs defaultValue="general">
                  <GlassTabsList className="w-full">
                    <GlassTabsTrigger value="general" className="group flex-1 sm:flex-1">
                      <Settings className="h-4 w-4" />
                      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">General</span>
                    </GlassTabsTrigger>
                    <GlassTabsTrigger value="notifications" className="group flex-1 sm:flex-1">
                      <Bell className="h-4 w-4" />
                      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Notifications</span>
                    </GlassTabsTrigger>
                    <GlassTabsTrigger value="security" className="group flex-1 sm:flex-1">
                      <Shield className="h-4 w-4" />
                      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Security</span>
                    </GlassTabsTrigger>
                  </GlassTabsList>
                  <GlassTabsContent value="general">
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <Label className="text-white/80">Site Name</Label>
                        <GlassInput defaultValue="Ein Dashboard" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="text-white/80">Support Email</Label>
                        <GlassInput defaultValue="support@ein.dev" />
                      </div>
                      <GlassButton variant="primary">Save Changes</GlassButton>
                    </div>
                  </GlassTabsContent>
                  <GlassTabsContent value="notifications">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-white/80 text-sm">Email notifications</span>
                        <div className="w-10 h-6 bg-cyan-500/50 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-white/80 text-sm">Push notifications</span>
                        <div className="w-10 h-6 bg-white/20 rounded-full relative">
                          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white/60 rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-white/80 text-sm">Weekly digest</span>
                        <div className="w-10 h-6 bg-cyan-500/50 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </GlassTabsContent>
                  <GlassTabsContent value="security">
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <Label className="text-white/80">Current Password</Label>
                        <GlassInput type="password" placeholder="••••••••" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="text-white/80">New Password</Label>
                        <GlassInput type="password" placeholder="••••••••" />
                      </div>
                      <GlassButton variant="primary">Update Password</GlassButton>
                    </div>
                  </GlassTabsContent>
                </GlassTabs>
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
