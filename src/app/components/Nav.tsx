import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-[#1c1b22] w-full">
      <div className="flex items-center h-full justify-between mx-auto w-[95%] sm:w-[90%] xl:w-[80%]">
        {/*Logo*/}
        <h1 className="font-semibold text-2xl">
          Aayush Karki <span className="text-4xl text-green-400">.</span>
        </h1>

        <div className="flex items-center space-x-10">
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                <p className="nav_label">{nav.label}</p>
              </Link>
            ))}
          </div>

          {/*Button*/}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-green-500 rounded-full font-semibold hover:bg-green-600 transition-all duration-200">
              Hire Me
            </button>

            {/*Burger*/}
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
