"use client";

import { useState } from "react";
import { education, aboutMe, skills } from "../constant/constant";

type section = "aboutMe" | "education" | "skills";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState<section>("aboutMe");

  const renderContent = () => {
    switch (selectedSection) {
      case "aboutMe":
        return <div className="text-2xl font-bold">{aboutMe.title}</div>;
      case "education":
        return (
          <div className="flex items-start justify-center text-2xl font-bold">
            {education.icon} {education.title}
          </div>
        );
      case "skills":
        return <div className="text-2xl font-bold">{skills.title}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-[#1c1b22]">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-4/5 h-screen items-center gap-12">
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
        <div className="col-span-2">hlo</div>
      </div>
    </div>
  );
};

export default Resume;
