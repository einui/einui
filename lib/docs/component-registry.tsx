import type { ReactNode } from "react";

import {
  Mail,
  ArrowRight,
  Loader2,
  Plus,
  Download,
  Settings,
  User,
  Trash2,
  LogOut,
  Home,
  DollarSign,
  Users,
  Star,
  Heart,
  Bell,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  GlassButton,
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  GlassAvatar,
  GlassAvatarImage,
  GlassAvatarFallback,
  GlassBadge,
  GlassInput,
  GlassSelect,
  GlassSelectTrigger,
  GlassSelectValue,
  GlassSelectContent,
  GlassSelectItem,
  GlassSelectGroup,
  GlassSelectLabel,
  GlassSelectSeparator,
  GlassTextarea,
  GlassCheckbox,
  GlassRadioGroup,
  GlassRadioGroupItem,
  GlassSkeleton,
  GlassTable,
  GlassTableHeader,
  GlassTableRow,
  GlassTableHead,
  GlassTableBody,
  GlassTableCell,
  GlassTableCaption,
  GlassTableFooter,
  GlassSheet,
  GlassSheetTrigger,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetTitle,
  GlassSheetDescription,
  GlassSheetFooter,
  GlassSheetClose,
  GlassPopover,
  GlassPopoverTrigger,
  GlassPopoverContent,
  GlassAlertDialog,
  GlassAlertDialogTrigger,
  GlassAlertDialogContent,
  GlassAlertDialogHeader,
  GlassAlertDialogTitle,
  GlassAlertDialogDescription,
  GlassAlertDialogFooter,
  GlassAlertDialogCancel,
  GlassAlertDialogAction,
  GlassBreadcrumb,
  GlassBreadcrumbList,
  GlassBreadcrumbItem,
  GlassBreadcrumbLink,
  GlassBreadcrumbSeparator,
  GlassBreadcrumbPage,
  GlassBreadcrumbEllipsis,
  GlassSeparator,
  GlassScrollArea,
  GlassScrollBar,
  GlassDialog,
  GlassDialogTrigger,
  GlassDialogContent,
  GlassDialogHeader,
  GlassDialogTitle,
  GlassDialogDescription,
  GlassDialogFooter,
  GlassSwitch,
  GlassTabs,
  GlassTabsList,
  GlassTabsTrigger,
  GlassTabsContent,
  GlassProgress,
  GlassSlider,
  GlassTooltipProvider,
  GlassTooltip,
  GlassTooltipTrigger,
  GlassTooltipContent,
} from "@/registry/liquid-glass";
import {
  AnalogClockWidget,
  CalendarWidget,
  CompactCalendarWidget,
  CompactStockWidget,
  CryptoWidget,
  CurrentWeatherWidget,
  DetailedWeatherWidget,
  DigitalClockWidget,
  EventsCalendarWidget,
  ForecastWeatherWidget,
  ForecastWidget,
  HourlyWeatherWidget,
  MarketOverviewWidget,
  PortfolioWidget,
  StockTickerWidget,
  StopwatchWidget,
  TimerWidget,
  WorldClockWidget,
} from "@/registry/widgets";
import { StatsGrid } from "@/registry/widgets/stats-widget";
import { artists, mockUsers } from "@/contants/mock-data";

// Types for the registry
export interface ComponentExample {
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
}

export interface ComponentConfig {
  slug: string;
  title: string;
  description: string;
  registryName: string;
  category:
  | "components"
  | "forms"
  | "data-display"
  | "overlays"
  | "innovative"
  | "time"
  | "widgets"
  | "data";
  examples: ComponentExample[];
}

// ========== BUTTON EXAMPLES ==========
const buttonExamples: ComponentExample[] = [
  {
    title: "Variants",
    description: "Different button styles for various use cases.",
    preview: (
      <div className="flex flex-wrap gap-4 justify-center">
        <GlassButton variant="default">Default</GlassButton>
        <GlassButton variant="primary">Primary</GlassButton>
        <GlassButton variant="outline">Outline</GlassButton>
        <GlassButton variant="ghost">Ghost</GlassButton>
        <GlassButton variant="destructive">Destructive</GlassButton>
      </div>
    ),
    code: `<GlassButton variant="default">Default</GlassButton>
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="outline">Outline</GlassButton>
<GlassButton variant="ghost">Ghost</GlassButton>
<GlassButton variant="destructive">Destructive</GlassButton>`,
  },
  {
    title: "Sizes",
    description: "Buttons come in small, default, large, and icon sizes.",
    preview: (
      <div className="flex flex-wrap items-center gap-4">
        <GlassButton size="sm">Small</GlassButton>
        <GlassButton size="default">Default</GlassButton>
        <GlassButton size="lg">Large</GlassButton>
        <GlassButton size="icon">
          <Plus className="h-4 w-4" />
        </GlassButton>
      </div>
    ),
    code: `<GlassButton size="sm">Small</GlassButton>
<GlassButton size="default">Default</GlassButton>
<GlassButton size="lg">Large</GlassButton>
<GlassButton size="icon"><Plus /></GlassButton>`,
  },
  {
    title: "With Icons",
    description: "Buttons can include icons before or after the label.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassButton variant="primary">
          <Mail className="mr-2 h-4 w-4" /> Email
        </GlassButton>
        <GlassButton variant="outline">
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </GlassButton>
        <GlassButton variant="default">
          <Download className="mr-2 h-4 w-4" /> Download
        </GlassButton>
        <GlassButton variant="ghost">
          <Heart className="mr-2 h-4 w-4" /> Like
        </GlassButton>
      </div>
    ),
    code: `<GlassButton variant="primary">
  <Mail className="mr-2 h-4 w-4" /> Email
</GlassButton>
<GlassButton variant="outline">
  Continue <ArrowRight className="ml-2 h-4 w-4" />
</GlassButton>`,
  },
  {
    title: "Glow Effect",
    description: "Add a glow effect to make buttons more prominent.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassButton variant="primary" glowEffect>
          Glow Effect
        </GlassButton>
        <GlassButton variant="default" glowEffect>
          Default Glow
        </GlassButton>
      </div>
    ),
    code: `<GlassButton variant="primary" glow>
  Glow Effect
</GlassButton>`,
  },
  {
    title: "Loading & Disabled",
    description: "States for disabled and loading buttons.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassButton disabled>Disabled</GlassButton>
        <GlassButton variant="primary" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
        </GlassButton>
      </div>
    ),
    code: `<GlassButton disabled>Disabled</GlassButton>
<GlassButton variant="primary" disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
</GlassButton>`,
  },
];

// ========== CARD EXAMPLES ==========
const cardExamples: ComponentExample[] = [
  {
    title: "Basic Card",
    description: "A simple card with header, content, and footer.",
    preview: (
      <GlassCard className="w-full max-w-sm">
        <GlassCardHeader>
          <GlassCardTitle>Card Title</GlassCardTitle>
          <GlassCardDescription>
            Card description goes here with additional context.
          </GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent>
          <p className="text-white/80">
            This is the card content area where you can add any content.
          </p>
        </GlassCardContent>
        <GlassCardFooter>
          <GlassButton>Action</GlassButton>
        </GlassCardFooter>
      </GlassCard>
    ),
    code: `<GlassCard className="w-full max-w-md">
  <GlassCardHeader>
    <GlassCardTitle>Card Title</GlassCardTitle>
    <GlassCardDescription>This is a card description.</GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent>
    <p>Card content goes here.</p>
  </GlassCardContent>
  <GlassCardFooter>
    <GlassButton variant="primary">Action</GlassButton>
  </GlassCardFooter>
</GlassCard>`,
  },
  {
    title: "Card with Image",
    description: "A card with an image.",
    preview: (
      <GlassCard className="w-full max-w-sm">
        <div className="rounded-t-2xl overflow-hidden">
          <div className="h-32 bg-linear-to-r from-purple-500 to-pink-500" />
        </div>
        <GlassCardContent className="pt-4">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300" /> Featured Product
          </h3>
          <p className="text-white/60 text-sm mt-2">
            A short description of the featured product or service that is concise and to the point.
          </p>
        </GlassCardContent>
        <GlassCardFooter>
          <GlassButton variant="primary">Explore</GlassButton>
        </GlassCardFooter>
      </GlassCard>
    ),
    code: `<GlassCard className="w-full max-w-sm">
    <div className="rounded-t-2xl overflow-hidden">
      <div className="h-32 bg-linear-to-r from-purple-500 to-pink-500" />
    </div>
  <GlassCardContent className="pt-4">
    <h3 className="text-white font-semibold text-lg">Featured Product</h3>
    <p className="text-white/60 text-sm mt-2">A short description of the featured product or service.</p>
  </GlassCardContent>
  <GlassCardFooter>
    <GlassButton variant="primary">Explore</GlassButton>
  </GlassCardFooter>
</GlassCard>`,
  },
  {
    title: "Profile Card",
    description: "A card designed to display user profile information.",
    preview: (
      <GlassCard className="w-full max-w-sm">
        <GlassCardHeader className="items-center">
          <GlassAvatar className="h-16 w-16">
            <GlassAvatarImage src="/diverse-avatars.png" alt="User" />
            <GlassAvatarFallback>JD</GlassAvatarFallback>
          </GlassAvatar>
          <GlassCardTitle className="mt-4">John Doe</GlassCardTitle>
          <GlassCardDescription>Software Engineer</GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent className="text-center">
          <div className="flex justify-center gap-4">
            <GlassBadge>React</GlassBadge>
            <GlassBadge variant="outline">TypeScript</GlassBadge>
          </div>
        </GlassCardContent>
        <GlassCardFooter className="justify-center">
          <GlassButton variant="outline" size="sm">
            View Profile
          </GlassButton>
        </GlassCardFooter>
      </GlassCard>
    ),
    code: `<GlassCard className="w-full max-w-sm">
  <GlassCardHeader className="items-center">
    <GlassAvatar className="h-16 w-16">
      <GlassAvatarImage src="/avatar.png" alt="User" />
      <GlassAvatarFallback>JD</GlassAvatarFallback>
    </GlassAvatar>
    <GlassCardTitle className="mt-4">John Doe</GlassCardTitle>
    <GlassCardDescription>Software Engineer</GlassCardDescription>
  </GlassCardHeader>
  <GlassCardContent className="text-center">
    <div className="flex justify-center gap-4">
      <GlassBadge>React</GlassBadge>
      <GlassBadge variant="secondary">TypeScript</GlassBadge>
    </div>
  </GlassCardContent>
</GlassCard>`,
  },
];

