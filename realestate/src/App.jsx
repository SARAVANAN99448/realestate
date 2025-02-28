import React, { useState, useEffect, useRef } from "react";
import "./global.css";
import Mainroad from "./components/Mainroad";
import Topplots1 from "./components/Topplots1";
import Bottom1 from "./components/Bottom1";
import Bottom2 from "./components/Bottom2";
import Bottom3 from "./components/Bottom3";
import Bottom4 from "./components/Bottom4";
import Bottom5 from "./components/Bottom5";
import Bottom6 from "./components/Bottom6";
import Bottom7 from "./components/Bottom7";
import Bottom8 from "./components/Bottom8";
import Bottom9 from "./components/Bottom9";
import Bottom10 from "./components/Bottom10";
import Bottom11 from "./components/Bottom11";
import Bottom12 from "./components/Bottom12";

const App = () => {
    return (<>
        <Topplots1 />
        <section className=" ">
            {/* Main road */}
            <Mainroad />
            <div className="flex justify-center">
                <Bottom1 />
                <Bottom2 />
                <Bottom3 />
                <Bottom4 />
                <Bottom5 />
                <Bottom6 />
                <Bottom7 />
                {/* Road  */}
                <div className="   rotate-270 absolute top-[108.5%] left-[31%] font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                {/* Road  */}
                <div className="   rotate-270 absolute top-[108.5%] left-[38.8%]  font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                {/* Road  */}
                <div className="   rotate-270 absolute top-[108.5%] left-[46%] ml-2 font-bold">
                    <p>12.00 M WIDE ROAD</p>
                </div>
                {/* Road  */}
                <div className="rotate-270 absolute top-[108.5%] left-[54.3%] ml-2 font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                {/* Road  */}
                <div className="   rotate-270 absolute top-[108.5%] left-[62.6%] font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
            </div>
            {/* center road */}
            <div className="text-center font-bold my-5 border-t-2 border-b-2 p-1 ">
                <p>9.00 M WIDE ROAD</p>
            </div>
            <div className=" mt-10  flex justify-center pl-28 ml-1  ">
                {/* park */}
                <div className="">
                    <div className='park2 w-52 h-32 bg-green-500 mt-1 flex items-center mr-10 '>
                        <p className='pl-32 pb-10 text-2xl'>PARK</p>
                    </div>
                </div>
                {/* Road  */}
                <div className="   rotate-270 absolute top-[108.5%] left-[71%] font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                <Bottom8 />
                {/* Road  */}
                <div className="   rotate-270 absolute top-[160%] left-[46.5%] font-bold">
                    <p>12.00 M WIDE ROAD</p>
                </div>
                <Bottom9 />
                {/* Road  */}
                <div className="   rotate-270 absolute top-[160%] left-[55%] font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                <Bottom10 />
                {/* Road  */}
                <div className="   rotate-270 absolute top-[160%] left-[63%] font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                <Bottom11 />
                {/* Road  */}
                <div className="   rotate-270 absolute top-[160%] left-[71%] font-bold">
                    <p>9.00 M WIDE ROAD</p>
                </div>
                <Bottom12 />
            </div>
        </section>
    </>
    );
};
 export default App;
