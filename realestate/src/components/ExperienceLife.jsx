import React from "react";
import plotsImg from "../assets/images/plots.jpg";

const ExperienceLife = () => {
  return (
    <div className="flex flex-col items-center bg-green-100 py-10 p-6 rounded-lg shadow-lg max-w-5xl mx-auto mt-10 lg:mt-20">
      {/* Image on top */}
      <div className="w-full flex justify-center">
        <img
          src={plotsImg}
          alt="Swarnagiri"
          className="w-full h-auto max-w-md rounded-lg object-cover"
        />
      </div>

      {/* Text below */}
      <div className="w-full text-center mt-4">
        <h2 className="text-xl lg:text-2xl font-bold text-green-800">
          Experience life in the foothills of nature
        </h2>
        <p className="mt-4 text-green-700 text-[16px]">
          Nestled in the Chandra Drona Range of the Western Ghats, Swarnagiri
          offers a breathtaking panoramic view of pristine nature. Located near
          Chikkamagaluru city center, this DTCP-approved residential layout
          spans 64,749 sq. mts. of lush greenery.
        </p>
        <p className="mt-4 text-green-700 text-[16px]">
          Thoughtfully designed with ample open spaces, Swarnagiri features 229
          plots in various dimensions (30×40, 30×50, 40×60 sq. ft.). Residents
          will enjoy the exclusive privilege of an adjacent World Class Club
          with luxury amenities currently under development.
        </p>
      </div>
    </div>
  );
};

export default ExperienceLife;
