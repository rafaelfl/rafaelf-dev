"use client";

import { Box } from "@chakra-ui/react";

import useScrollSpySection from "@/hooks/useScrollSpySection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const activeSection = useScrollSpySection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Navbar activeSection={activeSection} />
      <Box width="full">
        <Box as="section" id="home" bg="darkblue" color="white" p={4} minH={"100vh"}>
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
        </Box>

        <Box as="section" id="about" bg="white" p={4} minH={"100vh"}>
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
        </Box>
        <Box as="section" id="projects" bg="yellow" p={4} minH={"100vh"}>
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
        </Box>
        <Box as="section" id="contact" bg="white" p={4} minH={"100vh"}>
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
        </Box>
      </Box>
    </main>
  );
}
