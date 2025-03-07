import React from 'react';
import { useNavigate } from 'react-router-dom';

const row1 = [
    { number: 142, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 143, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 144, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 145, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 146, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 147, className: "bg-[#9c4e1a] w-15 h-10 md:border-1 border-1 border-black flex justify-center items-center topplots2 cursor-pointer" },
];

const row2 = [
    { number: 141, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 140, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 139, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 138, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 137, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 136, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 135, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 134, className: "bg-[#9c4e1a] md:w-20 w-10 h-10 md:border-1 border-1 border-black flex justify-center items-center topplots2 cursor-pointer" },
];

const soldPlots = [142, 143, 136,147]
const Topplots2 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return; // Prevent navigation for sold plots
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <section className="md:ml-15 ml-10 md:pt-20 pt-12">
        <div className="flex">
            {row1.map((box) => (
                <div
                    key={box.number}
                    className={`${box.className.replace(
                        'cursor-pointer', 
                        soldPlots.includes(box.number) ? 'cursor-default' : 'cursor-pointer'
                    )} ${soldPlots.includes(box.number) ? 'bg-red-500' : ''}`}
                    onClick={!soldPlots.includes(box.number) ? () => handlePlotClick(box.number) : undefined}
                >
                    <p className={`${soldPlots.includes(box.number) ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                        {box.number}
                    </p>
                </div>
            ))}
        </div>
        <div className="flex">
            {row2.map((box) => (
                <div
                    key={box.number}
                    className={`${box.className.replace(
                        'cursor-pointer',
                        soldPlots.includes(box.number) ? 'cursor-default' : 'cursor-pointer'
                    )} ${soldPlots.includes(box.number) ? 'bg-red-500' : ''}`}
                    onClick={!soldPlots.includes(box.number) ? () => handlePlotClick(box.number) : undefined}
                >
                    <p className={`${soldPlots.includes(box.number) ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                        {box.number}
                    </p>
                </div>
            ))}
        </div>
    </section>
    );
};

export default Topplots2;
