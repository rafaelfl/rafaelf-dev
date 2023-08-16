import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "./NavLink/NavLink";
import useDisclosure from "@/app/[locale]/hooks/useDisclosure";

import logo from "@/app/[locale]/assets/images/logo.svg";

import "./Navbar.scss";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

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
    <header className="bg-darkblue px-8 md:px-16 w-full sticky top-0 z-10">
      <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
        <div className="flex flex-1 justify-between items-center space-x-3.5">
          <Image src={logo} alt={t("logo.alt")} className="h-12 w-auto" width={192} priority />

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
          <div className="me-6 lg:hidden flex items-center">
            <LanguageSwitcher
              isMobileSwitcher
              icon={locale.toLowerCase() === "en-us" ? "br" : "en"}
            />
          </div>

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
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                intent={activeSection === link.href.substring(1) ? "active" : "default"}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
