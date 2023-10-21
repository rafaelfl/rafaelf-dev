import { ComponentProps } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import { sectionTitleStyle } from "@/app/[locale]/styles/titleStyle";

import github from "@/app/[locale]/assets/images/contact/github.svg";
import linkedin from "@/app/[locale]/assets/images/contact/linkedin.svg";
import twitter from "@/app/[locale]/assets/images/contact/twitter.svg";
import email from "@/app/[locale]/assets/images/contact/email.svg";

type ContactSectionProps = ComponentProps<"section">;

const ContactSection = (props: ContactSectionProps) => {
  const t = useTranslations();

  return (
    <section id="contact" {...props}>
      <h2
        className={sectionTitleStyle({
          underline: "white",
          size: "large",
          className: "mt-8 mb-12",
        })}
      >
        {t("contact.title")}
      </h2>

      <div className="flex justify-center items-center gap-10 w-full mb-12 max-w-5xl">
        <Link
          href="https://github.com/rafaelfl"
          target="_blank"
          className="w-auto"
        >
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={github}
              alt={t("contact.githubAlt")}
              className="inline-block h-full w-auto object-contain"
            />
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/rafael-fernandes-lopes"
          target="_blank"
          className="w-auto"
        >
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={linkedin}
              alt={t("contact.linkedinAlt")}
              className="inline-block h-full w-auto object-contain"
            />
          </div>
        </Link>

        <Link href="https://x.com/rafaelf_l" target="_blank" className="w-auto">
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={twitter}
              alt={t("contact.twitterAlt")}
              className="inline-block h-full w-auto object-contain"
            />
          </div>
        </Link>

        <Link
          href="mailto:hello@rafaelf.dev"
          target="_blank"
          className="w-auto"
        >
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={email}
              alt={t("contact.emailAlt")}
              className="inline-block h-full w-auto object-contain"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center text-center w-full font-medium mb-10">
        <p>{t("contact.copyright")}</p>
      </div>
    </section>
  );
};

export default ContactSection;