// ========== INPUT EXAMPLES ==========
const inputExamples: ComponentExample[] = [
  {
    title: "Basic Input",
    description: "Standard text input with placeholder.",
    preview: (
      <div className="w-full max-w-sm">
        <GlassInput placeholder="Enter your email" type="email" />
      </div>
    ),
    code: `<GlassInput placeholder="Enter your email" type="email" />`,
  },
  {
    title: "With Label",
    description: "Input with an associated label.",
    preview: (
      <div className="w-full max-w-sm space-y-2">
        <Label className="text-white/80">Username</Label>
        <GlassInput placeholder="johndoe" />
      </div>
    ),
    code: `<Label>Username</Label>
<GlassInput placeholder="johndoe" />`,
  },
  {
    title: "Different Types",
    description: "Various input types for different data.",
    preview: (
      <div className="w-full max-w-sm space-y-4">
        <GlassInput type="password" placeholder="Password" />
        <GlassInput type="number" placeholder="Age" />
        <GlassInput type="date" />
      </div>
    ),
    code: `<GlassInput type="password" placeholder="Password" />
<GlassInput type="number" placeholder="Age" />
<GlassInput type="date" />`,
  },
];

// ========== SELECT EXAMPLES ==========
const selectExamples: ComponentExample[] = [
  {
    title: "Basic Select",
    description: "A simple dropdown select with options.",
    preview: (
      <GlassSelect>
        <GlassSelectTrigger className="w-50">
          <GlassSelectValue placeholder="Select a fruit" />
        </GlassSelectTrigger>
        <GlassSelectContent>
          <GlassSelectItem value="apple">Apple</GlassSelectItem>
          <GlassSelectItem value="banana">Banana</GlassSelectItem>
          <GlassSelectItem value="orange">Orange</GlassSelectItem>
          <GlassSelectItem value="grape">Grape</GlassSelectItem>
        </GlassSelectContent>
      </GlassSelect>
    ),
    code: `<GlassSelect>
  <GlassSelectTrigger className="w-50">
    <GlassSelectValue placeholder="Select a fruit" />
  </GlassSelectTrigger>
  <GlassSelectContent>
    <GlassSelectItem value="apple">Apple</GlassSelectItem>
    <GlassSelectItem value="banana">Banana</GlassSelectItem>
    <GlassSelectItem value="orange">Orange</GlassSelectItem>
  </GlassSelectContent>
</GlassSelect>`,
  },
  {
    title: "Grouped Options",
    description: "Select with grouped options and labels.",
    preview: (
      <GlassSelect>
        <GlassSelectTrigger className="w-60">
          <GlassSelectValue placeholder="Select a timezone" />
        </GlassSelectTrigger>
        <GlassSelectContent>
          <GlassSelectGroup>
            <GlassSelectLabel>North America</GlassSelectLabel>
            <GlassSelectItem value="est">Eastern Standard Time</GlassSelectItem>
            <GlassSelectItem value="cst">Central Standard Time</GlassSelectItem>
            <GlassSelectItem value="pst">Pacific Standard Time</GlassSelectItem>
          </GlassSelectGroup>
          <GlassSelectSeparator />
          <GlassSelectGroup>
            <GlassSelectLabel>Europe</GlassSelectLabel>
            <GlassSelectItem value="gmt">Greenwich Mean Time</GlassSelectItem>
            <GlassSelectItem value="cet">Central European Time</GlassSelectItem>
          </GlassSelectGroup>
        </GlassSelectContent>
      </GlassSelect>
    ),
    code: `<GlassSelect>
  <GlassSelectTrigger className="w-60">
    <GlassSelectValue placeholder="Select a timezone" />
  </GlassSelectTrigger>
  <GlassSelectContent>
    <GlassSelectGroup>
      <GlassSelectLabel>North America</GlassSelectLabel>
      <GlassSelectItem value="est">Eastern Standard Time</GlassSelectItem>
    </GlassSelectGroup>
  </GlassSelectContent>
</GlassSelect>`,
  },
];

// ========== TEXTAREA EXAMPLES ==========
const textareaExamples: ComponentExample[] = [
  {
    title: "Basic Textarea",
    description: "Multi-line text input for longer content.",
    preview: (
      <div className="w-full max-w-md">
        <GlassTextarea placeholder="Type your message here..." />
      </div>
    ),
    code: `<GlassTextarea placeholder="Type your message here..." />`,
  },
  {
    title: "With Label and Character Count",
    description: "Textarea with associated label for forms.",
    preview: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-white/80">Bio</Label>
        <GlassTextarea placeholder="Tell us about yourself..." rows={4} />
        <p className="text-xs text-white/40 text-right">0/500 characters</p>
      </div>
    ),
    code: `<Label>Bio</Label>
<GlassTextarea placeholder="Tell us about yourself..." rows={4} />`,
  },
];

// ========== CHECKBOX EXAMPLES ==========
const checkboxExamples: ComponentExample[] = [
  {
    title: "Basic Checkbox",
    description: "Standard checkbox with label.",
    preview: (
      <label className="flex items-center space-x-2">
        <GlassCheckbox />
        <span className="text-white/80">Accept terms and conditions</span>
      </label>
    ),
    code: `<label className="flex items-center space-x-2">
  <GlassCheckbox />
  <span>Accept terms and conditions</span>
</label>`,
  },
  {
    title: "Checkbox Group",
    description: "Multiple checkboxes for multi-select scenarios.",
    preview: (
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <GlassCheckbox defaultChecked />
          <span className="text-white/80">Email notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <GlassCheckbox />
          <span className="text-white/80">SMS notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <GlassCheckbox defaultChecked />
          <span className="text-white/80">Push notifications</span>
        </label>
      </div>
    ),
    code: `<div className="space-y-3">
  <label className="flex items-center space-x-2">
    <GlassCheckbox defaultChecked />
    <span>Email notifications</span>
  </label>
  <label className="flex items-center space-x-2">
    <GlassCheckbox />
    <span>SMS notifications</span>
  </label>
</div>`,
  },
];

// ========== RADIO EXAMPLES ==========
const radioExamples: ComponentExample[] = [
  {
    title: "Basic Radio Group",
    description: "Radio buttons for single selection.",
    preview: (
      <GlassRadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1" className="text-white/80">
            Option 1
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2" className="text-white/80">
            Option 2
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3" className="text-white/80">
            Option 3
          </Label>
        </div>
      </GlassRadioGroup>
    ),
    code: `<GlassRadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <GlassRadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <GlassRadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</GlassRadioGroup>`,
  },
  {
    title: "Horizontal Layout",
    description: "Radio group displayed horizontally.",
    preview: (
      <GlassRadioGroup defaultValue="sm" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="sm" id="sm" />
          <Label htmlFor="sm" className="text-white/80">
            Small
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="md" id="md" />
          <Label htmlFor="md" className="text-white/80">
            Medium
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <GlassRadioGroupItem value="lg" id="lg" />
          <Label htmlFor="lg" className="text-white/80">
            Large
          </Label>
        </div>
      </GlassRadioGroup>
    ),
    code: `<GlassRadioGroup defaultValue="sm" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <GlassRadioGroupItem value="sm" id="sm" />
    <Label htmlFor="sm">Small</Label>
  </div>
  ...
</GlassRadioGroup>`,
  },
];

// ========== SKELETON EXAMPLES ==========
const skeletonExamples: ComponentExample[] = [
  {
    title: "Basic Skeletons",
    description: "Different skeleton shapes for various content types.",
    preview: (
      <div className="space-y-4 w-full max-w-md">
        <GlassSkeleton className="h-4 w-3/4" />
        <GlassSkeleton className="h-4 w-1/2" />
        <GlassSkeleton className="h-32 w-full" />
      </div>
    ),
    code: `<GlassSkeleton className="h-4 w-3/4" />
<GlassSkeleton className="h-4 w-1/2" />
<GlassSkeleton className="h-32 w-full" />`,
  },
  {
    title: "Card Skeleton",
    description: "Skeleton layout for loading cards.",
    preview: (
      <div className="w-full max-w-md">
        <GlassCard className="w-full">
          <GlassCardHeader className="space-y-2">
            <GlassSkeleton className="h-5 w-1/2" />
            <GlassSkeleton className="h-4 w-3/4" />
          </GlassCardHeader>
          <GlassCardContent className="space-y-2">
            <GlassSkeleton className="h-4 w-full" />
            <GlassSkeleton className="h-4 w-full" />
            <GlassSkeleton className="h-4 w-2/3" />
          </GlassCardContent>
          <GlassCardFooter>
            <GlassSkeleton className="h-10 w-24" />
          </GlassCardFooter>
        </GlassCard>
      </div>
    ),
    code: `<GlassCard className="w-full max-w-md">
  <GlassCardHeader className="space-y-2">
    <GlassSkeleton className="h-5 w-1/2" />
    <GlassSkeleton className="h-4 w-3/4" />
  </GlassCardHeader>
  <GlassCardContent className="space-y-2">
    <GlassSkeleton className="h-4 w-full" />
    <GlassSkeleton className="h-4 w-full" />
  </GlassCardContent>
</GlassCard>`,
  },
  {
    title: "Variant",
    description: "Skeleton with 'pulse' animation variant.",
    preview: (
      <div className="w-full max-w-md flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Default</span>
          <GlassSkeleton variant="default" className="h-12 flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Circular</span>
          <GlassSkeleton variant="circular" className="h-12 w-12" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Text</span>
          <GlassSkeleton variant="text" className="flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm w-20">Card</span>
          <GlassSkeleton variant="card" className="flex-1 h-32" />
        </div>
      </div>
    ),
    code: `<div className="flex flex-col gap-4">
  <GlassSkeleton variant="default" className="h-12 w-full" />
  <GlassSkeleton variant="circular" className="h-12 w-12" />
  <GlassSkeleton variant="text" />
  <GlassSkeleton variant="card" className="w-full" />
</div>`,
  },
];

