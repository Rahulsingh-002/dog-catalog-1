"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Basic Link */}
        <NavigationMenuItem>
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Trigger with dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dogs</NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[200px] bg-white rounded-md p-4 shadow-md">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">
                  <NavigationMenuLink>All Breeds</NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/dogs/random">
                  <NavigationMenuLink>Random Dog</NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Another simple link */}
        <NavigationMenuItem>
          <Link href="/about">
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
