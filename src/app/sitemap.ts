import { MetadataRoute } from "next";
import { getPostsFilenames } from "./[locale]/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://rafaelf.dev";
  const { enUS, ptBR } = getPostsFilenames();

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
