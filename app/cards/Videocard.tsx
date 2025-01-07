import { ReactNode } from "react";

const VideoCard = ({children}: {children: ReactNode}) => {
    return <div className="h-80 w-80 rounded-xl bg-[#361518] relative">
        {children}
    </div>
}

export default VideoCard;