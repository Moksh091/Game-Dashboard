import { ReactNode } from "react"

export const Platform = ({name, className}: {name: ReactNode, className: string}) => {
    return <div className={`${className} h-fit rounded-full bg-[#361518] text-white flex items-center justify-center`}>
        {name}
    </div>
}