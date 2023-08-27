"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "@/app/[locale]/assets/images/logo.svg";
import useDisclosure from "@/app/[locale]/hooks/useDisclosure";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { NavLink } from "./NavLink/NavLink";

import "./Navbar.scss";

interface NavbarProps {
  locale: string;
  activeSection?: string;
}

export default function Navbar({ activeSection, locale }: NavbarProps) {
  const t = useTranslations();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { title: t("navbar.home"), href: "#home" },
    { title: t("navbar.about"), href: "#about" },
    { title: t("navbar.experience"), href: "#experience" },
    { title: t("navbar.projects"), href: "#projects" },
    { title: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <header className="bg-darkblue px-8 md:px-16 w-full fixed top-0 z-10 yarl__no_scroll_padding">
      <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
        <div className="flex flex-1 justify-between items-center space-x-3.5">
          <Link href="/">
            <Image src={logo} alt={t("logo.alt")} className="h-12 w-auto" width={192} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-3">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                intent={activeSection === link.href.substring(1) ? "active" : "default"}
              >
                {link.title}
              </NavLink>
            ))}

            <LanguageSwitcher icon={locale.toLowerCase() === "en-us" ? "br" : "en"} />
          </nav>
        </div>

        <div className="flex items-center">
          <button
            className="text-lg text-white flex lg:hidden w-5"
            aria-label={t("navbar.menu-button")}
            onClick={isOpen ? onClose : onOpen}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="lg:hidden pb-4">
          <nav className="relative flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                intent={activeSection === link.href.substring(1) ? "active" : "default"}
              >
                {link.title}
              </NavLink>
            ))}

            <div className="absolute top-0 right-0 lg:hidden flex items-center">
              <LanguageSwitcher
                isMobileSwitcher
                icon={locale.toLowerCase() === "en-us" ? "br" : "en"}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
