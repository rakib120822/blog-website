import React from "react";
import logo from "../../assets/pdf svg.png";

function Card() {
  return (
    <div className="border border-rich-black-50 rounded-2xl p-[12px]">
      <img src={logo} alt="photo" className="mb-[20px]" />
      <h3 className="font-Montserrat font-light text-[0.75rem] leading-[120%] tracking-[8%] text-rich-black-700 mb-[8px]">
        SHARE MARKET
      </h3>
      <h2 className="font-Montserrat font-semibold text-[1.125rem] leading-[120%] text-rich-black-700 mb-[8px]">
        Student Exam Suggestions
      </h2>
      <p className="font-Source-Serif text-[1rem] leading-[150%] tracking-[3%] text-rich-black-300 mb-[20px]">
        Essential tips and strategies for financial exam preparation and
        success.
      </p>
      <h3>
        <i class="fa-solid fa-download"></i>Download PDF
      </h3>
    </div>
  );
}

export default Card;
