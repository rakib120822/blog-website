import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="bg-[#ebe4d3]">
      <nav className="flex justify-between items-center w-[80%] mx-auto">
        <h1 className="text-[50px] font-extrabold p-5">Logo</h1>
        <div className="flex  gap-8 text-[20px] p-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="blogs">Blogs</NavLink>
          <NavLink to="about">About</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
