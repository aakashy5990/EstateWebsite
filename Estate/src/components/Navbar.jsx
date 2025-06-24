import React from "react";
import { assets } from "../assets/assets";
import { useState,useEffect } from "react";

function Navbar() {
  const [showMobileMenu,setShowMobileMenu] = useState(false);

  useEffect(()=>{
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () =>{
      document.body.style.overflow = 'auto'
    }
  },[showMobileMenu])
  
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full ">
          Sign Up
        </button>
        <img src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" onClick={() => setShowMobileMenu(true)} alt="" />
      </div>
      {/* mobile-menu  */}
      <div className={`md:hidden right-0 top-0 bottom-0  overflow-hidden bg-white transition-all ${showMobileMenu ? 'fixed w-full':'h-0 w-0'}`}>
        <div className="flex justify-end p-6 ">
          <img src={assets.cross_icon} className="w-6" alt="" onClick={() => setShowMobileMenu(false)} />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Project</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className="px-4 py-2 rounded-full inline-block">Testimonial</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
