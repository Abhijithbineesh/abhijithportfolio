import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site export (Remove this if using SSR or API routes)
  output: "export", 

  // Allow TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint errors in production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: "abhijith-k-b",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload more source maps for better debugging
  widenClientFileUpload: true,

  // Automatically annotate React components
  reactComponentAnnotation: {
    enabled: true,
  },

  // Hide source maps from client bundles
  hideSourceMaps: true,

  // Reduce bundle size by tree-shaking Sentry logs
  disableLogger: true,

  // Enable Vercel Cron Monitors (only for Edge Functions)
  automaticVercelMonitors: true,
});
