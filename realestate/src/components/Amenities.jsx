import React, { useState } from "react";
import {
  FaHotel, FaBuilding, FaChalkboard, FaUtensils, FaDumbbell, FaSpa,
  FaLeaf, FaTableTennis, FaChild, FaCar, FaMosque, FaFutbol, FaSwimmer,
  FaGlassCheers, FaBirthdayCake, FaChair, FaChess, FaGolfBall
} from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Amenities = () => {
  const [activeTab, setActiveTab] = useState("Indoor Amenities");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["Indoor Amenities", "Outdoor Amenities", "Recreation & Wellness", "Community Spaces"];
  const amenities = {
    "Indoor Amenities": [
      { icon: <FaHotel size={40} className="text-green-700" />, name: "Luxury Suites" },
      { icon: <FaBuilding size={40} className="text-green-700" />, name: "Indoor Badminton Court" },
      { icon: <FaChalkboard size={40} className="text-green-700" />, name: "Conference Hall" },
      { icon: <FaUtensils size={40} className="text-green-700" />, name: "Food Courts & Lounge Bar" },
      { icon: <FaDumbbell size={40} className="text-green-700" />, name: "Fully Equipped Gymnasium" },
      { icon: <FaSpa size={40} className="text-green-700" />, name: "Spa & Beauty Salon" },
    ],
    "Outdoor Amenities": [
      { icon: <FaSwimmer size={40} className="text-green-700" />, name: "Swimming Pool" },
      { icon: <FaTableTennis size={40} className="text-green-700" />, name: "Outdoor Tennis Courts" },
      { icon: <FaMosque size={40} className="text-green-700" />, name: "Yoga & Meditation Zones" },
      { icon: <FaChild size={40} className="text-green-700" />, name: "Children's Play Area" },
      { icon: <FaCar size={40} className="text-green-700" />, name: "Ample Car Parking" },
    ],
    "Recreation & Wellness": [
      { icon: <FaFutbol size={40} className="text-green-700" />, name: "Meditation Zones" },
      { icon: <FaDumbbell size={40} className="text-green-700" />, name: "Fitness Center" },
      { icon: <FaSwimmer size={40} className="text-green-700" />, name: "Children's Wading Area" },
      { icon: <FaMosque size={40} className="text-green-700" />, name: "Yoga & Aerobics Studio" },
      { icon: <FaChess size={40} className="text-green-700" />, name: "Table Tennis, Carrom & Chess" },
    ],
    "Community Spaces": [
      { icon: <FaBirthdayCake size={40} className="text-green-700" />, name: "Events & Celebrations" },
      { icon: <FaGlassCheers size={40} className="text-green-700" />, name: "Cultural Gatherings" },
      { icon: <FaChair size={40} className="text-green-700" />, name: "BBQ & Picnic Areas" },
      { icon: <FaChild size={40} className="text-green-700" />, name: "Children's Playground" },
      { icon: <FaLeaf size={40} className="text-green-700" />, name: "Relaxation Corners" },
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
    <section id="amenities" className="max-w-5xl mx-auto p-6 relative">
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
            className={`px-4 py-2 border-2 rounded-lg transition-colors text-[16px] cursor-pointer ${
              activeTab === tab
                ? "bg-green-900 text-white border-green-900"
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
