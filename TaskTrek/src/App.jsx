import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import SVG from "./img/todosvg.svg";
const App = (completed) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between  text-white items-center mx-auto bg-emerald-200  sm:bg-gradient-to-br from-slate-400 via-lime-400 to-orange-400 min-h-screen">
      <div className="flex justify-center items-center bg-black text-orange-500 text-xl sm:text-4xl font-extrabold fixed top-0 w-full border py-5">
        TASK TREK
      </div>
      <div className="block  h-fit mt-9 text-3xl   sm:text-5xl font-extrabold py-32 px-4 sm:px-20 ">
        <span className="mx-auto text-black  text-3xl sm:text-5xl  font-extrabold sm:bg-gradient-to-r from-black via-pink-500 to-black sm:text-transparent bg-clip-text ml-5 ">
          Task Trek
        </span>
        <img src={SVG} alt="" className=" w-full" />
      </div>
      <div className="flex flex-col">
        <TodoForm addTodo={addTodo} />
        <div className="grid sm:grid-cols-3 gap-x-4 mt-3 ">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              {...todo}
              onDelete={() => deleteTodo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
