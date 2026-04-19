import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  /** English at `/`, Portuguese at `/pt` */
  localePrefix: "as-needed",
  /** Do not use cookie or Accept-Language, or `/` will redirect away from default English for pt-BR users */
  localeDetection: false,
});
