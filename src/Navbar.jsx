import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="bg-rich-black-700">
      <nav className="flex justify-between items-center w-[80%] mx-auto ">
        <h1 className="text-[1rem] leading-[120%] space-[3%] font-Montserrat text-rich-black-50">
          FINANCE
          <br />
          INSIGHTS
        </h1>

        <div className="flex  gap-22 text-[1rem] leading-[120%] space-[3%] font-Montserrat py-[40px] text-rich-black-50">
          <NavLink to="/">Home</NavLink>
          <NavLink to="blogs">Blog</NavLink>
          <NavLink to="blogs">Resources</NavLink>
          <NavLink to="about">About</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
