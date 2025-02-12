import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
    return (
        <div className="px-4 py-6 lg:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center lg:flex-row">
                    <a className="outline-0" href="#"><h3 className='font-lexend font-bold text-lg sm:text-3xl text-[#150B2B]'>CalorieCanvas</h3></a>

                    <ul className="hidden bg-amber-600 absolute left-0 top-20 w-full text-center py-5 lg:relative lg:top-0  lg:flex lg:bg-transparent lg:justify-center lg:flex-row lg:items-center">
                        <li><a className="font-normal text-base text-[rgba(21, 11, 43, 0.7)] capitalize mx-6 transition-all hover:text-blue-500" href="#">Home</a></li>
                        <li><a className="font-normal text-base text-[rgba(21, 11, 43, 0.7)] capitalize mx-6 transition-all hover:text-blue-500" href="#">Recipes</a></li>
                        <li><a className="font-normal text-base text-[rgba(21, 11, 43, 0.7)] capitalize mx-6 transition-all hover:text-blue-500" href="#">About</a></li>
                        <li><a className="font-normal text-base text-[rgba(21, 11, 43, 0.7)] capitalize mx-6 transition-all hover:text-blue-500" href="#">Search</a></li>
                    </ul>

                    <div className="flex items-center">
                        <div className="relative">
                            <input className="w-30  sm:w-64 font-normal text-base text-[#150B2B] bg-[#F3F3F4] rounded-4xl pr-5 pl-8 py-1.5 sm:px-10 sm:py-3 outline-0" type="search" placeholder="Search" name="" id="" />
                            <IoIosSearch className="text-lg absolute top-2 left-2 sm:top-4 sm:left-3 text-[rgba(21, 11, 43, 0.7)]" />
                        </div>

                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#0BE58A] flex justify-center items-center ml-3">
                            <FaRegUserCircle className="text-xl md:text-2xl" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

