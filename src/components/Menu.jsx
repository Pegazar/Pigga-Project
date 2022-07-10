import React from 'react'
import section from "../assets/section.jpg"
import { Link } from 'react-scroll'

const Menu = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${section})` }}
                className="w-full h-full relative">

                <span className="overlay-spanthree"></span>

                <div className="container mx-auto relative">
                    <div className="pt-16 pb-16">
                        <div className="text-center pb-16">
                            <span className="text-[#adb5bd] text-lg">Great Food</span>
                            <h2 className="text-3xl xl:text-4xl font-bold text-white">Main Menu</h2>
                        </div>
                        <div className="bg-white rounded-md mx-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 pb-12">
                                <div className="px-10 pt-12">
                                    <a href="#">
                                        <div className="border-b pb-5 h-full">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#444] text-lg font-[500]">Dolorem Exmaiores</span>
                                                <span className="text-[#bc8c4c] font-semibold">$12</span>
                                            </div>
                                            <p className="text-[#adb5bd] text-md pr-5 md:pr-0 md:text-lg ">Numquam dolor dolores molestiae maiores quidem.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="px-10 pt-12">
                                    <a href="#" >
                                        <div className="border-b pb-5 h-full">
                                            <div className="flex justify-between items-center ">
                                                <span className="text-[#444] text-lg font-[500]">Aperiam incidunt dicta</span>
                                                <span className="text-[#bc8c4c] font-semibold">$23</span>
                                            </div>
                                            <p className="text-[#adb5bd] text-md pr-5 md:pr-0 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="px-10 pt-12">
                                    <a href="#">
                                        <div className="border-b pb-5 h-full">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#444] text-lg font-[500]">Animi repellat labore</span>
                                                <span className="text-[#bc8c4c] font-semibold">$32</span>
                                            </div>
                                            <p className="text-[#adb5bd] text-md pr-5 md:pr-0 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="px-10 pt-12">
                                    <a href="#" >
                                        <div className="border-b pb-5 h-full">
                                            <div className="flex justify-between items-center ">
                                                <span className="text-[#444] text-lg font-[500]">Quo ipsum similique</span>
                                                <span className="text-[#bc8c4c] font-semibold">$17</span>
                                            </div>
                                            <p className="text-[#adb5bd] text-md pr-5 md:pr-0 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="px-10 pt-12">
                                    <a href="#">
                                        <div className="border-b pb-5 h-full">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#444] text-lg font-[500]">Est nam tempore</span>
                                                <span className="text-[#bc8c4c] font-semibold">$21</span>
                                            </div>
                                            <p className="text-[#adb5bd] text-md pr-5 md:pr-0 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="px-10 pt-12">
                                    <a href="#" >
                                        <div className="border-b pb-5 h-full">
                                            <div className="flex justify-between items-center ">
                                                <span className="text-[#444] text-lg font-[500]">Nesciunt ab veniam</span>
                                                <span className="text-[#bc8c4c] font-semibold">$10</span>
                                            </div>
                                            <p className="text-[#adb5bd] text-md pr-5 md:pr-0 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="h-[50px] flex items-center justify-center pb-10 pt-6">
                                <Link className="bg-[#bc8c4c] px-5 py-2.5 text-white rounded font-[500] hover:bg-[#a4783d] duration-200 cursor-pointer" to="contact" smooth={true} duration={500}>
                                    Book A Table
                                </Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu