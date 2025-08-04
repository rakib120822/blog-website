import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function BlogPage() {
  return (
    <div className="grid grid-cols-4 p-[40px]">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <MainContent />
      </div>
    </div>
  );
}

export default BlogPage;
