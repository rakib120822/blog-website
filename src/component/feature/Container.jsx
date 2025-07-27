import React from "react";
import Card from "./Card";
import cardImage1 from "../../assets/card1.png";
import cardImage2 from "../../assets/card2.png";
import cardImage3 from "../../assets/card3.png";
import cardImage4 from "../../assets/card4.png";

function Container() {
  return (
    <div className="grid grid-cols-4 w-[80%] mx-auto gap-[40px]">
      <Card cardImage={cardImage2} />
      <Card cardImage={cardImage3} />
      <Card cardImage={cardImage4} />
      <Card cardImage={cardImage1} />
    </div>
  );
}

export default Container;
