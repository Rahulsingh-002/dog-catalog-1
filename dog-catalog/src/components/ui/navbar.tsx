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
        <NavigationMenuItem >
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Trigger with dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dogs</NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[200px] bg-white rounded-md p-4 shadow-md">
            <ul className="flex flex-col gap-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/">All Breeds</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/dogs/random">Random Dog</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Another simple link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
