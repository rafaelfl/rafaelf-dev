"use client";

import Image from "next/image";
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Fade } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import logoRafaelf from "../../../public/logo-rafaelf.svg";

import "./Navbar.scss";
import useScrollSpySection from "@/hooks/useScrollSpySection";

interface NavLinkProps {
  href?: string;
  activeSection?: boolean;
  children: React.ReactNode;
}

const Links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const NavLink = ({ href, children, activeSection = false }: NavLinkProps) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "white",
      }}
      href={href}
      fontSize={{
        base: "md",
        md: "lg",
      }}
      {...(activeSection ? { fontWeight: "bold", color: "darkyellow" } : { color: "gray" })}
    >
      {children}
    </Box>
  );
};

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg={"darkblue"} px={4} width="full" position="sticky" top={0}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"} flex={1} justify={"space-between"}>
          <Image
            src={logoRafaelf}
            alt="Rafael Fernandes logo"
            className="max-h-12"
            width={176}
            priority
          />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                activeSection={activeSection === link.href.substring(1)}
              >
                {link.title}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
          />
          {/* <Menu>
            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu> */}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                activeSection={activeSection === link.href.substring(1)}
              >
                {link.title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
