import React from 'react'
import servicebg from "../assets/style-4.png"
import dish1 from "../assets/dish-1.jpg"
import dish2 from "../assets/dish-2.jpg"
import dish3 from "../assets/dish-3.jpg"
import dish4 from "../assets/dish-4.jpg"
import dish5 from "../assets/dish-5.jpg"
import dish6 from "../assets/dish-6.jpg"

const Service = () => {
  return (
    <>
        <div style={{ backgroundImage: `url(${servicebg})` }} 
            className="w-full h-full relative">
            
            <span className="overlay-spantwo"></span>

            <div className="container mx-auto relative pb-20">
                <div className="pt-20">
                    <div className="text-center pb-20">
                        <span className="text-[#adb5bd] text-lg">Featured Food</span>
                        <h2 className="text-3xl xl:text-4xl font-bold text-[#444]">Special Dishes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="pb-8 px-5">
                            <a href="#" className="flex items-center hover:text-[#886433]">
                                <img className="w-[70px] h-[103px] rounded-sm mr-3" src={dish1} alt="" />
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-dotted pb-2 xl:pb-3">
                                        <span className="font-medium">Aperiam incidunt dicta</span>
                                        <span className="text-[#bc8c4c] font-semibold">$25</span>
                                    </div>
                                    <p className="pt-2 xl:pt-3 text-base text-[#444] hover:text-[#886433] pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum dicta est veniam beatae libero!</p>
                                </div>
                            </a>
                        </div>
                        <div className="pb-8 px-5">
                            <a href="#" className="flex items-center hover:text-[#886433]">
                                <img className="w-[70px] h-[103px] rounded-sm mr-3" src={dish2} alt="" />
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-dotted pb-2 xl:pb-3">
                                        <span className="font-medium">Facere molestiae quaerat</span>
                                        <span className="text-[#bc8c4c] font-semibold">$35</span>
                                    </div>
                                    <p className="pt-2 xl:pt-3 text-base text-[#444] hover:text-[#886433] pb-2">Voluptatem voluptate ad fugit aliquam, laboriosam neque vero incidunt itaque.</p>
                                </div>
                            </a>
                        </div>
                         <div className="pb-8 px-5">
                            <a href="#" className="flex items-center hover:text-[#886433]">
                                <img className="w-[70px] h-[103px] rounded-sm mr-3" src={dish3} alt="" />
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-dotted pb-2 xl:pb-3">
                                        <span className="font-medium">Veniam Beatae Libero</span>
                                        <span className="text-[#bc8c4c] font-semibold">$18</span>
                                    </div>
                                    <p className="pt-2 xl:pt-3 text-base text-[#444] hover:text-[#886433] pb-2">Accusamus libero quo tempore suscipit molestias qui quam illo facere aspernatur esse! Doloribus?</p>
                                </div>
                            </a>
                        </div>
                        <div className="pb-8 px-5">
                            <a href="#" className="flex items-center hover:text-[#886433]">
                                <img className="w-[70px] h-[103px] rounded-sm mr-3" src={dish4} alt="" />
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-dotted pb-2 xl:pb-3">
                                        <span className="font-medium">Incidunt Eius</span>
                                        <span className="text-[#bc8c4c] font-semibold">$30</span>
                                    </div>
                                    <p className="pt-2 xl:pt-3 text-base text-[#444] hover:text-[#886433] pb-2">Doloremque maiores tempore, nostrum rerum nihil distinctio expedita voluptates eos deserunt.</p>
                                </div>
                            </a>
                        </div>
                        <div className="pb-8 px-5">
                            <a href="#" className="flex items-center hover:text-[#886433]">
                                <img className="w-[70px] h-[103px] rounded-sm mr-3" src={dish5} alt="" />
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-dotted pb-2 xl:pb-3">
                                        <span className="font-medium">Nihil dDstinctio</span>
                                        <span className="text-[#bc8c4c] font-semibold">$24</span>
                                    </div>
                                    <p className="pt-2 xl:pt-3 text-base text-[#444] hover:text-[#886433] pb-2">Doloremque maiores tempore, nostrum rerum expedita incidunt eius voluptates eos deserunt.</p>
                                </div>
                            </a>
                        </div>
                        <div className="pb-8 px-5">
                            <a href="#" className="flex items-center hover:text-[#886433]">
                                <img className="w-[70px] h-[103px] rounded-sm mr-3" src={dish6} alt="" />
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-dotted pb-2 xl:pb-3">
                                        <span className="font-medium">Dignissimos quidem</span>
                                        <span className="text-[#bc8c4c] font-semibold">$44</span>
                                    </div>
                                    <p className="pt-2 xl:pt-3 text-base text-[#444] hover:text-[#886433] pb-2">Doloremque maiores tempore, nostrum rerum nihil distinctio expedita voluptates eos deserunt.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Service