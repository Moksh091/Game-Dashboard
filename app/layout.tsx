import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { MixComp } from "./Elements/SidebarComp";
import { Smile } from "./components/Icons/Smile";
import { UserCard } from "./cards/UserCard";
import { HiMiniUserGroup } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";
import Avatar, { SimpleAvatar } from "./components/Avatar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-[#62272d] min-h-screen py-4 justify-between`}
      >
        <Sidebar className="h-auto py-2 ">
          <MixComp />
        </Sidebar>
        {children}
        <div className="flex flex-col gap-6 ">
          <Sidebar className="py-6 px-5 flex flex-col items-center "><Smile /><HiMiniUserGroup className="size-6 text-white mt-10" /><UserCard /> </Sidebar>
          <Sidebar className=" py-6 flex flex-col justify-center items-center h-full ">
            <AiFillMessage className="size-6 fill-white" />
            <SimpleAvatar />
            <Avatar src={'/hero.png'} alt="hero" className="bg-blue-500" />
            <Avatar src={'/girl.png'} alt="soch" className="bg-yellow-300 mt-6" />
          </Sidebar>
        </div>
      </body>
    </html>
  );
}
