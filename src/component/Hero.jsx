import React from "react";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center relative ">
      <div className="absolute inset-0 w-[80%] mx-auto my-[150px]">
        <h1 className="font-Montserrat text-rich-black-700 font-bold text-[2.375rem] leading-[120%] tracking-[-3%] mb-[12px]">
          Expert Insights on Finance,
          <br /> Accounting and Beyond
        </h1>
        <p className="font-Montserrat text-[1.375rem] text-rich-black-300 leading-[150%] tracking-[-3%] mb-[32px]">
          Stay ahead with in-depth analysis on tax, auditing
          <br /> market trends, and more- tailored for professionals
          <br /> and students alike
        </p>
        <div className="flex gap-4">
          <button className="bg-rich-black-700 text-rich-black-50 font-Montserrat font-semibold text-[1.25rem] leading-[120%] tracking-[-3%] px-8 py-4 rounded-4xl ">
            Explore Posts
          </button>
          <button className="border-2 border-rich-black-700 font-Montserrat font-semibold text-[1.25rem] leading-[120%] tracking-[-1%] text-rich-black-700 px-8 py-4 rounded-4xl">
            About Me
          </button>
        </div>
      </div>
      <img src={heroImage} alt="photo" className="w-full" />
    </section>
  );
}

export default Hero;
