import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclude Next metadata routes (no file extension — otherwise next-intl runs and breaks OG/Twitter fetches).
  matcher: ["/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)"],
};
