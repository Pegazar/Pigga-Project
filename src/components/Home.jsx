import React from 'react'
import headerImg from "../assets/header.jpg"
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <>
        <div 
          name="home"
          style={{backgroundImage: `url(${headerImg})`}}
          className="content-div flex items-center justify-center"
          >
            <span className="overlay-span"></span>

            <div className="container mx-auto">
              <div className="flex items-center justify-center text-center ">
                <div className="absolute h-[445px]">
                  <div className="flex items-center justify-center">
                    <img className="w-[200px] h-[200px]" src={logo} alt="" />
                  </div>
                  <h5 className="text-white pt-6 font-bold text-xl ">Welcome To Our Restaurant</h5>
                  <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-bold text-white">Really Fresh & Tasty</h1>
                  <div className="h-[50px] flex items-center justify-center mt-10">
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

export default Home