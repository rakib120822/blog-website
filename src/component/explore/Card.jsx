import React from "react";


function Card({ cardImage, cardTitle }) {
  return (
    <div className="border border-rich-black-100 text-center px-6 py-4 rounded-2xl bg-white">
      <img src={cardImage} alt="photo" className="mb-3 mx-auto" />
      <h2 className="font-Montserrat font-bold text-[1.375rem] leading-[120%] tracking-[-3%] text-rich-black-400">
        {cardTitle}
      </h2>
    </div>
  );
}

export default Card;
