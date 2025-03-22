import React from "react";

const Parkbottom = () => {
  return (
    <div className="relative flex justify-end md:pr-64 pr-5 h-fit md:mt-7 mt-5 bg-white">
      {/* Text Label for Road */}
      <div className="md:left-[60%] left-[75%] md:top-[-12%] -top-4.5 absolute font-bold">
        <p className="md:text-[16px] text-[12px]">12.00 M WIDE ROAD</p>
      </div>

      {/* Desktop Version - Hidden on Mobile */}
      <svg className="md:w-52 md:h-52 hidden md:block" viewBox="0 0 200 200">
        <polygon points="0,0 200,0 200,200" fill="#00C950" />
        <text className="fill-black font-bold text-xl" x="70%" y="30%" dominantBaseline="middle" textAnchor="middle">
          PARK
        </text>
      </svg>

      {/* Mobile Version - Hidden on Desktop */}
      <svg className="w-44 h-44 md:hidden absolute left-[97.5%] top-0" viewBox="0 0 200 200">
        <polygon points="0,0 200,0 200,200" fill="#00C950" />
        <text className="fill-black font-bold text-xl" x="70%" y="30%" dominantBaseline="middle" textAnchor="middle">
          PARK
        </text>
      </svg>
    </div>
  );
};

export default Parkbottom;
