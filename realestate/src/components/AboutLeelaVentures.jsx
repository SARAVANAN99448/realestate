import React from "react";
import teamImg from "../assets/images/team.jpeg"
const AboutLeelaVentures = () => {
    return (
        <div className="bg-green-100 py-12 px-6 md:px-16 text-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Left Side: Image */}
                <div className="">
                    <img
                        src={teamImg}
                        alt="Leela Ventures"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutLeelaVentures;
