import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[#1c1b22] pt-[4vh] md:[12vh] w-full h-screen overflow-hidden relative scroll-mt-12"
    >
      <div className="flex flex-col items-center justify-center mx-auto w-4/5 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/*Text Content*/}
          <div className="flex flex-col items-start justify-center gap-6">
            <p className="font-medium text-sm text-white/60">Web Developer</p>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] tracking-wide">
              Hello I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-green-300">
                Aayush Karki
              </span>
            </h1>
            <p className="font-medium text-sm text-white/60">
              I specialize in creating seamless digital experiences and have
              expertise in a diverse range of programming languages and
              technologies, ensuring innovative and user-centric solutions.
            </p>

            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href="/resume/Aayush_Karki_resume.pdf"
                download
                className="group flex items-center border border-green-500 text-green-400 rounded-3xl py-2 px-4 gap-2 font-semibold hover:bg-green-500 hover:text-black duration-300"
              >
                Download CV
                <GoDownload className="w-4 h-4 text-green-400 group-hover:text-black duration-300" />
              </a>
              <Link
                href={"https://github.com/K-Aayush"}
                className="group border border-green-500 rounded-full p-2 hover:bg-green-400 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-4 h-4 text-green-400 group-hover:text-black duration-300" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/karkiayush/"}
                className="group border border-green-500 rounded-full p-2 hover:bg-green-400 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4 text-green-400 group-hover:text-black duration-300" />
              </Link>
            </div>
          </div>

          {/*Image Content*/}
          <div className="mx-auto hidden lg:block">
            <Image
              className="rounded-full border-[2px] border-green-400 border-dashed"
              src={"/images/image.png"}
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
