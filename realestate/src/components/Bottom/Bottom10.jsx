import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getColors3 = (num) => {
    if (num === 65 || num === 56) return "bg-[#9c4e1a]";
    if (num >= 66 && num <= 75) return "bg-[#e3d91f]";
    return "bg-pink-300";
};
const soldPlots = [];
const firstColumnNumbers3 = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
const secondColumnNumbers3 = [56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46];

const Bottom10 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="flex">
        {[firstColumnNumbers3, secondColumnNumbers3].map((numbers, colIndex) => (
            <div key={colIndex} className={`mt-1 ${colIndex === 1 ? "mr-10" : ""}`}>
                {numbers.map((num, index) => {
                    const isSold = soldPlots.includes(num);
                    return (
                        <div
                            key={index}
                            className={`md:w-10 w-7 h-10 md:border-1 border-1 border-black 
                                flex justify-center items-center 
                                ${isSold ? 'bg-red-500' : getColors3(num)}
                                ${isSold ? 'cursor-default' : 'cursor-pointer'}`}
                            onClick={!isSold ? () => handlePlotClick(num) : undefined}
                        >
                            <p className={`${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                                {num}
                            </p>
                        </div>
                    );
                })}
            </div>
        ))}
    </div>
    );
};

export default Bottom10;
