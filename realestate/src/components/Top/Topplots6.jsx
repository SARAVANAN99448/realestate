import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";

const row1 = [
    { num: 178, bg: "bg-pink-300" },
    { num: 179, bg: "bg-pink-300" },
    { num: 180, bg: "bg-pink-300" },
    { num: 181, bg: "bg-pink-300" },
    { num: 182, bg: "bg-pink-300" },
    { num: 183, bg: "bg-pink-300" },
    { num: 184, bg: "bg-pink-300" },
    { num: 185, bg: "bg-pink-300" },
    { num: 186, bg: "bg-pink-300" },
    { num: 187, bg: "bg-pink-300" },
    { num: 188, bg: "bg-[#9c4e1a]" },
];

const row2 = [
    { num: 177, bg: "bg-[#9c4e1a]" },
    { num: 176, bg: "bg-[#9c4e1a]" },
    { num: 175, bg: "bg-[#9c4e1a]" },
    { num: 174, bg: "bg-[#9c4e1a]" },
    { num: 173, bg: "bg-[#9c4e1a]" },
    { num: 172, bg: "bg-[#9c4e1a]" },
    { num: 171, bg: "bg-[#9c4e1a]" },
    { num: 170, bg: "bg-[#9c4e1a]" },
    { num: 169, bg: "bg-[#9c4e1a]" },
    { num: 168, bg: "bg-[#9c4e1a]" },
    { num: 167, bg: "bg-[#9c4e1a]" },
];

const Topplots6 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]);

    // Fetch sold plots from Firebase
    useEffect(() => {
        const fetchSoldPlots = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "soldPlots"));
                const soldPlotNumbers = querySnapshot.docs.map((doc) => doc.data().plotNumber);
                setSoldPlots(soldPlotNumbers);
            } catch (error) {
                console.error("Error fetching sold plots:", error);
            }
        };

        fetchSoldPlots();
    }, []);

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <section className="md:pl-32 pl-60 md:pt-10 pt-7 relative mt-0">
            <div className="md:right-[32%] md:bottom-[77%] bottom-[78%] right-[20%] absolute font-bold">
                <p className="md:text-[16px] text-[12px]">30 ft ROAD</p>
            </div>

            <div>
                <div className="flex">
                    {row1.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : bg} 
                                    md:w-8 w-5.5 md:h-13 h-10 border border-black 
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

                <div className="flex">
                    {row2.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : bg} 
                                    md:w-8 w-5.5 md:h-13 h-10 border border-black 
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
            </div>
        </section>
    );
};

export default Topplots6;
