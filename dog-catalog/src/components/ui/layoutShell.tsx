// // components/ui/LayoutShell.tsx
// "use client"

// import { useSidebar, Sidebar } from "@/components/ui/sidebar"
// import { MainNav } from "@/components/ui/navbar"
// import React from "react"

// export default function LayoutShell({ children }: { children: React.ReactNode }) {
//   const { state } = useSidebar()

//   return (
//     <div className="flex h-screen w-screen overflow-hidden">
//       <Sidebar />

//       <div
//         className={`flex flex-col transition-all duration-300 ease-in-out ${
//           state === "collapsed" ? "ml-0" : "ml-0"
//         } w-full`}
//       >
//         <header className="sticky top-0 z-40 w-full border-b bg-white">
//           <MainNav />
//         </header>
//         <main className="flex-1 overflow-auto">{children}</main>
//       </div>
//     </div>
//   )
// }
// components/ui/layoutShell.tsx
"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarInset,
} from "@/components/ui/sidebar"
import { MainNav } from "@/components/ui/navbar"
import SidebarMenuContent from "@/components/ui/SidebarMenuContent"

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarMenuContent />
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-40 w-full border-b bg-white">
          <MainNav />
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </div>
  )
}
