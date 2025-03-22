import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // ✅ Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // ✅ Firestore functions

const firstColumnNumbers2 = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const secondColumnNumbers2 = [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16];

const getColors = (num) => {
    if (num === 35 || num === 26) return "bg-[#9c4e1a]";
    if (num >= 36) return "bg-pink-300";
    return "bg-[#e3d91f]";
};

const Bottom11 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]);

    // ✅ Fetch sold plots from Firestore in real-time
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
            {[firstColumnNumbers2, secondColumnNumbers2].map((numbers, colIndex) => (
                <div key={colIndex} className={` ${colIndex === 1 ? "md:pr-7 pr-5" : ""}`}>
                    {numbers.map((num, index) => {
                        const isSold = soldPlots.includes(num.toString());
                        return (
                            <div
                                key={index}
                                className={`md:w-10 w-7 h-10 md:border-1 border-1 border-black 
                                    flex justify-center items-center 
                                    ${isSold ? "bg-red-500" : getColors(num)}
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

export default Bottom11;
