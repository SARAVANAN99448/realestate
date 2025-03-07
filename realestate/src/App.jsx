import React, { useState, useEffect, useRef } from "react";
import "./global.css";
import Mainroad from "./components/Mainroad";
import Topplots1 from "./components/Top/Topplots1";
import Bottom1 from "./components/Bottom/Bottom1";
import Bottom2 from "./components/Bottom/Bottom2";
import Bottom3 from "./components/Bottom/Bottom3";
import Bottom4 from "./components/Bottom/Bottom4";
import Bottom5 from "./components/Bottom/Bottom5";
import Bottom6 from "./components/Bottom/Bottom6";
import Bottom7 from "./components/Bottom/Bottom7";
import Bottom8 from "./components/Bottom/Bottom8";
import Bottom9 from "./components/Bottom/Bottom9";
import Bottom10 from "./components/Bottom/Bottom10";
import Bottom11 from "./components/Bottom/Bottom11";
import Bottom12 from "./components/Bottom/Bottom12";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Disclaimer from "./components/Disclaimer";
import EnquireNow from "./components/Enquire";
import DownloadButton from "./components/Download";

const App = () => {
    return (<>
        <section className="relative">
            
            <Topplots1 />
            <section className=" ">
                {/* Main road */}
                <Mainroad />
                <div className="flex justify-center md:ml-0 ml-68 md:pl-0 pl-7 relative">
                    <Bottom1 />
                    <Bottom2 />
                    <Bottom3 />
                    <Bottom4 />
                    <Bottom5 />
                    <Bottom6 />
                    <Bottom7 />
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[45%] top-[100%] md:left-[28.5%] left-[23.5%] font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[45%] top-[100%] md:left-[37.3%] left-[47.5%]  font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[45%] top-[100%] md:left-[45.5%] left-[71%] md:ml-2 font-bold">
                        <p className="md:text-[16px] text-[12px]">12.00 M WIDE ROAD</p>
                    </div>
                    {/* Road  */}
                    <div className="rotate-270 absolute md:top-[45%] top-[100%] md:right-[34%] right-[-23%]  md:ml-2  font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[45%] top-[100%] md:right-[25%] right-[-47%] font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                </div>
                {/* center road */}
                <div className="text-center font-bold my-5 border-t-2 border-b-2 md:p-1 p-3 md:w-full w-[1000px] ">
                    <p className='text-start pl-28 ml-2 md:text-center'>9.00 M WIDE ROAD</p>
                </div>
                <div className=" mt-10  flex justify-center md:pl-28 md:ml-1  pl-72 ml-16 ">
                    {/* park */}
                    <div className="">
                        <div className='park2 md:w-52 w-36 h-32 bg-green-500 mt-1 flex items-center mr-10 '>
                            <p className='md:pl-32 md:pb-10  md:text-2xl text-xl pl-18 pb-10'>PARK</p>
                        </div>
                    </div>
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[83.7%] top-[100%] md:right-[16%] right-[-72%] font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    <Bottom8 />
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[93%] top-[155%] md:left-[45.4%] left-[70%] font-bold">
                        <p className="md:text-[16px] text-[12px]"> 12.00 M WIDE ROAD</p>
                    </div>
                    <Bottom9 />
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[93%] top-[155%] right-[-24%] md:right-[33.7%] font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    <Bottom10 />
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[93%] top-[155%] right-[-48%] md:right-[24.8%] font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    <Bottom11 />
                    {/* Road  */}
                    <div className="   rotate-270 absolute md:top-[93%] top-[155%] right-[-73%] md:right-[16%] font-bold">
                        <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
                    </div>
                    <Bottom12 />
                </div>
            </section>
        </section>
        <EnquireNow/>
        <DownloadButton/>
        <About />
        <ContactSection />
        <Disclaimer/>
    </>
    );
};
export default App;