// ========== TABLE EXAMPLES ==========
const tableExamples: ComponentExample[] = [
  {
    title: "Basic Table",
    description: "Simple data table with headers and rows.",
    preview: (
      <GlassTable>
        <GlassTableHeader>
          <GlassTableRow>
            <GlassTableHead className="w-25">Invoice</GlassTableHead>
            <GlassTableHead>Status</GlassTableHead>
            <GlassTableHead>Method</GlassTableHead>
            <GlassTableHead className="text-right">Amount</GlassTableHead>
          </GlassTableRow>
        </GlassTableHeader>
        <GlassTableBody>
          <GlassTableRow>
            <GlassTableCell className="font-medium">INV001</GlassTableCell>
            <GlassTableCell>Paid</GlassTableCell>
            <GlassTableCell>Credit Card</GlassTableCell>
            <GlassTableCell className="text-right">$250.00</GlassTableCell>
          </GlassTableRow>
          <GlassTableRow>
            <GlassTableCell className="font-medium">INV002</GlassTableCell>
            <GlassTableCell>Pending</GlassTableCell>
            <GlassTableCell>PayPal</GlassTableCell>
            <GlassTableCell className="text-right">$150.00</GlassTableCell>
          </GlassTableRow>
        </GlassTableBody>
      </GlassTable>
    ),
    code: `<GlassTable>
  <GlassTableHeader>
    <GlassTableRow>
      <GlassTableHead>Invoice</GlassTableHead>
      <GlassTableHead>Status</GlassTableHead>
      <GlassTableHead className="text-right">Amount</GlassTableHead>
    </GlassTableRow>
  </GlassTableHeader>
  <GlassTableBody>
    <GlassTableRow>
      <GlassTableCell>INV001</GlassTableCell>
      <GlassTableCell>Paid</GlassTableCell>
      <GlassTableCell className="text-right">$250.00</GlassTableCell>
    </GlassTableRow>
  </GlassTableBody>
</GlassTable>`,
  },
  {
    title: "Table with Footer",
    description: "Table including a footer for totals or summaries.",
    preview: (
      <GlassTable>
        <GlassTableCaption>A list of your recent invoices.</GlassTableCaption>
        <GlassTableHeader>
          <GlassTableRow>
            <GlassTableHead>Invoice</GlassTableHead>
            <GlassTableHead>Status</GlassTableHead>
            <GlassTableHead className="text-right">Amount</GlassTableHead>
          </GlassTableRow>
        </GlassTableHeader>
        <GlassTableBody>
          <GlassTableRow>
            <GlassTableCell>INV001</GlassTableCell>
            <GlassTableCell>Paid</GlassTableCell>
            <GlassTableCell className="text-right">$250.00</GlassTableCell>
          </GlassTableRow>
          <GlassTableRow>
            <GlassTableCell>INV002</GlassTableCell>
            <GlassTableCell>Paid</GlassTableCell>
            <GlassTableCell className="text-right">$150.00</GlassTableCell>
          </GlassTableRow>
        </GlassTableBody>
        <GlassTableFooter>
          <GlassTableRow>
            <GlassTableCell colSpan={2}>Total</GlassTableCell>
            <GlassTableCell className="text-right">$400.00</GlassTableCell>
          </GlassTableRow>
        </GlassTableFooter>
      </GlassTable>
    ),
    code: `<GlassTable>
  <GlassTableCaption>A list of your recent invoices.</GlassTableCaption>
  <GlassTableHeader>...</GlassTableHeader>
  <GlassTableBody>...</GlassTableBody>
  <GlassTableFooter>
    <GlassTableRow>
      <GlassTableCell colSpan={2}>Total</GlassTableCell>
      <GlassTableCell className="text-right">$400.00</GlassTableCell>
    </GlassTableRow>
  </GlassTableFooter>
</GlassTable>`,
  },
  {
    title: "Table with Buttons",
    description: "Table with buttons for actions.",
    preview: (
      <GlassTable>
        <GlassTableHeader>
          <GlassTableRow>
            <GlassTableHead>Name</GlassTableHead>
            <GlassTableHead>Email</GlassTableHead>
            <GlassTableHead>Role</GlassTableHead>
            <GlassTableHead>Status</GlassTableHead>
          </GlassTableRow>
        </GlassTableHeader>
        <GlassTableBody>
          {mockUsers.map((user) => (
            <GlassTableRow key={user.email}>
              <GlassTableCell className="font-medium">{user.name}</GlassTableCell>
              <GlassTableCell>{user.email}</GlassTableCell>
              <GlassTableCell>
                <GlassBadge variant="outline">{user.role}</GlassBadge>
              </GlassTableCell>
              <GlassTableCell>
                <GlassBadge variant={user.status === "Active" ? "primary" : "default"}>
                  {user.status}
                </GlassBadge>
              </GlassTableCell>
            </GlassTableRow>
          ))}
        </GlassTableBody>
      </GlassTable>
    ),
    code: ``,
  },
];

// ========== SHEET EXAMPLES ==========
const sheetExamples: ComponentExample[] = [
  {
    title: "Basic Sheet",
    description: "Slide-out panel from the right side.",
    preview: (
      <GlassSheet>
        <GlassSheetTrigger asChild>
          <GlassButton variant="outline">Open Sheet</GlassButton>
        </GlassSheetTrigger>
        <GlassSheetContent>
          <GlassSheetHeader>
            <GlassSheetTitle>Edit Profile</GlassSheetTitle>
            <GlassSheetDescription>Make changes to your profile here.</GlassSheetDescription>
          </GlassSheetHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-white/80">Name</Label>
              <GlassInput placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label className="text-white/80">Email</Label>
              <GlassInput type="email" placeholder="john@example.com" />
            </div>
          </div>
          <GlassSheetFooter>
            <GlassSheetClose asChild>
              <GlassButton variant="outline">Cancel</GlassButton>
            </GlassSheetClose>
            <GlassButton variant="primary">Save changes</GlassButton>
          </GlassSheetFooter>
        </GlassSheetContent>
      </GlassSheet>
    ),
    code: `<GlassSheet>
  <GlassSheetTrigger asChild>
    <GlassButton variant="outline">Open Sheet</GlassButton>
  </GlassSheetTrigger>
  <GlassSheetContent>
    <GlassSheetHeader>
      <GlassSheetTitle>Edit Profile</GlassSheetTitle>
      <GlassSheetDescription>Make changes to your profile here.</GlassSheetDescription>
    </GlassSheetHeader>
    <div className="py-4">...</div>
    <GlassSheetFooter>
      <GlassButton variant="primary">Save changes</GlassButton>
    </GlassSheetFooter>
  </GlassSheetContent>
</GlassSheet>`,
  },
  {
    title: "Sheet Sides",
    description: "Sheets can slide in from different directions.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <GlassSheet>
          <GlassSheetTrigger asChild>
            <GlassButton variant="outline">Left</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent side="left">
            <GlassSheetHeader>
              <GlassSheetTitle>Left Sheet</GlassSheetTitle>
            </GlassSheetHeader>
          </GlassSheetContent>
        </GlassSheet>
        <GlassSheet>
          <GlassSheetTrigger asChild>
            <GlassButton variant="outline">Top</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent side="top">
            <GlassSheetHeader>
              <GlassSheetTitle>Top Sheet</GlassSheetTitle>
            </GlassSheetHeader>
          </GlassSheetContent>
        </GlassSheet>
        <GlassSheet>
          <GlassSheetTrigger asChild>
            <GlassButton variant="outline">Bottom</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent side="bottom">
            <GlassSheetHeader>
              <GlassSheetTitle>Bottom Sheet</GlassSheetTitle>
            </GlassSheetHeader>
          </GlassSheetContent>
        </GlassSheet>
      </div>
    ),
    code: `<GlassSheet>
  <GlassSheetTrigger asChild>
    <GlassButton>Left</GlassButton>
  </GlassSheetTrigger>
  <GlassSheetContent side="left">...</GlassSheetContent>
</GlassSheet>`,
  },
];

// ========== POPOVER EXAMPLES ==========
const popoverExamples: ComponentExample[] = [
  {
    title: "Basic Popover",
    description: "Floating panel for contextual content.",
    preview: (
      <GlassPopover>
        <GlassPopoverTrigger asChild>
          <GlassButton variant="outline">Open Popover</GlassButton>
        </GlassPopoverTrigger>
        <GlassPopoverContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium text-white">Dimensions</h4>
            <p className="text-sm text-white/60">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2 pt-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-white/80">Width</Label>
              <GlassInput className="col-span-2 h-8" defaultValue="100%" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-white/80">Height</Label>
              <GlassInput className="col-span-2 h-8" defaultValue="25px" />
            </div>
          </div>
        </GlassPopoverContent>
      </GlassPopover>
    ),
    code: `<GlassPopover>
  <GlassPopoverTrigger asChild>
    <GlassButton variant="outline">Open Popover</GlassButton>
  </GlassPopoverTrigger>
  <GlassPopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-white/60">Set the dimensions for the layer.</p>
    </div>
    <div className="grid gap-2 pt-4">
      <GlassInput defaultValue="100%" />
    </div>
  </GlassPopoverContent>
</GlassPopover>`,
  },
  {
    title: "Popover Alignment",
    description: "Control popover positioning relative to trigger.",
    preview: (
      <div className="flex gap-4">
        <GlassPopover>
          <GlassPopoverTrigger asChild>
            <GlassButton variant="outline" size="sm">
              Start
            </GlassButton>
          </GlassPopoverTrigger>
          <GlassPopoverContent align="start" className="w-48">
            <p className="text-sm text-white/70">Aligned to start</p>
          </GlassPopoverContent>
        </GlassPopover>
        <GlassPopover>
          <GlassPopoverTrigger asChild>
            <GlassButton variant="outline" size="sm">
              Center
            </GlassButton>
          </GlassPopoverTrigger>
          <GlassPopoverContent align="center" className="w-48">
            <p className="text-sm text-white/70 text-center">Aligned to center</p>
          </GlassPopoverContent>
        </GlassPopover>
        <GlassPopover>
          <GlassPopoverTrigger asChild>
            <GlassButton variant="outline" size="sm">
              End
            </GlassButton>
          </GlassPopoverTrigger>
          <GlassPopoverContent align="end" className="w-48">
            <p className="text-sm text-white/70 text-right">Aligned to end</p>
          </GlassPopoverContent>
        </GlassPopover>
      </div>
    ),
    code: `<GlassPopover>
  <GlassPopoverTrigger asChild>
    <GlassButton>Start</GlassButton>
  </GlassPopoverTrigger>
  <GlassPopoverContent align="start">...</GlassPopoverContent>
</GlassPopover>`,
  },
];

