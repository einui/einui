"use client"

import * as React from "react"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const GlassBreadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
GlassBreadcrumb.displayName = "GlassBreadcrumb"

const GlassBreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm",
        "px-4 py-2 rounded-xl",
        "bg-white/5 backdrop-blur-xl border border-white/10",
        className,
      )}
      {...props}
    />
  ),
)
GlassBreadcrumbList.displayName = "GlassBreadcrumbList"

const GlassBreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
)
GlassBreadcrumbItem.displayName = "GlassBreadcrumbItem"

const GlassBreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "text-white/60 transition-colors duration-200",
        "hover:text-white hover:underline underline-offset-4",
        "focus:outline-none focus:text-white",
        className,
      )}
      {...props}
    />
  )
})
GlassBreadcrumbLink.displayName = "GlassBreadcrumbLink"

const GlassBreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-medium text-white", className)}
      {...props}
    />
  ),
)
GlassBreadcrumbPage.displayName = "GlassBreadcrumbPage"

const GlassBreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5 text-white/40", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
)
GlassBreadcrumbSeparator.displayName = "GlassBreadcrumbSeparator"

const GlassBreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(
      "flex h-8 w-8 items-center justify-center rounded-lg",
      "bg-white/5 hover:bg-white/10 transition-colors",
      "text-white/60",
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
GlassBreadcrumbEllipsis.displayName = "GlassBreadcrumbEllipsis"

export {
  GlassBreadcrumb,
  GlassBreadcrumbList,
  GlassBreadcrumbItem,
  GlassBreadcrumbLink,
  GlassBreadcrumbPage,
  GlassBreadcrumbSeparator,
  GlassBreadcrumbEllipsis,
}
