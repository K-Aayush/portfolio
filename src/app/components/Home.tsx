import React from "react";
import Hero from "./Hero";
import Resume from "./Resume";
import Project from "./Project";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Resume />
      <Project />
    </div>
  );
};

export default Home;
