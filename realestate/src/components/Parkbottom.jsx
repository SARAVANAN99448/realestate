import React from "react";

const Parkbottom = () => {
  return (
    <div className=" bg-white flex items-center justify-center md:mt-7 mt-0 ">
      <div className="relative md:w-64 w-48 h-64">
        <div
          className="absolute top-0 md:left-[111%] left-[120%] rotate-90 w-full h-full bg-green-500"
          style={{
            clipPath: window.innerWidth >= 768 
              ? "polygon(0 0, 100% 0, 0 100%)" 
              : "polygon(0% 0%, 100% 0%, -40% 100%)"
          }}
        >
          <span
            className="absolute text-black font-bold text-xl"
            style={{
              left: '15%',
              top: '25%',
              transform: 'rotate(270deg)'
            }}
          >
            PARK
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parkbottom;