import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const firstColumn = [
    { number: 132, className: "bg-[#9c4e1a] md:w-28 w-10 md:h-24 h-14 md:border-1 border-1 border-black relative flex justify-center items-center next-path cursor-pointer" },
    { number: 131, className: "bg-[#9c4e1a] md:w-15 w-10 md:h-24 h-14 md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
];

const secondColumn = [
    { number: 130, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 129, className: "bg-pink-300 md:w-10 w-7 h-10 md:md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 128, className: "bg-pink-300 md:w-10 w-7 h-10 md:md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 127, className: "bg-pink-300 md:w-10 w-7 h-10 md:md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
];
const soldPlots = [132, 129, 133]
const Bottom1 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="flex">
        {/* First Column */}
        <div className="flex-col">
            <div className="flex">
                {firstColumn.map((box) => {
                    const isSold = soldPlots.includes(box.number);
                    return (
                        <div 
                            key={box.number} 
                            className={`${isSold ? 'bg-red-500' : box.className.split(' ')[0]} 
                                ${box.className.split(' ').slice(1).join(' ')} 
                                ${isSold ? 'cursor-default' : 'cursor-pointer'}`}
                            onClick={!isSold ? () => handlePlotClick(box.number) : undefined}
                        >
                            <p className={`relative ${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                                {box.number}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div 
                className={`${soldPlots.includes(133) ? 'bg-red-500' : 'bg-[#9c4e1a]'} 
                    md:w-full w-20 h-12 md:md:border-1 border-1 border-black relative 
                    flex justify-center items-center next-path 
                    ${soldPlots.includes(133) ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={!soldPlots.includes(133) ? () => handlePlotClick(133) : undefined}
            >
                <p className={`relative ${soldPlots.includes(133) ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                    133
                </p>
            </div>
        </div>

        {/* Second Column */}
        <div className="pr-10">
            {secondColumn.map((box) => {
                const isSold = soldPlots.includes(box.number);
                const originalBg = box.className.includes('bg-[#9c4e1a]') ? 'bg-[#9c4e1a]' : 'bg-pink-300';
                
                return (
                    <div 
                        key={box.number} 
                        className={`${isSold ? 'bg-red-500' : originalBg} 
                            ${box.className.split(' ').slice(1).join(' ')} 
                            ${isSold ? 'cursor-default' : 'cursor-pointer'}`}
                        onClick={!isSold ? () => handlePlotClick(box.number) : undefined}
                    >
                        <p className={`relative ${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                            {box.number}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
    );
};

export default Bottom1;
