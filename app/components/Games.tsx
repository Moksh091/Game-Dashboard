import { ChevronRight } from "lucide-react"
import Image from "next/image"

export const Games = ({src, alt, label} : {src: string, alt: string, label: string}) => {
    
    const regex = /^(.*?)\s*(\([^)]*\))$/;
    const match = label.match(regex);

    const mainLabel = match ? match[1]: label;
    const bracketLabel = match ? match[2]: '';
    
    return <div className="flex bg-[#361518] rounded-[2rem] items-center">
        <Image src={src} alt={alt} width={100} height={100} className="p-2 rounded-[2rem] h-[85px] w-[85px] " />
        <div className="text-white text-sm font-normal ml-2 max-w-44">{mainLabel}
            <span className="text-[#ab525c]"> {bracketLabel}</span>
        </div>
        <div className="text-white ml-auto mr-6"><ChevronRight/></div>
    </div> 
}