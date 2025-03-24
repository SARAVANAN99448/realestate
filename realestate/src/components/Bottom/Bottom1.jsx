import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import Firebase
import { collection, onSnapshot } from "firebase/firestore"; // Firestore functions

const firstColumn = [
    { number: 132, className: "bg-[#9c4e1a] md:w-28 w-10 md:h-24 h-20 md:border-1 border-1 border-black relative flex justify-center items-center next-path cursor-pointer" },
    { number: 131, className: "bg-[#9c4e1a] md:w-15 w-10 md:h-24 h-20 md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
];

const secondColumn = [
    { number: 130, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 129, className: "bg-pink-300 md:w-10 w-7 h-10 md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 128, className: "bg-pink-300 md:w-10 w-7 h-10 md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 127, className: "bg-pink-300 md:w-10 w-7 h-10 md:border-1 border-1 border-black relative flex justify-center items-center cursor-pointer" },
];

const Bottom1 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "soldPlots"), (snapshot) => {
            const sold = snapshot.docs.map((doc) => {
                console.log("Fetched Plot:", doc.data()); // ✅ Debugging
                return doc.data().plotNumber;
            });

            setSoldPlots(sold);
        });

        return () => unsubscribe(); // Cleanup function
    }, []);

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <div className="flex relative">
             {/* Road  */}
             <div className="   rotate-270 absolute min-w-full md:top-[-10%] top-10 md:left-[44.5%] left-14 font-bold">
                <p className="md:text-[16px] text-[12px] w-full">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className="   rotate-270 min-w-full absolute md:top-[-10%] top-10 md:left-[89.5%] left-[102%]   font-bold">
                <p className="md:text-[16px] w-full text-[12px]">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className="   rotate-270 absolute min-w-full md:top-[-10%] top-10 md:left-[131%] left-[162%]  md:ml-2 font-bold">
                <p className="md:text-[16px] text-[12px] w-full">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className="rotate-270 min-w-full absolute md:top-[-10%] top-10 md:left-[177%] left-[221%]   md:ml-2  font-bold">
                <p className="md:text-[16px] text-[12px] w-full">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" min-w-full  rotate-270 absolute  md:top-[-10%] top-10 md:left-[225%] left-[281%] font-bold">
                <p className="md:text-[16px] w-full text-[12px]">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" min-w-full  rotate-270 absolute  md:top-[-10%] top-10 md:left-[270%] left-[340%] font-bold">
                <p className="md:text-[16px] w-full text-[12px]">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className="rotate-270 absolute min-w-full md:top-[200%] top-[240%] md:left-[129.5%]  left-[163%]  md:ml-2 font-bold">
                <p className="md:text-[16px] text-[12px] w-full">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className="  rotate-270 min-w-full absolute md:top-[200%] top-[240%] md:left-[182%] left-[221%] font-bold">
                <p className="md:text-[16px] text-[12px]">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" rotate-270 min-w-full absolute md:top-[200%] top-[240%] md:left-[227%] left-[280%] font-bold">
                <p className="md:text-[16px] text-[12px]">WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className="  rotate-270 min-w-full absolute md:top-[200%] top-[240%] md:left-[272%] left-[340%] font-bold">
                <p className="md:text-[16px] text-[12px]">WIDE ROAD</p>
            </div>

            {/* ✅ First Column */}
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
                    md:w-full w-20 md:h-16 h-20  md:border-1 border-1 border-black relative 
                    flex justify-center items-center next-path 
                    ${soldPlots.includes(133) ? 'cursor-default' : 'cursor-pointer'}`}
                    onClick={!soldPlots.includes(133) ? () => handlePlotClick(133) : undefined}
                >
                    <p className={`relative ${soldPlots.includes(133) ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
                        133
                    </p>
                </div>
            </div>

            {/* ✅ Second Column */}
            <div className="md:pr-7 pr-5">
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
