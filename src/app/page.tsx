"use client";

import Image from "next/image";
import { tv } from "tailwind-variants";

import useScrollSpySection from "@/hooks/useScrollSpySection";
import Navbar from "@/components/Navbar/Navbar";

import photo from "../../public/assets/images/photo.png";

import styles from "./styles.module.scss";

const section = tv({
  base: "px-8 md:px-20 min-h-screen w-full py-12",
  variants: {
    bg: {
      darkblue: "bg-darkblue text-white",
      yellow: "bg-yellow",
      white: "bg-white",
    },
  },
  defaultVariants: {
    bg: "white",
  },
});

export default function Home() {
  const activeSection = useScrollSpySection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Navbar activeSection={activeSection} />

      <section id="home" className={section({ bg: "darkblue" })}>
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-1 flex-col justify-center items-start h-full">
            <h1 className="text-6xl lg:text-responsive-title leading-none font-medium tracking-wide">
              Hi! I am{" "}
              <span className="block text-darkyellow font-semibold">
                Rafael! <span className={styles.wave}>👋</span>
              </span>
            </h1>

            <h2 className="mt-8 font-normal text-1.5xl">
              I build solid, scalable, accessible and responsive digital experiences for the web
            </h2>
          </div>

          <div className="container w-full">
            <Image
              src={photo}
              alt="Rafael Fernandes logo"
              height={350}
              priority
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="about" className={section()}>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
      </section>

      <section id="projects" className={section({ bg: "yellow" })}>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
      </section>

      <section id="contact" className={section()}>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
        <p>Main Content Here</p>
      </section>
    </main>
  );
}
