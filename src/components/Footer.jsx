import React from 'react'
import logof from "../assets/navbar-brand.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
  return (
    <>
        <div className="h-full bg-[#212529]">
            <div className="border-b border-[#2c3237]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-6 ">
                        <div className="flex items-center justify-center lg:justify-start pb-3 xl:pb-0">
                            <img className="w-[100px] h-[100px]" src={logof} alt="" />
                        </div>
                        <div className="flex items-center justify-center lg:justify-end">
                            <ul className="flex items-center gap-8 flex-col md:flex-row sm:flex-row">
                                <li>
                                    <a className="text-[#FFFFFFB3] font-bold text-sm"  href="#">Our Company</a>
                                </li>
                                <li>
                                    <a className="text-[#FFFFFFB3] font-bold text-sm" href="#">Our Location</a>
                                </li>
                                <li>
                                    <a className="text-[#FFFFFFB3] font-bold text-sm" href="#">Help Center</a>
                                </li>
                                <li>
                                    <a className="text-[#FFFFFFB3] font-bold text-sm" href="#">Components</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-[#2c3237]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 py-6 px-5 lg:px-0">
                        <div className="flex items-center justify-center md:justify-start">
                            <span className="text-[#FFFFFFB3] text-sm">© 2022, <a className="text-[#cfcfcfb9] hover:text-[#ecececb9]" href="#">Yusif Feyzullazade </a>All rights reserved</span>
                        </div>
                        <div className="">
                            <h6 className="hidden md:flex items-center gap-5 justify-end">
                                <a className="text-[#FFFFFFB3] hover:text-[#cfcfcfb9] text-sm" href="#"><FaFacebookF /></a>
                                <a className="text-[#FFFFFFB3] hover:text-[#cfcfcfb9] text-sm" href="#"><FaTwitter /></a>
                                <a className="text-[#FFFFFFB3] hover:text-[#cfcfcfb9] text-sm" href="#"><FaInstagram /></a>
                                <a className="text-[#FFFFFFB3] hover:text-[#cfcfcfb9] text-sm" href="#"><FaLinkedinIn /></a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer