"use client"; // top to the file

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
import { cn } from "@/lib/utils"
// import Link from "next/link";
import React from "react";
import { CatIcon, BookCheck, SquareUserRound, UserRoundSearch, SquarePen } from 'lucide-react'
// import { Icons } from "@/components/icons"

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

const components2: {title: string; href: string; description: string }[] = [
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
        // bg-gray-800
        <div className="flex flex-wrap items-center justify-between p-5 dark:bg-slate-800">
            <div className="flex items-center flex-shrink-0 mr-10 gap-5 text-white">
                <Link href="/" legacyBehavior passHref>
                    <span className="text-xl font-semibold tracking-tight px-10 gap-5">myst3r10us</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-5 py-5 mb-5 text-white border border-white rounded hover:text-white hover:border-white">
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
                <div className="text-sm flex-row flex gap-x-8 lg:flex-grow mr-5 lg:mt-0 justify-end">
                    <NavigationMenu>
                        <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuList >
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-lg font-DMS">
                                    <span className="mr-3">
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
                    </Link>
                </NavigationMenu>
{/* 
                    <NavigationMenu>
                        <Link href="/writeups" legacyBehavior passHref>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-lg font-DMS">
                                    <span className="mr-3">
                                       <BookCheck/>
                                    </span>
                                    Writeups
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[450px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[650px] ">
                                    {components2.map((component2) => (
                                        <ListItem
                                            key={component2.title}
                                            title={component2.title}
                                            href={component2.href}
                                        >
                                            <div className="flex items-center">
                                                <CatIcon className="mr-2" />
                                                <span>{component2.description}</span>
                                            </div>
                                        </ListItem>
                                    ))}
                                    </ul>         
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                      </Link>
                    </NavigationMenu> */}

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <BookCheck className="mr-3"/>
                                    <span className="text-lg font-DMS">
                                        Writeups
                                    </span>
                                </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
                                <ul className="grid gap-x-3 p-4 md:w-[350px] md:h-[175px] lg:w-[350px] lg:grid-cols-[.5fr_1fr] justify-between">
                                <li className="row-auto">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-wrap justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted py-2 px-16 no-underline outline-none focus:shadow-md"
                                        href="/writeups"
                                    >
                                        <div className="gap-y-3 text-left mb-2 mt-4 mr-6 text-lg font-medium w-[350px] lg:w-[350px]">
                                        <SquarePen className="mr-2"/> 
                                        <span>Writeups</span>
                                            <p className="items-justify h-full w-full text-sm leading-tight text-left text-muted-foreground">
                                                Solved Challenges With Writeups. <br></br>
                                                Check them out~
                                            </p>
                                        </div>

                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                {/* <ListItem href="/" title="Introduction">
                                    What is Writeup? It refers to the solution of a CTF challenge that is written by participants after they have solved the challenge. 
                                </ListItem>
                                <ListItem href="/" title="Learning">
                                    CTF is fun and challenging. It is a good platform to learn and improve your skills in cybersecurity and many more.
                                </ListItem> */}
                                </ul>
                            </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu>
                        <NavigationMenuList>    
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                                    <UserRoundSearch className="mr-3" />
                                    <span className="text-lg font-DMS">Contact Us</span> 
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>

        
                    <div>
                        <a
                            href="#"
                               className="inline-block px-6 py-3 mt-4 mr-4 text-sm font-semibold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0"
                        >
                            Subscribe
                        </a>
                    </div>  
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