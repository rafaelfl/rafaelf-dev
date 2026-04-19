import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechMarquee } from "@/components/TechMarquee";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorDot } from "@/components/CursorDot";
import { PageTransition } from "@/components/PageTransition";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CursorDot />
      <Navbar />
      <PageTransition>
        <main className="relative z-[1]">
          <Hero />
          <About />
          <TechMarquee />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
