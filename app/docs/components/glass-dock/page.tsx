import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { Home, Search, Mail, Calendar, Settings, User, Bell, Folder, ImageIcon, Music } from "lucide-react"
import { DockItem, GlassDock } from "@/registry/innovative/glass-dock"
import { buildComponentMetadata, getComponentHeading, getComponentIntro } from "@/lib/seo"

const componentTitle = "Dock"
const componentDescription =
  "A macOS-style dock component with magnification effect, enhanced glass morphism styling, multiple orientations, and configurable glass intensity levels."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-dock",
})

const dockItems: DockItem[] = [
  { id: "home", icon: <Home className="w-6 h-6" />, label: "Home", active: true },
  { id: "search", icon: <Search className="w-6 h-6" />, label: "Search" },
  { id: "mail", icon: <Mail className="w-6 h-6" />, label: "Mail" },
  { id: "calendar", icon: <Calendar className="w-6 h-6" />, label: "Calendar" },
  { id: "settings", icon: <Settings className="w-6 h-6" />, label: "Settings" },
]

const basicCode = `import { GlassDock } from "@/components/glass-dock"

const items = [
  { id: "home", icon: <Home />, label: "Home", active: true },
  { id: "search", icon: <Search />, label: "Search" },
  { id: "mail", icon: <Mail />, label: "Mail" },
]

<GlassDock items={items} />`

const orientationCode = `// Horizontal (default)
<GlassDock items={items} orientation="horizontal" />

// Vertical sidebar style
<GlassDock items={items} orientation="vertical" />`

const glassIntensityCode = `// Low glass intensity - subtle effect
<GlassDock items={items} glassIntensity="low" />

// Medium glass intensity - balanced
<GlassDock items={items} glassIntensity="medium" />

// High glass intensity - maximum translucency (default)
<GlassDock items={items} glassIntensity="high" />`

const customCode = `<GlassDock
  items={items}
  magnification={1.8}
  baseSize={56}
  glassIntensity="high"
/>`

export default function DockPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-dock" />

      <ComponentPreview
        title="Basic Dock"
        description="Hover over icons to see the magnification effect. Features enhanced glass styling with multiple highlight layers."
        preview={<GlassDock items={dockItems} />}
        code={basicCode}
      />

      <ComponentPreview
        title="Glass Intensity Levels"
        description="Control the translucency and glass effect intensity: low, medium, or high."
        preview={
          <div className="flex flex-col gap-8 items-center">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-3">Low Intensity</p>
              <GlassDock
                items={[
                  { id: "folder", icon: <Folder className="w-6 h-6" />, label: "Files" },
                  { id: "image", icon: <ImageIcon className="w-6 h-6" />, label: "Photos" },
                  { id: "music", icon: <Music className="w-6 h-6" />, label: "Music" },
                ]}
                glassIntensity="low"
              />
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm mb-3">Medium Intensity</p>
              <GlassDock
                items={[
                  { id: "folder", icon: <Folder className="w-6 h-6" />, label: "Files" },
                  { id: "image", icon: <ImageIcon className="w-6 h-6" />, label: "Photos", active: true },
                  { id: "music", icon: <Music className="w-6 h-6" />, label: "Music" },
                ]}
                glassIntensity="medium"
              />
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm mb-3">High Intensity (Default)</p>
              <GlassDock
                items={[
                  { id: "folder", icon: <Folder className="w-6 h-6" />, label: "Files" },
                  { id: "image", icon: <ImageIcon className="w-6 h-6" />, label: "Photos" },
                  { id: "music", icon: <Music className="w-6 h-6" />, label: "Music", active: true },
                ]}
                glassIntensity="high"
              />
            </div>
          </div>
        }
        code={glassIntensityCode}
      />

      <ComponentPreview
        title="Vertical Orientation"
        description="Use the dock as a vertical sidebar navigation."
        preview={
          <div className="flex justify-center">
            <GlassDock
              items={[
                { id: "home", icon: <Home className="w-6 h-6" />, label: "Home", active: true },
                { id: "search", icon: <Search className="w-6 h-6" />, label: "Search" },
                { id: "user", icon: <User className="w-6 h-6" />, label: "Profile" },
                { id: "settings", icon: <Settings className="w-6 h-6" />, label: "Settings" },
              ]}
              orientation="vertical"
              glassIntensity="high"
            />
          </div>
        }
        code={orientationCode}
      />

      <ComponentPreview
        title="Custom Configuration"
        description="Adjust magnification level and base icon size for different use cases."
        preview={
          <GlassDock
            items={[
              { id: "user", icon: <User className="w-7 h-7" />, label: "Profile" },
              { id: "bell", icon: <Bell className="w-7 h-7" />, label: "Notifications", active: true },
              { id: "settings", icon: <Settings className="w-7 h-7" />, label: "Settings" },
            ]}
            magnification={1.8}
            baseSize={56}
            glassIntensity="high"
          />
        }
        code={customCode}
      />
    </div>
  )
}
