"use client";

import { Contact, Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";

import { Button } from "./ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const navigationLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

export const SiteNavigation = ({ absolute = false }: { absolute?: boolean }) => {
    return (
        <div
            className={
                absolute
                    ? "absolute inset-x-4 top-4 z-10 flex justify-between"
                    : "flex w-full justify-between p-4"
            }
        >
            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Contact className="size-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">My socials</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My socials</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <a
                                href="https://github.com/xeretis"
                                data-umami-event="navigation-personal-github-button"
                                target="_blank"
                            >
                                <DropdownMenuItem>Github</DropdownMenuItem>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/"
                                data-umami-event="navigation-personal-linkedin-button"
                                target="_blank"
                            >
                                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                            </a>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Contact me</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <a
                                href="mailto:ocskon@gmail.com"
                                data-umami-event="navigation-personal-email-button"
                            >
                                <DropdownMenuItem>Email</DropdownMenuItem>
                            </a>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="sm:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="size-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">Navigation</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {navigationLinks.map((link) => (
                            <Link href={link.href} key={link.name}>
                                <DropdownMenuItem>{link.name}</DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <NavigationMenu className="max-sm:hidden">
                <NavigationMenuList>
                    {navigationLinks.map((link) => (
                        <NavigationMenuItem key={link.name}>
                            <Link href={link.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {link.name}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
        </div>
    );
};
