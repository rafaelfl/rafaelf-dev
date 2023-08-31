---
title: "Building a blog with Next.js 13"
subtitle: "Create a blog from markdown files using Next.js 13"
date: "2023-08-30"
thumb: "/images/blog-nextjs-thumb.png"
---

Na era moderna do desenvolvimento web, criar um blog nunca foi tão fácil. Com as ferramentas e estruturas certas, você pode ter um blog dinâmico e elegante instalado e funcionando rapidamente. Uma dessas combinações poderosas é usar arquivos Markdown e Next.js.

Markdown é uma linguagem de marcação leve, fácil de escrever e entender, enquanto Next.js é um *framework* React popular que permite criar aplicativos estáticos e renderizados pelo servidor com facilidade. Neste tutorial, orientarei você no processo de criação de um blog estático usando arquivos Markdown e Next.js.

## Por que Markdown?

Markdown é um formato de texto simples fácil de escrever e ler, o que o torna um favorito entre os criadores de conteúdo. Com o Markdown, você pode se concentrar no conteúdo em si, em vez de ficar preso em tags HTML complexas.

## Configurando seu projeto Next.js

1. **Criando um novo projeto Next.js**

Comece criando um novo projeto Next.js. Se você ainda não instalou o Node.js e o npm (Node Package Manager), você precisará deles.

```bash
yarn create next-app
```

Em seguida, serão solicitados os seguintes prompts (responda conforme o indicado):

```bash
What is your project named?  my-static-blog
Would you like to use TypeScript?  Yes
Would you like to use ESLint?  Yes
Would you like to use Tailwind CSS?  Yes
Would you like to use `src/` directory?  Yes
Would you like to use App Router? (recommended)  Yes
Would you like to customize the default import alias? No / Yes
```

Depois de responder às solicitações, um novo projeto será criado com a configuração correta de acordo com suas respostas.

2. **Navegando até o diretório do projeto**

Vá para o diretório do projeto recém-criado:

```bash
cd my-static-blog
```

## Estruturando o conteúdo do seu blog

1. **Criando um diretório "posts"**

Na raiz do seu projeto, crie um diretório chamado “posts”. É aqui que você armazenará seus arquivos Markdown, cada um representando uma postagem no blog.

2. **Escrevendo postagens de blog Markdown**

Dentro do diretório “posts”, crie arquivos Markdown para cada postagem do blog. Uma estrutura simples para um arquivo Markdown pode ser assim:

```bash
---
título: "Título da postagem do seu blog"
subtítulo: "Subtítulo da postagem do seu blog"
data: "2023-08-30"
polegar: "https://rafaelf.dev/images/blog-nextjs-thumb.png"
---

# Título da postagem do seu blog

Seu conteúdo vai aqui.
```

A seção entre as linhas “---” é chamada frontmatter, onde você pode definir metadados para sua postagem no blog. Salve o arquivo com o nome que desejar, mas com a extensão ".md" (por exemplo, `first-article.md`).

## Renderizando conteúdo Markdown com Next.js

1. **Analisando Markdown**

Para renderizar o conteúdo Markdown, usaremos os pacotes <a href="https://www.npmjs.com/package/markdown-to-jsx" target="_blank">markdown-to-jsx</a>, <a href="https://www.npmjs.com/package/gray-matter" target="_blank">gray-matter</a> e <a href="https://www.npmjs.com/package /react-syntax-highlighter" target="_blank">react-syntax-highlighter</a>. Instale-os em seu projeto:

```bash
yarn add markdown-to-jsx gray-matter react-syntax-highlighter
```

Além disso, você precisa adicionar as seguintes dependências de desenvolvimento:

```bash
yarn add -D @tailwindcss/typography @types/react-syntax-highlighter
```

2. **Criando uma página de listagem de postagens do blog**

Na pasta do aplicativo, crie um diretório `posts` com um arquivo `page.tsx`. Você pode usar o código a seguir para ler os arquivos markdown existentes.

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

Esta página é processada do lado do servidor e lê todos os arquivos `.md` presentes no diretório `posts/`. O pacote `gray-matter` é usado para ler os metadados dos arquivos e mostrá-los usando o componente `PostPreview` (que deve ser salvo no diretório `posts/` como `PostPreview.tsx`).

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

O componente `PostPreview` recebe as propriedades da postagem e renderiza um link para a postagem do blog. Uma imagem é opcionalmente renderizada, bem como o título, subtítulo e data da postagem.

3. **Criando um componente para renderizar Markdown**

No diretório `posts`, crie um novo subdiretório `[slug]` com um arquivo `page.tsx`. Neste arquivo, precisamos configurar uma página para renderizar o markdown:

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
            &lt;&lt; Back to Posts
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

O pacote `gray-matter` é usado para ler os detalhes dos metadados de um arquivo específico. O nome do arquivo markdown é determinado pelo slug da URL. Por padrão, esta página processa o markdown dinamicamente no lado do servidor. Para tornar esse processo mais eficiente, podemos usar o Next.js SSG (Server Side Generation) para pré-construir a página. Para fazer isso, precisamos incluir o slug do artigo no objeto de retorno de `generateStaticParams`.

A tag `Markdown` (de `markdown-to-jsx`) permite personalizar o estilo de saída do artigo. No código acima, a tag `pre` é substituída pelo componente `PreBlock`, melhorando o estilo do código-fonte (incluindo um marcador) nos artigos. Portanto, salve o seguinte código em `posts/[slug]/PreBlock.tsx`:

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

Você também precisa adicionar o pacote `@tailwindcss/typography` ao seu `tailwind.config.js`, como segue:

```js
/** @type {import('tailwindcss').Config} */

module.exports = {
  ...,
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

O plugin oficial "Tailwind CSS Typography" fornece um conjunto de classes que você pode usar para adicionar belos padrões tipográficos a qualquer HTML básico que você não controla, como HTML renderizado de Markdown ou extraído de um CMS.

Finalmente, para garantir que seu projeto será capaz de acessar a miniatura do blog em https://rafaelf.dev/, você precisa adicionar isto ao seu arquivo `next.config.js`:

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

## Executando seu blog estático

Com tudo configurado, agora você pode executar seu blog localmente:

```bash
yarn dev
```

Visite http://localhost:3000/posts no seu navegador para ver seu blog em ação. Seu primeiro artigo será listado com um link apontando para o artigo, com o mesmo slug do nome do arquivo markdown - mas sem a extensão `.md` (ou seja, http://localhost:3000/posts/first-article).

## Conclusões

A criação de um blog usando arquivos Markdown e Next.js combina a simplicidade do Markdown com o poder de uma estrutura web moderna. Essa abordagem resulta em um blog rápido e otimizado para SEO, fácil de gerenciar e manter. Seguindo este tutorial, você adquiriu o conhecimento necessário para criar seu próprio blog e pode aprimorá-lo ainda mais com recursos e personalizações adicionais. Feliz blogging!
