import { routing } from "@/i18n/routing";

/** Canonical production site URL when `NEXT_PUBLIC_SITE_URL` is unset. */
export const DEFAULT_SITE_URL = "https://rafaelf.dev";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, "");

/** Absolute URL of `path` (e.g. "/posts/x", "" for home) in `locale`; English has no prefix. */
export function localizedUrl(locale: string, path: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return new URL(`${prefix}${path}` || "/", siteUrl).href;
}

/** hreflang map for `path` in the given locales, plus x-default (English). */
export function languageAlternates(
  path: string,
  locales: readonly string[] = routing.locales,
): Record<string, string> {
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, localizedUrl(l, path)]),
  );
  if (locales.includes(routing.defaultLocale)) {
    languages["x-default"] = localizedUrl(routing.defaultLocale, path);
  }
  return languages;
}
