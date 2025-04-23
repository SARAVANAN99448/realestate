import React from "react";
import image from "../assets/images/Chikkamagaluru.png"; 

const Chikkamagaluru = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center mb-10 md:mt-20 mt-10">
      {/* Parallax Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="text-center text-white relative md:px-20 px-10 text-[17px] md:text-[20px]">
        <h2 className="md:text-3xl text-2xl py-10  font-bold text-black">Chikkamagaluru : Fresh air forever</h2>
        <div className="border-4 cursor-pointer border-white rounded-xl px-6 py-4 bg-black/50 text-white text-center w-full mt-4 transition-all duration-300 hover:bg-green-900 hover:-translate-y-2">
          {/* <p>A coffee connoisseur's muse, a photographer's paradise, the land that introduced coffee to India and home to the tallest peak in Karnataka are some of the many synonyms that would describe the beauty of Chikkamagaluru.</p>
          <p>Located 250 KMs away from Bengaluru, Chikkamagaluru is charmingly settled in the foothills of the Western Ghats, away from the pollution and chaos of urban living. Considered as a tourist paradise, Chikkamagaluru is surrounded by hill stations and blanketed by favorable weather throughout the year.</p> */}
          <h3 className="text-green-300 font-bold md:text-2xl text-xl my-5">Advantages of Chikkamagaluru</h3>
          <ul className="list-none">
            <li className="">• Salubrious weather throughout the year</li>
            <li className="">• Located very close to Kemmangundi, Kudremukh, Mullayangiri, Manikyadhara, and Hebbe Falls</li>
            <li className="">• Close proximity to renowned temple towns of Sringeri, Horanadu, and Kalasa</li>
            <li className="">• Excellent connectivity through Rail and Road</li>
            <li>• A getaway that rejuvenates the soul, Chikkamagaluru offers a perfect blend of nature, culture, and adventure for every traveler.</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Chikkamagaluru;
