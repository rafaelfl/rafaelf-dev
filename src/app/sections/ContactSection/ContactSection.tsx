import { ComponentProps } from "react";

import { sectionTitleStyle } from "@/app/styles/titleStyle";

import github from "@/app/assets/images/github.svg";
import linkedin from "@/app/assets/images/linkedin.svg";
import twitter from "@/app/assets/images/twitter.svg";
import email from "@/app/assets/images/email.svg";
import Link from "next/link";
import Image from "next/image";

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

      <div className="flex justify-between items-center w-full mb-12">
        <Link href="https://github.com/rafaelfl" target="_blank">
          <Image src={github} alt="Github logo" className="h-12 w-auto" />
        </Link>

        <Link href="https://www.linkedin.com/in/rafael-fernandes-lopes" target="_blank">
          <Image src={linkedin} alt="LinkedIn logo" className="h-12 w-auto" />
        </Link>

        <Link href="https://twitter.com/rafaelf_l" target="_blank">
          <Image src={twitter} alt="Twitter logo" className="h-12 w-auto" />
        </Link>

        <Link href="mailto:rafael.fernandes@gmail.com" target="_blank">
          <Image src={email} alt="Email logo" className="h-12 w-auto" />
        </Link>
      </div>

      <div className="flex justify-center items-center w-full font-medium mb-6">
        <p>Developed with 💜 by Rafael Fernandes Lopes. © Copyright 2023, All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default ContactSection;
