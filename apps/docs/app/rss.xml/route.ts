import { generateRegistryRssFeed } from "@wandry/analytics-sdk";
import type { NextRequest } from "next/server";
import { cacheLife } from "next/cache";

// MIGRATED from: export const revalidate = 3600
// Migration: Extracted RSS generation to a cached helper. To preserve ~1 hour revalidation,
// the helper uses `"use cache"` plus `cacheLife('hours')`.
async function getRssXml(baseUrl: string) {
  "use cache";
  cacheLife("hours");

  return await generateRegistryRssFeed({
    baseUrl,
    rss: {
      title: "@einui",
      description: "Subscribe to @einui updates",
      link: "https://ui.eindev.ir",
      pubDateStrategy: "githubLastEdit",
    },
    github: {
      owner: "ehsanghaffar",
      repo: "ehsanghaffar/einui",
      token: process.env.GITHUB_TOKEN,
    },
    componentsUrl: '/docs/components'
  });

}

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin;

  const rssXml = await getRssXml(baseUrl);

  if (!rssXml) {
    return new Response("RSS feed not available", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}