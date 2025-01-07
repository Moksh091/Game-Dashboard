"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import VideoCard from "../cards/Videocard";

export default function Watch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&videoCategoryId=20&type=video&key=AIzaSyDKzUL3Yp-8Kx1961tr8XAe1oJojeNZoyM")
            .then((response) => {
                setData(response.data.items)
            })
            .catch((error) => {
                setError('Error while fetchig data')
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
            //@ts-ignore
            <div key={video?.id?.videoId}>                 
                {video?.snippet?.thumbnails?.default?.url && (
                    <img //@ts-ignore
                        src={video.snippet.thumbnails.default.url}
                        //@ts-ignore
                        alt={video.snippet.title || ''}
                        //@ts-ignore
                        width={video.snippet.thumbnails.default.width}
                        //@ts-ignore
                        height={video.snippet.thumbnails.default.height}
                    />
                )} 
                <h3>{video?.snippet?.channelTitle}</h3>
            </div>
        ))}
    </div>
}