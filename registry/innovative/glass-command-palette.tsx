"use client"

import * as React from "react"
import { Command, Search, File, Settings, User, Home, Layers, Moon, Sun, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CommandItem {
  id: string
  label: string
  description?: string
  icon?: React.ReactNode
  shortcut?: string
  action?: () => void
  href?: string
}

interface CommandGroup {
  label: string
  items: CommandItem[]
}

type CommandPalettePosition = "center" | "top" | "bottom" | "left" | "right"

interface GlassCommandPaletteProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  groups?: CommandGroup[]
  placeholder?: string
  position?: CommandPalettePosition
}

const defaultGroups: CommandGroup[] = [
  {
    label: "Navigation",
    items: [
      { id: "home", label: "Home", icon: <Home className="w-4 h-4" />, shortcut: "G H", href: "/" },
      { id: "docs", label: "Documentation", icon: <File className="w-4 h-4" />, shortcut: "G D", href: "/docs" },
      {
        id: "components",
        label: "Components",
        icon: <Layers className="w-4 h-4" />,
        shortcut: "G C",
        href: "/docs/components/cards",
      },
    ],
  },
  {
    label: "Actions",
    items: [
      { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" />, shortcut: "G S" },
      { id: "profile", label: "Profile", icon: <User className="w-4 h-4" />, shortcut: "G P" },
    ],
  },
  {
    label: "Theme",
    items: [
      { id: "light", label: "Light Mode", icon: <Sun className="w-4 h-4" /> },
      { id: "dark", label: "Dark Mode", icon: <Moon className="w-4 h-4" /> },
    ],
  },
]

const positionStyles: Record<CommandPalettePosition, { container: string; animation: string; wrapper: string }> = {
  center: {
    container: "items-start justify-center pt-[20vh]",
    animation: "animate-in fade-in slide-in-from-top-4 duration-200",
    wrapper: "w-full max-w-xl mx-4",
  },
  top: {
    container: "items-start justify-center pt-4",
    animation: "animate-in fade-in slide-in-from-top-full duration-300",
    wrapper: "w-full max-w-2xl mx-4",
  },
  bottom: {
    container: "items-end justify-center pb-4",
    animation: "animate-in fade-in slide-in-from-bottom-full duration-300",
    wrapper: "w-full max-w-2xl mx-4",
  },
  left: {
    container: "items-center justify-start",
    animation: "animate-in fade-in slide-in-from-left-full duration-300",
    wrapper: "w-full max-w-md h-[80vh] flex flex-col pl-4 pr-4 sm:pr-0",
  },
  right: {
    container: "items-center justify-end",
    animation: "animate-in fade-in slide-in-from-right-full duration-300",
    wrapper: "w-full max-w-md h-[80vh] flex flex-col pr-4 pl-4 sm:pl-0",
  },
}

const GlassCommandPalette = React.forwardRef<HTMLDivElement, GlassCommandPaletteProps>(
  (
    {
      open = false,
      onOpenChange,
      groups = defaultGroups,
      placeholder = "Type a command or search...",
      position = "center",
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(open)
    const [search, setSearch] = React.useState("")
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const positionConfig = positionStyles[position]
    const isVertical = position === "left" || position === "right"

    const filteredGroups = React.useMemo(() => {
      if (!search) return groups
      return groups
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              item.label.toLowerCase().includes(search.toLowerCase()) ||
              item.description?.toLowerCase().includes(search.toLowerCase()),
          ),
        }))
        .filter((group) => group.items.length > 0)
    }, [groups, search])

    const allItems = React.useMemo(() => filteredGroups.flatMap((group) => group.items), [filteredGroups])

    React.useEffect(() => {
      setIsOpen(open)
    }, [open])

    React.useEffect(() => {
      if (isOpen) {
        inputRef.current?.focus()
        setSearch("")
        setSelectedIndex(0)
      }
    }, [isOpen])

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          const newState = !isOpen
          setIsOpen(newState)
          onOpenChange?.(newState)
        }
        if (!isOpen) return

        if (e.key === "Escape") {
          setIsOpen(false)
          onOpenChange?.(false)
        }
        if (e.key === "ArrowDown") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % allItems.length)
        }
        if (e.key === "ArrowUp") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + allItems.length) % allItems.length)
        }
        if (e.key === "Enter" && allItems[selectedIndex]) {
          const item = allItems[selectedIndex]
          if (item.href) {
            window.location.href = item.href
          }
          item.action?.()
          setIsOpen(false)
          onOpenChange?.(false)
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onOpenChange, allItems, selectedIndex])

    if (!isOpen) return null

    let itemIndex = -1

    return (
      <div className={cn("fixed inset-0 z-50 flex", positionConfig.container)}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => {
            setIsOpen(false)
            onOpenChange?.(false)
          }}
          aria-hidden="true"
        />

        {/* Command Palette */}
        <div ref={ref} className={cn("relative", positionConfig.wrapper, positionConfig.animation)}>
          <div className="absolute -inset-3 rounded-2xl bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl opacity-80" />
          <div className="absolute -inset-1 rounded-2xl bg-linear-to-b from-white/10 to-white/5 blur-md" />

          {/* Main container with enhanced glass effect */}
          <div
            className={cn(
              "relative rounded-2xl border border-white/30",
              "bg-white/10 backdrop-blur-3xl",
              "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]",
              "overflow-hidden",
              isVertical && "h-full flex flex-col",
            )}
          >
            {/* Glass highlight layers */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

            {/* Search input */}
            <div className="relative flex items-center border-b border-white/15 px-4">
              <Search className="w-5 h-5 text-white/50" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder={placeholder}
                aria-label="Search commands"
                className={cn(
                  "flex-1 bg-transparent border-none outline-none",
                  "px-3 py-4 text-white placeholder:text-white/40",
                  "text-base",
                )}
              />
              <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 text-white/60 text-xs border border-white/10">
                <Command className="w-3 h-3" />K
              </kbd>
            </div>

            {/* Results - scrollable area */}
            <div className={cn("overflow-y-auto py-2", isVertical ? "flex-1" : "max-h-80")}>
              {filteredGroups.length === 0 ? (
                <div className="px-4 py-8 text-center text-white/40">No results found for &quot;{search}&quot;</div>
              ) : (
                filteredGroups.map((group) => (
                  <div key={group.label} className="mb-2" role="group" aria-label={group.label}>
                    <div className="px-4 py-2 text-xs font-medium text-white/40 uppercase tracking-wider">
                      {group.label}
                    </div>
                    {group.items.map((item) => {
                      itemIndex++
                      const isSelected = itemIndex === selectedIndex
                      const currentIndex = itemIndex

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (item.href) {
                              window.location.href = item.href
                            }
                            item.action?.()
                            setIsOpen(false)
                            onOpenChange?.(false)
                          }}
                          onMouseEnter={() => setSelectedIndex(currentIndex)}
                          aria-selected={isSelected}
                          role="option"
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3",
                            "text-left transition-all duration-150",
                            isSelected
                              ? "bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                              : "text-white/70 hover:bg-white/10",
                          )}
                        >
                          <span
                            className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-xl",
                              "border border-white/10 transition-all duration-150",
                              isSelected
                                ? "bg-linear-to-br from-cyan-500/40 to-blue-500/40 border-cyan-400/30"
                                : "bg-white/5",
                            )}
                          >
                            {item.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-white/40 truncate">{item.description}</div>
                            )}
                          </div>
                          {item.shortcut && (
                            <div className="flex items-center gap-1">
                              {item.shortcut.split(" ").map((key, i) => (
                                <kbd
                                  key={i}
                                  className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/50 text-xs font-mono border border-white/10"
                                >
                                  {key}
                                </kbd>
                              ))}
                            </div>
                          )}
                          {isSelected && <ArrowRight className="w-4 h-4 text-white/40" />}
                        </button>
                      )
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/15 px-4 py-2.5 flex items-center justify-between text-xs text-white/50 bg-white/5">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/10">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/10">↵</kbd> Select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/10">Esc</kbd> Close
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  },
)
GlassCommandPalette.displayName = "GlassCommandPalette"

// Trigger button component
const GlassCommandTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-xl",
        "bg-white/10 backdrop-blur-xl border border-white/20",
        "text-white/60 text-sm",
        "hover:bg-white/15 hover:text-white/80 transition-all",
        "focus:outline-none focus:ring-2 focus:ring-white/20",
        className,
      )}
      {...props}
    >
      <Search className="w-4 h-4" />
      <span className="hidden sm:inline">Search...</span>
      <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/10 text-xs">
        <Command className="w-3 h-3" />K
      </kbd>
    </button>
  ),
)
GlassCommandTrigger.displayName = "GlassCommandTrigger"

export { GlassCommandPalette, GlassCommandTrigger }
export type { CommandItem, CommandGroup, CommandPalettePosition }
