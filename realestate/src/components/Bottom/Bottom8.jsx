import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const columns5 = [
    { numbers: [114, 115, 116, 117], last: 118, bg: ["bg-[#9c4e1a]", "bg-[#e3d91f]", "bg-[#e3d91f]", "bg-[#e3d91f]"] },
    { numbers: [106, 105, 104, 103, 102], last: 101, bg: ["bg-[#9c4e1a]", "bg-[#7152bf]", "bg-[#7152bf]", "bg-[#7152bf]", "bg-[#7152bf]"] },
];
const soldPlots = [115, 104, 101];
const Bottom8 = () => {

    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="flex">
            {columns5.map((col, index) => (
                <div key={index} className={`mt-1 ${index === 1 ? "mr-10" : ""}`}>
                    {col.numbers.map((num, i) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={i}
                                className={`md:w-10 w-7 h-15 md:border-1 border-1 border-black flex justify-center items-center 
                                ${isSold ? 'bg-red-500' : col.bg[i]} 
                                ${isSold ? 'cursor-default' : 'cursor-pointer'}`}
                                onClick={!isSold ? () => handlePlotClick(num) : undefined}
                            >
                                <p className={`${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                                    {num}
                                </p>
                            </div>
                        );
                    })}
                    <div
                        className={`relative md:w-10 w-7 h-20 border-2 border-black clip-path 
                        ${soldPlots.includes(col.last) ? 'bg-red-500 cursor-default' : 'bg-[#9c4e1a] cursor-pointer'}`}
                        onClick={!soldPlots.includes(col.last) ? () => handlePlotClick(col.last) : undefined}
                    >
                        <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        ${soldPlots.includes(col.last) ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                            {col.last}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bottom8;
