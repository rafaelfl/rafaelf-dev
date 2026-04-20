import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CursorDot } from "@/components/CursorDot";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default async function NotFound() {
  const t = await getTranslations("not_found");

  return (
    <>
      <CursorDot />
      <Navbar />
      <main className="relative z-[1] min-h-[65vh] px-6 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36">
        <div
          className="hero-grid-bg pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
              {t("badge")}
            </span>
          </div>

          <p className="font-display text-7xl font-extrabold leading-none tracking-tight text-[var(--color-primary)] sm:text-8xl">
            404
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="font-display text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
              {t("title")}
            </h1>
            <p className="text-lg text-[var(--color-muted)]">{t("humor")}</p>
          </div>

          <Link
            href="/"
            className="inline-flex rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            {t("cta")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
