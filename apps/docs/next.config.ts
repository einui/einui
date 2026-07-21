import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Next.js configuration
   * - Enable Cache Components for Next.js 16 (PPR / Cache Components)
   * - Recommended runtime flags for improved DX and smaller builds
   */
  reactStrictMode: true,
  cacheComponents: true,
};

export default nextConfig;
