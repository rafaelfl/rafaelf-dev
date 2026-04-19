import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownCode } from "./MarkdownCode";

type Props = {
  content: string;
};

export function BlogMarkdown({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code: MarkdownCode,
        pre: ({ children }) => <div className="not-prose">{children}</div>,
        img: ({ src, alt }) => {
          if (!src || typeof src !== "string") return null;
          return (
            // eslint-disable-next-line @next/next/no-img-element -- markdown may reference arbitrary assets
            <img
              src={src}
              alt={alt ?? ""}
              className="my-6 max-h-[min(70vh,560px)] w-full rounded-lg border border-[var(--color-border)] object-contain"
            />
          );
        },
        a: ({ href, children, ...rest }) => (
          <a
            href={href}
            className="font-medium text-[var(--color-primary)] underline decoration-[var(--color-primary)]/40 underline-offset-2 transition-colors hover:decoration-[var(--color-primary)]"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            {...rest}
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
