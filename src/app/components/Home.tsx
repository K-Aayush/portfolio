"use client";

import { useEffect } from "react";
import Hero from "./Hero";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);
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
