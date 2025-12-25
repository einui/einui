"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import type { ComponentConfig } from "@/lib/docs/component-registry"

interface ComponentDocPageProps {
  component: ComponentConfig
}

export function ComponentDocPage({ component }: ComponentDocPageProps) {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader title={component.title} description={component.description} />

      <CLIInstall componentName={component.registryName} />

      {component.examples.map((example, index) => (
        <ComponentPreview
          key={index}
          title={example.title}
          description={example.description}
          preview={example.preview}
          code={example.code}
        />
      ))}
    </div>
  )
}
