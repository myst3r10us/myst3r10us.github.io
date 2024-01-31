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
import { Cat } from 'lucide-react';


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
                                <NavigationMenuTrigger className=" font-DMS">
                                    <span className="mr-2">
                                        <Cat />
                                    </span>
                                    About
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        >
                                        {component.description}
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