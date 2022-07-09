import React from 'react'
import contact from "../assets/contact.jpg"


const Contact = () => {
  return (
    <>
       <div className="my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <img className="rounded-md" src={contact} alt="" />
                    </div>
                    <div>
                        <form action="" className="flex flex-col">
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="text" name="name" placeholder="Your Name" />
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="number" name="phone" placeholder="Your Phone" />
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="date" name="date"  />
                            <input className="border border-[#ced4da] focus:border-[#dfc8a9] rounded-sm w-full px-4 py-3 my-2" type="number" name="number" placeholder="Seats" />
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Contact