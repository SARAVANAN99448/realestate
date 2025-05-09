import React from "react";
import { FaLeaf, FaRoad, FaBuilding, FaWater, FaFileSignature   } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="max-w-5xl mx-auto p-6 mt-10 overflow-hidden " id="overview">
      <h2 className="md:text-3xl text-2xl font-extrabold text-center text-[#fb9906] mb-2">Overview</h2>
      <hr className="w-16 border-green-700 mx-auto mb-4" />
      <p className="text-center text-gray-700 mb-4 md:text-[18px]  text-[18px]">
        Own a retreat at Swarnagiri—an exclusive plotted development nestled in the foothills of Chandra Drona Range. Life here is not just living; it's a harmonious blend with nature.
      </p>
      <p className="text-center text-gray-700 mb-6 md:text-[18px] text-[18px]">
        Swarnagiri offers 229 independent plots of various dimensions, including 9 x 12m, 9 x 15m, and 12 x 18m options, with breathtaking panoramic views the perfect canvas for your dream mountain home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          
          {
            icon: <FaFileSignature  size={40} className="text-green-700" />,
            text: "Ready For Registration — Build your custom home in one of Karnataka's most picturesque locations",
          },
          {
            icon: <FaBuilding size={40} className="text-green-700" />,
            text: "Legally Approved — Complete DTCP approval with all legal clearances in place",
          },
          {
            icon: <FaLeaf size={40} className="text-green-700" />,
            text: "Weekend Getaway & Investment Opportunity — Build your villa or cottage for personal use or rent it out as a homestay for lucrative returns",
          },
          {
            icon: <FaRoad size={40} className="text-green-700" />,
            text: "Located near Chikkamagaluru city center — Adjacent to CDA Layout with convenient access to urban amenities",
          },
          {
            icon: <FaRoad size={40} className="text-green-700" />,
            text: "Expansive Natural Beauty — Sprawling across 16 acres of pristine greenery in the Western Ghats",
          },
          {
            icon: <FaWater size={40} className="text-green-700" />,
            text: "Lake View Plots — Premium plots offering serene views of the lake, perfect for building your dream home amidst nature's tranquility",
          },
          
        ].map((item, index) => (
          <div key={index} className="flex flex-row items-center bg-green-100 text-green-900 p-4 rounded-lg">
            <div className="mr-4">{item.icon}</div>
            <p className="text-left md:text-[17px] text-[16px]">{item.text}</p>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Overview;
