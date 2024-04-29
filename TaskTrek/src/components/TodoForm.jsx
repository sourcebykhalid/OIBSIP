// TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const randomNum = Math.random();
    let bgColor;
    if (randomNum < 0.2) {
      bgColor = "bg-red-300";
    } else if (randomNum < 0.4) {
      bgColor = "bg-amber-300";
    } else if (randomNum < 0.6) {
      bgColor = "bg-orange-300";
    } else if (randomNum < 0.8) {
      bgColor = "bg-yellow-300";
    } else {
      bgColor = "bg-blue-300";
    }
    addTodo({
      title,
      desc,
      date: new Date().toLocaleString(),
      bgColor,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto text-black bg-blue-200 px-4 py-7 mt-14 rounded-md shadow-md shadow-black"
    >
      <span className="sm:text-4xl text-2xl mx-auto font-extrabold bg-gradient-to-r from-emerald-500 via-pink-500 to-black text-transparent bg-clip-text mb-2">
        Task Trek
      </span>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4  py-2 mb-2 sm:w-full rounded-md bg-black text-yellow-100"
      />
      <textarea
        placeholder="Desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="px-4 py-2 sm:w-full rounded-md bg-black text-yellow-100"
      ></textarea>{" "}
      <br />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
