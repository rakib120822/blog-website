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

  const blogs = [
    {
      img: cardImage1,
      title: "Auditing",
    },
    {
      img: cardImage2,
      title: "Tax",
    },
    {
      img: cardImage3,
      title: "Baking Market",
    },
    {
      img: cardImage4,
      title: "Share Market",
    },
    {
      img: cardImage5,
      title: "Industry Analysis",
    },
    {
      img: cardImage6,
      title: "Finance",
    },
    {
      img: cardImage7,
      title: "Economics",
    },
    {
      img: cardImage8,
      title: "Accounting",
    },
  ];

  return (
    <div className="bg-rich-black-50  py-[64px]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-Montserrat font-bold text-[1.875rem] leading-[120%] tracking-[-3%] text-rich-black-700 mb-[38px]">
          Explore By Topics
        </h2>
        <div className="grid grid-cols-4 gap-[27px] ">
          {blogs.map((blog, index) => (
            <Card key={index} cardImage={blog.img} cardTitle={blog.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
