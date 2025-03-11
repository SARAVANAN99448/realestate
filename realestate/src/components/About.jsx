import React from 'react';
import { Building, CheckCircle, Users, Trophy, BarChart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4  text-[15px]">
      {/* About Heading */}
      <h2 className="md:text-3xl text-2xl font-bold flex items-center">
        <span className="w-2 h-8 bg-green-600 mr-2"></span> About Swarnagiri's
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-[13px] md:text-[15px]">
        Swarnagiri's, since 1989, crafts homes with intellect and passion, striving for architectural brilliance and value-for-price.
        Our customer-centric ethos, built on trust, quality, and transparency, is reinforced through
        <span className="font-semibold"> 1275+ quality checks</span>, guaranteeing impeccable projects with ethical practices.
      </p>

      {/* Tagline */}
      <p className="mt-2 text-green-600 font-semibold text-[15px]">
      Swarnagiri's - For those who will not settle for something cheap.
      </p>

      {/* Statistics Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
        {[
          { number: '125+', label: 'Projects', icon: <Building size={40} className="text-green-600" /> },
          { number: '1275+', label: 'Quality Checks', icon: <CheckCircle size={40} className="text-green-600" /> },
          { number: '3400+', label: 'Happy Customers', icon: <Users size={40} className="text-green-600" /> },
          { number: '60+', label: 'Awards', icon: <Trophy size={40} className="text-green-600" /> },
          { number: '35', label: 'Years in Business', icon: <BarChart size={40} className="text-green-600" /> }
        ].map((item, index) => (
          <div key={index} className="border border-green-600 p-4 text-center rounded-md ">
            <div className="flex justify-center ">{item.icon}</div>
            <h3 className="text-2xl font-bold text-green-600  text-[16px] ">{item.number}</h3>
            <p className="text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
