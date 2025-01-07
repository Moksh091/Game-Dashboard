"use client"
import { Platform } from "../components/Platform"
import { Epic, Fire, Steam, Thumb } from "../components/Icons"
import Image from "next/image"
import { Badge } from "../components/Badge"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { GameData } from "../data/data"
import 'swiper/swiper-bundle.css'
import { Avatar } from "../components/Avatar"

export const Cta = () => {
    return <main className="relative h-[280px] flex ">
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            // speed={500}
            // loop={true}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            //   }}
        >
            {GameData.map((item) => (
                <SwiperSlide key={item.id}
                    className="overflow-visible">
                    <div className="p-8 w-[400px] h-full bg-gradient-to-tr from-[#ce695e] via-[#ca554e] to-[#c44441] rounded-[3rem] ">
                        <div className="flex">
                            <Badge SVGElement={<Fire />} label="Popular" />
                            <Platform name={<Steam />} className=" p-2 mx-2 rounded-full  " />
                            <Platform name={<Epic />} className=" p-2 rounded-full" />
                        </div>
                        <div >
                            <span className="font-semibold text-3xl text-white block my-4">{item.Name} </span>
                            <div className="text-xs font-normal text-white max-w-[300px] mb-4">{item.Details} </div>
                            <div className="flex items-center gap-2">
                                <Avatar src="/gta.jpg" alt="gta"/>
                             <Badge SVGElement={<Thumb />} label={item.Reviews} /></div>
                        </div>
                    </div>
                    <Image src={item.Img} alt={item.alt} width={1000} height={1000} className="object-cover -top-20 right-0 absolute h-96 w-[450px]" />
                </SwiperSlide>
            ))}
        </Swiper>
            <span className="swiper-pagination absolute"></span>
    </main>
}