import React from "react";
import Card from "./Card";
import cardImage1 from "../../assets/card1.png";
import cardImage2 from "../../assets/card2.png";
import cardImage3 from "../../assets/card3.png";
import cardImage4 from "../../assets/card4.png";
import { useNavigate } from "react-router-dom";

function Container() {
  const navigate = useNavigate();
  const blogs = [
    {
      CardImg: cardImage1,
    },
    {
      CardImg: cardImage2,
    },
    {
      CardImg: cardImage3,
    },
    {
      CardImg: cardImage4,
    },
  ];

  const handleClick = () => {
    navigate("/blogs");
  };

  return (
    <div className="w-[90%] mx-auto  py-[90px]">
      <h2 className="font-Montserrat font-bold text-[1.875rem] leading-[120%] tracking-[-3%] text-rich-black-700 mb-[40px]">
        Feactured Posts
      </h2>
      <div className="grid grid-cols-4  gap-[40px] mb-[64px] ">
        {blogs.map((blog, index) => (
          <Card cardImage={blog.CardImg} key={index} index={index} />
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mx-auto block px-[32px] py-[16px] bg-rich-black-700 rounded-4xl font-Montserrat font-semibold text-[1rem] leading-[120%] tracking-[-1%] text-rich-black-50 "
      >
        See More Posts
      </button>
    </div>
  );
}

export default Container;
