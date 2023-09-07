import fs from "fs";
import { createTranslator } from "next-intl";
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
      thumb: matterResult.data.thumb,
      slug: filename.replace(".md", ""),
      locale,
    };
  });

  return posts;
};

export const generateStaticParams = () => {
  return [{ locale: "en-us" }, { locale: "pt-br" }];
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const tEn = createTranslator({ locale: "en-us", messages: enMessages });
  const tPt = createTranslator({ locale: "pt-br", messages: ptMessages });

  const t = locale === "pt-br" ? tPt : tEn;

  return {
    title: t("blog.metadataTitle"),
    description: t("blog.metadataDescription"),
    metadataBase: new URL("https://rafaelf.dev"),
  };
}

const PostPage = ({ params }: { params: { locale: string } }) => {
  const tEn = createTranslator({ locale: "en-us", messages: enMessages });
  const tPt = createTranslator({ locale: "pt-br", messages: ptMessages });

  const locale = params.locale;
  const t = locale === "pt-br" ? tPt : tEn;

  const postMetadata = getPostMetadata(locale).sort((a, b) => {
    const strDate1 = a.date;
    const strDate2 = b.date;

    const year1 = parseInt(strDate1.substring(0, 4));
    const month1 = parseInt(strDate1.substring(5, 7));
    const day1 = parseInt(strDate1.substring(8, 10));

    const year2 = parseInt(strDate2.substring(0, 4));
    const month2 = parseInt(strDate2.substring(5, 7));
    const day2 = parseInt(strDate2.substring(8, 10));

    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);

    return date2.getTime() - date1.getTime();
  });
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <section className="px-6 max-w-full md:max-w-4xl lg:max-w-7xl pt-6">
      <h1 className="text-2xl text-darkblue font-bold">{t("blog.blogPosts")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">{postPreviews}</div>
    </section>
  );
};

export default PostPage;
