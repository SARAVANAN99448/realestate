import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // Firestore functions

const columns10 = [
    [110, 111, 112, 113],
    [109, 108, 107]
];

// ✅ Define width & height in Tailwind class format
const plotSizes = {
    110: "md:w-10 w-7 h-10",
    111: "md:w-10 w-7 h-10",
    112: "md:w-10 w-7 h-10",
    113: "md:w-10 w-7 h-10",
    109: "md:w-10 w-7 h-14",
    108: "md:w-10 w-7 h-14",
    107: "md:w-10 w-7 h-12"
};

// ✅ Function to return color based on plot number
const getColors10 = (num) => {
    if ([110, 109, 107].includes(num)) return "bg-[#9c4e1a]";
    if ([111, 112, 113].includes(num)) return "bg-[#e3d91f]";
    if ([108].includes(num)) return "bg-[#7152bf]";
    return "bg-pink-300";
};

const Bottom3 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]); // ✅ Store sold plots from Firestore

    // ✅ Fetch sold plots from Firestore on component mount
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "soldPlots"), (snapshot) => {
            const sold = snapshot.docs
                .filter((doc) => doc.data().status === "sold")
                .map((doc) => doc.data().plotNumber.toString()); // ✅ Convert to string if needed
            setSoldPlots(sold);
        });

        return () => unsubscribe(); // Cleanup Firestore listener
    }, []);

    // ✅ Handle plot click
    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber.toString())) return; // ✅ Convert to string for comparison
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <div className="flex">
            {columns10.map((column, colIndex) => (
                <div key={colIndex} className={` ${colIndex === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {column.map((num) => {
                        const isSold = soldPlots.includes(num.toString()); // ✅ Convert to string for comparison
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : getColors10(num)} 
                                    ${plotSizes[num] || "w-10 h-10"} 
                                    md:border-1 border-1 border-black 
                                    flex justify-center items-center 
                                    ${isSold ? "cursor-default" : "cursor-pointer"}`}
                                onClick={!isSold ? () => handlePlotClick(num) : undefined}
                            >
                                <p className={`${isSold ? "text-white" : "text-pink-500"} md:text-sm text-[10px]`}>
                                    {num}
                                </p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Bottom3;
