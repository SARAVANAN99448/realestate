import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";

const column1 = [
    { num: 195, bg: "bg-[#9c4e1a]" },
    { num: 196, bg: "bg-pink-300" },
    { num: 197, bg: "bg-pink-300" },
    { num: 198, bg: "bg-pink-300" },
    { num: 199, bg: "bg-pink-300" },
    { num: 200, bg: "bg-pink-300" },
    { num: 201, bg: "bg-pink-300" },
    { num: 202, bg: "bg-pink-300" },
];

const column2 = [
    { num: 194, bg: "bg-pink-300" },
    { num: 193, bg: "bg-[#7152BF]" },
    { num: 192, bg: "bg-[#7152BF]" },
    { num: 191, bg: "bg-[#7152BF]" },
    { num: 190, bg: "bg-[#7152BF]" },
    { num: 189, bg: "bg-[#7152BF]" },
];

const Topplots5 = () => {
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
        <section className="h-fit">
            <div className="flex md:pr-5 pr-5">
                <div>
                    {column1.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : bg} 
                                    md:w-12 w-8 h-10 border border-black 
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

                <div>
                    {column2.map(({ num, bg }) => {
                        const isSold = soldPlots.includes(num);
                        return (
                            <div
                                key={num}
                                className={`${isSold ? "bg-red-500" : bg} 
                                    md:w-13 w-9 h-[16.6%] border border-black 
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

export default Topplots5;
