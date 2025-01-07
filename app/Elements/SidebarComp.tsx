"use client"
import Link from "next/link"
import { Games } from "../components/Icons/Games"
import { GiftIcon } from "../components/Icons/Gift"
import { Home } from "../components/Icons/Home"
import { Message } from "../components/Icons/Message"
import { Moon } from "../components/Icons/Moon"
import { PlusSign } from "../components/Icons/Plus"
import { ShopBag } from "../components/Icons/ShopBag"
import { TV } from "../components/Icons/Tv"
import { usePathname } from "next/navigation"

export const MixComp = () => {
    const pathname = usePathname();
    const menuItems = [
        { icon: <Home />, url: "/" },
        { icon: <Games />, url: "/games" },
        { icon: <GiftIcon />, url: "#" },
        { icon: <TV />, url: "/watch" },
        { icon: <Moon />, url: "#" },
        { icon: <ShopBag />, url: "#" },
        { icon: <Message />, url: "#" }
    ]
    return (<div className="flex flex-col items-center justify-between h-full pt-8 pb-2">
        <div className="flex flex-col justify-center items-center parent space-y-10 ">
            {menuItems.map((menuItem, index) => {
                const isActive = pathname === menuItem.url
                return (
                    <Link
                        key={index}
                        href={menuItem.url}
                        className={`${isActive ? 'fill-black': 'fill-white'}`}>
                        <div className={`hover:border-[#c03d3c] hover:border-2 
                            ${isActive ? 'bg-[#c03d3c]': ''}`
                        }>{menuItem.icon}</div>
                    </Link>
                )
            })}
        </div>
        <div className="flex items-center flex-col">
            <div className="border-2 border-dashed border-[#c03d3c] p-2 rounded-2xl ">
                <div className="p-2 rounded-full bg-[#c03d3c]"><PlusSign /></div>
            </div>
        </div>
    </div>
    )
}