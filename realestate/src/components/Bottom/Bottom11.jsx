import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const firstColumnNumbers2 = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const secondColumnNumbers2 = [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16];
const soldPlots = [];
const Bottom11 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="flex">
        {[firstColumnNumbers2, secondColumnNumbers2].map((numbers, colIndex) => (
            <div key={colIndex} className={`mt-1 ${colIndex === 1 ? "pr-10" : ""}`}>
                {numbers.map((num, index) => {
                    const isSold = soldPlots.includes(num);
                    return (
                        <div
                            key={index}
                            className={`md:w-10 w-7 h-10 md:border-1 border-1 border-black 
                                flex justify-center items-center 
                                ${isSold ? 'bg-red-500' : 
                                    num === 35 || num === 26 ? "bg-[#9c4e1a]" : 
                                    num >= 36 ? "bg-pink-300" : "bg-[#e3d91f]"}
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

export default Bottom11;
