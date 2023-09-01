import { MetadataRoute } from "next";

import fs from "fs";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en-us", "pt-br"];

  const enUS: Array<string> = [];
  const ptBR: Array<string> = [];

  locales.forEach((locale) => {
    const dir = `posts/${locale}`;
    const files = fs.readdirSync(dir);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    if (locale === "en-us") {
      enUS.push(...markdownPosts);
    }

    if (locale === "pt-br") {
      ptBR.push(...markdownPosts);
    }
  });

  return [
    {
      url: "https://rafaelf.dev",
      lastModified: new Date(),
    },
    {
      url: "https://rafaelf.dev/posts",
      lastModified: new Date(),
    },
    ...enUS.map((slug) => ({
      url: `https://rafaelf.dev/posts/${slug.replace(".md", "")}`,
      lastModified: new Date(),
    })),
    ...ptBR.map((slug) => ({
      url: `https://rafaelf.dev/pt-br/posts/${slug.replace(".md", "")}`,
      lastModified: new Date(),
    })),
  ];
}
