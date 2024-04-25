import React from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-gradient-to-r from-white via-black to-emerald-300 h-screen">
      <header className=" rounded-md shadow-md shadow-orange-300 sm:px-12 py-2 mb-3">
        <span className="sm:text-2xl text-orange-500  font-bold">
          CalcMate:
          <span className=" sm:text-lg text-slate-200">
            Your Everyday Calculator
          </span>
        </span>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
