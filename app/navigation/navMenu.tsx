"use client";
import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
const NavMenu = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <NavigationMenu className=" hidden md:flex lg:space-x-7  md:text-nowrap list-none ">
          <div className="hover:scale-125 transition-all duration-300">
            <NavigationMenuLink className="hidden md:flex md:space-x-3 font-normal">
              <NavigationMenuItem>
                <Link href="#home" key="/">
                  <NavigationMenuLink className=" hover:text-blue-500 p-2 rounded-sm backdrop-blur-sm font-medium text-[1rem] ">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </div>

          <div className="hover:scale-125 transition-all duration-300">
            <NavigationMenuLink className="hidden md:flex md:space-x-3 font-normal">
              <NavigationMenuItem>
                <Link href="#services" key="/">
                  <NavigationMenuLink className=" hover:text-blue-500 p-2 rounded-sm backdrop-blur-sm font-medium text-[1rem] ">
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </div>

          <div className="hover:scale-110 transition-all duration-300">
            <NavigationMenuItem>
              <Link href="#test">
                <NavigationMenuLink className="hover:text-blue-500 p-3 backdrop-blur-sm font-medium text-[1rem]">
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

          <div className="hover:scale-110 transition-all duration-300">
            <NavigationMenuItem>
              <Link href="#team">
                <NavigationMenuLink className="hover:text-blue-500 backdrop-blur-sm font-medium text-[1rem]">
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
          <div className="hover:scale-110 transition-all duration-300">
            <NavigationMenuItem>
              <Link href="#contact">
                <NavigationMenuLink className="hover:text-blue-500 backdrop-blur-sm font-medium text-[1rem]">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenu>
      )}
    </>
  );
};

export default NavMenu;
