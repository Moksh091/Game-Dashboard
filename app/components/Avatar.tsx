import Image from "next/image";

function AvatarDot({ src, alt }: { src: string, alt: string }) {
    return <div className="relative">
        <Image className="w-10 h-10 rounded-full bg-slate-500 object-cover" src={src} alt={alt} width={100} height={100} />
        <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-transparent rounded-full"></span>
    </div>
}

export function Avatar({ src, alt, className }: { src: string, alt: string, className: string }) {
    return <Image className={`w-10 h-10 rounded-full bg-slate-500 object-cover ${className}`} src={src} alt={alt} width={100} height={100} />
}

export function SimpleAvatar() {
    return <div className="relative w-10 h-10 overflow-hidden bg-gray-300 rounded-full my-6">
        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
    </div>

}
export default Avatar;