// ========== ALERT DIALOG EXAMPLES ==========
const alertDialogExamples: ComponentExample[] = [
  {
    title: "Delete Confirmation",
    description: "Confirm destructive actions before proceeding.",
    preview: (
      <GlassAlertDialog>
        <GlassAlertDialogTrigger asChild>
          <GlassButton variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" /> Delete Account
          </GlassButton>
        </GlassAlertDialogTrigger>
        <GlassAlertDialogContent>
          <GlassAlertDialogHeader>
            <GlassAlertDialogTitle>Are you absolutely sure?</GlassAlertDialogTitle>
            <GlassAlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </GlassAlertDialogDescription>
          </GlassAlertDialogHeader>
          <GlassAlertDialogFooter>
            <GlassAlertDialogCancel>Cancel</GlassAlertDialogCancel>
            <GlassAlertDialogAction>Yes, delete account</GlassAlertDialogAction>
          </GlassAlertDialogFooter>
        </GlassAlertDialogContent>
      </GlassAlertDialog>
    ),
    code: `<GlassAlertDialog>
  <GlassAlertDialogTrigger asChild>
    <GlassButton variant="destructive">Delete Account</GlassButton>
  </GlassAlertDialogTrigger>
  <GlassAlertDialogContent>
    <GlassAlertDialogHeader>
      <GlassAlertDialogTitle>Are you absolutely sure?</GlassAlertDialogTitle>
      <GlassAlertDialogDescription>
        This action cannot be undone.
      </GlassAlertDialogDescription>
    </GlassAlertDialogHeader>
    <GlassAlertDialogFooter>
      <GlassAlertDialogCancel>Cancel</GlassAlertDialogCancel>
      <GlassAlertDialogAction>Yes, delete account</GlassAlertDialogAction>
    </GlassAlertDialogFooter>
  </GlassAlertDialogContent>
</GlassAlertDialog>`,
  },
  {
    title: "Log Out Confirmation",
    description: "Confirm logout action.",
    preview: (
      <GlassAlertDialog>
        <GlassAlertDialogTrigger asChild>
          <GlassButton variant="outline">
            <LogOut className="mr-2 h-4 w-4" /> Log Out
          </GlassButton>
        </GlassAlertDialogTrigger>
        <GlassAlertDialogContent>
          <GlassAlertDialogHeader>
            <GlassAlertDialogTitle>Log out of your account?</GlassAlertDialogTitle>
            <GlassAlertDialogDescription>
              You will need to sign in again to access your account.
            </GlassAlertDialogDescription>
          </GlassAlertDialogHeader>
          <GlassAlertDialogFooter>
            <GlassAlertDialogCancel>Stay signed in</GlassAlertDialogCancel>
            <GlassAlertDialogAction>Log out</GlassAlertDialogAction>
          </GlassAlertDialogFooter>
        </GlassAlertDialogContent>
      </GlassAlertDialog>
    ),
    code: `<GlassAlertDialog>
  <GlassAlertDialogTrigger asChild>
    <GlassButton variant="outline">Log Out</GlassButton>
  </GlassAlertDialogTrigger>
  <GlassAlertDialogContent>
    <GlassAlertDialogHeader>
      <GlassAlertDialogTitle>Log out of your account?</GlassAlertDialogTitle>
    </GlassAlertDialogHeader>
    <GlassAlertDialogFooter>
      <GlassAlertDialogCancel>Stay signed in</GlassAlertDialogCancel>
      <GlassAlertDialogAction>Log out</GlassAlertDialogAction>
    </GlassAlertDialogFooter>
  </GlassAlertDialogContent>
</GlassAlertDialog>`,
  },
];

// ========== BREADCRUMB EXAMPLES ==========
const breadcrumbExamples: ComponentExample[] = [
  {
    title: "Basic Breadcrumb",
    description: "Standard navigation breadcrumb.",
    preview: (
      <GlassBreadcrumb>
        <GlassBreadcrumbList>
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/docs">Documentation</GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbPage>Components</GlassBreadcrumbPage>
          </GlassBreadcrumbItem>
        </GlassBreadcrumbList>
      </GlassBreadcrumb>
    ),
    code: `<GlassBreadcrumb>
  <GlassBreadcrumbList>
    <GlassBreadcrumbItem>
      <GlassBreadcrumbLink href="/">Home</GlassBreadcrumbLink>
    </GlassBreadcrumbItem>
    <GlassBreadcrumbSeparator />
    <GlassBreadcrumbItem>
      <GlassBreadcrumbPage>Components</GlassBreadcrumbPage>
    </GlassBreadcrumbItem>
  </GlassBreadcrumbList>
</GlassBreadcrumb>`,
  },
  {
    title: "With Ellipsis",
    description: "Collapsed breadcrumb for long paths.",
    preview: (
      <GlassBreadcrumb>
        <GlassBreadcrumbList>
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/">Home</GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbEllipsis />
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbLink href="/docs/components">Components</GlassBreadcrumbLink>
          </GlassBreadcrumbItem>
          <GlassBreadcrumbSeparator />
          <GlassBreadcrumbItem>
            <GlassBreadcrumbPage>Breadcrumb</GlassBreadcrumbPage>
          </GlassBreadcrumbItem>
        </GlassBreadcrumbList>
      </GlassBreadcrumb>
    ),
    code: `<GlassBreadcrumb>
  <GlassBreadcrumbList>
    <GlassBreadcrumbItem>
      <GlassBreadcrumbLink href="/">Home</GlassBreadcrumbLink>
    </GlassBreadcrumbItem>
    <GlassBreadcrumbSeparator />
    <GlassBreadcrumbItem>
      <GlassBreadcrumbEllipsis />
    </GlassBreadcrumbItem>
    <GlassBreadcrumbSeparator />
    <GlassBreadcrumbItem>
      <GlassBreadcrumbPage>Breadcrumb</GlassBreadcrumbPage>
    </GlassBreadcrumbItem>
  </GlassBreadcrumbList>
</GlassBreadcrumb>`,
  },
];

// ========== SEPARATOR EXAMPLES ==========
const separatorExamples: ComponentExample[] = [
  {
    title: "Horizontal Separator",
    description: "Divide content sections horizontally.",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <div>
          <h4 className="text-sm font-medium text-white">Section One</h4>
          <p className="text-sm text-white/60">Content for the first section.</p>
        </div>
        <GlassSeparator />
        <div>
          <h4 className="text-sm font-medium text-white">Section Two</h4>
          <p className="text-sm text-white/60">Content for the second section.</p>
        </div>
      </div>
    ),
    code: `<div>Section One</div>
<GlassSeparator />
<div>Section Two</div>`,
  },
  {
    title: "Vertical Separator",
    description: "Divide content sections vertically.",
    preview: (
      <div className="flex h-8 items-center gap-4">
        <span className="text-sm text-white">Blog</span>
        <GlassSeparator orientation="vertical" />
        <span className="text-sm text-white">Docs</span>
        <GlassSeparator orientation="vertical" />
        <span className="text-sm text-white">Source</span>
      </div>
    ),
    code: `<div className="flex h-8 items-center gap-4">
  <span>Blog</span>
  <GlassSeparator orientation="vertical" />
  <span>Docs</span>
  <GlassSeparator orientation="vertical" />
  <span>Source</span>
</div>`,
  },
];

// ========== SCROLL AREA EXAMPLES ==========
const scrollAreaExamples: ComponentExample[] = [
  {
    title: "Vertical Scroll",
    description: "Scrollable area for long content lists.",
    preview: (
      <GlassScrollArea className="h-48 w-48 rounded-xl border border-white/10">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium text-white leading-none">Tags</h4>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="text-sm text-white/70 py-2 border-b border-white/5 last:border-0"
            >
              Tag {i + 1}
            </div>
          ))}
        </div>
      </GlassScrollArea>
    ),
    code: `<GlassScrollArea className="h-48 w-48 rounded-xl border border-white/10">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm py-2">{tag}</div>
    ))}
  </div>
</GlassScrollArea>`,
  },
  {
    title: "Horizontal Scroll",
    description: "Horizontally scrollable content.",
    preview: (
      <GlassScrollArea className="w-96 whitespace-nowrap rounded-xl border border-white/10">
        <div className="flex gap-4 p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-32 h-32 rounded-lg bg-white/5 flex items-center justify-center text-white/70"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
        <GlassScrollBar orientation="horizontal" />
      </GlassScrollArea>
    ),
    code: `<GlassScrollArea className="w-96 whitespace-nowrap rounded-xl">
  <div className="flex gap-4 p-4">
    {items.map((item) => (
      <div key={item} className="shrink-0 w-32 h-32">
        {item}
      </div>
    ))}
  </div>
  <GlassScrollBar orientation="horizontal" />
</GlassScrollArea>`,
  },
  {
    title: "Content List",
    description: "Scrollable area with a list of artists.",
    preview: (
      <GlassScrollArea className="h-64 w-full max-w-sm rounded-xl border border-white/10 bg-white/5">
        <div className="p-4">
          {artists.map((artist, index) => (
            <div key={artist.handle}>
              <div className="flex items-center gap-3 py-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-cyan-500/40 to-blue-500/40 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{artist.name}</p>
                  <p className="text-xs text-white/60">{artist.handle}</p>
                </div>
              </div>
              {index < artists.length - 1 && <GlassSeparator />}
            </div>
          ))}
        </div>
      </GlassScrollArea>
    ),
    code: `<GlassScrollArea className="h-64 w-full max-w-sm rounded-xl border border-white/10 bg-white/5">
  <div className="p-4">
    {artists.map((artist, index) => (
      <div key={artist.handle}>
        <div className="flex items-center gap-3 py-3">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-cyan-500/40 to-blue-500/40 shrink-0" />
          <div>
            <p className="text-sm font-medium text-white">{artist.name}</p>
            <p className="text-xs text-white/60">{artist.handle}</p>
          </div>
        </div>
        {index < artists.length - 1 && <GlassSeparator />}
      </div>
    ))}
  </div>
</GlassScrollArea>`,
  },
];

