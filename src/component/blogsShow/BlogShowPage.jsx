import React from "react";

import MainContent from "./MainContent";
import LeftSideBar from "./LeftSideBar";
import { useLocation } from "react-router";

function BlogShowPage() {
  const { state } = useLocation();
  return (
    <div className="grid grid-cols-4 p-[40px]">
      <div className="col-span-1">
        <LeftSideBar />
      </div>
      <div className="col-span-3">
        <MainContent state={state} />
      </div>
    </div>
  );
}

export default BlogShowPage;
