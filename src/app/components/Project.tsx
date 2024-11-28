import React from "react";
import { projects } from "../constant/constant";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const Project = () => {
  return (
    <div className="py-4 lg:py-16 bg-[#1c1b22] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-4/5 items-start gap-12">
        {/*Left Content*/}
        <div className="">
          {projects.map((project, index) => (
            <div className="flex flex-col gap-[30px]" key={index}>
              <span className="text-8xl leading-none font-extrabold">
                {project.num}
              </span>
              <h2 className="text-4xl leading-none font-bold hover:text-green-400 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 text-sm">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-green-400">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex gap-4 items-center">
                <Link
                  className="bg-[#27272b] p-4 rounded-full"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlineArrowOutward className="w-full h-4" />
                </Link>
                <Link
                  className="bg-[#27272b] p-4 rounded-full"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-full h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/*Right Content*/}
        <div></div>
      </div>
    </div>
  );
};

export default Project;
