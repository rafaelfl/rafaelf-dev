import fs from "fs";

export const getPostsFilenames = () => {
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

  return { enUS, ptBR };
};
