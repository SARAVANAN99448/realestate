import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Topplots3 from "../Top/Topplots3";
import Topplots4 from "../Top/Topplots4";
import Topplots5 from "../Top/Topplots5";
import Topplots6 from "../Top/Topplots6";
import Park from "../Park";
import Hero from "../Hero";
import ClubHouse from "../Clubhouse";

const plots = [
    { id: 158, color: "bg-[#9c4e1a]", column: 1, extraClass: "topplot1", height: "md:h-[25%] h-[24.7%]" },
    { id: 159, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 160, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 161, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 162, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 163, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 164, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 165, color: "bg-[#7152BF]", column: 1, height: "md:h-15 h-14" },
    { id: 166, color: "bg-[#9c4e1a]", column: 1, height: "md:h-15 h-14" },
    { id: 157, color: "bg-[#9c4e1a]", column: 2, height: "md:h-[19.5%] h-[20%]", mt: "md:mt-[120%] mt-11", extraClass: "topplot1" },
    { id: 156, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 155, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 154, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 153, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 152, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 151, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 150, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 149, color: "bg-[#e3d91f]", column: 2, height: "md:h-13 h-12" },
    { id: 148, color: "bg-[#9c4e1a]", column: 2, height: "md:h-13 h-12" },
];

const Topplots1 = () => {
    const navigate = useNavigate();
    const [soldPlots, setSoldPlots] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "soldPlots"), (snapshot) => {
            const sold = snapshot.docs
                .filter((doc) => doc.data().status === "sold")
                .map((doc) => doc.data().plotNumber.toString());
            setSoldPlots(sold);
        });

        return () => unsubscribe();
    }, []);

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber.toString())) return;
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <>
            <Hero />
            <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#fb9906] mb-2 md:pt-20 pt-10" id="plots">
                Plots for booking
            </h1>
            <hr className="w-16 border-green-700 mx-auto mb-4" />
            <h1 className="md:hidden text-center text-[15px] text-black font-semibold">
                Scroll right to view all the plots
            </h1>
            <section className="flex justify-center md:pl-10 h-fit mt-20 pl-5 overflow-x-auto relative">

                <div className="md:left-[49.9%] left-[65%] md:top-[67%] top-[68.8%] rotate-270 absolute font-bold">
                    <p className="md:text-[16px] text-[12px]">WIDE ROAD</p>
                </div>

                <div>
                    <ClubHouse />
                    <div className="flex">
                        <Topplots3 />
                        <Topplots4 />
                        <Topplots5 />
                    </div>
                    <Topplots6 />
                </div>

                <div className="flex md:ml-1 md:mt-32 mt-28 md:pt-8 pt-6 relative">
                    {/* Line */}

                    <div className="absolute 
                w-96 
                h-8
                bg-black  
                md:rotate-[55deg] 
                rotate-[60deg] 
                md:right-[-178%] 
                right-[-219%] 
                md:top-[-3%] 
                top-[-15%] 
                flex 
                items-center 
                justify-center 
                rounded-md">
                        <p className="text-white hidden  font-extrabold text-sm md:text-base tracking-wide bg-black px-2">
                            MAIN ROAD
                        </p>
                    </div>

                    {[1, 2].map((col) => (
                        <div key={col}>
                            {plots
                                .filter((plot) => plot.column === col)
                                .map((plot) => {
                                    const isSold = soldPlots.includes(plot.id.toString());
                                    return (
                                        <div
                                            key={plot.id}
                                            className={`md:w-10 w-7 md:border-1 border-1 border-black flex justify-center items-center 
                                                ${plot.height} ${plot.mt || ""} 
                                                ${isSold ? "bg-red-500 cursor-default" : `${plot.color} cursor-pointer`} 
                                                ${plot.extraClass || ""}`}
                                            onClick={!isSold ? () => handlePlotClick(plot.id) : undefined}
                                        >
                                            <p className={`${isSold ? "text-white" : "text-pink-500"} md:text-sm text-[10px]`}>
                                                {plot.id}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>

                    ))}
                </div>

                <Park />
            </section>
        </>
    );
};

export default Topplots1;