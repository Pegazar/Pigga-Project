import React from 'react'
import about1 from "../assets/about-1.jpg"
import about2 from "../assets/about-2.jpg"
import about3 from "../assets/about-3.jpg"
import about4 from "../assets/about-4.jpg"
import { Link } from 'react-scroll'

const About = () => {
  return (
    <>
        <div name="about" className=" mt-40 h-full pb-24">
            <div className="container mx-auto relative z-1">
                <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className="flex flex-col justify-center text-center xl:text-left md:text-center ml-0 xl:ml-8 sm:ml-0">
                        <span className="text-lg text-[#adb5bd]">Opening Times</span>
                        <h2 className="text-[#444444] font-bold pb-5 text-3xl xl:text-4xl">Working Times</h2>
                        <p className="text-[#444444] text-md font-bold">Monday - Thursday : {''}
                            <span className="text-[#adb5bd] font-[400]">7:00 am - 12:00 pm</span>
                        </p>
                        <p className="text-[#444444] text-md font-bold">Friday - Saturday : {''}
                            <span className="text-[#adb5bd] font-[400]">7:00 am - Midnight</span>
                        </p>
                        <p className="text-[#444444] text-md font-bold mb-6">Saturday - Sunday : {''}
                            <span className="text-[#adb5bd] font-[400]">9:00 am - 12:00 pm</span>
                        </p>
                        <div className="">
                            <Link className="bg-[#bc8c4c] px-4 py-1.5 text-white rounded font-[500] hover:bg-[#a4783d] duration-200 cursor-pointer" to="contact" smooth={true} duration={500}>
                                Book A Table
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-around flex-col md:flex-row">
                        <img className="rounded mx-3 mt-3 h-[344px] w-[232px]" src={about1} alt="" />
                        <img className="rounded mx-3 mt-3 h-[344px] w-[232px]" src={about2} alt="" />
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-20">
                    <div className="flex items-center justify-around flex-col md:flex-row mb-5 xl:mb-0">
                        <img className="rounded mx-3 mt-3 h-[344px] w-[232px]" src={about3} alt="" />
                        <img className="rounded mx-3 mt-3 h-[344px] w-[232px]" src={about4} alt="" />
                    </div>
                    <div className="flex flex-col justify-center text-center xl:text-left md:text-center ml-0 xl:ml-8 sm:ml-0">
                        <span className="text-lg text-[#adb5bd]">The Great Story</span>
                        <h2 className="text-[#444444] text-3xl font-bold pb-5 xl:text-4xl">Our Culinary Journey</h2>
                        <p className="text-[#adb5bd] font-[500] text-md px-5 xl:px-0">Monday - Thursday : {''}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illo a, aut, eum nesciunt obcaecati deserunt ipsam nostrum voluptate recusandae?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About