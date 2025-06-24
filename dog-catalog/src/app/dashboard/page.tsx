// app/dashboard/page.tsx

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Dog, Settings } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard">
                  <SidebarMenuButton isActive><Home className="w-4 h-4" /><span>Dashboard</span></SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
              <Link href="/dogs">
                <SidebarMenuButton>
                  <Dog className="w-4 h-4" />
                  <span>Dog Catalog</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/settings">
                <SidebarMenuButton>
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <div className="p-6">
          <SidebarTrigger className="mb-4" />
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Welcome to your dashboard!</p>
        </div>
      </SidebarInset>
    </>
  )
}
