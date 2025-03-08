import React, { useState } from "react";
import { 
  FaBook, FaGamepad, FaDumbbell, FaTableTennis, FaBuilding, FaTheaterMasks, 
  FaLeaf, FaSeedling, FaFutbol, FaSwimmingPool, FaShoppingCart, FaCoffee 
} from "react-icons/fa";

const Amenities = () => {
  const [activeTab, setActiveTab] = useState("Clubhouse Amenities");

  const tabs = ["Clubhouse Amenities", "Green Features", "Outdoor Amenities", "Upcoming Commercial Block"];
  const amenities = {
    "Clubhouse Amenities": [
      { icon: <FaBook size={40} className="text-green-700" />, name: "Reading room" },
      { icon: <FaBuilding size={40} className="text-green-700" />, name: "Terrace party lawn" },
      { icon: <FaGamepad size={40} className="text-green-700" />, name: "Games Room" },
      { icon: <FaTheaterMasks size={40} className="text-green-700" />, name: "Mini Theatre" },
      { icon: <FaTableTennis size={40} className="text-green-700" />, name: "Table Tennis" },
      { icon: <FaDumbbell size={40} className="text-green-700" />, name: "Gym" },
    ],
    "Green Features": [
      { icon: <FaLeaf size={40} className="text-green-700" />, name: "Rainwater Harvesting" },
      { icon: <FaSeedling size={40} className="text-green-700" />, name: "Organic Garden" },
    ],
    "Outdoor Amenities": [
      { icon: <FaFutbol size={40} className="text-green-700" />, name: "Football Ground" },
      { icon: <FaSwimmingPool size={40} className="text-green-700" />, name: "Swimming Pool" },
    ],
    "Upcoming Commercial Block": [
      { icon: <FaShoppingCart size={40} className="text-green-700" />, name: "Retail Shops" },
      { icon: <FaCoffee size={40} className="text-green-700" />, name: "Cafeteria" },
    ],
  };

  return (
    <section className="max-w-5xl mx-auto p-6 overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-[#fb9906] mb-2">Amenities</h2>
      <hr className="w-16 border-green-700 mx-auto mb-4" />

      {/* Tabs - Scrollable on small screens */}
      <div className="flex justify-center gap-4 mb-6 overflow-x-auto flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-2 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-green-900 text-green-100 border-green-900"  // Dark green background with light green text
                : "border-green-600 text-green-800 hover:bg-green-700 hover:text-white"
            }`}
            
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Amenities Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {amenities[activeTab]?.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-green-100 shadow-lg p-4 rounded-lg border border-green-300 transition-all duration-700 hover:-translate-y-2 hover:border-green-700"
          >
            <div className="mb-2">{item.icon}</div>
            <p className="text-green-900 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
