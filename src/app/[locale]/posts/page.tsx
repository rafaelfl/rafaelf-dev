import { createTranslator } from "next-intl";
import fs from "fs";
import matter from "gray-matter";

import PostPreview from "../components/PostPreview/PostPreview";

import enMessages from "@/../locales/en-us.json";
import ptMessages from "@/../locales/pt-br.json";

const getPostMetadata = (locale: string) => {
  const dir = `posts/${locale}`;

  const files = fs.readdirSync(dir);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`posts/${locale}/${filename}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace(".md", ""),
      locale,
    };
  });

  return posts;
};

export const generateStaticParams = () => {
  return [
    { slug: "aws-quickstart", locale: "en-us" },
    { slug: "aws-quickstart", locale: "pt-br" },
    { slug: "gpt-3-generated-poetry", locale: "en-us" },
    { slug: "gpt-3-generated-poetry", locale: "pt-br" },
    { slug: "qr-code-micro-app", locale: "en-us" },
    { slug: "qr-code-micro-app", locale: "pt-br" },
    { slug: "retro-games-with-pico-8", locale: "en-us" },
    { slug: "retro-games-with-pico-8", locale: "pt-br" },
    { slug: "saas-starter-app", locale: "en-us" },
    { slug: "saas-starter-app", locale: "pt-br" },
    { slug: "wolfhunter", locale: "en-us" },
    { slug: "wolfhunter", locale: "pt-br" },
  ];
};

const PostPage = ({ params }: { params: { slug: string; locale: string } }) => {
  const tEn = createTranslator({ locale: "en-us", messages: enMessages });
  const tPt = createTranslator({ locale: "pt-br", messages: ptMessages });

  const locale = params.locale;
  const t = locale === "pt-br" ? tPt : tEn;

  const postMetadata = getPostMetadata(locale);
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <section className="px-6 max-w-full md:max-w-4xl lg:max-w-7xl pt-6">
      <h1 className="text-2xl text-darkblue font-bold">{t("blog.blogPosts")}</h1>
      <div className="grid grid-cols-2 gap-x-12">{postPreviews}</div>
    </section>
  );
};

export default PostPage;
