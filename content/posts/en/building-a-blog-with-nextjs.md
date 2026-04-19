---
title: "Building a blog with Next.js 13"
subtitle: "Create a blog from markdown files using Next.js 13"
date: "2023-08-30"
thumb: "/images/blog-nextjs-thumb.png"
---

In the modern age of web development, creating a blog has never been easier. With the right tools and frameworks, you can have a dynamic and stylish blog up and running in no time. One such powerful combination is using Markdown files and Next.js.

Markdown is a lightweight markup language that's easy to write and understand, while Next.js is a popular React framework that allows you to build static and server-rendered applications with ease. In this tutorial, we'll guide you through the process of creating a static blog using Markdown files and Next.js.

## Why Markdown?

Markdown is a plain text format that's easy to write and easy to read, making it a favorite among content creators. With Markdown, you can focus on the content itself, rather than getting bogged down in complex HTML tags.

## Setting Up Your Next.js Project

1. **Creating a New Next.js Project**

Start by creating a new Next.js project. If you haven't already installed Node.js and npm (Node Package Manager), you'll need them.

```bash
yarn create next-app
```

You will then be asked the following prompts (answer as indicated):

```bash
What is your project named?  my-static-blog
Would you like to use TypeScript?  Yes
Would you like to use ESLint?  Yes
Would you like to use Tailwind CSS?  Yes
Would you like to use `src/` directory?  Yes
Would you like to use App Router? (recommended)  Yes
Would you like to customize the default import alias? No / Yes
```

Once you've answered the prompts, a new project will be created with the correct configuration depending on your answers.

2. **Navigating to the Project Directory**

Move into the newly created project directory:

```bash
cd my-static-blog
```

## Structuring Your Blog Content

1. **Creating a "posts" Directory**

In the root of your project, create a directory named "posts". This is where you'll store your Markdown files, each representing a blog post.

2. **Writing Markdown Blog Posts**

Inside the "posts" directory, create Markdown files for each blog post. A simple structure for a Markdown file might look like this:

```bash
---
title: "Your Blog Post Title"
subtitle: "Your Blog Post Subtitle"
date: "2023-08-30"
thumb: "https://rafaelf.dev/images/blog-nextjs-thumb.png"
---

# Your Blog Post Title

Your content goes here.
```

The section between the "---" lines is called frontmatter, where you can define metadata for your blog post. Save the file with any name you want but with the ".md" extension (e.g., `first-article.md`).

## Rendering Markdown Content with Next.js

1. **Parsing Markdown**

To render Markdown content, we'll use the markdown-to-jsx, gray-matter and react-syntax-highlighter libraries. Install them in your project:

```bash
yarn add markdown-to-jsx gray-matter react-syntax-highlighter
```

Also you need to add the following development dependencies:

```bash
yarn add -D @tailwindcss/typography @types/react-syntax-highlighter
```

2. **Creating a Blog Posts Listing Page**

In the app folder, create a `posts` directory with a `page.tsx` file. You can use the following code to read the existing markdown files.

```jsx
import fs from "fs";
import matter from "gray-matter";

import PostPreview from "./PostPreview";

const getPostMetadata = () => {
  const dir = `posts/`;

  const files = fs.readdirSync(dir);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`posts/${filename}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumb: matterResult.data.thumb,
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
};

export const generateStaticParams = () => {
  return [{ locale: "en-us" }, { locale: "pt-br" }];
};

export const metadata: Metadata = {
  title:  "Posts Page",
  description: "Posts Page Description",
}

const PostPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <section className="px-6 max-w-full md:max-w-4xl lg:max-w-7xl pt-6">
      <h1 className="text-2xl font-bold">Blog posts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">{postPreviews}</div>
    </section>
  );
};

export default PostPage;
```

This page is processed in the server side, and reads all `.md` files present in the `posts/` directory. The metadata information is provided to improve the page SEO, and the `generateStaticParams` function is provided to force Next.js to use (Server Side Generation) for that page.

The `gray-matter` package is used to read the files metadata and show them using the `PostPreview` component (which should be saved in the `posts/` directory as `PostPreview.tsx`).

```jsx
import Image from "next/image";
import Link from "next/link";

interface PostPreviewProps {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  thumb: string;
}

