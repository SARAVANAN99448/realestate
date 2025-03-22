import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // ✅ Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // ✅ Firestore functions

const columns5 = [
    { numbers: [114, 115, 116, 117], last: 118, bg: ["bg-[#9c4e1a]", "bg-[#e3d91f]", "bg-[#e3d91f]", "bg-[#e3d91f]"] },
    { numbers: [106, 105, 104, 103, 102], last: 101, bg: ["bg-[#9c4e1a]", "bg-[#7152bf]", "bg-[#7152bf]", "bg-[#7152bf]", "bg-[#7152bf]"] },
];

const Bottom8 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]);

    // ✅ Fetch sold plots from Firestore
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "soldPlots"), (snapshot) => {
            const sold = snapshot.docs
                .filter((doc) => doc.data().status === "sold")
                .map((doc) => doc.data().plotNumber.toString()); // ✅ Convert to string
            setSoldPlots(sold);
        });

        return () => unsubscribe(); // ✅ Cleanup Firestore listener
    }, []);

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber.toString())) return; // ✅ Convert to string for comparison
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <div className="flex">
            {columns5.map((col, index) => (
                <div key={index} className={` ${index === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {col.numbers.map((num, i) => {
                        const isSold = soldPlots.includes(num.toString()); // ✅ Convert to string for comparison
                        return (
                            <div
                                key={i}
                                className={`md:w-10 w-7 h-15 md:border-1 border-1 border-black flex justify-center items-center 
                                ${isSold ? "bg-red-500" : col.bg[i]} 
                                ${isSold ? "cursor-default" : "cursor-pointer"}`}
                                onClick={!isSold ? () => handlePlotClick(num) : undefined}
                            >
                                <p className={`${isSold ? "text-white" : "text-pink-500"} md:text-sm text-[10px]`}>
                                    {num}
                                </p>
                            </div>
                        );
                    })}
                    <div
                        className={`relative md:w-10 w-7 h-20 border-2 border-black clip-path 
                        ${soldPlots.includes(col.last.toString()) ? "bg-red-500 cursor-default" : "bg-[#9c4e1a] cursor-pointer"}`}
                        onClick={!soldPlots.includes(col.last.toString()) ? () => handlePlotClick(col.last) : undefined}
                    >
                        <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        ${soldPlots.includes(col.last.toString()) ? "text-white" : "text-pink-500"} md:text-sm text-[10px]`}>
                            {col.last}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bottom8;
