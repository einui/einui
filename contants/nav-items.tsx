import { componentRegistry } from "@/lib/docs/component-registry";
import {
  BookOpen,
  Download,
  Palette,
  Moon,
  Terminal,
  User,
  Info,
  LayoutGrid,
  Square,
  MessageSquare,
  TextCursorInput,
  CheckCircle,
  Sliders,
  ToggleLeft,
  Layers,
  CircleDot,
  Command,
  Dock,
  Gauge,
  MousePointer,
  Bell,
  Droplets,
  Clock,
  Calendar,
  TrendingUp,
  Cloud,
  Package,
  PanelLeft,
  Sparkles,
  BriefcaseMedical,
  Navigation,
  LucideIcon,
  Table,
  Sheet,
  AlertTriangle,
  ChevronDown,
  CircleDashed,
  ListChecks,
  ScrollText,
  SeparatorHorizontal,
  Loader2,
  Popsicle,
  Trophy,
  ListTodo,
  Music,
  Battery,
  Activity,
  HardDrive,
  FileJson,
  InfoIcon,
  AlertCircle,
} from "lucide-react";


// Icon mapping for widgets
const widgetIcons: Record<string, LucideIcon> = {

}

// Icon mapping for components
const componentIcons: Record<string, LucideIcon> = {
  "glass-avatar": User,
  "glass-badge": Info,
  "glass-button": LayoutGrid,
  "glass-card": Square,
  "glass-dialog": MessageSquare,
  "glass-input": TextCursorInput,
  "glass-select": ChevronDown,
  "glass-textarea": TextCursorInput,
  "glass-tabs": Layers,
  "glass-progress": CheckCircle,
  "glass-switch": ToggleLeft,
  "glass-slider": Sliders,
  "glass-tooltip": CircleDot,
  "glass-checkbox": ListChecks,
  "glass-radio": CircleDashed,
  "glass-table": Table,
  "glass-timeline": Clock,
  "glass-skeleton": Loader2,
  "glass-breadcrumb": Navigation,
  "glass-separator": SeparatorHorizontal,
  "glass-scroll-area": ScrollText,
  "glass-sheet": Sheet,
  "glass-popover": InfoIcon,
  "alert-dialog": AlertCircle,
  "glass-command-palette": Command,
  "glass-notification": Bell,
  "glass-morph-card": MousePointer,
  "glass-ripple": Droplets,
  "glass-gauge": Gauge,
  "glass-dock": Dock,
  "glass-spotlight": Sparkles,
  "weather-widget": Cloud,
  "calendar-widget": Calendar,
  "clock-widget": Clock,
  "productivity-widget": ListTodo,
  "sports-widget": Trophy,
  "stocks-widget": TrendingUp,
  "music-widget": Music,
  "battery-widget": Battery,
  "fitness-widget": Activity,
  "storage-widget": HardDrive,
  "stats-widget": TrendingUp,
  "stock-widget": Gauge,
}

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}


export const headerNavItems = [
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/docs/components/glass-avatar", label: "Components", icon: LayoutGrid },
  { href: "/docs/components/weather-widget", label: "Widgets", icon: Sparkles, isNew: true },
];

export function generateNavigation(): NavSection[] {
  const staticSections: NavSection[] = [
    {
      title: "Get Started",
      items: [
        { title: "Introduction", href: "/docs", icon: <BookOpen className="h-4 w-4" /> },
        { title: "Installation", href: "/docs/installation", icon: <Download className="h-4 w-4" /> },
        { title: "Theming", href: "/docs/theming", icon: <Palette className="h-4 w-4" /> },
        { title: "Dark Mode", href: "/docs/dark-mode", icon: <Moon className="h-4 w-4" /> },
        { title: "CLI", href: "/docs/cli", icon: <Terminal className="h-4 w-4" /> },
      ],
    },
  ]

  const coreComponents = Object.values(componentRegistry).filter((c) => c.category === "components")
  const formComponents = Object.values(componentRegistry).filter((c) => c.category === "forms")
  const dataDisplayComponents = Object.values(componentRegistry).filter((c) => c.category === "data-display")
  const overlayComponents = Object.values(componentRegistry).filter((c) => c.category === "overlays")
  const innovativeComponents = Object.values(componentRegistry).filter((c) => c.category === "innovative")
  const timeComponents = Object.values(componentRegistry).filter((c) => c.category === "time")
  const widgetsComponents = Object.values(componentRegistry).filter((c) => c.category === "widgets")

  const componentSections: NavSection[] = [
    {
      title: "Components",
      items: coreComponents.map((c) => {

        const IconComponent = componentIcons[c.slug] || LayoutGrid
        return {
          title: c.title,
          href: `/docs/components/${c.slug}`,
          icon: <IconComponent className="h-4 w-4" />,
        }
      }),
    },
    {
      title: "Forms",
      items: formComponents.map((c) => {
        const IconComponent = componentIcons[c.slug] || TextCursorInput
        return {
          title: c.title,
          href: `/docs/components/${c.slug}`,
          icon: <IconComponent className="h-4 w-4" />,
          isNew: true,
        }
      }),
    },
    {
      title: "Data Display",
      items: dataDisplayComponents.map((c) => {
        const IconComponent = componentIcons[c.slug] || Table
        return {
          title: c.title,
          href: `/docs/components/${c.slug}`,
          icon: <IconComponent className="h-4 w-4" />,
          isNew: true,
        }
      }),
    },
    {
      title: "Overlays",
      items: overlayComponents.map((c) => {
        const IconComponent = componentIcons[c.slug] || InfoIcon
        return {
          title: c.title,
          href: `/docs/components/${c.slug}`,
          icon: <IconComponent className="h-4 w-4" />,
          isNew: true,
        }
      }),
    },
    {
      title: "Widgets",
      items: widgetsComponents.map((c) => {
        const IconComponent = componentIcons[c.slug] || Cloud
        return {
          title: c.title,
          href: `/docs/components/${c.slug}`,
          icon: <IconComponent className="h-4 w-4" />,
          isNew: true,
        }
      }),
    },
    {
      title: "Innovative",
      items: innovativeComponents.map((c) => {
        const IconComponent = componentIcons[c.slug] || Command
        return {
          title: c.title,
          href: `/docs/components/${c.slug}`,
          icon: <IconComponent className="h-4 w-4" />,
          isNew: true,
        }
      }),
    },
  ]



  // Registry and Blocks sections
  const endSections: NavSection[] = [
    {
      title: "Registry",
      items: [
        { title: "Overview", href: "/docs/registry", icon: <Package className="h-4 w-4" /> }
      ],
    },
    {
      title: "Blocks",
      items: [{ title: "Admin Panel", href: "/docs/blocks/admin", icon: <PanelLeft className="h-4 w-4" /> }],
    },
  ]

  return [...staticSections, ...componentSections, ...endSections];

}