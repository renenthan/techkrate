import React from "react";

const Blogs = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black relative">
      {/* Outer Arrow */}
      <div
        className="relative group w-10 h-10 border-r-2 border-b-2 border-white rotate-45"
        style={{
          transition: "all 0.3s ease",
        }}
      >
        {/* Inner Arrow */}
        <div
          className="absolute w-5 h-5 border-r border-b border-white rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          opacity-0 group-hover:opacity-100 group-hover:animate-hoverArrow group-hover:transition-transform group-hover:translate-x-1 group-hover:-translate-y-1
          group-hover:hoverArrowOut transition-opacity duration-300 ease-out"
        ></div>
      </div>
    </div>
  );
};

export default Blogs;
