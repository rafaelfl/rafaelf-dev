import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en-us", "pt-br"],
  defaultLocale: "en-us",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
