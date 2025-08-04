import React from "react";
import Card from "./Card";
import cardImage1 from "../../assets/card1.png";
import cardImage2 from "../../assets/card2.png";
import cardImage3 from "../../assets/card3.png";
import cardImage4 from "../../assets/card4.png";

function Container() {
  return (
    <div className="w-[90%] mx-auto  py-[90px]">
      <h2 className="font-Montserrat font-bold text-[1.875rem] leading-[120%] tracking-[-3%] text-rich-black-700 mb-[40px]">
        Feactured Posts
      </h2>
      <div className="grid grid-cols-4  gap-[40px] mb-[64px] ">
        <Card cardImage={cardImage2} />
        <Card cardImage={cardImage3} />
        <Card cardImage={cardImage4} />
        <Card cardImage={cardImage1} />
      </div>
      <button className="mx-auto block px-[32px] py-[16px] bg-rich-black-700 rounded-4xl font-Montserrat font-semibold text-[1rem] leading-[120%] tracking-[-1%] text-rich-black-50 ">
        See More Posts
      </button>
    </div>
  );
}

export default Container;
