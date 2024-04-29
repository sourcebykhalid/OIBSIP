import React, { useState, useEffect } from "react";

const TodoItem = ({ title, desc, date, bgColor, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };
  const [completed, setCompleted] = useState(
    localStorage.getItem(`${title}-completed`) === "true"
  );

  useEffect(() => {
    localStorage.setItem(`${title}-completed`, completed);
  }, [completed, title]);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };
  return (
    <div
      className={` p-4 mb-4 rounded-lg shadow-lg ${
        completed ? "bg-green-300" : bgColor
      }`}
    >
      <div className="flex justify-between">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
          className="cursor-pointer"
        />
        <span
          className={`text-xl font-bold mb-2 text-black ${
            completed ? "line-through" : ""
          }`}
        >
          {title}
        </span>
        <span
          onClick={handleDelete} // Call handleDelete when the "Del" span is clicked
          className="bg-black px-2 py-1 rounded-md shadow-md shadow-gray-100 text-white text-base cursor-pointer"
        >
          ❌
        </span>
      </div>
      <p className={`text-gray-700 mb-2 ${completed ? "line-through" : ""}`}>
        {desc}
      </p>
      <p className={`text-sm text-gray-600 mt-8`}> {date}</p>
    </div>
  );
};

export default TodoItem;
