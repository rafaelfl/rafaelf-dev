"use client";

import Image from "next/image";
import { Box, Flex, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { NavLink } from "./NavLink/NavLink";

import logo from "../../../public/assets/images/logo.svg";

import "./Navbar.scss";

const Links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="bg-darkblue px-20 w-full sticky top-0 z-10">
      <div className="flex h-20 justify-between items-center">
        <div className="flex flex-1 space-x-3.5 justify-between items-center">
          <Image src={logo} alt="Rafael Fernandes logo" className="max-h-12" width={192} priority />

          <nav className="hidden lg:flex space-x-20">
            {Links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                intent={activeSection === link.href.substring(1) ? "active" : "default"}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>

        <Flex alignItems={"center"}>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
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
      </div>

      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                intent={activeSection === link.href.substring(1) ? "active" : "default"}
              >
                {link.title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </header>
  );
}
