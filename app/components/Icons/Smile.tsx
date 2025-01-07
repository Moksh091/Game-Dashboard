import Image from "next/image"

export const Smile = () => {
    return <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mt-6">
        <Image src={'/smile.webp'} alt="Smile" width={100} height={100} className="h-10 w-10 " />
    </div>
}