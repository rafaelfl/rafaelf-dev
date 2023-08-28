import Link from "next/link";
import { createTranslator, createFormatter } from "next-intl";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import PreBlock from "./PreBlock";

import enMessages from "@/../locales/en-us.json";
import ptMessages from "@/../locales/pt-br.json";

const getPostContent = (slug: string, locale: string) => {
  const file = `posts/${locale}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return { content: matterResult.content, header: matterResult.data };
};

export const generateStaticParams = () => {
  return [
    { slug: "aws-quickstart", locale: "en-us" },
    { slug: "aws-quickstart", locale: "pt-br" },
  ];
};

const PostPage = ({ params }: { params: { slug: string; locale: string } }) => {
  const tEn = createTranslator({ locale: "en-us", messages: enMessages });
  const tPt = createTranslator({ locale: "pt-br", messages: ptMessages });

  const slug = params.slug;
  const locale = params.locale;

  const t = locale === "pt-br" ? tPt : tEn;

  const { content, header } = getPostContent(slug, locale);

  const strDate = header.date;

  // format: yyyy-mm-dd
  const year = parseInt(strDate.substring(0, 4));
  const month = parseInt(strDate.substring(5, 7));
  const day = parseInt(strDate.substring(8, 10));

  const format = createFormatter({ locale });
  const publishedDate = format.dateTime(new Date(year, month - 1, day), { dateStyle: "long" });

  return (
    <div className="px-6 max-w-full md:max-w-4xl lg:max-w-7xl pt-6">
      <div className="flex justify-start w-full mb-6 hover:underline">
        <Link href="/posts" className="font-bold text-blueblog hover:underline">
          &lt;&lt; {t("blog.backToPosts")}
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold">{header.title}</h1>
      <h2 className="text-xl md:text-2xl text-darkDarkGray">{header.subtitle}</h2>
      <h2 className="pb-10">{publishedDate}</h2>

      <article className="prose lg:prose-lg">
        <Markdown
          options={{
            overrides: {
              pre: {
                component: PreBlock,
              },
              img: {
                props: {
                  className: "max-w-full mx-auto mt-6 mb-2",
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </article>
    </div>
  );
};

export default PostPage;
