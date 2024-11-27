import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const Hero = () => {
  return (
    <div className="bg-[#1c1b22] pt-[4vh] md:[12vh] w-full h-screen overflow-hidden relative">
      <div className="flex flex-col items-center justify-center mx-auto w-4/5 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/*Text Content*/}
          <div className="flex flex-col items-start justify-center gap-6">
            <p className="font-medium text-sm text-gray-200">Web Developer</p>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] text-gray-200 tracking-wide">
              Hello I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-green-300">
                Aayush Karki
              </span>
            </h1>
            <p className="font-medium text-sm text-gray-200">
              I specialize in creating seamless digital experiences and have
              expertise in a diverse range of programming languages and
              technologies, ensuring innovative and user-centric solutions.
            </p>

            <div className="flex items-center gap-3 sm:gap-5">
              <button className="flex items-center border border-green-500 rounded-3xl py-2 px-4 gap-2 font-semibold">
                Download CV <GoDownload className="w-4 h-4 text-green-400" />
              </button>
              <Link
                href={"/"}
                className="border border-green-500 rounded-full p-2"
              >
                <FaGithub className="w-4 h-4 text-green-400" />
              </Link>
              <Link
                href={"/"}
                className="border border-green-500 rounded-full p-2"
              >
                <FaLinkedin className="w-4 h-4 text-green-400" />
              </Link>
            </div>
          </div>

          {/*Image Content*/}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
