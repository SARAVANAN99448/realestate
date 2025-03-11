import React, { useState } from "react";
import {
  FaBook, FaGamepad, FaDumbbell, FaTableTennis, FaBuilding, FaTheaterMasks,
  FaLeaf, FaSeedling, FaFutbol, FaSwimmingPool, FaShoppingCart, FaCoffee
} from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import amenitiesImg from "../assets/images/amenities.jpg"
const Amenities = () => {
  const [activeTab, setActiveTab] = useState("Clubhouse Amenities");
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const items = amenities[activeTab] || [];

  // Navigate between amenities (Mobile View)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="amenities"
      className="max-w-5xl mx-auto p-6  relative"
    >
      <h2 className="md:text-3xl text-2xl font-extrabold text-center text-[#fb9906] mb-2">Amenities</h2>
      <hr className="w-16 border-green-700 mx-auto mb-4" />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentIndex(0); // Reset index when changing tab
            }}
            className={`px-4 py-2 border-2 rounded-lg transition-colors text-[16px] cursor-pointer ${activeTab === tab
                ? "bg-green-900 text-white border-green-900"  // Active tab
                : "border-green-900 text-green-900 bg-transparent hover:bg-green-700 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Desktop View: Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-[16px] cursor-pointer items-center border border-green-700 p-4 rounded-lg bg-green-50 transition-all hover:-translate-y-2 hover:bg-green-200 shadow-md"
          >
            {item.icon}
            <p className="text-green-900 cursor-pointer text-center mt-2">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Mobile View: Carousel */}
      <div className="relative flex flex-col items-center p-6 bg-green-100 shadow-lg rounded-lg border border-green-300 md:hidden">
        {/* Icon */}
        <div className="mb-2">{items[currentIndex]?.icon}</div>
        {/* Name */}
        <p className="text-green-900 text-center text-[15px]">{items[currentIndex]?.name}</p>

        {/* Navigation Buttons */}
        {items.length > 1 && (
          <>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer">
              <MdNavigateBefore size={30} className="text-green-900" onClick={prevSlide} />
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
              <MdNavigateNext size={30} className="text-green-900" onClick={nextSlide} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Amenities;