// ========== DIALOGS EXAMPLES ==========
const dialogsExamples: ComponentExample[] = [
  {
    title: "Basic Dialog",
    description: "Modal dialog for focused interactions.",
    preview: (
      <GlassDialog>
        <GlassDialogTrigger asChild>
          <GlassButton variant="primary">Open Dialog</GlassButton>
        </GlassDialogTrigger>
        <GlassDialogContent>
          <GlassDialogHeader className="text-left">
            <GlassDialogTitle>Edit Profile</GlassDialogTitle>
            <GlassDialogDescription>Make changes to your profile here.</GlassDialogDescription>
          </GlassDialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-white/80">Name</Label>
              <GlassInput placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label className="text-white/80">Email</Label>
              <GlassInput type="email" placeholder="john@example.com" />
            </div>
          </div>
          <GlassDialogFooter className="flex-row justify-end gap-2">
            <GlassButton variant="outline">Cancel</GlassButton>
            <GlassButton variant="primary">Save changes</GlassButton>
          </GlassDialogFooter>
        </GlassDialogContent>
      </GlassDialog>
    ),
    code: `<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="primary">Open Dialog</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Edit Profile</GlassDialogTitle>
      <GlassDialogDescription>Make changes to your profile here.</GlassDialogDescription>
    </GlassDialogHeader>
    <div className="py-4">...</div>
    <GlassDialogFooter>
      <GlassButton variant="primary">Save changes</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`,
  },
  {
    title: "Settings Dialog",
    description: "Dialog with multiple form elements.",
    preview: (
      <GlassDialog>
        <GlassDialogTrigger asChild>
          <GlassButton variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </GlassButton>
        </GlassDialogTrigger>
        <GlassDialogContent>
          <GlassDialogHeader className="text-left">
            <GlassDialogTitle>Notification Settings</GlassDialogTitle>
            <GlassDialogDescription>
              Configure how you receive notifications.
            </GlassDialogDescription>
          </GlassDialogHeader>
          <div className="py-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-white/80">Email notifications</Label>
              <GlassSwitch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-white/80">Push notifications</Label>
              <GlassSwitch />
            </div>
          </div>
          <GlassDialogFooter className="flex-row justify-end gap-2">
            <GlassButton variant="primary">Save</GlassButton>
          </GlassDialogFooter>
        </GlassDialogContent>
      </GlassDialog>
    ),
    code: `<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="outline">Settings</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Notification Settings</GlassDialogTitle>
    </GlassDialogHeader>
    <div className="py-4 space-y-4">
      <div className="flex items-center justify-between">
        <Label>Email notifications</Label>
        <GlassSwitch defaultChecked />
      </div>
    </div>
    <GlassDialogFooter>
      <GlassButton variant="primary">Save</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`,
  },
];

// ========== TABS EXAMPLES ==========
const tabsExamples: ComponentExample[] = [
  {
    title: "Basic Tabs",
    description: "Organize content into tabbed sections.",
    preview: (
      <GlassTabs defaultValue="account" className="w-full max-w-lg">
        <GlassTabsList>
          <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
          <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
          <GlassTabsTrigger value="settings">Settings</GlassTabsTrigger>
        </GlassTabsList>
        <GlassTabsContent value="account">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Manage your account settings and preferences.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="password">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Update your password and security settings.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="settings">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Configure general application settings.</p>
          </div>
        </GlassTabsContent>
      </GlassTabs>
    ),
    code: `<GlassTabs defaultValue="account" className="w-full max-w-md">
  <GlassTabsList>
    <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
    <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="account">
    <GlassCard>...</GlassCard>
  </GlassTabsContent>
  <GlassTabsContent value="password">
    <GlassCard>...</GlassCard>
  </GlassTabsContent>
</GlassTabs>`,
  },
  {
    title: "Icon Tabs",
    description: "Tabs with icons for visual clarity.",
    preview: (
      <GlassTabs defaultValue="profile" className="w-full max-w-lg">
        <GlassTabsList className="w-full">
          <GlassTabsTrigger value="profile" className="group flex-1">
            <User className="h-4 w-4" />
            <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Profile</span>
          </GlassTabsTrigger>
          <GlassTabsTrigger value="notifications" className="group flex-1">
            <Bell className="h-4 w-4" />
            <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Notifications</span>
          </GlassTabsTrigger>
          <GlassTabsTrigger value="settings" className="group flex-1">
            <Settings className="h-4 w-4" />
            <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Settings</span>
          </GlassTabsTrigger>
        </GlassTabsList>
        <GlassTabsContent value="profile">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Your profile information and public details.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="notifications">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Manage your notification preferences.</p>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="settings">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-white/80">Application settings and configuration.</p>
          </div>
        </GlassTabsContent>
      </GlassTabs>
    ),
    code: `<GlassTabs defaultValue="profile">
  <GlassTabsList>
    <GlassTabsTrigger value="profile" className="group">
      <User className="h-4 w-4" />
      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Profile</span>
    </GlassTabsTrigger>
    <GlassTabsTrigger value="billing" className="group">
      <CreditCard className="h-4 w-4" />
      <span className="ml-2 hidden group-data-[state=active]:inline sm:inline">Billing</span>
    </GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="profile">...</GlassTabsContent>
</GlassTabs>`,
  },
  {
    title: "Settings Panel",
    description: "Settings panel with tabs for different sections.",
    preview: (
      <GlassTabs defaultValue="general" className="w-full">
        <GlassTabsList className="w-full">
          <GlassTabsTrigger value="general" className="flex-1 px-2 sm:px-4">
            General
          </GlassTabsTrigger>
          <GlassTabsTrigger value="notifications" className="flex-1 px-2 sm:px-4">
            Notifications
          </GlassTabsTrigger>
          <GlassTabsTrigger value="security" className="flex-1 px-2 sm:px-4">
            Security
          </GlassTabsTrigger>
        </GlassTabsList>
        <GlassTabsContent value="general">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Display Name</Label>
              <GlassInput placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Email</Label>
              <GlassInput placeholder="john@example.com" />
            </div>
            <GlassButton variant="primary">Save Changes</GlassButton>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="notifications">
          <div className="space-y-4">
            <p className="text-white/60 text-sm">Configure how you receive notifications.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <span className="text-white/80 text-sm">Email notifications</span>
                <div className="w-10 h-6 bg-cyan-500/50 rounded-full" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <span className="text-white/80 text-sm">Push notifications</span>
                <div className="w-10 h-6 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </GlassTabsContent>
        <GlassTabsContent value="security">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">Current Password</Label>
              <GlassInput type="password" placeholder="Enter current password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/80 text-sm">New Password</Label>
              <GlassInput type="password" placeholder="Enter new password" />
            </div>
            <GlassButton variant="primary">Update Password</GlassButton>
          </div>
        </GlassTabsContent>
      </GlassTabs>
    ),
    code: `<GlassTabs defaultValue="general" className="w-full">
  <GlassTabsList className="w-full">
    <GlassTabsTrigger value="general" className="flex-1 px-2 sm:px-4">
      General
    </GlassTabsTrigger>
    <GlassTabsTrigger value="notifications" className="flex-1 px-2 sm:px-4">
      Notifications
    </GlassTabsTrigger>
    <GlassTabsTrigger value="security" className="flex-1 px-2 sm:px-4">
      Security
    </GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="general">...</GlassTabsContent>
</GlassTabs>`,
  },
];

// ========== BADGE EXAMPLES ==========
const badgeExamples: ComponentExample[] = [
  {
    title: "Badge Variants",
    description: "Different badge styles for various contexts.",
    preview: (
      <div className="flex flex-wrap gap-4 justify-center">
        <GlassBadge>Default</GlassBadge>
        <GlassBadge variant="primary">Secondary</GlassBadge>
        <GlassBadge variant="outline">Outline</GlassBadge>
        <GlassBadge variant="destructive">Destructive</GlassBadge>
      </div>
    ),
    code: `<GlassBadge>Default</GlassBadge>
<GlassBadge variant="secondary">Secondary</GlassBadge>
<GlassBadge variant="outline">Outline</GlassBadge>
<GlassBadge variant="destructive">Destructive</GlassBadge>`,
  },
  {
    title: "Tags",
    description: "Badges for displaying tags.",
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <GlassBadge variant="primary">React</GlassBadge>
        <GlassBadge variant="primary">TypeScript</GlassBadge>
        <GlassBadge variant="primary">Tailwind CSS</GlassBadge>
        <GlassBadge variant="primary">Next.js</GlassBadge>
      </div>
    ),
    code: `<GlassBadge variant="primary">React</GlassBadge>
<GlassBadge variant="primary">TypeScript</GlassBadge>
<GlassBadge variant="primary">Tailwind CSS</GlassBadge>
<GlassBadge variant="primary">Next.js</GlassBadge>`,
  },
  {
    title: "Status Indicators",
    description: "Badges with status indicators for visual clarity.",
    preview: (
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <GlassBadge variant="success" className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
          Online
        </GlassBadge>
        <GlassBadge variant="warning" className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
          Away
        </GlassBadge>
        <GlassBadge variant="destructive" className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
          Offline
        </GlassBadge>
      </div>
    ),
    code: `<GlassBadge>
  <Star className="w-4 h-4 text-yellow-300" /> Featured
</GlassBadge>`,
  },
];

