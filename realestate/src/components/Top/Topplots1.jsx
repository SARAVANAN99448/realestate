import { useNavigate } from "react-router-dom";
import Topplots3 from "../Top/Topplots3";
import Topplots4 from "../Top/Topplots4";
import Topplots5 from "../Top/Topplots5";
import Topplots6 from "../Top/Topplots6";
import Park from "../Park";
import Hero from "../Hero"
const plots = [
    { id: 158, color: "bg-[#9c4e1a]", column: 1, extraClass: "topplot1", height: "md:h-[17.4%] h-[20%]" },
    { id: 159, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 160, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 161, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 162, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 163, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 164, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 165, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-12" },
    { id: 166, color: "bg-[#9c4e1a]", column: 1, height: "md:h-13 h-12" },
    { id: 157, color: "bg-[#9c4e1a]", column: 2, height: "md:h-20 h-24", mt: "md:mt-7 mt-6", extraClass: "topplot1" },
    { id: 156, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 155, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 154, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 153, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 152, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 151, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 150, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 149, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-10" },
    { id: 148, color: "bg-[#9c4e1a]", column: 2, height: "md:h-11 h-10" },
];

const soldPlots = []

const Topplots1 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return; // Prevent navigation for sold plots
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <><Hero />
            <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#fb9906] mb-2 md:mt-20 mt-10" id="plots">Plots for booking</h1>
            <hr className="w-16 border-green-700 mx-auto mb-4" />
            <h1 className="md:hidden text-center text-[15px] text-black font-semibold">Scroll right to view all the plots</h1>
            <section className="flex justify-center md:pl-10 h-fit mt-20 pl-5 overflow-x-auto relative">
                <div className="md:left-[46%] left-[59%] md:top-[34%] top-48 rotate-270 absolute font-bold">
                    <p className="md:text-[16px] text-[12px]">12.00 M WIDE ROAD</p>
                </div>
                <div >
                    <div className="flex">
                        <Topplots3 />
                        <Topplots4 />
                        <Topplots5 />
                    </div>
                    <Topplots6 />
                </div>


                <div className="flex md:ml-10">
                    {[1, 2].map((col) => (
                        <div key={col}>
                            {plots
                                .filter((plot) => plot.column === col)
                                .map((plot) => {
                                    const isSold = soldPlots.includes(plot.id);
                                    return (
                                         <div
                                            key={plot.id}
                                            className={`md:w-10 w-7 md:border-1 border-1 border-black flex justify-center items-center 
                                                ${plot.height} ${plot.mt || ''} 
                                                ${isSold ? 'bg-red-500 cursor-default' : `${plot.color} cursor-pointer`} 
                                                ${plot.extraClass || ''}`}
                                            onClick={!isSold ? () => handlePlotClick(plot.id) : undefined}
                                        >
                                            <p className={`${isSold ? 'text-white' : 'text-pink-500'} md:text-sm text-[10px]`}>
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
