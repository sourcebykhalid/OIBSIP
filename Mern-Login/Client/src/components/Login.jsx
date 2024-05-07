import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((response) => {
        console.log(response);
        if (response.data.message === "Success") {
          // Store user authentication status and email in local storage
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userEmail", email);
          // Redirect to home page
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col text-white justify-center items-center h-full bg-black mx-auto mt-5 w-fit px-12 py-7">
      <h3 className="font-bold text-white">Login</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mx-auto"
      >
        <div className="mb-3 flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-green-400"
          />
        </div>

        <button
          type="submit"
          className="mb-8 w-full bg-green-400 text-black font-semibold rounded-md py-2 px-4 mx-auto hover:bg-green-500 focus:outline-none focus:bg-green-500"
        >
          Login
        </button>
      </form>
      <p className="text-white">
        Don&apos;t have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
