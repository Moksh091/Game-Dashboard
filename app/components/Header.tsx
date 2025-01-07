import { ReactNode } from "react"

export const Header = ({label, label2}: {label: string, label2: string | ReactNode}) => {
    return <div className="flex justify-between items-center text-white mx-3">
        <div className="text-2xl font-medium">{label}</div>
        <button className="text-base text-[#ba5b65] ">{label2}</button>
    </div>
}