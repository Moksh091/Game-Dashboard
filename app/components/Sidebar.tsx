import { ReactNode } from "react"

export const Sidebar= ({className, children}: {className:string, children: ReactNode}) => {
    return <div className={`${className} bg-[#361518] rounded-[2rem] mx-5 px-4 `} >
        {children}
    </div>
}