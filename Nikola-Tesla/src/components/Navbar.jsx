import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between mx-auto">
      <li className="bg-black text-white font-bold px-5 m-3 py-3 shadow-md shadow-emerald-400 rounded-sm mx-auto sm:mx-1 list-none">
        Nikola <span className="text-emerald-600">Tesla</span>
      </li>
      <nav>
        <ul className="flex flex-row justify-center gap-x-3 sm:gap-x-12 text-black font-semibold sm:mr-24 mt-3 mx-auto">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={1000}
              className="hover:text-emerald-400 cursor-pointer "
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={1000}
              className="hover:text-emerald-400 cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="achievements"
              smooth={true}
              duration={1000}
              className="hover:text-emerald-400 cursor-pointer"
            >
              Achievements
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
