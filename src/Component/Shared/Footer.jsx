import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { BiLocationPlus, BiLogoGmail} from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-gray-700 bg-blue-200">
      <div className="flex px-10 py-2 items-start justify-between">
        {/* -------------------------------------Logo part of footer ------------------------------------ */}
        <div className=" w-96">
          <div className="flex items-center gap-3">
            <img
              className=" w-20"
              src="https://i.postimg.cc/Bvh66ykR/Jsd-itverse.png"
              alt="logo"
            />{" "}
            <h1 className=" text-2xl font-semibold">IT UNIVERSE</h1>
          </div>
          <div>
            Unlock Your Potential with IT Universe: Where Knowledge Meets
            Innovation
          </div>
          <div className=" py-5 flex gap-1 items-center">
            <BsFacebook className=" p-2 bg-blue-600 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5 hover:rotate-45 hover:border-2 hover:border-blue-900 " />
            <BsInstagram className=" p-2 bg-blue-600 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5  hover:rotate-45 hover:border-2 hover:border-blue-900 " />
            <BsTwitter className=" p-2 bg-blue-600 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5  hover:rotate-45 hover:border-2 hover:border-blue-900 " />
            <BsLinkedin className=" p-2 bg-blue-600 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5  hover:rotate-45 hover:border-2 hover:border-blue-900 " />
          </div>
        </div>
        {/* -------------------------------------Link part of footer ------------------------------------ */}
        <div className=" md: pt-5">
          <h1 className=" text-2xl font-semibold">Important Links</h1>
          <div className="text-base flex flex-col gap-3 underline">
            <NavLink to={"/"}>Home </NavLink>
            <NavLink to={"course"}>Courses </NavLink>
            <NavLink to={"instructor"}>Instructors </NavLink>
          </div>
        </div>
        {/* ----------------Contact us part of the footer------------------- */}
        <div className="flex flex-col gap-3 md:pt-5"> 
        <h1 className=" text-2xl font-semibold">Contact Us</h1>
          <div className=" flex items-center gap-2"><BiLogoGmail  size={25}/>info@ituniverse.com</div>
          <div className=" flex items-center gap-2"><BiLocationPlus  size={25}/>123 Street, City, Country</div>
          <div className=" flex items-center gap-2"><BsFillTelephoneFill size={25}/>123-456-7890</div>
        
        </div>
      </div>
      <h1 className=" text-center text-sm py-2 text-white bg-black">
        Copyright © 2023 by IT UNIVERSE
      </h1>
    </div>
  );
};

export default Footer;
