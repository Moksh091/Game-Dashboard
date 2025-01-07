import Image from "next/image"
import { Resume } from "./Icons/Play"

export const Newgames = ({ src, alt, label }: { src: string, alt: string, label: string }) => {
    return (<div className={`h-60 rounded-[2rem] relative pt-1 `}>
        <div className="hover:cursor-pointer group ">
            <Image src={src} alt={alt} layout="fill" className={`rounded-[2rem] object-cover bg-[#542428] group-hover:origin-bottom-left group-hover:-rotate-3`} />
            <div className="text-white absolute z-10 text-lg font-medium ml-6 bottom-0 mb-8 group-hover:origin-bottom-left group-hover:-rotate-3">{label}</div>
            <div className="hidden group-hover:block absolute z-10"><Resume /></div>
        </div>
        <div className="border-2 border-dashed border-[#bd5b65] h-[235px] rounded-[2rem] "></div>
    </div>

    )
}