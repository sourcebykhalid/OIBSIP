import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col text-white justify-center items-center h-full bg-black w-fit mx-auto px-12 py-7 mt-5">
      <h3 className="font-bold text-white">Sign up</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mx-auto"
      >
        <div className="mb-3 flex flex-col">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-green-400"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-green-400"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-green-400"
          />
        </div>

        <button
          type="submit"
          className="mb-8 w-full bg-green-400 text-black font-semibold rounded-md py-2 px-4 mx-auto hover:bg-green-500 focus:outline-none focus:bg-green-500"
        >
          Sign up
        </button>
      </form>
      <p className="text-white">Already have an account</p>
      <button className="mb-8 w-full bg-green-400 text-black font-semibold rounded-md py-2 px-4 mx-auto hover:bg-green-500 focus:outline-none focus:bg-green-500">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}

export default Signup;
