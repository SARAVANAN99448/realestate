import React from "react";
import image1 from "../assets/images/image1.jpeg"; // Use cropped PNG images
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";

const teamMembers = [
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
    name: "Ashok Aditya",
    role: "Civil Contractor",
    company: "Infonity Associates",
    image: image3,
  },
  {
    name: "Pruthvi Gowda",
    role: "Sales and Hospitality",
    company: "Leelaa Ventures",
    image: image4,
  },
];

const Team = () => {
  return (
    <section className="bg-green-100 py-12 text-center">
      <h2 className="text-3xl font-bold text-yellow-600 mb-8">MEET OUR TEAM</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="w-40 h-40 mx-auto rounded-md overflow-hidden bg-red-900 cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center bg-red-900"
              />
            </div>
            <h3 className="mt-4 font-bold text-yellow-600">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
            <p className="text-gray-700">{member.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
