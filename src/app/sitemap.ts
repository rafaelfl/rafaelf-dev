import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllSlugs } from "@/lib/posts";
import { languageAlternates, localizedUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const urls: MetadataRoute.Sitemap = [];

  // Each page is listed once per locale, with hreflang links to its other versions.
  const add = (path: string, locales: readonly string[]) => {
    const languages = languageAlternates(path, locales);
    for (const locale of locales) {
      urls.push({
        url: localizedUrl(locale, path),
        lastModified,
        alternates: { languages },
      });
    }
  };

  add("", routing.locales);
  add("/posts", routing.locales);

  const slugs = new Set(routing.locales.flatMap((l) => getAllSlugs(l)));
  for (const slug of slugs) {
    add(
      `/posts/${slug}`,
      routing.locales.filter((l) => getAllSlugs(l).includes(slug)),
    );
  }

  return urls;
}
