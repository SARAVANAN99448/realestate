import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const plotsColumn1 = [
    { number: 226, bgColor: "bg-[#9c4e1a]", height: "h-20", extraClass: "for226" },
    { number: 227, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 228, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 229, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
];

const plotsColumn2 = [
    { number: 225, bgColor: "bg-[#9c4e1a]", height: "h-20", extraClass: "for225" },
    { number: 224, bgColor: "bg-[#9c4e1a]", height: "h-10", extraClass: "for224" },
    { number: 223, bgColor: "bg-[#9c4e1a]", height: "h-10", extraClass: "for223" },
    { number: 222, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 221, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 220, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 219, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
];

const soldPlots = [];
const Topplots3 = () => {
    const navigate = useNavigate();

    
    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <section className='md:pr-10 md:pl-32 pl-60 pr-10 h-fit relative'>
            {/* Road Label */}
            <div className="absolute min-w-full md:left-[42%] md:top-[34%] top-20 left-[44%] rotate-270 font-bold ">
                <p className='md:text-[16px] text-[12px] w-full'>9.00 M WIDE ROAD</p>
            </div>
            {/* Road Label */}
            <div className="absolute min-w-full md:left-[91%] md:top-[34%] top-20 left-[73%] rotate-270 font-bold ">
                <p className='md:text-[16px] text-[12px] w-full'>9.00 M WIDE ROAD</p>
            </div>
            <div className="flex ">
                <div className="md:mt-28 mt-28 pt-2">
                    {plotsColumn1.map((plot) => {
                        const isSold = soldPlots.includes(plot.number);
                        return (
                            <div key={plot.number}
                                className={`${isSold ? 'bg-red-500' : plot.bgColor} 
                                    md:w-10 w-7 ${plot.height} md:md:border-1 border-1 border-black 
                                    flex justify-center items-center 
                                    ${isSold ? 'cursor-default' : 'cursor-pointer'} 
                                    ${plot.extraClass}`}
                                onClick={!isSold ? () => handlePlotClick(plot.number) : undefined}
                            >
                                <p className={`${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                                    {plot.number}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div>
                    {plotsColumn2.map((plot) => {
                        const isSold = soldPlots.includes(plot.number);
                        return (
                            <div key={plot.number}
                                className={`${isSold ? 'bg-red-500' : plot.bgColor} 
                                    md:w-10 w-7 ${plot.height} md:border-1 border-1 border-black 
                                    flex justify-center items-center 
                                    ${isSold ? 'cursor-default' : 'cursor-pointer'} 
                                    ${plot.extraClass}`}
                                onClick={!isSold ? () => handlePlotClick(plot.number) : undefined}
                            >
                                <p className={`${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                                    {plot.number}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Topplots3;
