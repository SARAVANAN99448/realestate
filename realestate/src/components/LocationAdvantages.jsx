import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import advantageImg from "../assets/images/image.png";

const LocationAdvantages = () => {
  const [openSection, setOpenSection] = useState("Proximity");

  const sections = {
    Proximity: [
      "Bus Station – Just 4 km away",
      "Railway Station – Convenient access at 6 km",
      "Bengaluru – 251 km for weekend trips",
      "Mangalore – 155 km to the coastal paradise",
    ],
    "Educational Institutions": [
      "Model English School – Just 1 km from your doorstep",
      "Adichunchanagiri Institute of Technology – 7 km",
      "Sai Angles School – 11 km",
      "Amber Valley Residential School – 9 km",
      "Nurture International School – 9 km",
    ],
    Healthcare: ["Nearest Hospital – Quick 3 km distance for medical needs",
      "24/7 emergency services accessible within minutes",
    "Holy Cross Hospital",
    "Annapurna Hospital",
    "Ashraya Hospital",
    "Dr Santhosh Urs Healthcare",
    "KRS Multispeciality Hospital Pvt.Ltd"
    ],
    "Nature Retreats": [
      "Mullayangiri – Karnataka's highest peak only 1.5 km away",
      "Kallathigiri Falls – 52 km scenic drive",
      "Manikydhara Falls – 34 km perfect for day trips",
      "Kemmanagundi – 62 km mountain resort",
      "Kudremukh – 85 km national park beauty",
      "Hirekolale lake"
    ],
    "Religious Towns": [
      "Belur – Historic temple town 25 km away",
      "Belavadi – 29 km rich in cultural heritage",
      "Halebidu – 30 km ancient Hoysala architecture",
      "Amritapura – 67 km spiritual journey",
      "Sringeri – 90 km renowned pilgrimage site",
      "Kalasa – 92 km for temple enthusiasts",
      "Horanadu – 100 km sacred destination",
    ],
    "Clubs & Resorts": [
      "Chikkamagaluru Club – 5 km social networking",
      "Kadur Club – 5 km relaxation",
      "Golf Club – 6 km for sports enthusiasts",
      "Catholic Club – 5 km community gatherings",
      "The TaJ Gateway – 10 km luxury experience",
      "The Serai – 12 km premium resort",
      "Java Rain Resort – Just 4 km getaway",
      "Trivik – 12 km exclusive accommodation",
    ],
  };

  return (
    <section className="max-w-6xl mx-auto p-6 overflow-hidden text-[17px] md:mt-20 mt-10" id="location">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#fb9906] mb-2">
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
                className=" w-full flex justify-between cursor-pointer items-center bg-green-700 text-white px-4 py-3 rounded-md text-lg md:text-xl transition-all duration-300 hover:bg-green-800  text-[17px] md:text-[17px] "
              >
                <span>{section}</span>
                {openSection === section ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openSection === section && (
                <div className="bg-green-100 border border-green-400 rounded-md p-4 mt-1 text-green-900 transition-all duration-500">
                  <ul className="list-disc pl-5 space-y-1">
                    {items.map((item, index) => (
                      <li key={index} className="text-[17px] md:text-[17px]">{item}</li>
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
