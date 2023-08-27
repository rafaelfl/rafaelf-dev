import Link from "next/link";
import { createFormatter } from "next-intl";

interface PostPreviewProps {
  locale: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
}

const PostPreview = (post: PostPreviewProps) => {
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
      <Link href={`/posts/${post.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline text-lg">{post.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{generatePublishedDate(post.locale, post.date)}</p>
      <p className="text-slate-700">{post.subtitle}</p>
    </article>
  );
};

export default PostPreview;
