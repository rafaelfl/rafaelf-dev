import { MetadataRoute } from "next";
import { generateStaticParams } from "./[locale]/posts/[slug]/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://rafaelf.dev";

  const staticParams = generateStaticParams();

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/posts`,
      lastModified: new Date(),
    },
    ...staticParams.map((param) => {
      const locale = param.locale === "pt-br" ? "/pt-br/" : "/";

      return { url: `${baseURL}/posts${locale}${param.slug}`, lastModified: new Date() };
    }),
  ];
}
