import { ReactNode } from "react"

export const Badge = ({SVGElement,label}: {SVGElement: ReactNode, label: string}) => {
    return <span className="bg-white h-fit px-3 py-1  rounded-full space-2 flex items-center w-fit gap-2">
        {SVGElement}
        {label}
    </span>
}