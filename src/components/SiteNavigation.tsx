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
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

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

export const SiteNavigation = ({ absolute = false }: { absolute: boolean }) => {
    return (
        <div
            className={
                absolute ? "absolute top-4 left-4 right-4 flex justify-between z-10" : "w-full p-4 flex justify-between"
            }
        >
            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Contact className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">My socials</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My socials</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <a href="https://github.com/xeretis" target="_blank">
                                <DropdownMenuItem>Github</DropdownMenuItem>
                            </a>
                            <a href="https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/" target="_blank">
                                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                            </a>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Contact me</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <a href="mailto:ocskon@gmail.com">
                                <DropdownMenuItem>Email</DropdownMenuItem>
                            </a>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="sm:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">Navigation</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {navigationLinks.map((link) => (
                            <a href={link.href} key={link.name}>
                                <DropdownMenuItem>{link.name}</DropdownMenuItem>
                            </a>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <NavigationMenu className="max-sm:hidden">
                <NavigationMenuList>
                    {navigationLinks.map((link) => (
                        <NavigationMenuItem key={link.name} className={navigationMenuTriggerStyle()}>
                            <NavigationMenuLink href={link.href}>{link.name}</NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
        </div>
    );
};
