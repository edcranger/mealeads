import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className="py-8 top-0 z-10">
      <nav className="bg-gray-100 fixed top-0 inset-x-0 shadow">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between ">
            <div className="flex space-x-4 items-center">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center py-3 px-2 text-gray-700"
              >
                <IoFastFood className="h-10 w-10 mr-1 text-yellow-500" />
                <span className="text-4xl text-yellow-500 tracking-wider">
                  Meal<span className="text-yellow-700">eds</span>
                </span>
              </Link>
              {/* Primary Nav  */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-3 text-gray-700 hover:text-yellow-600 font-semibold transition duration-500"
                >
                  Home
                </Link>

                <Link
                  to="/createmealplan"
                  className="py-4 px-3 text-gray-700 hover:text-yellow-600 font-semibold transition duration-500"
                >
                  Meal Plan
                </Link>
              </div>
            </div>

            {/* Secondary Nav  */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-5 px-3 text-gray-700 hover:text-yellow-600 font-semibold transition duration-500"
              >
                Login
              </Link>
              <Link
                to="/"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 rounded hover:text-gray-900 transition duration-500 font-semibold"
              >
                Signup
              </Link>
            </div>

            {/* Mobile btn goes here*/}
            <div className="md:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <GiHamburgerMenu className="w-8 h-10 active:outline-none" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            toggleMenu
              ? "hidden "
              : "md:hidden transition duration-500 ease-in-out"
          }`}
        >
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-yellow-200">
            Home
          </Link>
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-yellow-200">
            Meal Plan
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
