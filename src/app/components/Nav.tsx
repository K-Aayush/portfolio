"use client";

import { useState } from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="fixed h-[12vh] z-[10] bg-[#1c1b22] w-full">
      <div className="flex items-center h-full justify-between mx-auto w-[95%] sm:w-[90%] xl:w-[80%]">
        {/*Logo*/}
        <h1 className="font-semibold text-xl md:text-2xl">
          Aayush Karki
          <span className="text-2xl text-green-500"> .</span>
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
            <button className="px-4 py-2 bg-green-500 rounded-3xl font-semibold hover:bg-green-600 transition-all duration-200">
              Hire Me
            </button>

            {/*Burger*/}
            <HiBars3BottomRight
              onClick={() => setIsSidebarOpen(true)}
              className="w-8 h-8 cursor-pointer text-white md:hidden"
            />
          </div>
        </div>
      </div>

      {/*SideBar*/}
      <div
        className={`fixed inset-0 bg-black opacity-70 w-full h-screen z-[50] ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[60%] h-full bg-[#1c1b22] z-[100] p-6 transform transition-transform duration-300 ${
          isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        {/*Logo and closeMenu*/}
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[20px]">
            Aayush Karki <span className="text-2xl text-green-500">.</span>
          </h1>
          <IoMdClose
            onClick={() => setIsSidebarOpen(false)}
            className="w-8 h-8 cursor-pointer text-white"
          />
        </div>

        {/*Sidebar Navlinks*/}
        <div className="flex flex-col justify-center items-start space-y-6 py-10">
          {navLinks.map((nav) => (
            <Link key={nav.id} href={nav.url}>
              <p
                onClick={() => setIsSidebarOpen(false)}
                className="nav_label text-[18px] border-white border-b-[1px] hover:border-none"
              >
                {nav.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
