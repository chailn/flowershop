import React, { useState, useEffect } from "react";

// import data
import { newsletter } from "../data";

const Newsletter = () => {
  const { title, subtitle } = newsletter;
  const [bg, setBg] = useState(true);

  useEffect(() => {
    // add event listener
    window.addEventListener("resize", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.innerWidth > 1024 ? setBg(true) : setBg(false);
    });
  });
  return (
    <section
      id="contact"
      className="section bg-flower_bg_3 bg-cover bg-center min-h-[490px]"
    >
      <div className="container mx-auto flex justify-center lg:justify-end ">
        <div
          className={`${
            // if bg is true
            bg
              ? "lg:bg-black/0  "
              : // if bg is false
                "bg-black/30 "
          }
      w-full max-w-[558px] text-center lg:text-left lg:text-black text-white `}
        >
          <h2 className="text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal">
            {title}
          </h2>
          <p className="text-3xl font-light  mb-10">{subtitle}</p>
          <div className="flex flex-col text-3xl ">
            <p>name：ｘｘｘ</p>
            <br />
            <p>tel：ｘｘｘ</p>
            <br />
            <p>address：ｘｘｘ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
