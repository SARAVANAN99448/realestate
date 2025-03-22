import React from "react";
import image1 from "../assets/images/image1.jpeg"; // Use cropped PNG images
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";

const teamMembers = [
  {
    name: "Keshava Murthy",
    role: "Founder",
    company: "Leelaa Ventures",
    image: image5,
  },
  {
    name: "Leelaa Keshava Murthy",
    role: "Promoter",
    company: "Leelaa Ventures",
    image: image1,
  },
  {
    name: "Prasanna Krishna",
    role: "Architect",
    company: "P&S Consultants",
    image: image2,
  },
  {
    name: "Pruthvi Gowda",
    role: "Sales and Hospitality",
    company: "Leelaa Ventures",
    image: image4,
  },
  {
    name: "Ashok Aditya",
    role: "Civil Contractor",
    company: "Infonity Associates",
    image: image3,
  }
  
];

const Team = () => {
  return (
    <section className="bg-white max-w-6xl mx-auto py-16 px-4 text-center ">
      <h2 className="md:text-3xl text-2xl font-bold flex items-center mb-8">
        <span className="w-2 h-8 bg-green-600 mr-2"></span> Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="w-40 h-40 mx-auto rounded-md overflow-hidden  cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-bold text-[#fb9906]">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
            <p className="text-gray-700">{member.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
