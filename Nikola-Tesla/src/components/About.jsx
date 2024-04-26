import React from "react";

function About() {
  return (
    <div
      id="about"
      className="bg-rose-100 h-fit sm:py-24 sm:px-12 mt-20 flex flex-col sjustify-center items-center sm:mx-auto gap-y-8"
    >
      <span className=" bg-emerald-400 px-3 py-2 rounded-md shadow-md shadow-black font-bold">
        {" "}
        Birth and Childhood <br />
      </span>
      <span className="  mx-28">
        Nikola Tesla was born on July 10, 1856, in Smiljan, then part of the
        Austro-Hungarian Empire (now Croatia). He was the fourth of five
        children in his family. His father was a Serbian Orthodox priest, and
        his mother was an inventor. <br />{" "}
      </span>
      <span className="bg-emerald-400 px-3 py-2 rounded-md shadow-md shadow-black font-bold">
        {" "}
        Education{" "}
      </span>
      <span className="mx-28">
        Tesla showed an early aptitude for mathematics and languages. He
        attended the Higher Real Gymnasium in Karlovac and studied electrical
        engineering at the Technical University of Graz and the University of
        Prague. However, he left both institutions without graduating to pursue
        his career in the United States.
      </span>
      <span className=" bg-emerald-400 px-3 py-2 rounded-md shadow-md shadow-black font-bold">
        {" "}
        Financial and Social Struggles <br />
      </span>
      <span className="  mx-28">
        Despite his genius and innovative spirit, Tesla struggled financially
        and socially throughout his life. His eccentric behavior and reclusive
        nature often alienated him from his peers and potential investors.{" "}
        <br />{" "}
      </span>
      <span className="bg-emerald-400 px-3 py-2 rounded-md shadow-md shadow-black font-bold">
        {" "}
        Death and Legacy{" "}
      </span>
      <span className="mx-28">
        Nikola Tesla died on January 7, 1943, in New York City, at the age of
        86. Although he never received the recognition and financial success he
        deserved during his lifetime, his contributions to science and
        technology continue to inspire and influence generations of inventors,
        engineers, and scientists.
      </span>
    </div>
  );
}

export default About;
