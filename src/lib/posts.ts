import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { routing } from "@/i18n/routing";

const POSTS_ROOT = path.join(process.cwd(), "content/posts");

export type PostFrontmatter = {
  title: string;
  subtitle: string;
  date: string;
  thumb?: string;
};

export type PostListItem = PostFrontmatter & { slug: string };

function postsDir(locale: string) {
  return path.join(POSTS_ROOT, locale);
}

export function getPostFilePath(locale: string, slug: string) {
  return path.join(postsDir(locale), `${slug}.md`);
}

export function getAllSlugs(locale: string): string[] {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(locale: string): PostListItem[] {
  const slugs = getAllSlugs(locale);
  const posts = slugs.map((slug) => {
    const raw = fs.readFileSync(getPostFilePath(locale, slug), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      ...(data as PostFrontmatter),
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(locale: string, slug: string) {
  const filePath = getPostFilePath(locale, slug);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as PostFrontmatter,
    content,
    slug,
  };
}

export function getAllPostStaticParams(): { locale: string; slug: string }[] {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of getAllSlugs(locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}
