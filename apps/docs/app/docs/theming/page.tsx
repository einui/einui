import Link from "next/link"
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "@einui/registry"
import { GlassButton } from "@einui/registry"
import { CodeBlockWithCopy } from "@/components/docs/code-block-with-copy"
import { ArrowRight, ArrowLeft, Palette, Droplets } from "lucide-react"

export default function ThemingPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-400">
            Customization
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Theming</h1>
        <p className="text-xl text-white/60 leading-relaxed">
          Customize the look and feel of Ein UI components using CSS variables and Tailwind CSS v4.
        </p>
      </div>

      {/* CSS Variables */}
      <GlassCard className="mb-8">
        <GlassCardHeader>
          <GlassCardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-cyan-400" />
            CSS Variables
          </GlassCardTitle>
          <GlassCardDescription>Ein UI uses CSS variables for easy theming</GlassCardDescription>
        </GlassCardHeader>
        <GlassCardContent>
          <CodeBlockWithCopy
            code={`:root {
  /* Glass Effect Variables */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: 16px;

  /* Glow Colors */
  --glow-cyan: rgba(6, 182, 212, 0.3);
  --glow-purple: rgba(147, 51, 234, 0.3);
  --glow-pink: rgba(236, 72, 153, 0.3);

  /* Text Colors */
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-muted: rgba(255, 255, 255, 0.5);
}`}
            filename="globals.css"
          />
        </GlassCardContent>
      </GlassCard>

      {/* Glass Effect Customization */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Glass Effect</h2>

        <GlassCard className="mb-6">
          <GlassCardHeader>
            <GlassCardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-400" />
              Adjusting Transparency
            </GlassCardTitle>
          </GlassCardHeader>
          <GlassCardContent className="space-y-4">
            <p className="text-white/70">
              The liquid glass effect is achieved through a combination of backdrop blur, transparent backgrounds, and
              subtle border colors.
            </p>

            <CodeBlockWithCopy
              code={`/* More transparent */
.glass-light {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
}

/* More opaque */
.glass-solid {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}`}
            />
          </GlassCardContent>
        </GlassCard>

        <GlassCard>
          <GlassCardHeader>
            <GlassCardTitle>Glow Colors</GlassCardTitle>
            <GlassCardDescription>Customize the gradient glow effects</GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent>
            <CodeBlockWithCopy
              code={`/* Custom glow gradient */
.custom-glow::before {
  background: linear-gradient(135deg,
    var(--your-color-1),
    var(--your-color-2)
  );
}

/* Animated glow */
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

.animated-glow::before {
  animation: glow-pulse 3s ease-in-out infinite;
}`}
            />
          </GlassCardContent>
        </GlassCard>
      </div>

      {/* Color Schemes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Color Schemes</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <GlassCard className="bg-linear-to-br from-cyan-500/10 to-blue-500/10">
            <GlassCardContent className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mx-auto mb-3" />
              <p className="text-white font-medium">Ocean</p>
              <p className="text-white/50 text-sm">Cyan + Blue</p>
            </GlassCardContent>
          </GlassCard>

          <GlassCard className="bg-linear-to-br from-purple-500/10 to-pink-500/10">
            <GlassCardContent className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-400 to-pink-500 mx-auto mb-3" />
              <p className="text-white font-medium">Aurora</p>
              <p className="text-white/50 text-sm">Purple + Pink</p>
            </GlassCardContent>
          </GlassCard>

          <GlassCard className="bg-linear-to-br from-emerald-500/10 to-teal-500/10">
            <GlassCardContent className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 mx-auto mb-3" />
              <p className="text-white font-medium">Forest</p>
              <p className="text-white/50 text-sm">Emerald + Teal</p>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Link href="/docs/installation">
          <GlassButton variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Installation
          </GlassButton>
        </Link>
        <Link href="/docs/dark-mode">
          <GlassButton variant="primary" className="group">
            Dark Mode
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </Link>
      </div>
    </div>
  )
}
