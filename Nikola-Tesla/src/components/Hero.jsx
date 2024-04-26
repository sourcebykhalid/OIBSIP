import React from "react";
import Nikola from "../img/nikola.png";

function Hero() {
  return (
    <div
      id="home"
      className="bg-black h-1/3 w-full mx-auto mt-3 py-20 mb-5 flex flex-col justify-center items-center sm:overflow-hidden"
    >
      <span className="text-xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-slate-400 to-pink-500 font-extrabold mx-auto px-4 py-3 sm:transform sm:animate-slideLeft duration-1000 sm:duration-1500">
        The Great Nikola Tesla
      </span>
      <img
        src={Nikola}
        alt=""
        className="w-1/3 mx-auto sm:w-1/3 sm:transform animate-slideRight duration-1000 sm:duration-1500"
      />
    </div>
  );
}

export default Hero;
