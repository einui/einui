import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassGauge } from "@/registry/innovative/glass-gauge"
import { buildComponentMetadata, getComponentHeading, getComponentIntro } from "@/lib/seo"

const componentTitle = "Gauge"
const componentDescription =
  "A circular gauge/meter component for displaying percentages, scores, or progress with animated liquid fill effects and customizable colors."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-gauge",
})


const basicCode = `import { GlassGauge } from "@/components/glass-gauge"

<GlassGauge value={75} label="Progress" />`

const sizesCode = `<GlassGauge value={60} size="sm" />
<GlassGauge value={75} size="md" />
<GlassGauge value={90} size="lg" />`

const colorsCode = `<GlassGauge value={85} colorScheme="cyan" />
<GlassGauge value={70} colorScheme="purple" />
<GlassGauge value={95} colorScheme="gradient" />`

export default function GaugePage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-gauge" />

      <ComponentPreview
        title="Basic Gauge"
        description="A simple gauge with value and label."
        preview={<GlassGauge value={75} label="Progress" />}
        code={basicCode}
      />

      <ComponentPreview
        title="Sizes"
        description="Available in small, medium, and large sizes."
        preview={
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-8 py-4 sm:py-0">
            <GlassGauge value={60} size="sm" label="Small" />
            <GlassGauge value={75} size="md" label="Medium" />
            <GlassGauge value={90} size="lg" label="Large" />
          </div>
        }
        code={sizesCode}
      />

      <ComponentPreview
        title="Color Schemes"
        description="Multiple color schemes including gradient option."
        preview={
          <div className="flex flex-wrap items-center justify-center gap-8">
            <GlassGauge value={85} colorScheme="cyan" label="Cyan" />
            <GlassGauge value={70} colorScheme="purple" label="Purple" />
            <GlassGauge value={60} colorScheme="green" label="Green" />
            <GlassGauge value={95} colorScheme="gradient" label="Gradient" />
          </div>
        }
        code={colorsCode}
      />
    </div>
  )
}
