"use client";

import React, { useState } from "react";
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
    <section
      id="projects"
      className="relative py-24 bg-[#0e0e11] mx-auto scroll-mt-28 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-green-400/[0.04] blur-[140px]" />

      <div className="flex flex-col-reverse lg:flex-row mx-auto w-4/5 items-start gap-12 relative">
        {/* Left Content */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="w-full lg:w-[50%]"
        >
          <div className="flex flex-col gap-6">
            <span className="text-7xl leading-none font-extrabold text-white/[0.08]">
              {activeProject.num}
            </span>
            <h2 className="text-2xl md:text-3xl leading-tight font-bold hover:text-green-400 transition-colors duration-500 capitalize">
              {activeProject.category}
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              {activeProject.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {activeProject.stack.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-green-300 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="border-t border-white/[0.06]" />
            <div className="flex gap-3 items-center">
              <Link
                className="grid place-items-center bg-white/[0.04] border border-white/[0.06] p-3.5 rounded-full hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300"
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
              >
                <MdOutlineArrowOutward className="w-4 h-4" />
              </Link>
              <Link
                className="grid place-items-center bg-white/[0.04] border border-white/[0.06] p-3.5 rounded-full hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300"
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          className="flex flex-col items-end justify-end gap-4 w-full lg:w-[50%]"
        >
          <div className="relative w-full h-[400px] card overflow-hidden group">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-60" />
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-green-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="bg-white/[0.04] border border-white/[0.06] text-white/80 p-3 rounded-lg hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                onClick={handlePrevSlide}
                aria-label="Previous project"
              >
                <IoIosArrowBack />
              </button>
              <button
                className="bg-white/[0.04] border border-white/[0.06] text-white/80 p-3 rounded-lg hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                onClick={handleNextSlide}
                aria-label="Next project"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
