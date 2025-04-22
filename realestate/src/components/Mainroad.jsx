import React from 'react';

const Mainroad = () => {
    return (
        <div className="relative my-2 text-center mx-auto w-full  max-w-5xl">

            {/* Road Background */}
            <div className="relative md:w-full w-[550px] h-10 bg-black rounded-md flex items-center justify-center">
                {/* Center White Dashed Line */}


                <div className="absolute top-1/2 left-0 w-full  border-white transform -translate-y-1/2"></div>

                {/* MAIN ROAD Text */}
                <p className="relative text-white font-extrabold  md:text-xl text-[16px] tracking-wide bg-black px-4">
                    MAIN ROAD
                </p>
            </div>

            <p className='text-white font-extrabold absolute md:left-32 left-10 top-2'>← kubbinahalli
            </p>
        </div>
    );
};

export default Mainroad;
