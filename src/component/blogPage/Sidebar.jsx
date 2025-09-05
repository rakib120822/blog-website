import React from "react";


function Sidebar() {
  const topics = [
    {
      name: "Finance",
      blogNum: 24,
    },
    {
      name: "Tax",
      blogNum: 18,
    },
    {
      name: "Economic",
      blogNum: 15,
    },
    {
      name: "Auditing",
      blogNum: 22,
    },
    {
      name: "Accounting",
      blogNum: 12,
    },
    {
      name: "Industry Analysis",
      blogNum: 9,
    },
    {
      name: "Share Market",
      blogNum: 11,
    },
    {
      name: "Banking",
      blogNum: 14,
    },
  ];

  return (
    <div className="px-4 py-6 rounded-lg bg-rich-black-50">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="text-rich-black-700 font-Montserrat text-[1.25rem] font-semibold">
          Filter By
        </h1>
        <hr className="text-white my-4" />
        {topics.map((topic, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-rich-black-700 font-Montserrat font-medium text-[1rem]">
              {topic.name}
            </p>
            <span className="p-[8px] rounded-full bg-white text-[0.75rem] text-rich-black-400 text-center my-auto">
              {topic.blogNum}
            </span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-rich-black-700 font-Montserrat text-[1.25rem] font-semibold">
          Popular Tags
        </h2>
        <hr className="text-white my-4" />
        <div className="flex flex-wrap gap-4">
          {topics.map((topic, index) => (
            <button
              key={index}
              className="bg-white px-3 py-2 rounded-3xl font-Montserrat text-sm leading-[150%] tracking-wide text-rich-black-700"
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>
      <button className="px-6 py-3 rounded-3xl text-[1rem] font-medium font-Montserrat leading-[20px]   bg-rich-black-700 text-rich-black-50 mt-10 w-full">
        Reset Filter
      </button>
    </div>
  );
}

export default Sidebar;
