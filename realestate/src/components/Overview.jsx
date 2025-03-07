import React from "react";
import { FaLeaf, FaRoad, FaBuilding, FaWater, FaCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="max-w-5xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-[#fb9906] mb-2">Overview</h2>
      <hr className="w-16 border-green-700 mx-auto mb-4" />
      <p className="text-center text-gray-700 mb-4">
        Own a home at Navin’s Hillview Avenue—an exclusive community of spacious, elegantly crafted homes on 11 acres.
        Life here is not just living; it's meaningful and enjoyable.
      </p>
      <p className="text-center text-gray-700 mb-6">
        Phase I offers apartments in three blocks: Amethyst, Coral, and Emerald, with large rooms, fantastic views, 
        cross ventilation, wide corridors, and generous balconies—an epitome of happy living.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: <FaLeaf size={40} className="text-green-700" />,
            text: "Green building – energy efficient, water efficient, use of eco-friendly materials",
          },
          {
            icon: <FaRoad size={40} className="text-green-700" />,
            text: "15 mins from New Kilambakkam Bus Terminus & 3 mins from Outer Ring Road",
          },
          {
            icon: <FaRoad size={40} className="text-green-700" />,
            text: "Away from the bustling GST road, but well within reach and excellent connectivity to all parts of the city through GST - ORR",
          },
          {
            icon: <FaWater size={40} className="text-green-700" />,
            text: "Rainwater harvesting, sewage treatment plant, fire-fighting arrangements",
          },
          {
            icon: <FaBuilding size={40} className="text-green-700" />,
            text: "Clubhouse & Upcoming commercial block available - fulfilling your entertainment and daily needs",
          },
          {
            icon: <FaCheck size={40} className="text-green-700" />,
            text: "Ready To Move In",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center bg-green-100 text-green-900 p-4 rounded-lg">
            <div className="mb-2 sm:mb-0 sm:mr-4">{item.icon}</div>
            <p className="text-center sm:text-left">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
