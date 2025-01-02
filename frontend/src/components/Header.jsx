import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Font Awesome search icon

const Header = () => {
  return (
    <header className={`shadow-md relative bg-[#2e2c2c] opacity-80`}>
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 mx-auto max-w-7xl">
        {/* Left Section: Navigation Links */}
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-20 mb-4 sm:mb-0">
          <Link to="/">
            <li className="text-white hover:underline hover:underline-offset-4 hover:text-white">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="text-[#E5E5E5] hover:underline hover:underline-offset-4 hover:text-white">
              About Us
            </li>
          </Link>
          <Link to="/">
            <li className="text-[#E5E5E5] hover:underline hover:underline-offset-4 hover:text-white">
              Agents
            </li>
          </Link>
          <Link to="/">
            <li className="text-[#E5E5E5] hover:underline hover:underline-offset-4 hover:text-white">
              Blog
            </li>
          </Link>
        </ul>

        {/* Right Section: Search and Sign In/Sign Up */}
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <li>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-2 text-[#E5E5E5] bg-transparent border-b border-[#E5E5E5] focus:outline-none focus:ring-0 focus:border-white"
              />
              <FaSearch className="absolute right-3 top-2.5 text-white text-lg cursor-pointer" />
            </div>
          </li>
          <li className="text-[#E5E5E5] hover:underline hover:underline-offset-4 hover:text-white">
            Sign In | Sign Up
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
