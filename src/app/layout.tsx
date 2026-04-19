import type { Metadata } from "next";
import type { ReactNode } from "react";

const defaultSiteUrl = "https://rafaelf.dev";

/** Ensures file-based `opengraph-image` resolves to absolute URLs when merged. */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
