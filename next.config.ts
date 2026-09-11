import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Collapse the Vercel preview host onto the live domain so Google never
      // indexes two copies of the site (the SEO audit flagged this).
      {
        source: "/:path*",
        has: [{ type: "host", value: "nz-vegetable-wholesaler.vercel.app" }],
        destination: "https://www.thevegie.co.nz/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "thevegie.co.nz" }],
        destination: "https://www.thevegie.co.nz/:path*",
        permanent: true,
      },
      // Old query-string category filter -> crawlable category landing pages.
      {
        source: "/shop",
        has: [{ type: "query", key: "category", value: "(?<category>[a-z-]+)" }],
        destination: "/shop/category/:category",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
