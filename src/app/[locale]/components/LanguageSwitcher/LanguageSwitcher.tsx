import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import usFlag from "@/app/[locale]/assets/images/flags/us.svg";
import brFlag from "@/app/[locale]/assets/images/flags/br.svg";

import "./LanguageSwitcher.scss";

interface LanguageSwitcherProps {
  icon: string;
}

const LanguageSwitcher = ({ icon }: LanguageSwitcherProps) => {
  const t = useTranslations();

  const pathname = usePathname();
  const router = useRouter();

  const onSwitchLanguage = () => {
    if (icon === "br") {
      router.replace(pathname, { locale: "pt-br", scroll: false });
    } else {
      router.replace(pathname, { locale: "en-us", scroll: false });
    }
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={icon === "en"}
        onChange={onSwitchLanguage}
      />
      <label htmlFor="language-toggle"></label>
      {icon === "en" ? <span className="left">PT</span> : <span className="right">EN</span>}
    </div>
  );
};

export default LanguageSwitcher;
