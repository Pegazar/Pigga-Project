import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"
import chef1 from "../assets/chef-1.jpg"
import chef2 from "../assets/chef-2.jpg"
import chef3 from "../assets/chef-3.jpg"

const Team = () => {
  return (
    <>
      <div name="team" className="pb-16 pt-16">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-[#adb5bd] text-lg">Great Team</span>
            <h2 className="text-3xl xl:text-4xl font-bold text-[#444]">
                Talented Chefs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="h-full">
              <div className="text-center px-5 py-5 mt-14">
                  <div className="flex justify-center items-center">
                      <img className="w-[150px] h-[150px] rounded-full mb-2" src={chef1} alt="" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mt-3 mb-3">Brian Scott</h5>
                    <p className="text-[#adb5bd] text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                    <h6 className="flex justify-center items-center gap-5 pt-4">
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaFacebookF /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaTwitter /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaInstagram /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaLinkedinIn /></a>
                    </h6>
                  </div>
              </div>
            </div>
            <div className="h-full">
              <div className="text-center px-5 py-5 mt-14">
                  <div className="flex justify-center items-center">
                      <img className="w-[150px] h-[150px] rounded-full mb-2" src={chef2} alt="" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mt-3 mb-3">Edward Harris</h5>
                    <p className="text-[#adb5bd] text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                    <h6 className="flex justify-center items-center gap-5 pt-4">
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaFacebookF /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaTwitter /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaInstagram /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaLinkedinIn /></a>
                    </h6>
                  </div>
              </div>
            </div>
            <div className="h-full">
              <div className="text-center px-5 py-5 mt-14">
                  <div className="flex justify-center items-center">
                      <img className="w-[150px] h-[150px] rounded-full mb-2" src={chef3} alt="" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mt-3 mb-3">Richard Reb</h5>
                    <p className="text-[#adb5bd] text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                    <h6 className="flex justify-center items-center gap-5 pt-4">
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaFacebookF /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaTwitter /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaInstagram /></a>
                        <a className="text-[#bc8c4c] hover:text-[] hover:text-[#886433]" href="#"><FaLinkedinIn /></a>
                    </h6>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
