"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  url: string;
  title: string;
  /** i18n key under `blog` for the section title */
  headingKey?: "share_heading" | "share_site_heading";
};

export function ShareLinks({ url, title, headingKey = "share_heading" }: Props) {
  const t = useTranslations("blog");
  const centered = headingKey === "share_site_heading";
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const xHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const linkClass =
    "inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(17,24,39,0.55)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

  return (
    <section
      className={`mt-12 border-t border-[var(--color-border)] pt-8 ${centered ? "pb-8 text-center" : ""}`}
      aria-labelledby="share-heading"
    >
      <h2 id="share-heading" className="text-sm font-semibold text-[var(--color-text)]">
        {t(headingKey)}
      </h2>
      <ul className={`mt-4 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
        <li>
          <a href={xHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t("share_x")}
          </a>
        </li>
        <li>
          <a
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t("share_linkedin")}
          </a>
        </li>
        <li>
          <button type="button" onClick={copy} className={linkClass}>
            {copied ? t("share_copied") : t("share_copy")}
          </button>
        </li>
      </ul>
    </section>
  );
}
