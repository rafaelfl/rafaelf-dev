import { ReactNode } from "react";
import { Inter } from "next/font/google";

import BlogNavbar from "../components/Navbar/BlogNavbar";

interface PostsLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function PostsLayout({ children, params: { locale } }: PostsLayoutProps) {
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-center justify-start pt-24 pb-12 bg-white`}
    >
      <BlogNavbar locale={locale} />

      {children}
    </main>
  );
}
