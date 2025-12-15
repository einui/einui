import type React from "react"
import type { Metadata } from "next"
import { TopHeader } from "@/components/top-header"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google"
// Allow side-effect CSS imports without a type declaration (suppresses TS error)
// @ts-ignore
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ein Liquid Glass - Shadcn Component Library",
    template: "%s | Ein Liquid Glass",
  },
  description:
    "Beautiful, responsive Shadcn components with frosted glass morphism. Built for modern web applications with Tailwind CSS v4. Available as a Shadcn registry.",
  generator: "v0.app",
  keywords: ["shadcn", "ui", "components", "liquid glass", "tailwind", "react", "nextjs", "registry"],
  authors: [{ name: "Ehsan", url: "https://ein.dev" }],
  creator: "Ein",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ein Liquid Glass",
    title: "Ein Liquid Glass - Shadcn Component Library",
    description: "Beautiful, responsive Shadcn components with frosted glass morphism.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ein Liquid Glass",
    description: "Beautiful, responsive Shadcn components with frosted glass morphism.",
    creator: "@ehsan",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <TopHeader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
