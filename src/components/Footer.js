import React from "react";

// import logo
import Logo from "../assets/img/logo.svg";

// import data
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-orange-100 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="flex gap-x-4">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all"
                  key={index}
                >
                  <a href="#">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
