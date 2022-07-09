import React from 'react'
import logo from "../assets/navbar-brand.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => {setNav(!nav)}


    return (
        <nav className="bg-[#212529] fixed w-full z-50 top-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-[80px] px-3 md:border-none">
                    <div className="z-50">
                        <a href="#">
                            <img className="object-contain w-[55px] h-[55px]" src={logo} alt="" />
                        </a>
                    </div>

                    {/* Menu bar */}
                    <div>
                        <ul className="hidden md:flex items-center justify-center gap-8">
                            <li className="text-white cursor-pointer hover:text-gray-300 duration-150"><a href="#">About Us</a></li>
                            <li className="text-white cursor-pointer hover:text-gray-300 duration-150"><a href="#">Our Service</a></li>
                            <li className="text-white cursor-pointer hover:text-gray-300 duration-150"><a href="#">Our Team</a></li>
                            <li className="text-white cursor-pointer hover:text-gray-300 duration-150"><a href="#">Testmonials</a></li>
                        </ul>
                    </div>

                    {/* Burger bar */}
                    <div onClick={handleClick} className="md:hidden flex z-50">
                        {!nav ? <FaBars className="text-white cursor-pointer w-10 h-5" /> : <FaTimes className="text-white cursor-pointer w-10 h-5" />}
                    </div>

                    {/* Mobile menu bar */}
                    <div className={!nav ? "hidden ": "flex items-center justify-center text-center w-full h-screen bg-[#212529] absolute top-0 left-0 text-white z-10 " }>
                        <ul className="gap-8">
                            <li className="text-white-300 py-3 text-2xl cursor-pointer hover:text-gray-300 duration-150"><a className="focus:text-[#bc8c4c]" href="#">About Us</a></li>
                            <li className="text-white-300 py-3 text-2xl cursor-pointer hover:text-gray-300 duration-150"><a className="focus:text-[#bc8c4c]" href="#">Our Service</a></li>
                            <li className="text-white-300 py-3 text-2xl cursor-pointer hover:text-gray-300 duration-150"><a className="focus:text-[#bc8c4c]" href="#">Our Team</a></li>
                            <li className="text-white-300 py-3 text-2xl cursor-pointer hover:text-gray-300 duration-150"><a className="focus:text-[#bc8c4c]" href="#">Testmonials</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar