"use client";

import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logo from "@/app/[locale]/assets/images/logo.svg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import "./Navbar.scss";

interface BlogNavbarProps {
  locale: string;
}

export default function BlogNavbar({ locale }: BlogNavbarProps) {
  const t = useTranslations();

  return (
    <header className="bg-darkblue px-8 md:px-16 w-full fixed top-0 z-10 yarl__no_scroll_padding">
      <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
        <div className="flex flex-1 justify-between items-center space-x-3.5">
          <Link href="/">
            <Image
              src={logo}
              alt={t("logo.alt")}
              className="h-12 w-auto"
              width={192}
              priority
            />
          </Link>

          <nav className="flex items-center gap-3">
            <LanguageSwitcher
              icon={locale.toLowerCase() === "en-us" ? "br" : "en"}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
