import React from "react";

// import data
import { hero } from "../data";

// import components
// import Stats from "./Stats";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section
      id="home"
      className="h-full flex items-center justify-center pt-[100px] w-full  bg-flower lg:bg-center bg-cover bg-no-repeat text-black "
    >
      <div className=" text-center ">
        {/* title */}
        <h1 className="text-4xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]">
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto text-3xl lg:text-3xl">
          {subtitle}
        </h2>
        {/* button */}
        {/* <button className="px-[35px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[160px] lg:mb-[194px] text-xl rounded-md border drop-shadow-lg bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] backdrop-blur-md transition">
          {buttonText}
        </button> */}
        {/* stats */}
        {/* <div className="-top-[70px] relative">
          <Stats />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
