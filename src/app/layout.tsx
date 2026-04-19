import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_SITE_URL } from "@/lib/site";

/** Ensures file-based `opengraph-image` resolves to absolute URLs when merged. */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
