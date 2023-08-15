import { ComponentProps } from "react";
import Link from "next/link";
import Image from "next/image";

import { sectionTitleStyle } from "@/app/[locale]/styles/titleStyle";

import github from "@/app/[locale]/assets/images/contact/github.svg";
import linkedin from "@/app/[locale]/assets/images/contact/linkedin.svg";
import twitter from "@/app/[locale]/assets/images/contact/twitter.svg";
import email from "@/app/[locale]/assets/images/contact/email.svg";

type ContactSectionProps = ComponentProps<"section">;

const ContactSection = (props: ContactSectionProps) => {
  return (
    <section id="contact" {...props}>
      <h2
        className={sectionTitleStyle({
          decoration: "underlineWhite",
          size: "large",
          className: "mt-8 mb-12",
        })}
      >
        Get in touch
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-12">
        <Link href="https://github.com/rafaelfl" target="_blank" className="w-auto">
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={github}
              alt="Github logo"
              className="inline-block h-full w-auto object-contain"
            />
            <p className="inline-block text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap">
              Github
            </p>
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
              alt="LinkedIn logo"
              className="inline-block h-full w-auto object-contain"
            />
            <p className="inline-block text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap">
              LinkedIn
            </p>
          </div>
        </Link>

        <Link href="https://twitter.com/rafaelf_l" target="_blank" className="w-auto">
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={twitter}
              alt="Twitter logo"
              className="inline-block h-full w-auto object-contain"
            />
            <p className="inline-block text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap">
              Twitter
            </p>
          </div>
        </Link>

        <Link href="mailto:rafael.fernandes@gmail.com" target="_blank" className="w-auto">
          <div className="flex justify-center items-center gap-4 h-10">
            <Image
              src={email}
              alt="Email logo"
              className="inline-block h-full w-auto object-contain"
            />{" "}
            <p className="inline-block text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap">
              E-mail
            </p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center text-center w-full font-medium mb-10">
        <p>Developed with 💜 by Rafael Fernandes Lopes. © Copyright 2023, All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default ContactSection;
