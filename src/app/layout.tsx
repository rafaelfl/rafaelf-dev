import type { Metadata } from "next";
import { Suspense } from "react";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Rafael Fernandes - Fullstack Software Engineer",
  description:
    "Developer devoted to build solid, scalable, accessible and responsive digital experiences for the web",
  metadataBase: new URL("https://rafaelf.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
