"use client"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { newGameData } from "../data/data"
import { Newgames } from "../components/Newgames"
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'

export const NewGame = () => {
    return <div className="w-[calc(100vw-666px)] h-60 ">
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2.5}
            navigation
            loop 
            className=""   
        >
            {newGameData.map((item) => (
                <SwiperSlide key={item.id} className="">
                    <Newgames src={item.src} alt={item.alt} label={item.label} />
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
}