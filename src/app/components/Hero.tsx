import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { HiArrowDown } from "react-icons/hi2";
import { fadeIn, staggerContainer, zoomIn } from "../lib/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0e0e11] scroll-mt-12"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 glow" />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-green-400/10 blur-[140px]"
      />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-green-300/5 blur-[120px]" />

      <div className="relative flex flex-col items-center justify-center mx-auto w-4/5 min-h-screen pt-[12vh]">
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full"
        >
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center gap-6">
            <motion.div
              variants={fadeIn("up", 20)}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Engineering Manager · Full Stack Engineer
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 24)}
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.05] tracking-tight"
            >
              Hello I&apos;m
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-[length:200%_auto] animate-gradient-pan">
                Aayush Karki
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 24)}
              className="max-w-xl text-sm md:text-base text-white/55 leading-relaxed"
            >
              I build scalable software, lead engineering teams, and design
              production systems — turning complex requirements into reliable,
              user-centric healthcare and full-stack applications.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 24)}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-300 hover:shadow-[0_0_30px_-4px_rgba(74,222,128,0.5)]"
              >
                View Projects
                <HiArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>

              <a
                href="/resume/Aayush_Karki_Resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/85 transition-all duration-300 hover:border-green-400/50 hover:text-white"
              >
                Download CV
                <GoDownload className="h-4 w-4 text-green-400 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-3">
                <motion.div variants={fadeIn("up", 12)} className="flex items-center gap-3">
                  <Link
                    href="https://github.com/K-Aayush"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group grid place-items-center rounded-full border border-white/15 p-2.5 transition-all duration-300 hover:border-green-400/50 hover:bg-green-400/10"
                  >
                    <FaGithub className="h-4 w-4 text-white/70 group-hover:text-green-400 transition-colors duration-300" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/karkiayush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group grid place-items-center rounded-full border border-white/15 p-2.5 transition-all duration-300 hover:border-green-400/50 hover:bg-green-400/10"
                  >
                    <FaLinkedin className="h-4 w-4 text-white/70 group-hover:text-green-400 transition-colors duration-300" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={zoomIn}
            className="relative mx-auto hidden lg:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-6 rounded-full border border-dashed border-green-400/30"
            />
            <div className="absolute inset-0 -m-12 rounded-full border border-white/[0.04]" />
            <div className="relative rounded-full p-1.5 bg-gradient-to-b from-green-400/30 to-transparent">
              <Image
                className="rounded-full border border-white/10"
                src="/images/image.png"
                alt="Aayush Karki"
                width={440}
                height={440}
                priority
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px origin-top bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
