import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { Sparkles, Zap, Shield } from "lucide-react"
import { GlassMorphCard } from "@/registry/innovative/glass-morph-card"
import { buildComponentMetadata, getComponentHeading, getComponentIntro } from "@/lib/seo"

const componentTitle = "Morph Card"
const componentDescription =
  "A 3D perspective card that responds to mouse movement with dynamic lighting effects and tilt animations."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-morph-card",
})

const basicCode = `import { GlassMorphCard } from "@/components/glass-morph-card"

<GlassMorphCard>
  <div className="p-6">
    <h3>Interactive Card</h3>
    <p>Hover to see the 3D effect</p>
  </div>
</GlassMorphCard>`

const glowColorsCode = `<GlassMorphCard glowColor="purple" intensity={20}>
  <div className="p-6">Content</div>
</GlassMorphCard>

// Available colors: cyan, purple, blue, pink, green`

export default function MorphCardPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-morph-card" />

      <ComponentPreview
        title="Basic Morph Card"
        description="Hover over the card to see the 3D tilt and lighting effect."
        preview={
          <GlassMorphCard className="w-full max-w-sm">
            <div className="p-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Interactive Card</h3>
              <p className="text-white/60 text-sm">
                Move your cursor over this card to see the 3D perspective effect with dynamic lighting.
              </p>
            </div>
          </GlassMorphCard>
        }
        code={basicCode}
      />

      <ComponentPreview
        title="Glow Color Variants"
        description="Different glow colors for various contexts."
        preview={
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <GlassMorphCard glowColor="cyan">
              <div className="p-4 text-center">
                <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Cyan</p>
              </div>
            </GlassMorphCard>
            <GlassMorphCard glowColor="purple">
              <div className="p-4 text-center">
                <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Purple</p>
              </div>
            </GlassMorphCard>
            <GlassMorphCard glowColor="green">
              <div className="p-4 text-center">
                <Shield className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-white text-sm">Green</p>
              </div>
            </GlassMorphCard>
          </div>
        }
        code={glowColorsCode}
      />
    </div>
  )
}
