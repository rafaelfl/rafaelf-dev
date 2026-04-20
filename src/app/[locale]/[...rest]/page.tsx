import { notFound } from "next/navigation";

/** Catches unknown segments under `[locale]` so `notFound()` runs (next-intl: “Catching unknown routes”). */
export default function CatchAllLocale() {
  notFound();
}
