import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShop,
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="p-6 relative bg-[#f2f2f2]"
    style={{ backgroundImage: 'url("https://wallpapers.com/images/featured/striped-k45nntawqv8i0d5l.jpg")' }}
    >
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute right-4 top-4 z-[99] md:hidden"
      />
      {nav && (
        <div className="fixed top-0 left-0 right-0 w-screen h-screen bg-[#DAD7cd]/90 flex flex-col justify-center items-center z-20">
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-t-[90px] shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">About Me</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/portfolio"
            className="w-[75%] flex justify-center items-center shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineShop size={20} />
            <span className="pl-4">Portfolio</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/contact"
            className="w-[75%] flex justify-center items-center shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineTeam size={20} />
            <span className="pl-4">Contact</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/resume"
            className="w-[75%] flex justify-center items-center shadow-lg bg-[#A3b18A] shadow-[#588157] p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineShoppingCart size={20} />
            <span className="pl-4">Resume</span>
          </Link>
        </div>
      )}
      <div className="md:block hidden">
        <div className="flex justify-between items-center">
        <div className="flex">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-2xl text-white font-bold"
            >
              Clifford Rouzeau
            </Link>
          </div>
          <ul className="flex space-x-4 justify-end">
          <li className="text-2xl text-white relative group">
              <Link to="/">About Me</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            <li className="text-2xl text-white  relative group">
              <Link to="/portfolio">Portfolio</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            <li className="text-2xl text-white  relative group">
              <Link to="/contact">Contact</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
            <li className="text-2xl text-white relative group">
              <Link to="/resume">Resume</Link>
              <span className="absolute left-0 right-0 h-0.5 bg-black transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
