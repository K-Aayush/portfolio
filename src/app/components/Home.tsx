import React from "react";
import Hero from "./Hero";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Resume />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
