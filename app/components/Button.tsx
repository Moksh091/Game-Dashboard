import { ReactNode } from "react"

export const Button = ({SVGElement, className}: {SVGElement: ReactNode, className: string}) => {
    return <div className={`${className} h-2 w-2 rounded-full p-2`}>
        {SVGElement}
    </div>
}