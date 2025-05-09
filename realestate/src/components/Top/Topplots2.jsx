import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase'; // Ensure correct Firebase import
import { collection, getDocs } from 'firebase/firestore';

const row1 = [
    { number: 142, className: "bg-pink-300 md:w-11 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 143, className: "bg-pink-300 md:w-11 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 144, className: "bg-pink-300 md:w-11 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 145, className: "bg-pink-300 md:w-11 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 146, className: "bg-pink-300 md:w-11 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 147, className: "bg-[#9c4e1a] md:w-[30.5%] w-[38%] md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center topplots2 cursor-pointer" },
];

const row2 = [
    { number: 141, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 140, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 139, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 138, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 137, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 136, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 135, className: "bg-[#9c4e1a] md:w-10 w-7 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 134, className: "bg-[#9c4e1a] md:w-16 w-14 md:h-14 h-10 md:border-1 border-1 border-black flex justify-center items-center topplots2 cursor-pointer" },
];

const Topplots2 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]);

    // Fetch sold plots from Firebase
    useEffect(() => {
        const fetchSoldPlots = async () => {
            const querySnapshot = await getDocs(collection(db, "soldPlots"));
            const soldPlotNumbers = querySnapshot.docs.map((doc) => doc.data().plotNumber);
            setSoldPlots(soldPlotNumbers);
        };

        fetchSoldPlots();
    }, []);

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <section className="md:ml-7 ml-5 md:pt-7 pt-7 md:mt-0 mt-1 relative">
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
            {/* Line */}

            {/* Diagonal MAIN ROAD */}
            <div className="absolute md:w-60 w-44 h-8 bg-black border-t-[6px] border-dashed border-black md:rotate-[57deg] rotate-[61deg] md:right-[-27%] right-[-40%] top-[10%] md:top-[1%] flex items-center justify-center rounded-md">

                {/* Centered Text */}
                <p className="text-white hidden font-extrabold md:text-base text-[16px] tracking-wide bg-black px-4">
                    MAIN ROAD
                </p>
                <p className="text-white absolute top-[-2%] font-extrabold md:text-base text-[16px] tracking-wide bg-black px-4">
                chikkamagaluru →
                </p>

            </div>
{/* 
            <h1 className='absolute rotate-[60deg] md:top-[0%] top-[-115%] md:left-[50%] left-[30%] font-bold  right-[-28%]'>Main road</h1> */}

        </section>
    );
};

export default Topplots2;
