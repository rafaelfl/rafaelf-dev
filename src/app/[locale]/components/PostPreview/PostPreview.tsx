import Link from "next/link";
import { createFormatter, createTranslator } from "next-intl";

import enMessages from "@/../locales/en-us.json";
import ptMessages from "@/../locales/pt-br.json";
import Image from "next/image";

interface PostPreviewProps {
  locale: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  thumb: string;
}

const PostPreview = (post: PostPreviewProps) => {
  const tEn = createTranslator({ locale: "en-us", messages: enMessages });
  const tPt = createTranslator({ locale: "pt-br", messages: ptMessages });

  const locale = post.locale;
  const t = locale === "pt-br" ? tPt : tEn;

  const generatePublishedDate = (locale: string, strDate: string) => {
    // format: yyyy-mm-dd
    const year = parseInt(strDate.substring(0, 4));
    const month = parseInt(strDate.substring(5, 7));
    const day = parseInt(strDate.substring(8, 10));

    const format = createFormatter({ locale });
    const publishedDate = format.dateTime(new Date(year, month - 1, day), { dateStyle: "long" });

    return publishedDate;
  };

  return (
    <article className="my-8">
      {post.thumb && (
        <Link href={`/posts/${post.slug}`}>
          <figure className="w-full bg-slate-100 rounded-md px-5 py-8 my-6">
            <Image
              src={post.thumb}
              alt={post.title}
              width={500}
              height={500}
              className="w-7/12 max-h-36 object-contain mx-auto"
            />
          </figure>
        </Link>
      )}

      <p className="text-sm text-slate-400">{generatePublishedDate(post.locale, post.date)}</p>

      <Link href={`/posts/${post.slug}`}>
        <h2 className="font-bold text-blueblog hover:underline text-lg mb-2">{post.title}</h2>
      </Link>
      <p className="text-slate-700 mb-4">{post.subtitle}</p>
      <Link
        href={`/posts/${post.slug}`}
        className={`transition-all duration-500 border border-blueblog text-blueblog hover:bg-blueblog hover:text-white font-semibold text-sm px-4 py-3`}
      >
        <span>{t("blog.readMore")} &gt;&gt;</span>
      </Link>
    </article>
  );
};

export default PostPreview;
