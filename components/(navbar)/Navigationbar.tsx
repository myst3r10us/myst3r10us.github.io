    "use client"; // top to the file

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils"
import Link from "next/link";
import React from "react";
import { Cat, CatIcon, LucideIcon } from 'lucide-react'


const components: {title: string; href: string; description: string }[] = [
    {
        title: "What is myst3r10us?",
        href: "",
        description:
            "A Malaysian-based CTF team that starts in November 2023.",
    },
    {
        title: "Why myst3r10us?",
        href: "",
        description:
            "It started from 'Mysterious Three Flaggers' and it shorten to myst3r10us.",
    },
    {
        title: "Our CTFTime Team Profile",
        href: "https://ctftime.org/team/277613",
        description:
            "Check out how many CTFs we have participated in!",
    },
    {
        title: "Join myst3r10us",
        href: "",
        description: "Want to join the team? Contact us for further information!",
    },
];

export const Navigationbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between p-5 bg-gray-800">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <span className="text-xl font-semibold tracking-tight">myst3r10us</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white">
                    <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 0h20v20H0z" fill="none" />
                        <path d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow block mt-4 mr-4lg:inline-block lg:mt-0">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-lg font-DMS">
                                    <span className="mr-2">
                                       <CatIcon/>
                                    </span>
                                    About
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[450px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[650px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            <div className="flex items-center">
                                                <CatIcon className="mr-2" />
                                                <span>{component.description}</span>
                                            </div>
                                        </ListItem>
                                    ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {/* <a
                        href="#responsive-header"   
                        className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
                    >
                        About
                    </a> */}
                    <a
                        href="#responsive-header"
                        className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
                    >
                        Writeups
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
                    >
                        Contact
                    </a>
                </div>
        
                <div>
                    <a
                        href="#"
                        className="inline-block px-4 py-2 mt-4 mr-4 text-sm font-semibold leading-none text-white border border-white rounded hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0"
                    >
                        Subscribe
                    </a>
                </div>
            </div>
        </div>
    );
};


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navigationbar();