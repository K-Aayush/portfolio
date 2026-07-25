"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../constant/constant";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import {
  fadeIn,
  staggerContainer,
  itemFadeUp,
  viewportConfig,
} from "../lib/motion";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newIndex: number, dir: number) => {
    setDirection(dir);
    setActiveIndex(newIndex);
  };

  const handlePrevSlide = () =>
    paginate(activeIndex === 0 ? projects.length - 1 : activeIndex - 1, -1);

  const handleNextSlide = () =>
    paginate(activeIndex === projects.length - 1 ? 0 : activeIndex + 1, 1);

  const activeProject = projects[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0e0e11] mx-auto scroll-mt-28 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-green-400/[0.04] blur-[140px]" />

      <div className="flex flex-col-reverse lg:flex-row mx-auto w-4/5 items-start gap-12 relative">
        {/* Left Content */}
        <motion.div
          variants={fadeIn("right", 40)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="w-full lg:w-[50%]"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeProject.num}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <motion.span
                key={`num-${activeProject.num}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-7xl leading-none font-extrabold text-white/[0.08]"
              >
                {activeProject.num}
              </motion.span>
              <h2 className="text-2xl md:text-3xl leading-tight font-bold hover:text-green-400 transition-colors duration-500 capitalize">
                {activeProject.category}
              </h2>
              <p className="text-white/55 text-sm leading-relaxed">
                {activeProject.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {activeProject.stack.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                    className="text-xs text-green-300 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1"
                  >
                    {item.name}
                  </motion.li>
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
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("left", 40)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-end justify-end gap-4 w-full lg:w-[50%]"
        >
          <div className="relative w-full h-[400px] card overflow-hidden group">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeProject.image}
                custom={direction}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => paginate(i, i > activeIndex ? 1 : -1)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-green-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/[0.04] border border-white/[0.06] text-white/80 p-3 rounded-lg hover:border-green-400/50 hover:text-green-400 transition-colors duration-300"
                onClick={handlePrevSlide}
                aria-label="Previous project"
              >
                <IoIosArrowBack />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/[0.04] border border-white/[0.06] text-white/80 p-3 rounded-lg hover:border-green-400/50 hover:text-green-400 transition-colors duration-300"
                onClick={handleNextSlide}
                aria-label="Next project"
              >
                <IoIosArrowForward />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
