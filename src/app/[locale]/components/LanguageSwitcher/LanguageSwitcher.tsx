import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import "./LanguageSwitcher.scss";

interface LanguageSwitcherProps {
  icon: string;
  isMobileSwitcher?: boolean;
}

const LanguageSwitcher = ({ icon, isMobileSwitcher = false }: LanguageSwitcherProps) => {
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
        id={`language-toggle-${isMobileSwitcher ? "mobile" : "desktop"}`}
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={icon === "en"}
        onChange={onSwitchLanguage}
      />
      <label htmlFor={`language-toggle-${isMobileSwitcher ? "mobile" : "desktop"}`}>
        <p className="sr-only">{t("navbar.languageToggle")}</p>
      </label>
      {icon === "en" ? <span className="left">PT</span> : <span className="right">EN</span>}
    </div>
  );
};

export default LanguageSwitcher;
