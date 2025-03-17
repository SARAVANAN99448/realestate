import React from "react";
import airImg from "../assets/images/air.jpg";

const Chikkamagaluru = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto md:mt-20 mt-10">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={airImg}
          alt="Chikkamagaluru"
          className="w-full h-auto max-w-md rounded-lg object-cover"
        />
      </div>
      
      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full md:pl-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className=" md:text-2xl text-xl font-bold text-green-800">Chikkamagaluru : Fresh air forever</h2>
        <p className="mt-4 text-green-700 text-[16px]">
          A coffee connoisseur's muse, a photographer's paradise, the land that
          introduced coffee to India and home to the tallest peak in Karnataka
          are some of the many synonyms that would describe the beauty of
          Chikkamagaluru. Located 250 KMs away from Bengaluru, Chikkamagaluru is
          charmingly settled in the foothills of the Western Ghats, away from
          the pollution and chaos of urban living. Considered as a tourist
          paradise, Chikkamagaluru is surrounded by hill stations and blanketed
          by favorable weather throughout the year.
        </p>
        <h3 className="text-xl font-semibold mt-4 text-green-800">Advantages of Chikkamagaluru</h3>
        <ul className="list-disc list-inside mt-2 text-green-700 text-[15px]">
          <li>Salubrious weather throughout the year</li>
          <li>
            Located very close to Kemmangundi, Kudremukh, Mullayangiri,
            Manikyadhara and Hebbe Falls
          </li>
          <li>
            Close proximity to renowned temple towns of Sringeri, Horanadu and
            Kalasa
          </li>
          <li>Excellent connectivity through Rail and Road</li>
        </ul>
      </div>
    </div>
  );
};

export default Chikkamagaluru;
