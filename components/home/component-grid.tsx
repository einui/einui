import Link from "next/link";
import {
  Square,
  LayoutGrid,
  MessageSquare,
  TextCursorInput,
  Layers,
  Info,
  User,
  CheckCircle,
  ToggleLeft,
  Sliders,
  Command,
  Bell,
  MousePointer,
  Droplets,
  Clock,
  Gauge,
  Dock,
  Calendar,
  TrendingUp,
  CloudSun,
} from "lucide-react";
import { GlassBadge } from "@/registry/liquid-glass/glass-badge";

const baseComponents = [
  { title: "Cards", href: "/docs/components/glass-card", icon: Square },
  { title: "Buttons", href: "/docs/components/glass-button", icon: LayoutGrid },
  { title: "Dialogs", href: "/docs/components/glass-dialog", icon: MessageSquare },
  { title: "Inputs", href: "/docs/components/glass-input", icon: TextCursorInput },
  { title: "Tabs", href: "/docs/components/glass-tabs", icon: Layers },
  { title: "Badge", href: "/docs/components/glass-badge", icon: Info },
  { title: "Avatar", href: "/docs/components/glass-avatar", icon: User },
  { title: "Progress", href: "/docs/components/glass-progress", icon: CheckCircle },
  { title: "Switch", href: "/docs/components/glass-switch", icon: ToggleLeft },
  { title: "Slider", href: "/docs/components/glass-slider", icon: Sliders },
];

const advancedComponents = [
  {
    title: "Command Palette",
    href: "/docs/components/glass-command-palette",
    icon: Command,
    isNew: true,
  },
  { title: "Notifications", href: "/docs/components/glass-notification", icon: Bell, isNew: true },
  { title: "Morph Card", href: "/docs/components/glass-morph-card", icon: MousePointer, isNew: true },
  { title: "Ripple", href: "/docs/components/glass-ripple", icon: Droplets },
  { title: "Timeline", href: "/docs/components/glass-timeline", icon: Clock },
  { title: "Gauge", href: "/docs/components/glass-gauge", icon: Gauge },
  { title: "Dock", href: "/docs/components/glass-dock", icon: Dock },
];

const widgetTypes = [
  { title: "Calendar", href: "/docs/components/calendar-widget", icon: Calendar },
  { title: "Clock", href: "/docs/components/clock-widget", icon: Clock },
  { title: "Weather", href: "/docs/components/weather-widget", icon: CloudSun },
  { title: "Stocks", href: "/docs/components/stock-widget", icon: TrendingUp },
];

export function ComponentGrid() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Base Components */}
      <div>
        <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
          Base Components
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {baseComponents.map((component) => (
            <Link key={component.href} href={component.href} className="group">
              <div className="p-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all text-center">
                <component.icon className="w-4 h-4 text-white/40 mx-auto mb-1.5 group-hover:text-cyan-400 transition-colors" />
                <span className="text-white/70 text-sm">{component.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Advanced Components */}
      <div>
        <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
          Advanced
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {advancedComponents.map((component) => (
            <Link key={component.href} href={component.href} className="group">
              <div className="p-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all text-center relative">
                <component.icon className="w-4 h-4 text-white/40 mx-auto mb-1.5 group-hover:text-purple-400 transition-colors" />
                <span className="text-white/70 text-sm">{component.title}</span>
                {component.isNew && (
                  <GlassBadge
                    glass-variant="primary"
                    size="sm"
                    className="absolute -top-1.5 -right-1.5 text-[10px] px-1.5 py-0"
                  >
                    New
                  </GlassBadge>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Widgets */}
      <div>
        <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">Widgets</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {widgetTypes.map((widget) => (
            <Link key={widget.href} href={widget.href} className="group">
              <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/5 to-purple-500/5 border border-white/5 hover:border-cyan-500/20 transition-all text-center">
                <widget.icon className="w-4 h-4 text-white/40 mx-auto mb-1.5 group-hover:text-cyan-400 transition-colors" />
                <span className="text-white/70 text-sm">{widget.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
