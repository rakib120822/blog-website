import React from "react";
import Card from "./Card";

function Container() {
  return (
    <div className="w-[80%] mx-auto  py-[90px]">
      <h2 className="font-Montserrat font-bold text-[1.875rem] leading-[120%] tracking-[-3%] text-rich-black-700 mb-[40px]">
        Feactured Posts
      </h2>
      <div className="grid grid-cols-3  gap-[40px] mb-[64px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="border-2 border-rich-black-700 font-Montserrat font-semibold text-[1.25rem] leading-[120%] tracking-[-1%] text-rich-black-700 px-8 py-4 rounded-4xl block mx-auto">
        View All Resources
      </button>
    </div>
  );
}

export default Container;
