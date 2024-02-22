import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=""
    style={{ backgroundImage: 'url("https://wallpapers.com/images/featured/striped-k45nntawqv8i0d5l.jpg")' }}
    >
      <div className="w-full max-w-screen-xl mx-auto pt-4 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-neutral-400">
            <li>
              <Link to="/portfolio" className="hover:underline me-4 md:me-6 text-white font-bold">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:underline me-4 md:me-6 text-white font-bold">
                Resume
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Clifford-rouzeau"
                target="_blank"
                className="hover:underline me-4 md:me-6 text-white font-bold"
                rel="noopener noreferrer" 
              >
                GitHub
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline me-4 md:me-6 text-white font-bold">
                Contact   
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
<div className="text-sm text-white font-bold text-center dark:text-gray-400">
          © 2024{" Clifford Rouzeau "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
