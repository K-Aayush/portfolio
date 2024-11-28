"use client";

import { useState } from "react";
import { education, aboutMe, skills } from "../constant/constant";

type section = "aboutMe" | "education" | "skills";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState<section>("aboutMe");
  return <div>Resume</div>;
};

export default Resume;
