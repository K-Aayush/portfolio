import React from "react";

const Footer = () => {
  return (
    <div className="py-16 bg-[#1c1b22] w-full">
      <div className="border-t-[1.5px] border-white/60"></div>
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-5 gap-3">
        <h1 className="sm:font-semibold font-normal text-lg sm:text-2xl">
          Aayush Karki
          <span className="text-2xl text-green-500"> .</span>
        </h1>

        <p className="text-sm text-white/60">© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
