
export const Navbar = () => {
    return <div className="flex justify-between items-center dark:text-white pt-2 mb-9">
        <div className="text-[#ba5a65] text-2xl">Good evening, <span className="text-white font-semibold">MOKSH</span></div>
        <div ><Input /> </div>
        <div className="flex ">
            <Cart />
            <div className="mx-4 ">
                <Bell />
            </div>
        </div>
    </div>
}

function Input() {
    return <form className=" ">
        <div className="relative w-[22rem] ml-56 mr-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="search" className="block w-full p-2 h-[42px] ps-10 text-sm text-gray-900  rounded-full bg-gray-50  dark:bg-[#502126]  dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Search" required />
        </div>
    </form>
}

function Cart() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[38px] p-2 rounded-full bg-[#361518]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
}

function Bell() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-[38px] p-2 rounded-full bg-[#361518] " >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
}
