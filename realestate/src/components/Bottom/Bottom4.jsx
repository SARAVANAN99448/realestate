import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // Firestore functions

const columns9 = [
    [93, 92, 91],
    [90, 89, 88, 87]
];

const getColors9 = (num) => {
    if ([93, 91, 90].includes(num)) return "bg-[#9c4e1a]";
    if ([89, 88, 87].includes(num)) return "bg-[#e3d91f]";
    if ([92].includes(num)) return "bg-[#7152bf]";
    return "bg-pink-300";
};

// ✅ Define width and height for each plot dynamically
const plotStyles = {
    93: "md:w-10 w-7 h-14",
    92: "md:w-10 w-7 h-13",
    91: "md:w-10 w-7 h-13",
    90: "md:w-10 w-7 h-10",
    89: "md:w-10 w-7 h-10",
    88: "md:w-10 w-7 h-10",
    87: "md:w-10 w-7 h-10"
};

const Bottom4 = () => {
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
            {columns9.map((column, colIndex) => (
                <div key={colIndex} className={` ${colIndex === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {column.map((num) => {
                        const isSold = soldPlots.includes(num.toString()); // ✅ Convert to string for comparison
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : getColors9(num)} 
                                    ${plotStyles[num]} 
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

export default Bottom4;
