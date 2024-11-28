"use client";

import { useState } from "react";
import { education, aboutMe, skills } from "../constant/constant";

type section = "aboutMe" | "education" | "skills";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState<section>("aboutMe");

  const renderContent = () => {
    switch (selectedSection) {
      case "aboutMe":
        return (
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col text-center lg:text-start gap-[30px]">
              <h3 className="text-3xl font-semibold">{aboutMe.title}</h3>
              <p className="text-sm font-medium">{aboutMe.description}</p>
            </div>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {aboutMe.info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-4 overflow-hidden"
                >
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-lg">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "education":
        return (
          <div className="flex flex-col text-center lg:text-left gap-6">
            <h3 className="text-3xl font-semibold">{education.title}</h3>
            <p className="text-sm font-medium">{education.description}</p>

            <ul className="grid gird-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.info.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#27272b] flex flex-col justify-center items-center py-6 px-10 lg:items-start gap-1 rounded-2xl"
                >
                  <span className="text-green-400 text-sm">
                    {item.duration}
                  </span>
                  <h3 className="text-xl text-center lg:text-left">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="h-[6px] w-[6px] rounded-full bg-green-400"></span>
                    <p className="text-gray-300 text-xs">{item.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case "skills":
        return (
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col text-center lg:text-left gap-6">
              <h3 className="text-3xl font-semibold">{skills.title}</h3>
              <p className="text-sm font-medium">{skills.description}</p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {skills.skillList.map((item, index) => (
                <li
                  key={index}
                  className="relative flex justify-center items-center group bg-[#27272b] w-full h-[150px] rounded-2xl cursor-pointer"
                >
                  <span className="absolute -top-8 text-xs font-normal rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-4 py-2 duration-300">
                    {item.name}
                  </span>
                  <div className="text-6xl group-hover:text-green-400 transition-all duration-300">
                    {item.icon}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="resume" className="py-16 bg-[#1c1b22] mx-auto scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-4/5 items-start gap-12">
        {/*Left Content*/}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-[30px] text-center lg:text-left">
            <h1 className="text-4xl">Why hire me?</h1>
            <p className="text-xs text-white/60">
              Driven web developer specializing in React and nextjs, crafting
              intuitive and responsive user experiences.
            </p>
          </div>

          <button
            onClick={() => setSelectedSection("aboutMe")}
            className={`w-full rounded-xl py-4 ${
              selectedSection === "aboutMe"
                ? "bg-green-400 text-black"
                : "bg-[#27272b]"
            }`}
          >
            About me
          </button>

          <button
            onClick={() => setSelectedSection("skills")}
            className={`w-full rounded-xl py-4 ${
              selectedSection === "skills"
                ? "bg-green-400 text-black"
                : "bg-[#27272b]"
            }`}
          >
            Skills
          </button>

          <button
            onClick={() => setSelectedSection("education")}
            className={`w-full rounded-xl py-4 ${
              selectedSection === "education"
                ? "bg-green-400 text-black"
                : "bg-[#27272b]"
            }`}
          >
            Education
          </button>
        </div>

        {/*Right Content*/}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="col-span-2"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Resume;
