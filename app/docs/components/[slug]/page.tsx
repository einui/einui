import { Suspense } from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getAllComponentSlugs, getComponentBySlug } from "@/lib/docs/component-registry"
import { DocPageSkeleton } from "@/components/docs/doc-page-skeleton"
import { ComponentDocPage } from "@/components/docs/component-doc-page"
import { buildComponentMetadata } from "@/lib/seo"

// Generate static params for all components at build time
export function generateStaticParams() {
  return getAllComponentSlugs().map((slug) => ({ slug }))
}

// Generate metadata dynamically for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const component = getComponentBySlug(slug)

  if (!component) {
    return {
      title: "Component Not Found - Ein UI",
    }
  }

  return buildComponentMetadata({
    title: component.title,
    description: component.description,
    slug,
  }) as Metadata
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const component = getComponentBySlug(slug)

  if (!component) {
    notFound()
  }

  return (
    <Suspense fallback={<DocPageSkeleton />}>
      <ComponentDocPage component={component} />
    </Suspense>
  )
}
