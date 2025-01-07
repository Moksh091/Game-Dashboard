import { Customwaves, EA } from "../components/Icons"
import { Header } from "../components/Header"
import { Cross} from "../components/Icons/Cross"
import { Resume } from "../components/Icons/Play"
import { Cta } from "../cards/Cta"
import { NewGame } from "../cards/NewGames"

export const Valo = () => {
    return <div className="max-w-[700px]">
        <Cta/>
        <div className="mt-8">
            <Header label="New Games" label2="See more" />
            <div className="flex gap-x-8 mt-4 relative">
                <NewGame/>
                {/* <button className=" absolute z-10 right-0 top-[40%] bottom-[60%] flex items-center justify-center h-12 w-12 rounded-full bg-white"><ChevronRight /></button> */}
            </div>
        </div>
        <div className="mt-8">
            <Header label="Last Downloads" label2="See More" />
        </div>
        <div className="mt-4 w-full rounded-[2rem] h-32 flex items-center px-8 color justify-between">
            <div className="flex items-center">
                <div className="h-20 w-20 rounded-xl bg-white flex flex-col justify-center items-center ">
                    <div className="h-7 w-7 rounded-full bg-black flex justify-center items-center"> <EA />
                    </div><span className="text-lg font-bold italic -m-1">FIFA 23</span>
                </div>
                <div className="ml-4 text-white">
                    <div className="mb-3">FIFA 23</div>
                    <div className="text-xs px-2 py-1 rounded-lg bg-[#61262c]">Sports Simulator</div>
                </div>
                <div className="rotate-90 ml-14"><Customwaves /></div>
            </div>
            <div className="flex items-center ">
                <div className="max-w-[130px] text-white mr-4 text-sm font-medium">
                    1 hour 23 min. 
                    <span className="text-[#7e3941] "> 265Mb of 1.23Gb</span>
                </div>
                <div className="flex items-center gap-2">
                    <Resume />
                    <Cross />
                </div>
            </div>
        </div>
    </div>
}
