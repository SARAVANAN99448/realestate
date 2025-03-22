import React from 'react';

const Mainroad = () => {
    return (
        <div className="relative my-2 text-center mx-auto w-full  max-w-5xl">
            {/* Road Background */}
            <div className="relative w-full h-10 bg-black rounded-md flex items-center justify-center">
                {/* Center White Dashed Line */}
                <div className="absolute top-1/2 left-0 w-full border-t-[5px] border-dashed border-white transform -translate-y-1/2"></div>

                {/* MAIN ROAD Text */}
                <p className="relative text-white font-extrabold  md:text-xl text-[16px] tracking-wide bg-black px-4">
                    MAIN ROAD
                </p>
            </div>
        </div>
    );
};

export default Mainroad;
