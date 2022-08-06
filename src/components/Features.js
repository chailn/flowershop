import React from "react";

// import data
import { features } from "../data";

const Features = () => {
  const { title, subtitle, image, items } = features;
  return (
    <section
      id="about"
      className=" section h-screen bg-flower_bg  bg-cover bg-center flex items-center justify-center"
    >
      {/* className="container mx-auto  " */}
      <div>
        <div className="flex items-center flex-col lg:flex-row lg:gap-x-[100px]">
          {/* image */}
          <div className="flex-1 order-1 lg:-order-1">
            <img className=" rounded-lg w-full" src={image.type} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-start ">
            <h2 className="title text-center lg:text-start">{title}</h2>
            <p className="subtitle text-center lg:text-start">{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, index) => {
                const { icon, title, subtitle } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0" key={index}>
                    <div className="text-2xl lg:text-3xl mr-4">{icon}</div>
                    <div>
                      <h4 className="text-base lg:text-2xl font-semibold mb-3">
                        {title}
                      </h4>
                      <p className="text-xl">{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
