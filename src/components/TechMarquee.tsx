"use client";

import { useTranslations } from "next-intl";
import styles from "@/styles/marquee.module.css";

/** Paths under `public/images/tech` (from Devicon originals). */
const ICON_MAP: Record<string, string> = {
  react: "/images/tech/react.svg",
  reactoriginal: "/images/tech/reactoriginal.svg",
  /** Light fill variant — avoids gradient quirks from the CDN “original”. */
  nextjs: "/images/tech/nextjs-light.svg",
  nodejs: "/images/tech/nodejs.svg",
  flutter: "/images/tech/flutter.svg",
  typescript: "/images/tech/typescript.svg",
  javascript: "/images/tech/javascript.svg",
  sass: "/images/tech/sass.svg",
  python: "/images/tech/python.svg",
  /** Plain mark is dark green; paired with `ICON_CLASS.negative` below. */
  django: "/images/tech/django.svg",
  mongodb: "/images/tech/mongodb.svg",
  postgresql: "/images/tech/postgresql.svg",
  firebase: "/images/tech/firebase.svg",
  googlecloud: "/images/tech/googlecloud.svg",
  /** Wordmark — invert reads as light “negative” on dark strip. */
  amazonwebservices: "/images/tech/amazonwebservices.svg",
};

/** White / reversed marks on dark backgrounds (Devicon assets are dark or single-hue). */
const ICON_CLASS: Partial<Record<string, string>> = {
  amazonwebservices: "brightness-0 invert",
  django: "brightness-0 invert",
};

export function TechMarquee() {
  const t = useTranslations("techMarquee");
  const items = t.raw("items") as { slug: string; label: string }[];

  const row = (
    <>
      {items.map(({ slug, label }) => {
        const src = ICON_MAP[slug] ?? "";
        const iconTone = ICON_CLASS[slug] ?? "";
        const isAws = slug === "amazonwebservices";
        return (
          <div
            key={slug}
            className="flex w-28 shrink-0 flex-col items-center gap-2 px-2"
          >
            {src ? (
              <div className="flex h-10 w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className={
                    isAws
                      ? `max-h-10 w-auto max-w-[7rem] object-contain object-center opacity-90 ${iconTone}`.trim()
                      : `h-10 w-10 object-contain opacity-90 ${iconTone}`.trim()
                  }
                />
              </div>
            ) : (
              <div className="h-10 w-10 rounded bg-[var(--color-border)]" />
            )}
            <span className="text-center text-[11px] font-medium text-[var(--color-muted)]">
              {label}
            </span>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="border-y border-[var(--color-border)] bg-[rgba(17,24,39,0.35)] py-8">
      <div className="relative overflow-hidden">
        <div
          className={`${styles.track} gap-10`}
          style={{ animationDuration: "30s" }}
        >
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
