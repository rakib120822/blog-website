import React from "react";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="py-[8px]">
      <h2 className="font-Montserrat font-semibold text-[1.25rem] leading-[120%] text-rich-black-700">
        Recent Posts
      </h2>
      <hr
        className="text-rich-black-50 my-[16px]
        "
      />
      <div className="mb-[16px]">
        <h2 className="font-Montserrat font-medium text-[1.125rem] leading-[140%] tracking-[1%] text-rich-black-700">
          The Future of Cryptocurrency in Traditional Banking
        </h2>
        <p className="font-Montserrat text-[0.75rem] text-rich-black-300 leading-[150%] tracking-[3%] ">
          July 15, 2025
        </p>
      </div>

      <div className="mb-[16px]">
        <h2 className="font-Montserrat font-medium text-[1.125rem] leading-[140%] tracking-[1%] text-rich-black-700">
          How Inflation Affects Your Investments Portfolio
        </h2>
        <p className="font-Montserrat text-[0.75rem] text-rich-black-300 leading-[150%] tracking-[3%]">
          July 10, 2025
        </p>
      </div>

      <div className="mb-[40px]">
        <h2 className="font-Montserrat font-medium text-[1.125rem] leading-[140%] tracking-[1%] text-rich-black-700">
          ESG Investing: Balancing Profit and Responsibility
        </h2>
        <p className="font-Montserrat text-[0.75rem] text-rich-black-300 leading-[150%] tracking-[3%]">
          July 5, 2025
        </p>
      </div>
      <h2 className="font-Montserrat font-semibold text-[1.25rem] leading-[120%] text-rich-black-700">
        Categories
      </h2>
      <hr
        className="text-rich-black-50 my-[16px]
        "
      />
      <div className="flex justify-between mb-[40px]">
        <ul className="font-Montserrat font-medium text-[1rem] leading-[150%] tracking-[1%]">
          <li className="mb-4">Finance</li>
          <li className="mb-4">Tax</li>
          <li className="mb-4">Economics</li>
          <li className="mb-4">Auditing</li>
        </ul>
        <ul className="font-Montserrat font-medium text-[1rem] leading-[150%] tracking-[1%]">
          <li className="mb-4">Accounting</li>
          <li className="mb-4">Industry Analysis</li>
          <li className="mb-4">Share Market</li>
          <li className="mb-4">Banking Market</li>
        </ul>
      </div>

      <h2 className="font-Montserrat font-semibold text-[1.25rem] leading-[120%] text-rich-black-700">
        Popular Tags
      </h2>
      <hr
        className="text-rich-black-50 my-[20px]
        "
      />
      <div className="flex flex-wrap gap-[10px] pr-[20px]">
        <Button buttonTitle={"Tax Planning"} />
        <Button buttonTitle={"Audit"} />
        <Button buttonTitle={"Compliance"} />
        <Button buttonTitle={"Money"} />
        <Button buttonTitle={"Investing"} />
        <Button buttonTitle={"Stocks"} />
        <Button buttonTitle={"Market Trends"} />
        <Button buttonTitle={"Inflation"} />
        <Button buttonTitle={"Bonds"} />
      </div>
    </div>
  );
}

export default Sidebar;