// ========== AVATAR EXAMPLES ==========
const avatarExamples: ComponentExample[] = [
  {
    title: "Basic Avatar",
    description: "Display user avatars with fallback support.",
    preview: (
      <div className="flex gap-4">
        <GlassAvatar>
          <GlassAvatarImage src="/stylized-user-avatar.png" alt="User" />
          <GlassAvatarFallback>JD</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar>
          <GlassAvatarImage src="/avatar-woman.png" alt="User" />
          <GlassAvatarFallback>AB</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar>
          <GlassAvatarFallback>CN</GlassAvatarFallback>
        </GlassAvatar>
      </div>
    ),
    code: `<GlassAvatar>
  <GlassAvatarImage src="/avatar.png" alt="User" />
  <GlassAvatarFallback>JD</GlassAvatarFallback>
</GlassAvatar>`,
  },
  {
    title: "Avatar Sizes",
    description: "Different avatar sizes for various contexts.",
    preview: (
      <div className="flex items-center gap-4">
        <GlassAvatar className="h-8 w-8">
          <GlassAvatarFallback className="text-xs">SM</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar className="h-10 w-10">
          <GlassAvatarFallback className="text-sm">MD</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar className="h-14 w-14">
          <GlassAvatarFallback>LG</GlassAvatarFallback>
        </GlassAvatar>
        <GlassAvatar className="h-20 w-20">
          <GlassAvatarFallback className="text-lg">XL</GlassAvatarFallback>
        </GlassAvatar>
      </div>
    ),
    code: `<GlassAvatar className="h-8 w-8">
  <GlassAvatarFallback className="text-xs">SM</GlassAvatarFallback>
</GlassAvatar>
<GlassAvatar className="h-14 w-14">
  <GlassAvatarFallback>LG</GlassAvatarFallback>
</GlassAvatar>`,
  },
];

// ========== PROGRESS EXAMPLES ==========
const progressExamples: ComponentExample[] = [
  {
    title: "Basic Progress",
    description: "Visual progress indicator.",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <GlassProgress value={33} />
        <GlassProgress value={66} />
        <GlassProgress value={100} />
      </div>
    ),
    code: `<GlassProgress value={33} />
<GlassProgress value={66} />
<GlassProgress value={100} />`,
  },
  {
    title: "Progress with Label",
    description: "Progress bar with percentage label.",
    preview: (
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-white/80">Uploading...</span>
          <span className="text-white/60">75%</span>
        </div>
        <GlassProgress value={75} />
      </div>
    ),
    code: `<div className="flex justify-between text-sm">
  <span>Uploading...</span>
  <span>75%</span>
</div>
<GlassProgress value={75} />`,
  },
];

// ========== SWITCH EXAMPLES ==========
const switchExamples: ComponentExample[] = [
  {
    title: "Basic Switch",
    description: "Toggle switch for boolean settings.",
    preview: (
      <div className="flex items-center space-x-2">
        <GlassSwitch id="airplane" />
        <Label htmlFor="airplane" className="text-white/80">
          Airplane Mode
        </Label>
      </div>
    ),
    code: `<GlassSwitch id="airplane" />
<Label htmlFor="airplane">Airplane Mode</Label>`,
  },
  {
    title: "Switch States",
    description: "Switches in different states.",
    preview: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <GlassSwitch id="notifications" defaultChecked />
          <Label htmlFor="notifications" className="text-white/80">
            Enable notifications
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <GlassSwitch id="marketing" defaultChecked />
          <Label htmlFor="marketing" className="text-white/80">
            Marketing emails
          </Label>
        </div>
      </div>
    ),
    code: `<div className="flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <GlassSwitch id="notifications" defaultChecked />
    <Label htmlFor="notifications" className="text-white/80">
      Enable notifications
    </Label>
  </div>
  <div className="flex items-center gap-3">
    <GlassSwitch id="marketing" defaultChecked />
    <Label htmlFor="marketing" className="text-white/80">
      Marketing emails
    </Label>
  </div>
</div>`,
  },
  {
    title: "Settings Panel",
    description: "Settings panel with switches for different sections.",
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Dark Mode</p>
            <p className="text-white/50 text-sm">Use dark theme across the app</p>
          </div>
          <GlassSwitch defaultChecked />
        </div>
        <div className="h-px bg-white/10" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Push Notifications</p>
            <p className="text-white/50 text-sm">Receive push notifications</p>
          </div>
          <GlassSwitch />
        </div>
        <div className="h-px bg-white/10" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Auto Updates</p>
            <p className="text-white/50 text-sm">Keep app up to date automatically</p>
          </div>
          <GlassSwitch defaultChecked />
        </div>
      </div>
    ),
    code: `<div className="flex flex-col gap-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-medium">Dark Mode</p>
      <p className="text-white/50 text-sm">Use dark theme across the app</p>
    </div>
    <GlassSwitch defaultChecked />
  </div>
  <div className="h-px bg-white/10" />
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-medium">Push Notifications</p>
      <p className="text-white/50 text-sm">Receive push notifications</p>
    </div>
    </div>`,
  },
];

// ========== SLIDER EXAMPLES ==========
const sliderExamples: ComponentExample[] = [
  {
    title: "Basic Slider",
    description: "Range input for selecting values.",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <GlassSlider defaultValue={[50]} max={100} step={1} />
      </div>
    ),
    code: `<GlassSlider defaultValue={[50]} max={100} step={1} />`,
  },
  {
    title: "Slider with Labels",
    description: "Slider with value display.",
    preview: (
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm">
          <Label className="text-white/80">Volume</Label>
          <span className="text-white/60">75%</span>
        </div>
        <GlassSlider defaultValue={[75]} max={100} step={1} />
      </div>
    ),
    code: `<div className="flex justify-between text-sm">
  <Label>Volume</Label>
  <span>75%</span>
</div>
<GlassSlider defaultValue={[75]} max={100} step={1} />`,
  },
];

// ========== TOOLTIP EXAMPLES ==========
const tooltipExamples: ComponentExample[] = [
  {
    title: "Basic Tooltip",
    description: "Hover to reveal additional information.",
    preview: (
      <GlassTooltipProvider>
        <GlassTooltip>
          <GlassTooltipTrigger asChild>
            <GlassButton variant="outline">Hover me</GlassButton>
          </GlassTooltipTrigger>
          <GlassTooltipContent>
            <p>Add to library</p>
          </GlassTooltipContent>
        </GlassTooltip>
      </GlassTooltipProvider>
    ),
    code: `<GlassTooltipProvider>
  <GlassTooltip>
    <GlassTooltipTrigger asChild>
      <GlassButton variant="outline">Hover me</GlassButton>
    </GlassTooltipTrigger>
    <GlassTooltipContent>
      <p>Add to library</p>
    </GlassTooltipContent>
  </GlassTooltip>
</GlassTooltipProvider>`,
  },
  {
    title: "Tooltip Positions",
    description: "Tooltips can appear in different positions.",
    preview: (
      <GlassTooltipProvider>
        <div className="flex gap-4">
          <GlassTooltip>
            <GlassTooltipTrigger asChild>
              <GlassButton variant="outline" size="sm">
                Top
              </GlassButton>
            </GlassTooltipTrigger>
            <GlassTooltipContent side="top">
              <p>Top tooltip</p>
            </GlassTooltipContent>
          </GlassTooltip>
          <GlassTooltip>
            <GlassTooltipTrigger asChild>
              <GlassButton variant="outline" size="sm">
                Bottom
              </GlassButton>
            </GlassTooltipTrigger>
            <GlassTooltipContent side="bottom">
              <p>Bottom tooltip</p>
            </GlassTooltipContent>
          </GlassTooltip>
          <GlassTooltip>
            <GlassTooltipTrigger asChild>
              <GlassButton variant="outline" size="sm">
                Left
              </GlassButton>
            </GlassTooltipTrigger>
            <GlassTooltipContent side="left">
              <p>Left tooltip</p>
            </GlassTooltipContent>
          </GlassTooltip>
        </div>
      </GlassTooltipProvider>
    ),
    code: `<GlassTooltip>
  <GlassTooltipTrigger asChild>
    <GlassButton>Top</GlassButton>
  </GlassTooltipTrigger>
  <GlassTooltipContent side="top">
    <p>Top tooltip</p>
  </GlassTooltipContent>
</GlassTooltip>`,
  },
];

