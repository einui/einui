import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TopHeader } from "@/components/top-header";
import { MotionProvider } from "@/components/motion-config";
import { SITE_URL, generateSoftwareLibraryJsonLd } from "@/lib/seo";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ein UI - Liquid Glass Component Library for React & Next.js",
    template: "%s | Ein UI",
  },
  description:
    "Open-source liquid glass UI components for React & Next.js. Shadcn-compatible, accessible, and built with Tailwind CSS.",
  generator: "Next.js",
  applicationName: "Ein UI",
  referrer: "origin-when-cross-origin",
  keywords: [
    "shadcn",
    "ui components",
    "liquid glass",
    "glass morphism",
    "tailwind css",
    "react components",
    "nextjs",
    "radix ui",
    "framer motion",
    "component library",
    "design system",
  ],
  authors: [{ name: "Ehsan", url: "https://eindev.ir" }],
  creator: "Ein",
  publisher: "Ein",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ein UI",
    title: "Ein UI - Liquid Glass UI Library for React & Next.js",
    description:
      "Open-source liquid glass UI components for React & Next.js. Shadcn-compatible and accessible.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "Ein UI - Liquid Glass Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ein UI - Liquid Glass UI Library for React & Next.js",
    description: "Open-source liquid glass UI components for React & Next.js.",
    creator: "@ehsanghaffar",
    site: "@einui",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Ein UI",
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.png`,
                  },
                  sameAs: ["https://github.com/ehsanghaffar", "https://twitter.com/ehsanghaffar"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Ein UI",
                  description: "Liquid Glass Component Library for React & Next.js",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: `${SITE_URL}/docs?search={search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                generateSoftwareLibraryJsonLd(),
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>
          <TopHeader />
          <div>{children}</div>
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
