import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Retrieve authentication status from local storage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const handleLogout = () => {
    // Clear authentication status from local storage
    localStorage.removeItem("isLoggedIn");
    // Redirect the user to the login page
    window.location.href = "/login";
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center bg-emerald-100 py-6 px-5 w-full font-semibold">
        <h2 className="bg-black text-emerald-400 font-bold p-3 rounded-md shadow-orange-500 shadow-inner">
          Mern Login
        </h2>
        <nav>
          <ul className="flex gap-x-4">
            {/* Conditionally render the logout button if the user is logged in */}
            {isLoggedIn ? (
              <li className="bg-black text-red-500 px-5 py-1 rounded-sm cursor-pointer">
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              // Render login button if the user is not logged in
              <>
                <li className="bg-black text-emerald-400 px-4 py-1 rounded-sm cursor-pointer">
                  <Link to="/login">Login</Link>
                </li>
                <li className="bg-black text-emerald-400 px-5 py-1 rounded-sm cursor-pointer">
                  <Link to="/register">Sign up</Link>
                </li>
              </>
            )}
            {/* Always render sign-up button */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
