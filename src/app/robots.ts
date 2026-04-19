import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
