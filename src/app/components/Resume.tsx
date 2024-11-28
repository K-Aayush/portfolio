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
    }
  };
  return <div>Resume</div>;
};

export default Resume;
