import Image from "next/image";
import { ReactNode } from "react";

const GamesCard = ({ src, label, alt }: { src: string, label: string, alt: string }) => {
    return <div className="h-80 w-80 rounded-xl bg-[#361518] relative">
        <Image src={src} alt={alt} width={1000} height={1000} className="h-64 object-cover rounded-t-xl" />
        <div className="text-white text-xl z-10  pl-4 py-4">{label} </div>
    </div>
}

export const VideoCard = ({children}: {children:ReactNode}) => {
    return<div className="h-80 w-80 rounded-xl bg-[#361518] ">
        {children}
    </div>


}
export default GamesCard;