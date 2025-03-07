import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const soldPlots = [211, 210, 208];
const column1 = [211, 212, 213, 214, 215, 216, 217, 218];
const column2 = [210, 209, 208, 207, 206, 205, 204, 203];

const Topplots4 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };


    return (
        <section className='h-fit'>
            {/* Road Label */}
            <div className="absolute md:left-[24.5%] md:top-[68%] top-[35%] left-[9%]  rotate-270 font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>

            <div className="flex md:pr-10 pr-10">
                <div>
                    {column1.map((num) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div key={num}
                                className={`${isSold ? 'bg-red-500' : 'bg-pink-300'} 
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
                    {column2.map((num) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div key={num}
                                className={`${isSold ? 'bg-red-500' : 'bg-pink-300'} 
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
            </div>
        </section>
    );
};

export default Topplots4;
