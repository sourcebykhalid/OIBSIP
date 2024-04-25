import React, { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    ["(", ")", "Del", "Clear"],
    ["/", "7", "8", "9", "%"],
    ["*", "4", "5", "6", "√"],
    ["+", "1", "2", "3"],
    ["-", ".", "0", "+/-", "="],
  ];

  const handleClick = (val) => {
    if (val === "=") {
      try {
        const calculatedResult = eval(inputVal);
        setResult(calculatedResult);
      } catch (error) {
        setResult("Error: Invalid expression");
      }
    } else if (val === "Clear") {
      setInputVal("");
      setResult("");
    } else if (val === "Del") {
      setInputVal(inputVal.slice(0, -1));
    } else if (val === "√") {
      const number = parseFloat(inputVal);
      if (!isNaN(number) && number >= 0) {
        const sqrtResult = Math.sqrt(number);
        setInputVal(sqrtResult.toString());
      } else {
        setResult("Error: Invalid input for square root");
      }
    } else {
      setInputVal((prevInput) => prevInput + val);
    }
  };

  return (
    <div className="flex flex-col mx-auto w-fit justify-center bg-white p-4 py-11 shadow-md shadow-orange-300">
      <div className="output bg-emerald-500 py-2 rounded-md   mb-2 flex justify-center items-end flex-col ">
        <span className=" text-lg text-slate-700 mr-3">{inputVal}</span>
        <br />
        <span className=" text-2xl font-bold mr-3">{result}</span>
      </div>

      <div className="grid grid-cols-5 gap-4 button-grid">
        {buttons.map((group, rowIndex) =>
          group.map((buttonValue, colIndex) => (
            <Button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(buttonValue)}
              label={buttonValue}
              className={
                rowIndex === buttons.length - 1 && buttonValue === "="
                  ? "col-span-4 p-2 text-white bg-gray-600 hover:bg-gray-700"
                  : "col-span-1 p-2"
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Calculator;
