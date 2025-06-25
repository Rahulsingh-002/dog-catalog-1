"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import { Home, Dog, Settings } from "lucide-react"
import Link from "next/link"

export default function SidebarMenuContent() {
  const { state } = useSidebar()

  return (
    <SidebarGroup>
      <div className="flex justify-between content-center">
        {state==="collapsed"?<SidebarTrigger/>:<><SidebarGroupLabel>Dog Catalog</SidebarGroupLabel>
        <SidebarTrigger/>
        </> }
       
      </div>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href="/dashboard">
            <SidebarMenuButton isActive tooltip="Dashboard">
              <Home className="w-4 h-4" />
              {state === "expanded" && <span>Dashboard</span>}
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/dogs">
            <SidebarMenuButton tooltip="Dog Catalog">
              <Dog className="w-4 h-4" />
              {state === "expanded" && <span>Dog Catalog</span>}
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/settings">
            <SidebarMenuButton tooltip="Settings">
              <Settings className="w-4 h-4" />
              {state === "expanded" && <span>Settings</span>}
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
