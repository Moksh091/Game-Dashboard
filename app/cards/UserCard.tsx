import Image from "next/image"
import { users } from "../data/data"

export const UserCard = () => {
    return <button className="">
        {users.map((user, index) => (
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mt-6  overflow-hidden" key={index}>
                <Image src={user.url} alt="Smile" width={100} height={100} className="h-full w-full object-cover" />
            </div>
        ))}
    </button>
}