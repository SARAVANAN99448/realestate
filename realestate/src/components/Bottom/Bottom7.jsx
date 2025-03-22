import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // ✅ Import Firebase config
import { collection, onSnapshot } from "firebase/firestore"; // ✅ Firestore functions

const s6 = [1, 2, 3, 4];

const Bottom7 = () => {
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
        <div className="pr-3">
            {s6.map((num) => {
                const isSold = soldPlots.includes(num.toString()); // ✅ Convert to string for comparison
                return (
                    <div
                        key={num}
                        className={`${isSold ? "bg-red-500" : "bg-[#9c4e1a]"} 
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
    );
};

export default Bottom7;
