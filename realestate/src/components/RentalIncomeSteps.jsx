import React from "react";

const RentalIncomeSteps = () => {
  const steps = [
    { step: "STEP 1", text: "Buy a site at Swarnagiri" },
    { step: "STEP 2", text: "Design your dream villa" },
    { step: "STEP 3", text: "Construct your villa at Swarnagiri" },
    { step: "STEP 4", text: "Lease back your villa with us" },
    { step: "STEP 5", text: "Enjoy guaranteed rental income" },
  ];

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto md:mt-20 mt-10">
      <h2 className="text-3xl font-bold text-yellow-400 text-center">
        5 Simple Steps to Guaranteed Rental Income from Your Dream Villa
      </h2>
      <p className="text-gray-300 text-center mt-2">
        From planning to profit, follow these easy steps to secure your
        investment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 cursor-pointer p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold text-yellow-400">{item.step}</h3>
            <p className="text-gray-300 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalIncomeSteps;
