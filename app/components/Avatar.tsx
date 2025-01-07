import Image from "next/image";

function Avatar({src, alt}: {src: string, alt: string}) {
    return <div className="relative">
    <Image className="w-10 h-10 rounded-full bg-slate-500 object-cover" src={src} alt={alt} width={100} height={100}/>
    <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-transparent rounded-full"></span>
</div>
}

export function AvatarDot({src, alt}: {src: string, alt: string}) {
    return <Image className="w-10 h-10 rounded-full bg-slate-500 object-cover" src={src} alt={alt} width={100} height={100}/>
}

export default Avatar;