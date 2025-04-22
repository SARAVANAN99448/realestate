import React from "react";

const ClubHouse = () => {
  return (
    <section className="md:ml-52 ml-52 md:pl-1 pl-18">
      <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
        {/* Park Section */}
        <div className="relative flex flex-col items-center w-48 mb-0 md:ml-9 ml-9">
          {/* Triangle (Main Park Area) */}
          <div className="relative md:w-52 w-[165px] h-20 md:ml-0 md:mr-0 mr-2
            md:border-l-[90px] border-l-[64px] border-l-transparent
            md:border-r-[139px]  border-r-[100px] border-r-transparent
            md:border-b-[150px] border-b-[130px]  border-b-green-500
            flex items-center justify-center"
            style={{
              clipPath: " polygon(0% 114%, 96% 100%, 80% 0%, 20% 0%)",
            }}
          >


            {/* PARK Label (Centered) */}
            <div className="absolute top-28 left-3 flex items-center justify-center w-full h-full">
              <div className=" px-3 py-2 text-xl font-bold">PARK</div>
            </div>
          </div>

          {/* Rectangle (Bottom Part) with a Sharp Left Side and STRAIGHT Bottom */}
          <div
            className="md:w-[220px] w-[160px] md:h-12 h-12 bg-green-500 md:mr-3 mr-4 pt-[-3%]"
            style={{
              clipPath: "polygon(3% 0%, 95% -1000%, 1900% 100%, 0% 100%)", // Adjusted to make the bottom straight
            }}
          />
        </div>

        {/* Club House Section */}
        <div className="relative md:w-60 w-44 p-4 text-center overflow-hidden md:h-28 h-24 mb-7 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-blue-500 opacity-70"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
          <h1 className="relative text-xl font-bold tracking-widest">COMMERCIAL PROPERTY</h1>
        </div>
      </div>
    </section>
  );
};

export default ClubHouse;
