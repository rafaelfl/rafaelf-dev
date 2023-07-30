"use client";

import Image from "next/image";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import useScrollSpySection from "@/hooks/useScrollSpySection";
import Navbar from "@/components/Navbar/Navbar";

import photo from "../../public/assets/images/photo.png";

import styles from "./styles.module.scss";

export default function Home() {
  const activeSection = useScrollSpySection();

  return (
    <Box as="main" className="flex min-h-screen flex-col items-center justify-start">
      <Navbar activeSection={activeSection} />
      <Box width="full">
        <Box as="section" id="home" bg="darkblue" color="white" p={20} minH={"100vh"}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%">
              <Flex
                flex={1}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"start"}
                h={"100%"}
              >
                <h1 className="text-9xl leading-none">
                  Hi! I am{" "}
                  <Text as={"span"} color={"darkyellow"} fontWeight={"semibold"}>
                    Rafael! <span className={styles.wave}>👋</span>
                  </Text>
                </h1>
              </Flex>
            </GridItem>

            <GridItem w="100%">
              <Image src={photo} alt="Rafael Fernandes logo" height={553} priority />
            </GridItem>
          </Grid>
        </Box>

        <Box as="section" id="about" bg="white" p={20} minH={"100vh"}>
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
        <Box as="section" id="projects" bg="yellow" p={20} minH={"100vh"}>
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
        <Box as="section" id="contact" bg="white" p={20} minH={"100vh"}>
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
    </Box>
  );
}
