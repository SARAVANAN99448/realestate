import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // Firestore functions

const columns11 = [
    [123, 124, 125, 126],
    [122, 121, 120, 119]
];

// ✅ Function to return color based on plot number
const getColors11 = (num) => {
    if ([123, 122].includes(num)) return "bg-[#9c4e1a]";
    if ([124, 125, 126, 121, 120, 119].includes(num)) return "bg-pink-300";
    return "bg-gray-300";
};

const Bottom2 = () => {
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
        <div className="flex relative">
            {columns11.map((column, colIndex) => (
                <div key={colIndex} className={` ${colIndex === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {column.map((num) => {
                        const isSold = soldPlots.includes(num.toString()); // ✅ Convert to string for comparison
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : getColors11(num)} 
                                    md:w-10 w-7 h-10 md:border-1 border-1 border-black 
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

export default Bottom2;
