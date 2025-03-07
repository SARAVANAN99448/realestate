import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const row1 = [
    { num: 178, bg: "bg-pink-300" },
    { num: 179, bg: "bg-pink-300" },
    { num: 180, bg: "bg-pink-300" },
    { num: 181, bg: "bg-pink-300" },
    { num: 182, bg: "bg-pink-300" },
    { num: 183, bg: "bg-pink-300" },
    { num: 184, bg: "bg-pink-300" },
    { num: 185, bg: "bg-pink-300" },
    { num: 186, bg: "bg-pink-300" },
    { num: 187, bg: "bg-pink-300" },
    { num: 188, bg: "bg-[#9c4e1a]" },
];

const row2 = [
    { num: 177, bg: "bg-[#9c4e1a]" },
    { num: 176, bg: "bg-[#9c4e1a]" },
    { num: 175, bg: "bg-[#9c4e1a]" },
    { num: 174, bg: "bg-[#9c4e1a]" },
    { num: 173, bg: "bg-[#9c4e1a]" },
    { num: 172, bg: "bg-[#9c4e1a]" },
    { num: 171, bg: "bg-[#9c4e1a]" },
    { num: 170, bg: "bg-[#9c4e1a]" },
    { num: 169, bg: "bg-[#9c4e1a]" },
    { num: 168, bg: "bg-[#9c4e1a]" },
    { num: 167, bg: "bg-[#9c4e1a]" },
];

const soldPlots = [178, 188, 170];
const Topplots6 = () => {
    const navigate = useNavigate();
    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <section className="md:pl-32 absolute md:top-[73.75%] md:left-[12%] top-[60%] pl-2">
            <div className="md:right-[20%] md:bottom-[123%] bottom-[105%] right-[30%] absolute font-bold">
                <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
            </div>
            <div>
                <div className="flex">
                    {row1.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? 'bg-red-500' : bg} 
                                md:w-8 w-6 md:h-13 h-10 md:border-1 border-1 border-black 
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
                <div className="flex">
                    {row2.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? 'bg-red-500' : bg} 
                                md:w-8 w-6 md:h-13 h-10 md:border-1 border-1 border-black 
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
            </div>
        </section>
    );
};

export default Topplots6;
