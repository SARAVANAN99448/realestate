import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const columns11 = [
    [123, 124, 125, 126],
    [122, 121, 120, 119]
];
const soldPlots = [];
const getColors11 = (num) => {
    if ([123, 122].includes(num)) return "bg-[#9c4e1a]";
    if ([124, 125, 126, 121, 120, 119].includes(num)) return "bg-pink-300";
    return "bg-gray-300";
};

const Bottom2 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="flex relative">
            
            {columns11.map((column, colIndex) => (
                <div key={colIndex} className={`mt-1 ${colIndex === 1 ? 'pr-10' : ''}`}>
                    {column.map((num) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? 'bg-red-500' : getColors11(num)} 
                                    md:w-10 w-7 h-10 md:border-1 border-1 border-black 
                                    flex justify-center items-center 
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

export default Bottom2;
