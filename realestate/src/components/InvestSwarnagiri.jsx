import React from "react";
import investImg from "../assets/images/why.jpg";

const InvestSwarnagiri = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-100 p-6 py-10 rounded-lg shadow-lg max-w-5xl mx-auto md:mt-20 mt-10">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={investImg}
          alt="Investment in Swarnagiri"
          className="w-full h-auto max-w-md rounded-lg object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full md:pl-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="md:text-2xl text-xl font-bold text-green-800">
          Why should you Invest in SWARNAGIRI
        </h2>
        <ul className="list-disc md:list-inside list-outside md:pl-0 pl-6 mt-4 text-green-700 text-[16px] space-y-2">
          <li className="leading-relaxed md:pl-0 pl-2">INVEST LOW, GAIN HIGH</li>
          <li className="leading-relaxed md:pl-0 pl-2">MUNICIPAL PROPERTY BY 2021</li>
          <li className="leading-relaxed md:pl-0 pl-2">4 DIFFERENT WATER SOURCES</li>
          <li className="leading-relaxed md:pl-0 pl-2">
            GOVERNMENT VALUATION & FAIR & MARKET PRICE
          </li>
          <li className="leading-relaxed md:pl-0 pl-2">
            NEXT TO CDA (CHIKMAGALUR DEVELOPMENT AUTHORITY) LAYOUT SPREAD ACROSS 193 ACRES. 
            HENCE APPRECIATION IN THE CAPITAL VALUE IS GUARANTEED
          </li>
          <li className="leading-relaxed md:pl-0 pl-2">
            HIGH RENTAL REVENUE GUARANTEED FOR VILLAS BUILT AT SWARNAGIRI
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InvestSwarnagiri;
