"use client";

import { useEffect, useState } from "react";

export function TypewriterHeadline({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
      }
    }, 18);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-[4rem] lg:leading-[1.15]">
      {/* Full headline in the document for SSR, crawlers, and assistive tech; animated line is decorative */}
      <span className="sr-only">{text}</span>
      <span aria-hidden className="block">
        {shown}
        <span
          className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse bg-[var(--color-primary)] align-[-0.1em]"
        />
      </span>
    </h1>
  );
}
