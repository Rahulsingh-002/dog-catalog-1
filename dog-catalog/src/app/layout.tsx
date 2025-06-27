import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import  { MainNav } from "@/components/ui/navbar";
import LayoutShell from "@/components/ui/layoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title:{
    default:"Dog Catalog – Browse Cute Breeds",
    template:"%s-Dog Catalog"
  },
  description: "Explore a wide range of dog breeds with images. Powered by Dog CEO API.",
  keywords: ["dog breeds", "dog images", "dog gallery", "puppies"]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
       <SidebarProvider>
          <LayoutShell>{children}</LayoutShell>
        </SidebarProvider>
      </body>
    </html>
  );
}
