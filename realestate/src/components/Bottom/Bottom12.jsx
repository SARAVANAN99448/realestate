import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bottom12 = () => {
    const s1 = Array.from({ length: 11 }, (_, i) => i + 5);
    const navigate = useNavigate();
    const soldPlots = [5,7,9];
    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };
    return (
        <div className="mt-1">
        {s1.map((num) => {
            const isSold = soldPlots.includes(num);
            return (
                <div
                    key={num}
                    className={`${isSold ? 'bg-red-500' : 'bg-[#9c4e1a]'} 
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
    );
};

export default Bottom12;
