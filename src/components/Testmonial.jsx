import React from 'react'
import style2 from "../assets/style-2.png"
import avatar from "../assets/avatar.jpg"
import avatar2 from "../assets/avatar-1.jpg"
import avatar3 from "../assets/avatar-2.jpg"

const Testmonial = () => {
  return (
    <>
      <div name="testimonial" style={{ backgroundImage: `url(${style2})`}}
           className="bg-no-repeat bg-cover h-full w-full mb-36 mt-16">
            
        <div className="container mx-auto">
            <div className="text-center ">
                <span className="text-[#adb5bd] text-lg">Best Clients</span>
                <h2 className="text-3xl xl:text-4xl font-bold text-[#444]">
                    Testmonials
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1  pt-14">
                <div className="mx-4 mb-5 md:mb-0">
                    <div className="pl-5 pr-4 py-5 border rounded-md h-full">
                        <div className="flex items-center mb-3">
                            <img className="w-[50px] h-[50px] rounded-full mr-4" src={avatar} alt="" />
                            <div>
                                <h5 className="font-medium">John Doe</h5>
                                <small className="text-[#adb5bd]">Business Analyst</small>
                            </div>
                        </div>
                        <p className="text-[#444]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque. lorem</p>
                    </div>
                </div>
                <div className="mx-4 mb-5 md:mb-0">
                    <div className="pl-5 pr-4 py-5 border rounded-md h-full">
                        <div className="flex items-center mb-3">
                            <img className="w-[50px] h-[50px] rounded-full mr-4" src={avatar2} alt="" />
                            <div>
                                <h5 className="font-medium">Maria Garcia</h5>
                                <small className="text-[#adb5bd]">Insurance Agent</small>
                            </div>
                        </div>
                        <p className="text-[#444]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque. lorem</p>
                    </div>
                </div>
                <div className="mx-4">
                    <div className="pl-5 pr-4 py-5 border rounded-md h-full">
                        <div className="flex items-center mb-3">
                            <img className="w-[50px] h-[50px] rounded-full mr-4" src={avatar3} alt="" />
                            <div>
                                <h5 className="font-medium">Mason Miller</h5>
                                <small className="text-[#adb5bd]">Residential Appraiser</small>
                            </div>
                        </div>
                        <p className="text-[#444]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    </>
  )
}

export default Testmonial