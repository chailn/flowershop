import React from "react";

import { Link } from "react-scroll";
// import data
import { navigation } from "../data";

const NavMobile = () => {
  return (
    <nav className="bg-white shadow-2xl w-full h-full">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-xl font-medium capitalize"
                smooth={true}
                duration={500}
                offset={-70}
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
