import React from "react";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-[#1c1b22] w-full">
      <div className="flex items-center h-full justify-between mx-auto w-[95%] sm:w-[90%] xl:w-[80%]">
        {/*Logo*/}
        <h1 className="font-semibold text-2xl">
          Aayush Karki <span className="text-4xl text-green-400">.</span>
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-4"></div>
      </div>
    </div>
  );
};

export default Nav;
