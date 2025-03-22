import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // ✅ Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // ✅ Firestore functions

const columns7 = [
    [31, 32, 33, 34],
    [30, 29, 28, 27]
];

const getColors7 = (num) => {
    if ([31, 34, 30, 27].includes(num)) return "bg-[#9c4e1a]";
    if ([29, 28].includes(num)) return "bg-[#e3d91f]";
    return "bg-pink-300";
};

const Bottom6 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]); // ✅ Store sold plots from Firestore

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
            {columns7.map((column, colIndex) => (
                <div key={colIndex} className={` ${colIndex === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {column.map((num) => {
                        const isSold = soldPlots.includes(num.toString()); // ✅ Convert to string for comparison
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : getColors7(num)} 
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

export default Bottom6;
