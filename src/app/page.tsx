"use client";

import Image from "next/image";

import useScrollSpySection from "@/hooks/useScrollSpySection";
import Navbar from "@/components/Navbar/Navbar";

import photo from "../../public/assets/images/photo.png";

import styles from "./styles.module.scss";

export default function Home() {
  const activeSection = useScrollSpySection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Navbar activeSection={activeSection} />

      <section id="home" className="bg-darkblue text-white p-20 min-h-screen w-full">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-1 flex-col justify-center items-start h-full">
            <h1 className="text-9xl leading-none">
              Hi! I am{" "}
              <span className="text-darkyellow font-semibold">
                Rafael! <span className={styles.wave}>👋</span>
              </span>
            </h1>
          </div>

          <div className="w-full">
            <Image src={photo} alt="Rafael Fernandes logo" height={553} priority />
          </div>
        </div>
      </section>

      <section id="about" className="bg-white p-20 min-h-screen w-full">
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

      <section id="projects" className="bg-white p-20 min-h-screen w-full">
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

      <section id="contact" className="bg-white p-20 min-h-screen w-full">
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
