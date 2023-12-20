// src/components/Navbar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/Tour Travel Business Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xs md:text-base">
            <div className="space-x-4">
               
              <NavLink to="/privacy_policy" className="text-white hover:text-gray-300 border-r-2 pr-2" activeClassName="underline">
                Privacy Policy
              </NavLink>
              <NavLink to="/refund-policy" className="text-white hover:text-gray-300" activeClassName="underline">
                Refund Policy
              </NavLink>
            </div>
          </div>
          <div className="space-x-4 text-sm md:text-base">
            <NavLink to="/SignUp" className="text-white hover:text-gray-300 border-r-2 pr-2" activeClassName="underline">
              Sign Up
            </NavLink>
            <NavLink to="/Login" className="text-white hover:text-gray-300" activeClassName="underline">
              Log in
            </NavLink>
          </div>
        
        </div>
      </div>

      <div className='bg-[#f8f9fa]'>
        <div className='flex justify-between container mx-auto'>
          <div className='w-28'>
            <img src={logo} alt='img' />
          </div>
          <div className="space-x-10 hidden md:flex flex-col items-center text-xl lg:flex-row lg:items-center lg:space-x-10">
            <NavLink
              to="/"
              exact
              className="text-black hover:text-gray-300 "
              activeClassName="underline"
            >
              Travel Packages
            </NavLink>
            <NavLink
              to="/topdestinations"
              className="text-black hover:text-gray-300"
              activeClassName="underline"
            >
              Top Destinations
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black hover:text-gray-300"
              activeClassName="underline"
            >
              Private Tours
            </NavLink>
            <NavLink
              to="/about"
              className="text-black hover:text-gray-300"
              activeClassName="underline"
            >
              Hotels
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black hover:text-gray-300"
              activeClassName="underline"
            >
              Most Visited
            </NavLink>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-teal-800 text-2xl m-10 hover:text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className='bg-[#f8f9fa] absolute right-0 w-[100%] lg:hidden'>
          <div className='flex justify-center items-center'>
            <div className="my-10 flex flex-col  gap-5 items-center text-xl">
              <NavLink
                to="/"
                exact
                className="text-black hover:text-gray-300 "
                activeClassName="underline"
              >
                Travel Packages
              </NavLink>
              <NavLink
                to="/topdestinations"
                className="text-black hover:text-gray-300"
                activeClassName="underline"
              >
                Top Destinations
              </NavLink>
              <NavLink
                to="/contact"
                className="text-black hover:text-gray-300"
                activeClassName="underline"
              >
                Private Tours
              </NavLink>
              <NavLink
                to="/about"
                className="text-black hover:text-gray-300"
                activeClassName="underline"
              >
                Hotels
              </NavLink>
              <NavLink
                to="/contact"
                className="text-black hover:text-gray-300"
                activeClassName="underline"
              >
                Most Visited
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
