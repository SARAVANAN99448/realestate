import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // ✅ Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // ✅ Firestore functions

const getColors4 = (n) => {
    if (n === 94 || n === 86) return "bg-[#9c4e1a]";
    if (n >= 95 && n <= 100) return "bg-[#7152bf]";
    return "bg-[#e3d91f]";
};

// ✅ Dynamic plot sizes
const plotSizes = {
    94: "md:w-12 w-7 h-15",
    95: "md:w-12 w-7 h-15",
    96: "md:w-12 w-7 h-15",
    97: "md:w-12 w-7 h-15",
    98: "md:w-12 w-7 h-15",
    99: "md:w-12 w-7 h-15",
    100: "md:w-12 w-7 h-20", // Unique height for plot 100
    86: "md:w-10 w-7 h-10",
    85: "md:w-10 w-7 h-10",
    84: "md:w-10 w-7 h-10",
    83: "md:w-10 w-7 h-10",
    82: "md:w-10 w-7 h-10",
    81: "md:w-10 w-7 h-10",
    80: "md:w-10 w-7 h-10",
    79: "md:w-10 w-7 h-10",
    78: "md:w-10 w-7 h-10",
    77: "md:w-10 w-7 h-10",
    76: "md:w-10 w-7 h-10",
};

const firstColumnNumbers4 = [94, 95, 96, 97, 98, 99];
const secondColumnNumbers4 = [86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76];

const Bottom9 = () => {
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
        <div className="flex relative">
            {[firstColumnNumbers4, secondColumnNumbers4].map((col, i) => (
                <div key={i} className={` ${i === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {col.map((n, j) => {
                        const isSold = soldPlots.includes(n.toString());
                        return (
                            <div
                                key={j}
                                className={`${plotSizes[n] || "w-10 h-10"} 
                                    md:border-1 border-1 border-black 
                                    flex justify-center items-center 
                                    ${isSold ? "bg-red-500" : getColors4(n)}
                                    ${isSold ? "cursor-default" : "cursor-pointer"}`}
                                onClick={!isSold ? () => handlePlotClick(n) : undefined}
                            >
                                <p className={`${isSold ? "text-white" : "text-pink-500"} md:text-sm text-[10px]`}>
                                    {n}
                                </p>
                            </div>
                        );
                    })}
                    {i === 0 && (
                        <div
                            className={`relative ${plotSizes[100]} border-2 border-black clip-path 
                                ${soldPlots.includes("100") ? "bg-red-500 cursor-default" : "bg-[#9c4e1a] cursor-pointer"}`}
                            onClick={!soldPlots.includes("100") ? () => handlePlotClick(100) : undefined}
                        >
                            <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                ${soldPlots.includes("100") ? "text-white" : "text-pink-500"} md:text-sm text-[10px]`}>
                                100
                            </span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Bottom9;