const PostPreview = (post: PostPreviewProps) => {
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
              className="w-7/12 max-h-40 object-contain mx-auto"
            />
          </figure>
        </Link>
      )}

      <p className="text-sm text-slate-400">{post.date}</p>

      <Link href={`/posts/${post.slug}`}>
        <h2 className="font-bold hover:underline text-lg mb-2">{post.title}</h2>
      </Link>
      <p className="text-slate-700 mb-4">{post.subtitle}</p>
    </article>
  );
};

export default PostPreview;
```

The `PostPreview` component receives the post properties and render a link to the blog post. The thumb image is optionally rendered, as well as the post title, subtitle and date.

3. **Creating a Component to Render Markdown**

In the `posts` directory, create a new subdirectory `[slug]` with a `page.tsx` file. In this file, we need to set up a page to render the markdown:

```jsx
import Link from "next/link";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import PreBlock from "./PreBlock";

const getPostContent = (slug: string) => {
  const file = `posts/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return { content: matterResult.content, header: matterResult.data };
};

export const generateStaticParams = () => {
  return [
    { slug: "my-blog-post" },
  ];
};

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const { header } = getPostContent(slug, locale);

  return {
    title: header.title,
    description: header.subtitle,
    openGraph: {
      images: [
        {
          url: header.thumb,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const { content, header } = getPostContent(slug);
  const publishedDate = header.date;

  return (
    <>
      {header.thumb && (
        <div
          className={`bg-slate-200 px-8 md:px-16 h-52 w-full bg-fixed bg-contain bg-no-repeat`}
          style={{
            backgroundImage: `url('${header.thumb}')`,
            backgroundPosition: "center 90px",
            backgroundSize: "auto 180px",
          }}
        />
      )}

      <div className="px-6 max-w-full md:max-w-4xl lg:max-w-7xl pt-6">
        <div className="flex justify-start w-full mb-6 hover:underline">
          <Link href="/posts" className="font-bold hover:underline mt-6">
            &lt;< Back to Posts
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">{header.title}</h1>
        <h2 className="text-xl my-1">{header.subtitle}</h2>
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
    </>
  );
};

export default PostPage;
```

The `gray-matter` package is used to read the metadata details from an specific file. The markdown filename is determined by the URL slug. By default, this page process the markdown dynamically on the server side. To make this process more efficient, we have used SSG to pre-build the page. To do that, we need to include the article slug in the `generateStaticParams` return object. Based on that information, the `generateMetadata` function is used to provide some dynamic metadata information for the page, improving the page SEO.

The `Markdown` tag (from `markdown-to-jsx`) allows to customize the article output styling. In the code above, the `pre` tag is replaced by the `PreBlock` component, improving the source code styling (including a highlighter) in the articles. So, save the following code in `posts/[slug]/PreBlock.tsx`:

```jsx
"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ className, children }: { className: string; children: string }) => {
  let lang = "text"; // default monospaced text
  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
  }
  return (
    <SyntaxHighlighter language="javascript" style={CodeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({ children, ...rest }: { children: JSX.Element }) => {
  if ("type" in children && children["type"] === "code") {
    return CodeBlock(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
};

export default PreBlock;
```

You also need to add the `@tailwindcss/typography` package to your `tailwind.config.js`, as follows:

```js
/** @type {import('tailwindcss').Config} */

module.exports = {
  ...,
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.

Finally, to ensure that your project will be able to access the blog thumb from https://rafaelf.dev/, you need to add this to your `next.config.js` file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    ...,
    images: {
        domains: ['rafaelf.dev'],
    },
}

module.exports = nextConfig
```

## Running Your Static Blog

With everything set up, you can now run your static blog locally:

```bash
yarn dev
```

Visit http://localhost:3000/posts in your browser to see your blog in action. Your first article will be listed with a link pointing to the article, with the same slug as the markdown filename (i.e., http://localhost:3000/posts/first-article).

## Conclusion

Creating a static blog using Markdown files and Next.js combines the simplicity of Markdown with the power of a modern web framework. This approach results in a fast and SEO-friendly blog that's easy to manage and maintain. By following this tutorial, you've gained the knowledge to create your own static blog and can further enhance it with additional features and customizations. Happy blogging!
