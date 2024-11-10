"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "About", href: "./#about" },
    { label: "Education", href: "./#education" },
    { label: "Projects", href: "/projects" },
    { label: "Statistics", href: "/stats" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full"  className="px-5" >
   
      <NavbarContent className="flex items-center justify-start  sm:w-auto">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="ml-4"> 
          <p className="font-bold text-inherit">Kpsbathla</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-20 justify-center flex-grow">
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="flex-grow">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Contact</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link color="foreground" className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
