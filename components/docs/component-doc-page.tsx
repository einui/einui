"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { getAllComponentSlugs, type ComponentConfig } from "@/lib/docs/component-registry"
import { getComponentHeading, getComponentIntro } from "@/lib/seo"

interface ComponentDocPageProps {
  component: ComponentConfig
}

export function ComponentDocPage({ component }: ComponentDocPageProps) {
  const heading = getComponentHeading(component.title)
  const intro = getComponentIntro(component.title, component.description)
  const slugs = getAllComponentSlugs()
  const currentIndex = slugs.indexOf(component.slug)
  const previousSlug = currentIndex > 0 ? slugs[currentIndex - 1] : undefined
  const nextSlug = currentIndex >= 0 ? slugs[currentIndex + 1] : undefined

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={heading}
        description={intro}
        category={component.category}
        registryName={component.registryName}
        exampleCount={component.examples.length}
      />

      <CLIInstall componentName={component.registryName} />

      {(component.usage || component.dependencies?.length) && (
        <aside className="mb-14 grid gap-4 rounded-2xl border border-white/10 bg-white/2.5 p-5 sm:grid-cols-[1fr_auto] sm:items-start">
          {component.usage && (
            <div>
              <h2 className="text-sm font-medium text-white">When to use it</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">{component.usage}</p>
            </div>
          )}
          {component.dependencies?.length ? (
            <div className="sm:min-w-44">
              <h2 className="text-sm font-medium text-white">Dependencies</h2>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:justify-end">
                {component.dependencies.map((dependency) => (
                  <code
                    key={dependency}
                    className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-cyan-200/75"
                  >
                    {dependency}
                  </code>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      )}

      {component.examples.map((example, index) => (
        <ComponentPreview
          key={index}
          title={example.title}
          description={example.description}
          preview={example.preview}
          code={example.code}
        />
      ))}

      {component.relatedComponents?.length ? (
        <section className="mb-16 border-t border-white/10 pt-8">
          <h2 className="text-sm font-medium text-white">Related components</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {component.relatedComponents.map((slug) => (
              <Link
                key={slug}
                href={`/docs/components/${slug}`}
                className="rounded-lg border border-white/10 bg-white/2.5 px-3 py-2 text-sm text-white/65 transition-colors hover:border-cyan-300/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                {slug.replace("glass-", "")}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <nav
        className="mt-4 flex items-stretch justify-between gap-4 border-t border-white/10 pt-8"
        aria-label="Component navigation"
      >
        {previousSlug ? (
          <Link
            href={`/docs/components/${previousSlug}`}
            className="group flex max-w-[48%] items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-left transition-colors hover:border-cyan-300/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            <ArrowLeft className="size-4 shrink-0 text-white/40 transition-transform group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="block text-xs text-white/40">Previous</span>
              <span className="block truncate text-sm text-white/80">
                {previousSlug.replace("glass-", "")}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {nextSlug ? (
          <Link
            href={`/docs/components/${nextSlug}`}
            className="group flex max-w-[48%] items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-right transition-colors hover:border-cyan-300/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            <span className="min-w-0">
              <span className="block text-xs text-white/40">Next</span>
              <span className="block truncate text-sm text-white/80">
                {nextSlug.replace("glass-", "")}
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
