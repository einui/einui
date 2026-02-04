"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CLIInstall } from "@/components/docs/cli-install";
import { getComponentHeading, getComponentIntro } from "@/lib/seo";

import { Command } from "lucide-react";
import {
  GlassCommandTrigger,
  GlassCommandPalette,
} from "@/registry/innovative/glass-command-palette";
import { GlassButton } from "@/registry/liquid-glass/glass-button";

const componentTitle = "Command Palette";
const componentDescription =
  "A spotlight-style command palette with keyboard navigation, search filtering, customizable positioning, and glass morphism styling. Press Cmd+K to open.";

const basicCode = `import { GlassCommandPalette, GlassCommandTrigger } from "@/components/glass-command-palette";
import { useState } from "react";

export function Demo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <GlassCommandTrigger onClick={() => setOpen(true)} />
      <GlassCommandPalette
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}`;

const positionCode = `// Available positions: "center" | "top" | "bottom" | "left" | "right"
<GlassCommandPalette
  open={open}
  onOpenChange={setOpen}
  position="top"  // Slides from top
/>

<GlassCommandPalette
  position="left"  // Sidebar style on left
/>

<GlassCommandPalette
  position="right"  // Sidebar style on right
/>`;

const customGroupsCode = `const customGroups = [
  {
    label: "Pages",
    items: [
      { id: "home", label: "Home", icon: <Home />, href: "/" },
      { id: "about", label: "About", icon: <Info />, href: "/" },
    ],
  },
  {
    label: "Actions",
    items: [
      { id: "new", label: "New Project", icon: <Plus />, action: () => {} },
    ],
  },
]

<GlassCommandPalette groups={customGroups} />`;

type Position = "center" | "top" | "bottom" | "left" | "right";

export default function CommandPalettePage() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>("center");

  const handlePositionChange = (newPosition: Position) => {
    setPosition(newPosition);
    setOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <GlassCommandPalette open={open} onOpenChange={setOpen} position={position} />
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-command-palette" />

      <ComponentPreview
        title="Basic Command Palette"
        description="A searchable command palette with keyboard navigation. Press Cmd/Ctrl+K to toggle."
        preview={
          <div className="flex flex-col items-center gap-4">
            <GlassCommandTrigger onClick={() => handlePositionChange("center")} />
            <p className="text-white/40 text-sm">
              Or press <kbd className="px-2 py-1 rounded bg-white/10 text-white/60">Cmd+K</kbd>
            </p>
          </div>
        }
        code={basicCode}
      />

      <ComponentPreview
        title="Position Variants"
        description="The command palette can be positioned at different locations: center (default), top, bottom, left, or right."
        preview={
          <div className="flex flex-wrap gap-3 justify-center">
            <GlassButton variant="outline" onClick={() => handlePositionChange("top")}>
              Top Position
            </GlassButton>
            <GlassButton variant="outline" onClick={() => handlePositionChange("bottom")}>
              Bottom Position
            </GlassButton>
            <GlassButton variant="outline" onClick={() => handlePositionChange("left")}>
              Left Sidebar
            </GlassButton>
            <GlassButton variant="outline" onClick={() => handlePositionChange("right")}>
              Right Sidebar
            </GlassButton>
          </div>
        }
        code={positionCode}
      />

      <ComponentPreview
        title="Trigger Button"
        description="A styled trigger button that hints at the keyboard shortcut."
        preview={
          <div className="flex gap-4">
            <GlassCommandTrigger />
            <GlassButton variant="primary" onClick={() => handlePositionChange("center")}>
              <Command className="w-4 h-4" />
              Open Commands
            </GlassButton>
          </div>
        }
        code={customGroupsCode}
      />
    </div>
  );
}
