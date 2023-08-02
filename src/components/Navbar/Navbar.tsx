import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "./NavLink/NavLink";
import useDisclosure from "@/hooks/useDisclosure";

import logo from "@/assets/images/logo.svg";

import "./Navbar.scss";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="bg-darkblue px-8 md:px-16 w-full sticky top-0 z-10">
      <div className="flex justify-between items-center h-20">
        <div className="flex flex-1 justify-between items-center space-x-3.5">
          <Image src={logo} alt="Rafael Fernandes logo" className="max-h-12" width={192} priority />

          <nav className="hidden lg:flex gap-3">
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

        <div className="flex items-center">
          <button
            className="text-lg text-white flex lg:hidden"
            aria-label="Open Menu"
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
