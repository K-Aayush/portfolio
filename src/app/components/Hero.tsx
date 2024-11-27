import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#1c1b22] pt-[4vh] md:[12vh] w-full h-screen overflow-hidden relative">
      <div className="flex flex-col items-center justify-center mx-auto w-4/5 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/*Text Content*/}
          <div>
            <p className="">Web Developer</p>
            <h1>Hello I'm Aayush Karki</h1>
            <p>
              I specialize in creating seamless digital experiences and have
              expertise in a diverse range of programming languages and
              technologies, ensuring innovative and user-centric solutions.
            </p>
          </div>

          {/*Image Content*/}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
