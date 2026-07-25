"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { education, aboutMe, skills, experience } from "../constant/constant";
import {
  fadeIn,
  staggerContainer,
  itemFadeUp,
  viewportConfig,
} from "../lib/motion";

type Section = "aboutMe" | "education" | "skills" | "experience";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState<Section>("aboutMe");

  const tabs: { id: Section; label: string }[] = [
    { id: "aboutMe", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  const renderContent = () => {
    switch (selectedSection) {
      case "aboutMe":
        return (
          <motion.div
            key="aboutMe"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-[30px]"
          >
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col text-center lg:text-start gap-[30px]"
            >
              <h3 className="text-3xl font-semibold tracking-tight">
                {aboutMe.title}
              </h3>
              <p className="text-sm font-medium text-white/60 leading-relaxed max-w-2xl">
                {aboutMe.description}
              </p>
            </motion.div>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5">
              {aboutMe.info.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemFadeUp}
                  className="flex items-center justify-center lg:justify-start gap-4 border-b border-white/[0.06] pb-3"
                >
                  <span className="text-white/40 text-xs uppercase tracking-wider min-w-[90px]">
                    {item.fieldName}
                  </span>
                  <span className="text-base text-white/90">
                    {item.fieldValue}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      case "education":
        return (
          <motion.div
            key="education"
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col text-center lg:text-left gap-6"
          >
            <motion.div variants={itemFadeUp} className="flex flex-col gap-2">
              <h3 className="text-3xl font-semibold tracking-tight">
                {education.title}
              </h3>
              <p className="text-sm font-medium text-white/60 leading-relaxed max-w-2xl">
                {education.description}
              </p>
            </motion.div>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              {education.info.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemFadeUp}
                  className="card card-hover flex flex-col justify-center items-center lg:items-start py-6 px-8 gap-3"
                >
                  <span className="text-green-400 text-xs font-medium tracking-wide">
                    {item.duration}
                  </span>
                  <h3 className="text-lg text-center lg:text-left">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="h-[6px] w-[6px] rounded-full bg-green-400" />
                    <p className="text-white/50 text-xs">{item.institution}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            key="experience"
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col text-center lg:text-left gap-8"
          >
            <motion.div variants={itemFadeUp} className="flex flex-col gap-2">
              <h3 className="text-3xl font-semibold text-white tracking-tight">
                {experience.title}
              </h3>
              <p className="text-sm font-medium text-white/60 leading-relaxed max-w-2xl">
                {experience.description}
              </p>
            </motion.div>

            <ul className="flex flex-col gap-5">
              {experience.info.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemFadeUp}
                  className="card card-hover p-6 group hover:shadow-[0_0_40px_-12px_rgba(74,222,128,0.25)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg text-white">{item.company}</h3>
                      <span className="text-white/60 text-sm mt-1 block">
                        {item.role}
                      </span>
                    </div>
                    <span className="text-green-400 text-xs font-medium tracking-wide whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>
                  <div className="mt-2 grid gap-2">
                    {item.details.map((detail, dIndex) => (
                      <div
                        key={dIndex}
                        className="flex items-start justify-start gap-3"
                      >
                        <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-green-400/70 group-hover:bg-green-400 transition-colors" />
                        <p className="text-white/55 text-xs text-left leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      case "skills":
        return (
          <motion.div
            key="skills"
            variants={staggerContainer(0.05)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-[30px]"
          >
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col text-center lg:text-left gap-6"
            >
              <h3 className="text-3xl font-semibold tracking-tight">
                {skills.title}
              </h3>
              <p className="text-sm font-medium text-white/60 leading-relaxed max-w-2xl">
                {skills.description}
              </p>
            </motion.div>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.skillList.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemFadeUp}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card card-hover relative flex flex-col justify-center items-center gap-3 h-[140px] cursor-default group"
                >
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[11px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-3 py-1 whitespace-nowrap">
                    {item.name}
                  </span>
                  <div className="text-5xl text-white/70 group-hover:text-green-400 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="resume"
      className="relative py-24 bg-[#0e0e11] mx-auto scroll-mt-28 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-green-400/[0.04] blur-[120px]" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-4/5 items-start gap-12 relative">
        {/* Left Content */}
        <motion.div
          variants={fadeIn("right", 40)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-4 lg:sticky lg:top-28"
        >
          <div className="flex flex-col gap-3 text-center lg:text-left mb-4">
            <span className="text-green-400 text-xs uppercase tracking-[0.3em]">
              Profile
            </span>
            <h1 className="text-4xl tracking-tight">Why hire me?</h1>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs lg:mx-0 mx-auto">
              Engineering manager and hands-on full-stack engineer building
              scalable, production-grade systems with a focus on architecture
              and reliability.
            </p>
          </div>

          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setSelectedSection(tab.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`w-full rounded-xl py-4 text-sm font-medium transition-colors duration-300 border ${
                selectedSection === tab.id
                  ? "bg-green-400 text-black border-green-400 shadow-[0_0_24px_-8px_rgba(74,222,128,0.6)]"
                  : "bg-white/[0.03] text-white/70 border-white/[0.06] hover:border-white/15 hover:text-white"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("left", 40)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="col-span-2"
        >
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
