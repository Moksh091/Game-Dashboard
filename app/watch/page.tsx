"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"
import { VideoCard } from "../cards/Gamescard";

export default function Watch() {
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&videoCategoryId=20&type=video&key=AIzaSyDKzUL3Yp-8Kx1961tr8XAe1oJojeNZoyM")
            .then((response) => {
                setData(response.data.items)
            })
            .catch(() => {
                ('Error while fetching data')
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div>loading...</div>
    }

    return <div className="grid grid-cols-3 gap-8">
        {data?.map((video) => (
            <VideoCard key={video?.id?.videoId}>
                {video?.snippet?.thumbnails?.default?.url && (
                    <Image
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title || ''}
                        width={video.snippet.thumbnails.high.width}
                        height={video.snippet.thumbnails.high.height}
                        className="h-64 object-cover rounded-t-xl"
                    />)}
                <h3 className="text-white text-xl pl-4 py-4">{video?.snippet?.channelTitle}</h3>

            </VideoCard>
        ))}
    </div>
}


// <div key={video?.id?.videoId}>
//     {video?.snippet?.thumbnails?.default?.url && (
//         <Image
//             src={video.snippet.thumbnails.default.url}
//             alt={video.snippet.title || ''}
//             width={video.snippet.thumbnails.default.width}
//             height={video.snippet.thumbnails.default.height}
//         />
//     )}
//     <h3>{video?.snippet?.channelTitle}</h3>
// </div>
