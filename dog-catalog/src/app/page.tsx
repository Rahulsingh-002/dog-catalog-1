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
  SidebarHeader
} from "@/components/ui/sidebar"
import { Home, Dog, Settings } from "lucide-react"
import Link from "next/link"
import SidebarMenuContent from "@/components/ui/SidebarMenuContent"
import dynamic from "next/dynamic"
import DogGallery from "@/components/ui/dogGallary"

export default function HomePage() {
  return (
    <div>
      <DogGallery />
    </div>
  )
}
