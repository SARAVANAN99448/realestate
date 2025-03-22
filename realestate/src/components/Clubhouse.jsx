import React from "react";

const ClubHouse = () => {
  return (
    <section className="md:ml-52 ml-52 md:pl-1 pl-18">
    <div className="flex flex-col items-center space-y-4 w-full max-w-sm ">
      {/* Park Section */}
      <div className="relative md:w-68 w-52 mb-0  ml-0 text-center overflow-hidden md:h-40 h-32 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-green-500 opacity-70"
          style={{
            clipPath: "polygon(50% 0%, 95% 100%, 15% 100%)"

          }}
        />
        <h1 className="relative text-xl font-bold tracking-widest">PARK</h1>
      </div>
      {/* Club House Section */}
      <div className="relative md:w-60 w-44 p-4   text-center overflow-hidden md:h-28 h-24 mb-7 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-blue-500 opacity-70"
          style={{
            clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        <h1 className="relative text-xl font-bold tracking-widest">CLUB HOUSE</h1>
      </div>
    </div>
    </section>
  );
};

export default ClubHouse;
