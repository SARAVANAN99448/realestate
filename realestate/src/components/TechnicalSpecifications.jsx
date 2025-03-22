import React from "react";
import powerImg from "../assets/images/technical.png"
const TechnicalSpecifications = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-20 mt-10 items-center bg-green-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={powerImg}
          alt="Technical Specifications"
          className="w-full h-auto max-w-md rounded-lg object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full md:pl-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="md:text-2xl text-xl  font-bold text-green-800">Technical Specifications - First time in Chikkamagaluru</h2>
        <ul className="list-disc list-outside pl-6 mt-4 text-green-700 text-[17px] space-y-2">
          <li className="leading-relaxed">Underground Power Supply through Separate Concrete Duct with LT/HT Cables</li>
          <li className="leading-relaxed">Aesthetically Designed Street Lighting with LED Lights</li>
          <li className="leading-relaxed">Unlimited Water Supply through UPVC Pipes and Fittings with Storage Capacity of about 1,00,000 Lakh Liters and Sump & Overhead Watertank</li>
          <li className="leading-relaxed">Sanitary and Sewage Lines fitted with Non-Corrosive PE Chambers/Manholes and Foam Core Pipes</li>
          <li className="leading-relaxed">Sewage Treatment Plant – Treated Water for all Green Bodies</li>
          <li className="leading-relaxed">Closed Concrete Storm Water Drains with Pavers and Kerb Stones</li>
          <li className="leading-relaxed">Paved Footpaths and Tree Lined Avenues</li>
          <li className="leading-relaxed">Provision for Piped Gas Supply</li>
          <li className="leading-relaxed">Rain Water Harvesting</li>
          <li className="leading-relaxed">Solar Lighting for Common Areas</li>
        </ul>

      </div>
    </div>
  );
};

export default TechnicalSpecifications;
