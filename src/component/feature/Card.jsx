import React from "react";

import { Link } from "react-router";

function Card({ cardImage }) {
  return (
    <div className="border border-rich-black-50 rounded-3xl   p-[12px]">
      <img src={cardImage} alt="photo" className="mb-[20px] w-full" />
      <h3 className="font-Montserrat font-light text-[0.75rem] leading-[120%] tracking-[8%] text-rich-black-700 mb-[8px]">
        SHARE MARKET
      </h3>
      <h2 className="font-Montserrat font-semibold text-[1.125rem] leading-[120%] text-rich-black-700 mb-[8px]">
        Navigating the 2025 Share
        <br />
        Market: Top Stocks to Watch{" "}
      </h2>
      <p className="font-Source-Serif text-[1rem] leading-[150%] tracking-[3%] text-rich-black-300 mb-[20px]">
        From tech giants to emerging markets, discover which stocks are poised
        for growth in 2025.{" "}
      </p>
      <div className="flex justify-between">
        <p className="font-Montserrat text-[0.75rem] leading-[150%] tracking-[3%] text-rich-black-300">
          July 7, 2025
        </p>

        <Link
          to="#"
          className="font-Montserrat font-medium text-[1rem] leading-[120%] tracking-[1%] text-rich-black-700"
        >
          Read More <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Card;
