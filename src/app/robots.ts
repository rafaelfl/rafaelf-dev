import type { MetadataRoute } from "next";

const defaultSiteUrl = "https://rafaelf.dev";

export default function robots(): MetadataRoute.Robots {
  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? defaultSiteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
