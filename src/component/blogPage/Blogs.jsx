import React from "react";
import Card from "../feature/Card";
import Sidebar from "../blogPage/Sidebar.jsx";

import cardImage1 from "../../assets/card1.png";
import cardImage2 from "../../assets/card2.png";
import cardImage3 from "../../assets/card3.png";
import cardImage4 from "../../assets/card4.png";







function Blogs() {
  
  const blogs = [
    {
      imgUrl: cardImage1,
      title:"Auditing"
    },
    {
      imgUrl: cardImage2,
      title:"Tax"
    },
    {
      imgUrl: cardImage3,
      title:"Baking Market"
    },
    {
      imgUrl: cardImage4,
      title:"Share Market"
    },
    {
      imgUrl: cardImage1,
      title:"Auditing"
    },
    {
      imgUrl: cardImage2,
      title:"Tax"
    },
    {
      imgUrl: cardImage3,
      title:"Baking Market"
    },
    {
      imgUrl: cardImage4,
      title:"Share Market"
    }

  ]
  return (
    <div className="my-[100px]">
    
      <div className="mb-[100px] w-11/12 mx-auto">
      <h1 className=" font-extrabold text-[50px] font-Montserrat">All blog Posts</h1>
      <p className="text-rich-black-300 font-Montserrat text-[1.375rem]">Browse our collection of financial insights and expert advice</p>
      <hr className="text-rich-black-100 mt-10"/>
      </div>
      
      <div className="w-11/12 grid grid-cols-12 gap-5 mx-auto">
        <div className="text-2xl col-span-9">
          <div className="grid grid-cols-3 gap-5">
            {
              blogs.map((blog,index) => {
                return <Card  key={index} index={index} cardImage={blog.imgUrl}/>
              })
            }
          
          </div>
        </div>
        <div className="col-span-3 text-4xl">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}
 
export default Blogs;
