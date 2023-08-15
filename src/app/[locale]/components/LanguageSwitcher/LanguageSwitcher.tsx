import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

import usFlag from "@/app/[locale]/assets/images/flags/us.svg";
import brFlag from "@/app/[locale]/assets/images/flags/br.svg";

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
    <button
      className="relative rounded-full border-0 overflow-hidden w-8 h-8"
      aria-label={icon === "br" ? t("navbar.brLanguageLabel") : t("navbar.usLanguageLabel")}
      onClick={onSwitchLanguage}
    >
      {icon === "br" ? (
        <Image
          src={brFlag}
          alt={t("navbar.brAlt")}
          width={32}
          height={32}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover"
        />
      ) : (
        <Image
          src={usFlag}
          alt={t("navbar.usAlt")}
          width={32}
          height={32}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover"
        />
      )}
    </button>
  );
};

export default LanguageSwitcher;
