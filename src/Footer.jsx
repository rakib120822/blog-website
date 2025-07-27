import React from "react";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";

function Footer() {
  return (
    <footer className="bg-rich-black-700 ">
      <div className="flex justify-between items-center text-rich-black-50 w-[90%] mx-auto py-[64px] ">
        <div className="w-[35%]">
          <h2 className="font-Montserrat text-[1.4375rem] leading-[120%] tracking-[3%] mb-[12px]">
            FINANCE
            <br />
            INSIGHTS
          </h2>
          <p className="font-Montserrat text-[1rem] leading-[120%] tracking-[3%] mb-[24px]">
            Your Trusted source for expert insights on finance, accounting, tax,
            and market trends, designed for professionals and students.
          </p>
          <div className="flex gap-[10px]">
            <img src={twitter} alt="photo" />
            <img src={linkedin} alt="photo" />
            <img src={facebook} alt="photo" />
          </div>
        </div>
        <div>
          <h2 className="font-Montserrat font-bold text-[1.1875rem] leading-[120%] tracking-[-5%] mb-[16px]">
            Explore
          </h2>
          <ul className="flex flex-col gap-[8px]">
            <li className="text-[1rem] leading-[120%] tracking-[3%]">Home</li>
            <li className="text-[1rem] leading-[120%] tracking-[3%]">Blog</li>
            <li className="text-[1rem] leading-[120%] tracking-[3%]">
              Resources
            </li>
            <li className="text-[1rem] leading-[120%] tracking-[3%]">About</li>
            <li className="text-[1rem] leading-[120%] tracking-[3%]">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-Montserrat font-bold text-[1.1875rem] leading-[120%] tracking-[-5%] mb-[16px]">
            Stay Updated
          </h2>
          <p className="text-[0.8125rem] leading-[120%] tracking-[3%] mb-[32px]">
            Get the latest finance and accounting insights delivered to your
            inbox.
          </p>

          <div className="flex gap-2  mb-[40px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-rich-black-400 placeholder:text-rich-black-100 px-[16px] py-[8px] rounded-4xl "
            />
            <button className="px-[24px] py-2 rounded-4xl bg-rich-black-50 text-rich-black-700 font-Montserrat font-semibold text-[0.75rem] leading-[120%] tracking-[-1%]">
              Subscribe
            </button>
          </div>

          <p className="font-Montserrat text-[0.6875rem] leading-[120%] tracking-[3%] ">
            © 2025 Finance Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
