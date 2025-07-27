import React from "react";
import Card from "./Card";
import cardImage1 from "../../assets/auditing.png";
import cardImage2 from "../../assets/tax.png";
import cardImage3 from "../../assets/bank.png";
import cardImage4 from "../../assets/share market.png";
import cardImage5 from "../../assets/bar.png";
import cardImage6 from "../../assets/dollar.png";
import cardImage7 from "../../assets/growth.png";
import cardImage8 from "../../assets/accounting.png";

function Container() {
  return (
    <div className="bg-rich-black-50  py-[64px]">
      <div className="w-[80%] mx-auto">
        <h2 className="font-Montserrat font-bold text-[1.875rem] leading-[120%] tracking-[-3%] text-rich-black-700 mb-[38px]">
          Explore By Topics
        </h2>
        <div className="grid grid-cols-4 gap-[27px] ">
          <Card cardImage={cardImage1} cardTitle={"Auditing"} />
          <Card cardImage={cardImage2} cardTitle={"Tax"} />
          <Card cardImage={cardImage3} cardTitle={"Baking Market"} />
          <Card cardImage={cardImage4} cardTitle={"Share Market"} />
          <Card cardImage={cardImage5} cardTitle={"Industry Analysis"} />
          <Card cardImage={cardImage6} cardTitle={"Finance"} />
          <Card cardImage={cardImage7} cardTitle={"Economics"} />
          <Card cardImage={cardImage8} cardTitle={"Accounting"} />
        </div>
      </div>
    </div>
  );
}

export default Container;
