import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import advantageImg from "../assets/images/image.png";

const LocationAdvantages = () => {
  const [openSection, setOpenSection] = useState("Proximity");

  const sections = {
    Proximity: [
      "Bus Station – 4 km",
      "Railway Station – 6 km",
      "Bengaluru – 251 km",
      "Mangalore – 155 km",
    ],
    "Educational Institutions": [
      "Model English School – 1 km",
      "Adichunchanagiri Institute of Technology – 7 km",
      "Sai Angles School – 11 km",
      "Amber Valley Residential School – 9 km",
      "Nurture International School – 9 km",
    ],
    Healthcare: ["Nearest Hospital – 3 km"],
    "Nature Retreats": [
      "Kallathigiri Falls – 52 km",
      "Manikyadhara Falls – 34 km",
      "Mullayanagiri – 1.5 km",
      "Kemmangundi – 62 km",
      "Kudremukh – 85 km",
    ],
    "Religious Towns": [
      "Belur – 25 km",
      "Belavadi – 29 km",
      "Halebidu – 30 km",
      "Amritapura – 67 km",
      "Sringeri – 90 km",
      "Kalasa – 92 km",
      "Horanadu – 100 km",
    ],
    "Clubs & Resorts": [
      "Chikkamagaluru Club – 5 km",
      "Kadur Club – 5 km",
      "Golf Club – 6 km",
      "Catholic Club – 5 km",
      "The Taj Gateway – 10 km",
      "The Serai – 12 km",
      "Java Rain Resort – 4 km",
      "Trivik – 12 km",
    ],
  };

  return (
    <section className="max-w-6xl mx-auto p-6 overflow-hidden text-[13px] md:text-[14px]" id="location">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#fb9906] mb-2">
        Location Advantages
      </h2>
      <hr className="w-16 border-green-700 mx-auto mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Accordion Sections */}
        <div className="order-2 md:order-1 space-y-4">
          {Object.entries(sections).map(([section, items]) => (
            <div key={section} className="transition-all duration-300">
              <button
                onClick={() => setOpenSection(openSection === section ? null : section)}
                className="w-full flex justify-between cursor-pointer items-center bg-green-700 text-white px-4 py-3 rounded-md text-lg md:text-xl transition-all duration-300 hover:bg-green-800  text-[13px] md:text-[14px] "
              >
                <span>{section}</span>
                {openSection === section ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openSection === section && (
                <div className="bg-green-100 border border-green-400 rounded-md p-4 mt-1 text-green-900 transition-all duration-500">
                  <ul className="list-disc pl-5 space-y-1">
                    {items.map((item, index) => (
                      <li key={index} className=" text-[13px] md:text-[14px]">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <img
            src={advantageImg}
            alt="Location Map"
            className="w-full md:w-[80%] max-w-md shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;
