// app/dashboard/page.tsx

import DogGallery from "@/components/ui/dogGallary"
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
interface HomePageProps {
  searchParams: { page?: string };
}

export default function HomePage({ searchParams }: HomePageProps) {
  // return (
  //   <>
  //     <Sidebar>
  //       <SidebarContent>
  //         <SidebarGroup>
  //           <div className="flex justify-between content-center">
  //             <SidebarGroupLabel>Dog Catalog</SidebarGroupLabel>
  //             <SidebarHeader>
  //             <SidebarTrigger /> {/* Move it here */}
  //           </SidebarHeader>
  //           </div>
  //           <SidebarMenuContent/>
  //         </SidebarGroup>
  //       </SidebarContent>
  //     </Sidebar>

  //     <SidebarInset>
  //       <div className="p-6">
  //         <DogGallery searchParams={searchParams}/>
  //       </div>
  //     </SidebarInset>
  //   </>
  // )

  return (
    <div>
      <DogGallery searchParams={searchParams} />
    </div>
  )
}
