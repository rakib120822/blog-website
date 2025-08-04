import React from "react";
import taxLogo from "../../assets/taxLogo.png";
import contentImg from "../../assets/card3.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import Container from "../feature/Container";
import Card from "../feature/Card";
import cardImage1 from "../../assets/card1.png";
import cardImage2 from "../../assets/card2.png";
import cardImage3 from "../../assets/card3.png";
import cardImage4 from "../../assets/card4.png";

function MainContent() {
  return (
    <div className="px-[30px]">
      <div className="mb-[2rem]">
        <h1 className="font-Montserrat font-semibold text-[2rem] leading-[120%] tracking-[-1%] text-rich-black-700 ">
          2025 Tax Updates: Key Changes for Professionals
        </h1>
        <p className="font-Source-Serif text-[1.25rem] text-rich-black-700 leading-[120%] tracking-[3%] my-[10px] ">
          <i>Stay Ahead of New Regulations</i>
        </p>

        <div className="flex justify-between w-[90%]">
          <p className="font-Montserrat text-[0.875rem] leading-[120%] tracking-[3%] text-rich-black-300">
            <span className="pr-1">
              <i class="fa-solid fa-calendar"></i>
            </span>
            July 18, 2025
          </p>
          <p className="font-Montserrat text-[0.875rem] leading-[120%] tracking-[3%] text-rich-black-300">
            <span className="pr-1">
              <i class="fa-solid fa-folder"></i>{" "}
            </span>
            Tax
          </p>
          <p className="flex items-center font-Montserrat text-[0.875rem] leading-[120%] tracking-[3%] text-rich-black-300 gap-1 ">
            <span className="pr-1">
              <img src={taxLogo} alt="logo" />
            </span>{" "}
            Tax Planning, Compliance,Money
          </p>
          <p className="font-Montserrat text-[0.875rem] leading-[120%] tracking-[3%] text-rich-black-300">
            Updated on July 25, 2025{" "}
          </p>
        </div>
      </div>

      <div>
        <img src={contentImg} alt="photo" className="w-full mb-[32px]" />

        <p className="font-Source-Serif text-[1.125rem] leading-[170%] tracking-[3%] text-rich-black-700 mb-4">
          As we approach the 2025 tax season, professionals, business owners,
          and accountants must navigate a series of significant updates to stay
          compliant and maximize financial opportunities. This year’s changes,
          driven by economic shifts like rising inflation and evolving policy
          priorities, affect both corporate and individual taxpayers, offering
          new opportunities alongside stricter compliance requirements. For
          businesses, the corporate tax rate has increased to 25% for companies
          generating over $10 million in annual revenue, effective January 2025,
          a move aimed at funding infrastructure and social programs. Smaller
          businesses, however, benefit from a temporary 20% rate, designed to
          encourage growth and innovation, particularly in sectors like
          technology and green energy.{" "}
        </p>

        <p className="font-Source-Serif text-[1.125rem] leading-[170%] tracking-[3%] text-rich-black-700 mb-4">
          As we approach the 2025 tax season, professionals, business owners,
          and accountants must navigate a series of significant updates to stay
          compliant and maximize financial opportunities. This year’s changes,
          driven by economic shifts like rising inflation and evolving policy
          priorities, affect both corporate and individual taxpayers, offering
          new opportunities alongside stricter compliance requirements. For
          businesses, the corporate tax rate has increased to 25% for companies
          generating over $10 million in annual revenue, effective January 2025,
          a move aimed at funding infrastructure and social programs. Smaller
          businesses, however, benefit from a temporary 20% rate, designed to
          encourage growth and innovation, particularly in sectors like
          technology and green energy.{" "}
        </p>

        <p className="font-Source-Serif text-[1.125rem] leading-[170%] tracking-[3%] text-rich-black-700 mb-4">
          As we approach the 2025 tax season, professionals, business owners,
          and accountants must navigate a series of significant updates to stay
          compliant and maximize financial opportunities. This year’s changes,
          driven by economic shifts like rising inflation and evolving policy
          priorities, affect both corporate and individual taxpayers, offering
          new opportunities alongside stricter compliance requirements. For
          businesses, the corporate tax rate has increased to 25% for companies
          generating over $10 million in annual revenue, effective January 2025,
          a move aimed at funding infrastructure and social programs. Smaller
          businesses, however, benefit from a temporary 20% rate, designed to
          encourage growth and innovation, particularly in sectors like
          technology and green energy.{" "}
        </p>

        <p className="font-Source-Serif text-[1.125rem] leading-[170%] tracking-[3%] text-rich-black-700 mb-4">
          As we approach the 2025 tax season, professionals, business owners,
          and accountants must navigate a series of significant updates to stay
          compliant and maximize financial opportunities. This year’s changes,
          driven by economic shifts like rising inflation and evolving policy
          priorities, affect both corporate and individual taxpayers, offering
          new opportunities alongside stricter compliance requirements. For
          businesses, the corporate tax rate has increased to 25% for companies
          generating over $10 million in annual revenue, effective January 2025,
          a move aimed at funding infrastructure and social programs. Smaller
          businesses, however, benefit from a temporary 20% rate, designed to
          encourage growth and innovation, particularly in sectors like
          technology and green energy.{" "}
        </p>
        <hr
          className="text-rich-black-50 my-[32px]
        "
        />
      </div>

      <div className="mb-[64px]">
        <h4 className="font-Montserrat text-[1rem] leading-[170%] tracking-[3%] mb-[12px] text-rich-black-700">
          Share This Article
        </h4>
        <div className="flex gap-[16px]">
          <img src={twitter} alt="photo" />
          <img src={linkedin} alt="photo" />
          <img src={facebook} alt="photo" />
        </div>
      </div>

      <div>
        <h2 className="font-Montserrat font-semibold text-[1.375rem] leading-[120%] text-rich-black-700 mb-[24px]">
          Related Posts
        </h2>

        <div className="grid grid-cols-3 gap-[40px] mb-[90px]">
          <Card cardImage={cardImage1} />
          <Card cardImage={cardImage2} />
          <Card cardImage={cardImage4} />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