const weatherExamples: ComponentExample[] = [
  {
    title: "Current Weather Widget",
    description: "Display current weather with temperature, conditions, and basic metrics.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <CurrentWeatherWidget
          location="San Francisco"
          temperature={18}
          feelsLike={16}
          high={22}
          low={14}
          condition="cloudy"
          humidity={68}
          windSpeed={15}
        />
        <CurrentWeatherWidget
          location="Mumbai"
          temperature={35}
          feelsLike={38}
          high={37}
          low={28}
          condition="sunny"
          humidity={45}
          windSpeed={8}
        />
      </div>
    ),
    code: `<CurrentWeatherWidget
  location="San Francisco"
  temperature={18}
  feelsLike={16}
  high={22}
  low={14}
  condition="cloudy"
  humidity={68}
  windSpeed={15}
/>`,
  },
  {
    title: "Forecast Widget",
    description: "5-day weather forecast with high/low temperatures.",
    preview: (
      <ForecastWeatherWidget
        current={{
          temperature: 18,
          condition: "cloudy",
          icon: "cloud",
        }}
        forecast={[
          { day: "Mon", high: 22, low: 14, condition: "sunny" },
          { day: "Tue", high: 24, low: 15, condition: "sunny" },
          { day: "Wed", high: 20, low: 13, condition: "cloudy" },
          { day: "Thu", high: 18, low: 12, condition: "rainy" },
          { day: "Fri", high: 21, low: 14, condition: "cloudy" },
        ]}
      />
    ),
    code: `<ForecastWeatherWidget
  current={{
    temperature: 18,
    condition: "cloudy",
    icon: "cloud",
  }}
  forecast={[
    { day: "Mon", high: 22, low: 14, condition: "sunny" },
    { day: "Tue", high: 24, low: 15, condition: "sunny" },
    { day: "Wed", high: 20, low: 13, condition: "cloudy" },
  ]}
/>`,
  },
  {
    title: "Large Weather Widget",
    description: "Prominent weather display for dashboards and home screens.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <DetailedWeatherWidget location="Mumbai" temperature={29} condition="sunny" />
        <DetailedWeatherWidget location="London" temperature={8} condition="rainy" />
      </div>
    ),
    code: `<LargeWeatherWidget
  location="Mumbai"
  temperature={29}
  condition="sunny"
/>`,
  },
  {
    title: "Forecast Widget",
    description: "5-day weather forecast with high/low temperatures.",
    preview: (
      <ForecastWidget
        forecast={[
          { day: "Mon", high: 22, low: 14, condition: "sunny" },
          { day: "Tue", high: 24, low: 15, condition: "sunny" },
          { day: "Wed", high: 20, low: 13, condition: "cloudy" },
          { day: "Thu", high: 18, low: 12, condition: "rainy" },
          { day: "Fri", high: 21, low: 14, condition: "cloudy" },
        ]}
      />
    ),
    code: `<ForecastWidget
  forecast={[
    { day: "Mon", high: 22, low: 14, condition: "sunny" },
    { day: "Tue", high: 24, low: 15, condition: "sunny" },
    { day: "Wed", high: 20, low: 13, condition: "cloudy" },
  ]}
/>`,
  },
  {
    title: "Hourly Forecast Widget",
    description: "Scrollable hourly weather forecast.",
    preview: (
      <HourlyWeatherWidget
        hours={[
          { time: "Now", temperature: 18, icon: "cloud" },
          { time: "2PM", temperature: 20, icon: "sun" },
          { time: "4PM", temperature: 22, icon: "sun" },
          { time: "6PM", temperature: 19, icon: "cloud" },
          { time: "8PM", temperature: 16, icon: "snow" },
        ]}
      />
    ),
    code: `<HourlyWeatherWidget
    hours={[
    { time: "Now", temperature: 18, icon: "cloud" },
    { time: "2PM", temperature: 20, icon: "sun" },
    { time: "4PM", temperature: 22, icon: "sun" },
    { time: "6PM", temperature: 19, icon: "cloud" },
    { time: "8PM", temperature: 16, icon: "snow" },
  ]}
/>`,
  },

  {
    title: "Weather Details Widget",
    description: "Detailed weather metrics including UV, visibility, pressure, and more.",
    preview: (
      <DetailedWeatherWidget
        location="New York"
        temperature={22}
        condition="sunny"
        humidity={65}
        windSpeed={12}
        feelsLike={24}
      />
    ),
    code: `<DetailedWeatherWidget
  location="New York"
  temperature={22}
  condition="sunny"
  humidity={65}
  windSpeed={12}
  feelsLike={24}
/>`,
  },
];

// ========== CALENDAR EXAMPLES ==========
const calendarExamples: ComponentExample[] = [
  {
    title: "Calendar Widget",
    description: "Compact calendar widget showing current date and month overview.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <CalendarWidget />
        <CalendarWidget date={new Date(2025, 0, 1)} />
      </div>
    ),
    code: `<CalendarWidget />`,
  },
  {
    title: "Month Calendar Widget",
    description: "Full month calendar view with date selection.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <CompactCalendarWidget />
        <CompactCalendarWidget date={new Date(2025, 0, 1)} />
      </div>
    ),
    code: `<div className="flex flex-wrap gap-6">
    <CompactCalendarWidget />
    <CompactCalendarWidget date={new Date(2025, 0, 1)} />
  </div>`,
  },
  {
    title: "Event Widget",
    description: "Display upcoming events and appointments.",
    preview: (
      <EventsCalendarWidget
        date={new Date(2025, 0, 1)}
        events={[
          { id: "1", title: "Team Meeting", time: "9:00 AM", color: "blue" },
          { id: "2", title: "Lunch with Client", time: "12:30 PM", color: "green" },
          { id: "3", title: "Project Review", time: "3:00 PM", color: "purple" },
        ]}
      />
    ),
    code: `<EventsCalendarWidget
  events={[
    { id: "1", title: "Team Meeting", time: "9:00 AM", color: "blue" },
    { id: "2", title: "Lunch with Client", time: "12:30 PM", color: "green" },
    { id: "3", title: "Project Review", time: "3:00 PM", color: "purple" },
  ]}
/>`,
  },
];

// ========== CLOCK EXAMPLES ==========
const clockExamples: ComponentExample[] = [
  {
    title: "Digital Clock Widget",
    description: "Clean digital clock display with date.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <DigitalClockWidget />
        <DigitalClockWidget showSeconds />
        <DigitalClockWidget showSeconds format="24h" />
      </div>
    ),
    code: `<div className="flex flex-wrap gap-6">
<DigitalClockWidget />
<DigitalClockWidget showSeconds />
<DigitalClockWidget showSeconds format="24h" />
</div>`,
  },
  {
    title: "Analog Clock Widget",
    description: "Classic analog clock with smooth hand movement.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <AnalogClockWidget showNumbers size="sm" />
        <AnalogClockWidget showNumbers size="md" />
        <AnalogClockWidget size="lg" showNumbers={false} />
      </div>
    ),
    code: `<div className="flex flex-wrap gap-6">
<AnalogClockWidget showNumbers size="sm" />
<AnalogClockWidget showNumbers size="md" />
<AnalogClockWidget showNumbers={false} size="lg" />
</div>`,
  },
  {
    title: "World Clock Widget",
    description: "Display multiple time zones simultaneously.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <WorldClockWidget
          clocks={[
            { city: "New York", timezone: "America/New_York" },
            { city: "London", timezone: "Europe/London", isDay: true },
            { city: "Tokyo", timezone: "Asia/Tokyo", isDay: false },
          ]}
        />
      </div>
    ),
    code: `<WorldClockWidget
  clocks={[
    { city: "New York", timezone: "America/New_York", isDay: true },
    { city: "London", timezone: "Europe/London", isDay: false },
    { city: "Tokyo", timezone: "Asia/Tokyo", isDay: true },
  ]}
/>`,
  },
  {
    title: "Countdown Timer Widget",
    description: "Countdown timer with start, pause, and reset controls.",
    preview: (
      <div className="flex justify-center items-center p-4">
        <TimerWidget initialMinutes={5} />
      </div>
    ),
    code: `<TimerWidget initialMinutes={5} />`,
  },
  {
    title: "Stopwatch Widget",
    description: "Precision stopwatch with lap time tracking.",
    preview: (
      <div className="flex justify-center items-center p-4">
        <StopwatchWidget />
      </div>
    ),
    code: `<StopwatchWidget />`,
  },
];

// ========== STOCKS EXAMPLES ==========
const stocksExamples: ComponentExample[] = [
  {
    title: "Stock Ticker",
    description: "Scrolling stock ticker with price changes.",
    preview: (
      <StockTickerWidget
        symbol="AAPL"
        name="Apple Inc."
        price={178.23}
        change={2.45}
        changePercent={1.39}
        chartData={[175, 176.5, 175.8, 177, 178.5, 177.8, 178.23]}
      />
    ),
    code: `<StockTickerWidget
  symbol="AAPL"
  name="Apple Inc."
  price={178.23}
  change={2.45}
  changePercent={1.39}
  chartData={[175, 176.5, 175.8, 177, 178.5, 177.8, 178.23]}
/>`,
  },
  {
    title: "Compact Stock Card",
    description: "Compact view of stock information with price change.",
    preview: (
      <CompactStockWidget symbol="TSLA" price={245.67} change={-3.21} changePercent={-1.29} />
    ),
    code: `<CompactStockWidget
  symbol="TSLA"
  price={245.67}
  change={-3.21}
  changePercent={-1.29}
/>`,
  },
  {
    title: "Portfolio Overview",
    description: "Portfolio summary with total value and individual holdings.",
    preview: (
      <PortfolioWidget
        totalValue={125430.5}
        totalChange={3.24}
        holdings={[
          { symbol: "AAPL", name: "Apple", shares: 100, avgCost: 150, currentPrice: 178.23 },
          { symbol: "MSFT", name: "Microsoft", shares: 50, avgCost: 300, currentPrice: 378.91 },
          { symbol: "GOOGL", name: "Alphabet", shares: 25, avgCost: 120, currentPrice: 141.8 },
        ]}
      />
    ),
    code: `<PortfolioWidget
  totalValue={125430.50}
  totalChange={3.24}
  holdings={[...]}
/>`,
  },
  {
    title: "Market Overview",
    description: "Overview of market indices with change percentages.",
    preview: (
      <MarketOverviewWidget
        indices={[
          { name: "S&P 500", value: 4783.45, change: 23.54, changePercent: 0.49 },
          { name: "Dow Jones", value: 37440.34, change: -45.23, changePercent: -0.12 },
          { name: "NASDAQ", value: 15043.97, change: 102.56, changePercent: 0.69 },
        ]}
      />
    ),
    code: `<MarketOverviewWidget
  indices={[
    { name: "S&P 500", value: 4783.45, change: 23.54, changePercent: 0.49 },
    { name: "Dow Jones", value: 37440.34, change: -45.23, changePercent: -0.12 }
  ]}
/>`,
  },
  {
    title: "Crypto Widget",
    description: "Display cryptocurrency prices with market cap and volume.",
    preview: (
      <CryptoWidget
        symbol="BTC"
        name="Bitcoin"
        price={43250.45}
        change24h={2.34}
        marketCap="$845B"
        volume24h="$28.4B"
        sparkline={[42000, 42500, 42200, 43000, 43500, 43200, 43250]}
      />
    ),
    code: `<CryptoWidget
  symbol="BTC"
  name="Bitcoin"
  price={43250.45}
  change24h={2.34}
  marketCap="$845B"
  volume24h="$28.4B"
  sparkline={[...]}
/>`,
  },
];

