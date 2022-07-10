import React from 'react'
import contact from "../assets/contact.jpg"


const Contact = () => {
  return (
    <>
       <div name="contact" className="my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className="mr-0">
                        <img className="rounded-md hidden xl:flex md:flex ml-2 xl:ml-0" src={contact} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center mx-5 xl:mx-0">
                        <form action="" className="">
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="text" name="name" placeholder="Your Name" />
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="tel" name="phone" placeholder="Your Phone" />
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="datetime-local" name="date"  />
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="number" name="number" placeholder="Seats" />
                            <div className="my-2">
                                <button className="w-full font-medium rounded-sm py-2 text-white px-5 border bg-[#bc8c4c] border-[#bc8c4c]
                                 hover:bg-[#a4783d] hover:border-[#9b713a] duration-150">
                                    Book A Table
                                </button>
                            </div>
                            <small className="text-[#adb5bd]">We don't span customers. Check our {''}
                                <a className="text-[#bc8c4c] hover:text-[#886433] duration-150" href="#">Privacy Policy</a>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Contact