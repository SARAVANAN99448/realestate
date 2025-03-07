import { useNavigate } from "react-router-dom";
import Topplots3 from "../Top/Topplots3";
import Topplots4 from "../Top/Topplots4";
import Topplots5 from "../Top/Topplots5";
import Topplots6 from "../Top/Topplots6";
import Park from "../Park";
import Hero from "../Hero"
const plots = [
    { id: 158, color: "bg-[#9c4e1a]", column: 1, extraClass: "topplot1", height: "md:h-[17.4%] h-[18.2%]" },
    { id: 159, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 160, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 161, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 162, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 163, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 164, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 165, color: "bg-[#7152BF]", column: 1, height: "md:h-13 h-11" },
    { id: 166, color: "bg-[#9c4e1a]", column: 1, height: "md:h-13 h-11" },
    { id: 157, color: "bg-[#9c4e1a]", column: 2, height: "h-20", mt: "md:mt-7 mt-5.5", extraClass: "topplot1" },
    { id: 156, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 155, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 154, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 153, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 152, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 151, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 150, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 149, color: "bg-[#e3d91f]", column: 2, height: "md:h-11 h-9.5" },
    { id: 148, color: "bg-[#9c4e1a]", column: 2, height: "md:h-11 h-6" },
];

const soldPlots = [158, 159, 161]

const Topplots1 = () => {
    const navigate = useNavigate();

    const handlePlotClick = (plotNumber) => {
        if (soldPlots.includes(plotNumber)) return; // Prevent navigation for sold plots
        navigate("/contact", { state: { plotNumber } });
    };

    return (
        <><Hero />
            <h1 className="text-2xl md:text-3xl font-bold text-center text-[#fb9906] mb-2 mt-10">Plots for booking</h1>
            <hr className="w-16 border-green-700 mx-auto mb-4" />
            <section className="flex justify-center md:pl-10 h-fit mt-20 pl-5">
                <div className="md:left-[44.5%] left-[59%] md:top-[68%] top-[35%] rotate-270 absolute font-bold">
                    <p className="md:text-[16px] text-[12px]">12.00 M WIDE ROAD</p>
                </div>
                <Topplots3 />
                <Topplots4 />
                <Topplots5 />
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

            <Topplots6 />
        </>
    );
};

export default Topplots1;