// ========== STATS EXAMPLES ==========
const statsExamples: ComponentExample[] = [
  {
    title: "Stats Grid",
    description: "Grid of stats and metrics display widgets.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <StatsGrid
          stats={[
            {
              title: "Total Users",
              value: "12,345",
              change: { value: 12.5, type: "increase" },
              icon: <Users className="w-5 h-5" />,
            },
            {
              title: "Revenue",
              value: "$45,678",
              change: { value: 8.2, type: "increase" },
              glowColor: "green",
              icon: <DollarSign className="w-5 h-5" />,
            },
            {
              title: "Active Sessions",
              value: "1,234",
              change: { value: 5.3, type: "decrease" },
              glowColor: "red",
            },
          ]}
        />
      </div>
    ),
    code: `<StatsGrid
  stats={[
    {
      title: "Total Users",
      value: "12,345",
      change: { value: 12.5, type: "increase" },
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: { value: 8.2, type: "increase" },
      glowColor: "green",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: { value: 5.3, type: "decrease" },
      glowColor: "red",
    },
  ]}
/>`,
  },
];

// ========== INNOVATIVE EXAMPLES ==========
const innovativeExamples: ComponentExample[] = [];

// ========== COMPONENT REGISTRY ==========
export const componentRegistry: Record<string, ComponentConfig> = {
  "glass-alert-dialog": {
    slug: "glass-alert-dialog",
    title: "Alert Dialog",
    description: "Modal dialog component for important confirmations and alerts.",
    registryName: "glass-alert-dialog",
    category: "overlays",
    examples: alertDialogExamples,
  },
  "glass-avatar": {
    slug: "glass-avatar",
    title: "Avatar",
    description: "User avatar component with image and fallback support.",
    registryName: "glass-avatar",
    category: "components",
    examples: avatarExamples,
  },
  "glass-badge": {
    slug: "glass-badge",
    title: "Badge",
    description: "Small label component for status, tags, and categorization.",
    registryName: "glass-badge",
    category: "components",
    examples: badgeExamples,
  },
  "glass-breadcrumb": {
    slug: "glass-breadcrumb",
    title: "Breadcrumb",
    description: "Navigation breadcrumb component showing the current page location.",
    registryName: "glass-breadcrumb",
    category: "components",
    examples: breadcrumbExamples,
  },
  "glass-button": {
    slug: "glass-button",
    title: "Button",
    description:
      "Interactive button components with multiple variants, sizes, and optional glow effects.",
    registryName: "glass-button",
    category: "components",
    examples: buttonExamples,
  },
  "glass-card": {
    slug: "glass-card",
    title: "Card",
    description: "Container components for grouping related content with glass morphism styling.",
    registryName: "glass-card",
    category: "components",
    examples: cardExamples,
  },
  "glass-dialog": {
    slug: "glass-dialog",
    title: "Dialogs",
    description: "Modal dialog components for focused user interactions and forms.",
    registryName: "glass-dialog",
    category: "components",
    examples: dialogsExamples,
  },
  "glass-input": {
    slug: "glass-input",
    title: "Input",
    description: "Text input fields with glass morphism styling for forms and user input.",
    registryName: "glass-input",
    category: "components",
    examples: inputExamples,
  },
  "glass-select": {
    slug: "glass-select",
    title: "Select",
    description: "A dropdown select component with glass morphism styling and smooth animations.",
    registryName: "glass-select",
    category: "forms",
    examples: selectExamples,
  },
  "glass-textarea": {
    slug: "glass-textarea",
    title: "Textarea",
    description: "Multi-line text input with glass morphism styling for longer form content.",
    registryName: "glass-textarea",
    category: "forms",
    examples: textareaExamples,
  },
  "glass-checkbox": {
    slug: "glass-checkbox",
    title: "Checkbox",
    description: "Checkbox input component with glass morphism styling for boolean selections.",
    registryName: "glass-checkbox",
    category: "forms",
    examples: checkboxExamples,
  },
  "glass-radio": {
    slug: "glass-radio",
    title: "Radio",
    description: "Radio button group component for single-choice selections.",
    registryName: "glass-radio",
    category: "forms",
    examples: radioExamples,
  },
  "glass-skeleton": {
    slug: "glass-skeleton",
    title: "Skeleton",
    description: "Placeholder loading components for content that is being fetched.",
    registryName: "glass-skeleton",
    category: "data-display",
    examples: skeletonExamples,
  },
  "glass-table": {
    slug: "glass-table",
    title: "Table",
    description: "Data table component with glass morphism styling for displaying structured data.",
    registryName: "glass-table",
    category: "data-display",
    examples: tableExamples,
  },
  "glass-sheet": {
    slug: "glass-sheet",
    title: "Sheet",
    description: "Slide-out panel component for secondary content and actions.",
    registryName: "glass-sheet",
    category: "overlays",
    examples: sheetExamples,
  },
  "glass-popover": {
    slug: "glass-popover",
    title: "Popover",
    description: "Floating panel component for contextual content and forms.",
    registryName: "glass-popover",
    category: "overlays",
    examples: popoverExamples,
  },

  "glass-separator": {
    slug: "glass-separator",
    title: "Separator",
    description: "Visual divider component for separating content sections.",
    registryName: "glass-separator",
    category: "data-display",
    examples: separatorExamples,
  },
  "glass-scroll-area": {
    slug: "glass-scroll-area",
    title: "Scroll Area",
    description: "Custom scrollable container with glass morphism styled scrollbars.",
    registryName: "glass-scroll-area",
    category: "data-display",
    examples: scrollAreaExamples,
  },

  "glass-tabs": {
    slug: "glass-tabs",
    title: "Tabs",
    description: "Tabbed interface component for organizing content into sections.",
    registryName: "glass-tabs",
    category: "components",
    examples: tabsExamples,
  },

  "glass-progress": {
    slug: "glass-progress",
    title: "Progress",
    description: "Progress indicator component for displaying completion status.",
    registryName: "glass-progress",
    category: "components",
    examples: progressExamples,
  },
  "glass-switch": {
    slug: "glass-switch",
    title: "Switch",
    description: "Toggle switch component for boolean settings.",
    registryName: "glass-switch",
    category: "components",
    examples: switchExamples,
  },
  "glass-slider": {
    slug: "glass-slider",
    title: "Slider",
    description: "Range slider component for selecting values within a range.",
    registryName: "glass-slider",
    category: "components",
    examples: sliderExamples,
  },
  "glass-tooltip": {
    slug: "glass-tooltip",
    title: "Tooltip",
    description: "Tooltip component for displaying additional information on hover.",
    registryName: "glass-tooltip",
    category: "components",
    examples: tooltipExamples,
  },
  "weather-widget": {
    slug: "weather-widget",
    title: "Weather Widgets",
    description: "Weather forecast and conditions display widgets.",
    registryName: "weather-widget",
    category: "widgets",
    examples: weatherExamples,
  },
  "calendar-widget": {
    slug: "calendar-widget",
    title: "Calendar Widgets",
    description: "Calendar and event display widgets.",
    registryName: "calendar-widget",
    category: "widgets",
    examples: calendarExamples,
  },
  "clock-widget": {
    slug: "clock-widget",
    title: "Clock Widgets",
    description: "Time display, timers, and stopwatch widgets.",
    registryName: "clock-widget",
    category: "widgets",
    examples: clockExamples,
  },
  "stock-widget": {
    slug: "stock-widget",
    title: "Stocks Widgets",
    description: "Stock prices, portfolios, and market data.",
    registryName: "stock-widget",
    category: "widgets",
    examples: stocksExamples,
  },
  "stats-widget": {
    slug: "stats-widget",
    title: "Stats Widgets",
    description: "Stats and metrics display widgets.",
    registryName: "stats-widget",
    category: "widgets",
    examples: statsExamples,
  },
  "glass-command-palette": {
    slug: "glass-command-palette",
    title: "Command Palette",
    description: "Command palette component for searching and executing actions.",
    registryName: "glass-command-palette",
    category: "innovative",
    examples: innovativeExamples,
  },
  "glass-morph-card": {
    slug: "glass-morph-card",
    title: "Morph Card",
    description: "Morph card component for displaying content in a visually appealing way.",
    registryName: "glass-morph-card",
    category: "innovative",
    examples: innovativeExamples,
  },
  "glass-dock": {
    slug: "glass-dock",
    title: "Dock",
    description: "Dock component for displaying content in a visually appealing way.",
    registryName: "glass-dock",
    category: "innovative",
    examples: innovativeExamples,
  },
  "glass-gauge": {
    slug: "glass-gauge",
    title: "Gauge",
    description: "Gauge component for displaying progress or performance metrics.",
    registryName: "glass-gauge",
    category: "innovative",
    examples: innovativeExamples,
  },
  "glass-notification": {
    slug: "glass-notification",
    title: "Notification",
    description: "Notification component for displaying messages and alerts.",
    registryName: "glass-notification",
    category: "innovative",
    examples: innovativeExamples,
  },
  "glass-ripple": {
    slug: "glass-ripple",
    title: "Ripple",
    description: "Ripple effect component for displaying a ripple effect on an element.",
    registryName: "glass-ripple",
    category: "innovative",
    examples: innovativeExamples,
  },
  "glass-timeline": {
    slug: "glass-timeline",
    title: "Timeline",
    description: "Timeline component for displaying a timeline of events.",
    registryName: "glass-timeline",
    category: "innovative",
    examples: innovativeExamples,
  },
};

// Get all component slugs for generateStaticParams
export function getAllComponentSlugs(): string[] {
  return Object.keys(componentRegistry);
}

// Get component config by slug
export function getComponentBySlug(slug: string): ComponentConfig | undefined {
  return componentRegistry[slug];
}
