import React from "react";

function Button({ buttonTitle }) {
  return (
    <button className="bg-rich-black-50 px-[12px] py-[8px] rounded-3xl font-Montserrat text-[0.875rem] leading-[150%] tracking-[1%] text-rich-black-700">
      {buttonTitle}
    </button>
  );
}

export default Button;
