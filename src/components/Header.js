import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";
// import logo
import Logo from "../assets/img/logo.svg";
// import icons
import { CgMenuRight, CgClose } from "react-icons/cg";
// import data
import { navigation } from "../data";
// import components
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        // if bg is true
        bg
          ? "bg-white py-4 lg:py-6"
          : // if bg is false
            "bg-white bg-opacity-80 "
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}

          <a
            className="capitalize text-3xl lg:text-3xl text-black hover:text-sky-500 shadow-sky-500/50 transition-all"
            href={"#"}
          >
            FlowerShop
          </a>

          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-4xl lg:text-4xl text-black cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="capitalize md:flex md:gap-x-12">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="hover:border-b border-black cursor-pointer "
                  >
                    <Link
                      to={item.href}
                      className=" text-3xl lg:text-3xl duration:300 transition-all"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
