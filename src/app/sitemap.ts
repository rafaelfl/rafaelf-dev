import { MetadataRoute } from "next";

import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://rafaelf.dev";
  const locales = ["en-us", "pt-br"];

  const enUS: Array<string> = [];
  const ptBR: Array<string> = [];

  locales.forEach((locale) => {
    console.log(" >>>> DIR ", path.resolve(__dirname, "."));

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
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/posts`,
      lastModified: new Date(),
    },
    ...enUS.map((slug) => ({
      url: `${baseURL}/posts/${slug.replace(".md", "")}`,
      lastModified: new Date(),
    })),
    ...ptBR.map((slug) => ({
      url: `${baseURL}/pt-br/posts/${slug.replace(".md", "")}`,
      lastModified: new Date(),
    })),
  ];
}
