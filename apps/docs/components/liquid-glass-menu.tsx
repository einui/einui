"use client"

import type React from "react"

import { useState } from "react"
import { Home, Search, PlusCircle, Heart, User } from "lucide-react"
import { cn } from "@einui/utils"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
}

function MenuItem({ icon, label, isActive, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center gap-1 p-3 rounded-2xl transition-all duration-300 ease-out",
        "hover:scale-110 active:scale-95",
        isActive && "bg-white/20 shadow-lg shadow-white/10",
      )}
    >
      {/* Active indicator glow */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-white/20 to-transparent blur-sm" />
      )}
      <div
        className={cn("relative z-10 transition-all duration-300", isActive ? "text-white scale-110" : "text-white/60")}
      >
        {icon}
      </div>
      <span
        className={cn(
          "relative z-10 text-[10px] font-medium transition-all duration-300",
          isActive ? "text-white" : "text-white/60",
        )}
      >
        {label}
      </span>
    </button>
  )
}

export function LiquidGlassMenu() {
  const [activeItem, setActiveItem] = useState("home")

  const menuItems = [
    { id: "home", icon: <Home size={22} />, label: "Home" },
    { id: "search", icon: <Search size={22} />, label: "Search" },
    { id: "create", icon: <PlusCircle size={22} />, label: "Create" },
    { id: "favorites", icon: <Heart size={22} />, label: "Favorites" },
    { id: "profile", icon: <User size={22} />, label: "Profile" },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Outer glow effect */}
      <div className="absolute -inset-1 rounded-4xl bg-linear-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-xl opacity-70" />

      {/* Glass container */}
      <nav
        className={cn(
          "relative flex items-center gap-1 px-4 py-3",
          "rounded-4xl border border-white/20",
          // Liquid glass effect
          "bg-white/10 backdrop-blur-xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.37)]",
          // Inner highlight
          "before:absolute before:inset-0 before:rounded-4xl",
          "before:bg-linear-to-b before:from-white/20 before:to-transparent before:pointer-events-none",
          // Subtle inner shadow
          "after:absolute after:inset-px after:rounded-[calc(2rem-1px)]",
          "after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] after:pointer-events-none",
        )}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </nav>
    </div>
  )
}
