"use client";

import React, { lazy, useState } from "react";
import { projects } from "../constant/constant";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeProject = projects[activeIndex];

  return (
    <div className="py-16 bg-[#1c1b22] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row mx-auto w-4/5 items-start gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[50%]">
          <div className="flex flex-col gap-[30px]">
            <span className="text-8xl leading-none font-extrabold">
              {activeProject.num}
            </span>
            <h2 className="text-4xl leading-none font-bold hover:text-green-400 transition-all duration-500 capitalize">
              {activeProject.category} project
            </h2>
            <p className="text-white/60 text-sm">{activeProject.description}</p>
            <ul className="flex flex-wrap gap-4">
              {activeProject.stack.map((item, index) => (
                <li key={index} className="text-xl text-green-400">
                  {item.name}
                  {index !== activeProject.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex gap-4 items-center">
              <Link
                className="bg-[#27272b] p-4 rounded-full"
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineArrowOutward className="w-full h-4" />
              </Link>
              <Link
                className="bg-[#27272b] p-4 rounded-full"
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-full h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-end justify-end gap-4 w-full lg:w-[50%]">
          <div className="relative w-full h-[400px] bg-[#27272b] rounded-2xl overflow-hidden">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-green-400 text-black p-4 rounded-lg"
              onClick={handlePrevSlide}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="bg-green-400 text-black p-4 rounded-lg"
              onClick={handleNextSlide}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
