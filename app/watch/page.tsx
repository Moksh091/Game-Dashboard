"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"

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
                ('Error while fetchig data')
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div>loading...</div>
    }

    return <div>
        {data?.map((video) => (
            <div key={video?.id?.videoId}>                 
                {video?.snippet?.thumbnails?.default?.url && (
                    <Image 
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.title || ''}
                        width={video.snippet.thumbnails.default.width}
                        height={video.snippet.thumbnails.default.height}
                    />
                )} 
                <h3>{video?.snippet?.channelTitle}</h3>
            </div>
        ))}
    </div>
}