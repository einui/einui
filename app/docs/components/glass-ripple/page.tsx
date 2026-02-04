import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassRipple, GlassRippleButton } from "@/registry/innovative/glass-ripple"
import { buildComponentMetadata, getComponentHeading, getComponentIntro } from "@/lib/seo"

const componentTitle = "Ripple"
const componentDescription =
  "Material Design-inspired ripple effect components for touch feedback, with customizable colors and liquid glass styling."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-ripple",
})

const basicCode = `import { GlassRippleButton } from "@/components/glass-ripple"

<GlassRippleButton variant="primary">
  Click Me
</GlassRippleButton>`

const wrapperCode = `import { GlassRipple } from "@/components/glass-ripple"

<GlassRipple color="cyan" className="rounded-xl">
  <div className="p-6 bg-white/10">
    Click anywhere in this area
  </div>
</GlassRipple>`

export default function RipplePage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-ripple" />

      <ComponentPreview
        title="Ripple Buttons"
        description="Buttons with built-in ripple effects on click."
        preview={
          <div className="flex flex-wrap gap-4">
            <GlassRippleButton variant="default">Default</GlassRippleButton>
            <GlassRippleButton variant="primary">Primary</GlassRippleButton>
            <GlassRippleButton variant="outline">Outline</GlassRippleButton>
          </div>
        }
        code={basicCode}
      />

      <ComponentPreview
        title="Ripple Container"
        description="Wrap any element to add ripple effects on interaction."
        preview={
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <GlassRipple color="cyan" className="rounded-xl">
              <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-center">
                <p className="text-white/80">Cyan Ripple</p>
              </div>
            </GlassRipple>
            <GlassRipple color="purple" className="rounded-xl">
              <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-center">
                <p className="text-white/80">Purple Ripple</p>
              </div>
            </GlassRipple>
          </div>
        }
        code={wrapperCode}
      />
    </div>
  )
}
