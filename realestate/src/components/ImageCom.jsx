import React from "react";
import image from "../assets/images/amenities.jpg"; // Ensure this path is correct

const Configurations = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center mb-10">
      {/* Parallax Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="text-center text-white relative z-10">
        <h2 className="md:text-3xl text-2xl font-bold text-black">Configurations</h2>
        <hr className="w-12 mx-auto my-2 border-white" />
        <div className="border-4 cursor-pointer border-white rounded-xl px-6 py-4 bg-black/50 text-white text-center w-80 mt-4 transition-all duration-300 hover:bg-green-700/70 hover:-translate-y-2">
          <h3 className="text-xl font-semibold">3BHK Homes</h3>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full mt-2 text-sm">
            Check Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configurations;
