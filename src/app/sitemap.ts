import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllSlugs } from "@/lib/posts";

const defaultSiteUrl = "https://rafaelf.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? defaultSiteUrl;
  const lastModified = new Date();

  const urls: MetadataRoute.Sitemap = [
    { url: `${baseURL}/`, lastModified },
    { url: `${baseURL}/pt`, lastModified },
    { url: `${baseURL}/posts`, lastModified },
    { url: `${baseURL}/pt/posts`, lastModified },
  ];

  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    for (const slug of getAllSlugs(locale)) {
      urls.push({
        url: `${baseURL}${prefix}/posts/${slug}`,
        lastModified,
      });
    }
  }

  return urls;
}
