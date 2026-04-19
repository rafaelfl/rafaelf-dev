"use client";

import type { ComponentPropsWithoutRef } from "react";
import type { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeProps = ComponentPropsWithoutRef<"code"> & ExtraProps;

const LANGUAGE_ALIAS: Record<string, string> = {
  bash: "bash",
  sh: "bash",
  shell: "bash",
  js: "javascript",
  jsx: "jsx",
  ts: "typescript",
  tsx: "tsx",
};

export function MarkdownCode({ className, children, ...props }: CodeProps) {
  const match = /language-([\w-]+)/.exec(className || "");
  const raw = String(children).replace(/\n$/, "");
  if (match) {
    const lang = LANGUAGE_ALIAS[match[1]] ?? match[1];
    return (
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        PreTag="div"
        className="!my-4 rounded-lg border border-[var(--color-border)] !bg-[#0d1117] text-sm !leading-relaxed"
        customStyle={{
          margin: 0,
          padding: "1rem 1.125rem",
        }}
      >
        {raw}
      </SyntaxHighlighter>
    );
  }
  return (
    <code
      className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-primary)]"
      {...props}
    >
      {children}
    </code>
  );
}
