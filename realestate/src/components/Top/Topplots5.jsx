import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const column1 = [
    { num: 195, bg: "bg-[#9c4e1a]" },
    { num: 196, bg: "bg-pink-300" },
    { num: 197, bg: "bg-pink-300" },
    { num: 198, bg: "bg-pink-300" },
    { num: 199, bg: "bg-pink-300" },
    { num: 200, bg: "bg-pink-300" },
    { num: 201, bg: "bg-pink-300" },
    { num: 202, bg: "bg-pink-300" },
];

const column2 = [
    { num: 194, bg: "bg-pink-300" },
    { num: 193, bg: "bg-[#7152BF]" },
    { num: 192, bg: "bg-[#7152BF]" },
    { num: 191, bg: "bg-[#7152BF]" },
    { num: 190, bg: "bg-[#7152BF]" },
    { num: 189, bg: "bg-[#7152BF]" },
];
const soldPlots = [195, 193]

const Topplots5 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <section className='h-fit'>
            <div className="md:left-[33.3%] md:top-[68%] top-[10%] left-[35%] rotate-270 absolute font-bold">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>
            <div className="flex md:pr-10 pr-10 ">
                <div>
                    {column1.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? 'bg-red-500' : bg} 
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

                <div>
                    {column2.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? 'bg-red-500' : bg} 
                                    md:w-13 w-9 h-[16.6%] md:border-1 border-1 border-black 
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

export default Topplots5;
