import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="bg-rich-black-700">
      <nav className="flex justify-between items-center w-[90%] mx-auto ">
        <h1 className="text-[1rem] leading-[120%] space-[3%] font-Montserrat text-rich-black-50">
          <Link to="/">
            FINANCE
            <br />
            INSIGHTS
          </Link>
        </h1>

        <div className="relative w-[40%]">
          <input
            type="text"
            placeholder="Search by topic, tag, category, or resource..."
            className=" pl-3  py-2 w-full border rounded-[32px] border-rich-black-300 placeholder:text-rich-black-100"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-rich-black-50">
            <i className="fas fa-search"></i>
          </span>
        </div>

        <div className="flex  gap-10 text-[1rem] leading-[120%] space-[3%] font-Montserrat py-[40px] text-rich-black-50">
          <NavLink to="blogs">Blog</NavLink>
          <NavLink to="resources">Resources</NavLink>
          <NavLink to="about">About</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
