
export function NavMenu() {
    return (
        <>
            <header className="px-4 py-0 text "  >
                <div className="w-[60%] relative mx-auto flex flex-col  sm:flex-row max-w-screen-lg  py-3 sm:items-center sm:justify-between">
                    <a href="" className="flex items-center text-2xl font-black">
                        <span className="text-black">Future</span>
                    </a>
                    <input className="peer hidden" type="checkbox" id="navbar-open" />

                    <label className="sm:hidden text-xl cursor-pointer absolute right-0 mt-1" htmlFor="navbar-open"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    </label>
                    <nav className="peer-checked:block hidden sm:block py-4 sm:py-0">
                        <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                            <li className=""><a className="hover:text-blue-600" href="#">Pricning</a></li>
                            <li className=""><a className="hover:text-blue-600 " href="#">Demo</a></li>
                            <li className=""><a className="hover:text-blue-600 " href="#">Support</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}