import React from "react";
import plotsImg from "../assets/images/nature.png";

const ExperienceLife = () => {
    return (<>
        <div>
            <h2 className="md:text-3xl text-2xl mb-2 font-extrabold text-[#fb9906] text-center mt-10 lg:mt-20">Experience life in the foothills of nature</h2>
            <hr className="w-16 border-green-700 mx-auto mb-4" />
        </div>
        <div className="md:hidden  flex flex-col items-center bg-white  py-10 p-6 rounded-lg shadow-lg max-w-5xl mx-auto ">
            {/* Image on top */}
            <div className="w-full flex justify-center">
                <img
                    src={plotsImg}
                    alt="Swarnagiri"
                    className="w-full h-auto max-w-md rounded-lg object-cover"
                />
            </div>

            {/* Text below */}
            <div className="w-full text-center mt-4">
                <p className="mt-4 text-green-700 text-[17px]">
                    Nestled in the Chandra Drona Range of the Western Ghats, Swarnagiri
                    offers a breathtaking panoramic view of pristine nature. Located near
                    Chikkamagaluru city center, this DTCP-approved residential layout
                    spans 64,749 sq. mts. of lush greenery.
                </p>
                <p className="mt-4 text-green-700 text-[17px]">
                    Thoughtfully designed with ample open spaces, Swarnagiri features 229
                    plots in various dimensions (30×40, 30×50, 40×60 sq. ft.). Residents
                    will enjoy the exclusive privilege of an adjacent World Class Club
                    with luxury amenities currently under development.
                </p>
            </div>
        </div>
        {/*  */}

        <div className="hidden md:flex py-10 flex-col bg-white  md:flex-row items-center  p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
            {/* Left Side - Text */}
            <div className="md:w-1/2 w-full md:pr-8 mt-4 md:mt-0 text-center md:text-left">

                <p className="mt-4 text-green-700 text-[17px]">
                    Nestled in the Chandra Drona Range of the Western Ghats, Swarnagiri offers a breathtaking panoramic view of pristine nature. Located near Chikkamagaluru city center, this DTCP-approved residential layout spans 64,749 sq. mts. of lush greenery.
                </p>
                <p className="mt-4 text-green-700 text-[17px]">
                    Thoughtfully designed with ample open spaces, Swarnagiri features 229 plots in various dimensions (30×40, 30×50, 40×60 sq. ft.). Residents will enjoy the exclusive privilege of an adjacent World Class Club with luxury amenities currently under development.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 w-full flex justify-center">
                <img
                    src={plotsImg}
                    alt="Swarnagiri"
                    className="w-full h-auto max-w-md rounded-lg object-cover"
                />
            </div>
        </div>
    </>

    );
};

export default ExperienceLife;
