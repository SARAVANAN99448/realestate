import React from 'react';
import { Briefcase, Map, Ruler, ShieldCheck, Landmark } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-[15px]">
      {/* About Heading */}
      <h2 className="md:text-3xl text-2xl font-bold flex items-center">
        <span className="w-2 h-8 bg-green-600 mr-2"></span> About Leelaa Ventures
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-[17px] md:text-[18px]">
        Leelaa Ventures, since its inception, crafts real estate developments with integrity, ingenuity, and innovation, striving for functional living spaces that serve as benchmarks. Our customer-centric approach, built on trust, quality, and transparency, is reinforced through comprehensive planning and ethical construction practices.
      </p>

      {/* Tagline */}
      <p className="mt-2 text-green-600 font-semibold text-[17px] md:text-[18px]">
        Leelaa Ventures - Creating worthy assets that stand the test of time
      </p>

      {/* Statistics Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
        {[
          { number: '40+', label: 'Years Experience', icon: <Briefcase size={40} className="text-green-600" /> },
          { number: '229+', label: 'Available Plots', icon: <Map size={40} className="text-green-600" /> },
          { number: '64,749', label: 'Square Meters Area', icon: <Ruler size={40} className="text-green-600" /> },
          { number: '100%', label: 'DTCP Approved', icon: <ShieldCheck size={40} className="text-green-600" /> },
          { number: '4+', label: 'Tourist Attractions Nearby', icon: <Landmark size={40} className="text-green-600" /> }
        ].map((item, index) => (
          <div key={index} className="border border-green-600 p-4 text-center rounded-md">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-bold text-green-600 text-[16px]">{item.number}</h3>
            <p className="text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
