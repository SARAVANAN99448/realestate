import React from "react";

const Legend = () => {
  return (
    <div className="border p-4 w-full max-w-4xl mt-10 mx-auto bg-white shadow-md">
      <h2 className="text-xl font-bold text-center mb-2">LEGEND</h2>
      <hr className="border-black mb-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <LegendItem color="bg-pink-300" size="9.0M x 12.0M" dimension="30ft x 40ft" />
        <LegendItem color="bg-[#e3d91f]" size="9.0M x 15.0M" dimension="30ft x 50ft" />
        <LegendItem color="bg-[#7152bf]" size="12.0M x 18.0M" dimension="40ft x 50ft" />
        <LegendItem color="bg-[#9c4e1a]" size="ODD SITES" />
        <LegendItem color="bg-red-500" size="SOLD PLOTS" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, size, dimension }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 ${color} border`} />
      <div>
        <span className="text-lg block">{size}</span>
        {dimension && <span className="text-gray-700 text-sm">{dimension}</span>}
      </div>
    </div>
  );
};

export default Legend;
