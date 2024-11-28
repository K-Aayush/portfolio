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
          <div className="text-xl font-medium flex flex-col items-start justify-center">
            {aboutMe.title}
          </div>
        );
      case "education":
        return (
          <div className="flex flex-col text-center lg:text-left gap-6">
            <h3 className="text-xl font-semibold">{education.title}</h3>
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
        return <div className="text-xl font-medium">{skills.title}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-[#1c1b22]">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-4/5 items-start gap-12">
        {/*Left Content*/}
        <div className="flex flex-col gap-6">
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
        <div className="col-span-2">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Resume;
