import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const columns7 = [
    [31, 32, 33, 34],
    [30, 29, 28, 27]
];

const getColors7 = (num) => {
    if ([31, 34, 30, 27].includes(num)) return "bg-[#9c4e1a]";
    if ([29, 28].includes(num)) return "bg-[#e3d91f]";
    return "bg-pink-300";
};
const soldPlots = [];
const Bottom6 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="flex">
            {columns7.map((column, colIndex) => (
                <div key={colIndex} className={`mt-1 ${colIndex === 1 ? 'mr-10' : ''}`}>
                    {column.map((num) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? 'bg-red-500' : getColors7(num)} 
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

export default Bottom6;
