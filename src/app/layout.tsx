import type { Metadata } from "next";
import { Fredoka } from "next/font/google";

import "./globals.scss";

const fredoka = Fredoka({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Rafael Fernandes - Fullstack Software Engineer",
  description:
    "Developer devoted to build solid, scalable, accessible and responsive digital experiences for the web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
