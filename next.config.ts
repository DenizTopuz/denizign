import type { NextConfig } from "next";

/*
 * A fully static export (STATIC_EXPORT=1) for plain file hosting, such as a
 * shared hosting account. The default build is the normal Next.js build.
 */
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport
    ? { output: "export" as const, images: { unoptimized: true }, trailingSlash: true }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        condition: { not: { path: /\.module\.css$/ } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
