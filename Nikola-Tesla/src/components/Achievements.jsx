import React from "react";

function Achievements() {
  return (
    <div
      id="achievements"
      className="bg-black text-white flex flex-col sm:justify-center sm:items-center py-36  mt-24"
    >
      <span className="sm:text-4xl mx-auto font-bold text-emerald-400 mb-3 ">
        {" "}
        Career and Achievements
      </span>{" "}
      <span className=" mb-3 sm:mx-24 mt-4">
        <span className="bg-emerald-400 shadow-md shadow-slate-200 text-black sm:text-2xl font-bold px-3 py-1">
          AC vs. DC <br />
        </span>{" "}
        After arriving in the United States in 1884, Tesla began working for
        Thomas Edison. However, the two inventors soon clashed over their
        differing views on electrical systems. Tesla championed alternating
        current (AC), which he believed was superior to direct current (DC) for
        transmitting electricity over long distances.
      </span>
      <span className="mb-3 mx-auto sm:mx-24 mt-4">
        <span className="bg-emerald-400 shadow-md shadow-slate-200 text-black sm:text-2xl font-bold px-3 py-1 ">
          AC Induction Motor <br />
        </span>{" "}
        Tesla&apos;s development of the AC induction motor revolutionized the
        field of electrical engineering and laid the foundation for the modern
        electric power industry.{" "}
      </span>{" "}
      <br />
      <span className="mb-3 sm:mx-24 mt-4">
        {" "}
        <span className="bg-emerald-400 shadow-md shadow-slate-200 text-black sm:text-2xl font-bold px-3 py-1 ">
          Wireless Transmission of Electricity <br />
        </span>{" "}
        Tesla&apos;s fascination with wireless communication and energy
        transmission led him to experiment with radio waves and electromagnetic
        fields. He patented the Tesla coil in 1891, demonstrating the
        possibility of wireless power transmission at the World&apos;s Columbian
        Exposition in Chicago in 1893.{" "}
      </span>
    </div>
  );
}

export default Achievements;
