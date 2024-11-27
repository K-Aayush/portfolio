import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-[#1c1b22] w-full">
      <div className="flex items-center h-full justify-between mx-auto w-[95%] sm:w-[90%] xl:w-[80%]">
        {/*Logo*/}
        <h1 className="font-semibold text-2xl">
          Aayush Karki <span className="text-4xl text-green-400">.</span>
        </h1>

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          {navLinks.map((nav) => (
            <Link key={nav.id} href={nav.url}>
              <p className="nav_label">{nav.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
