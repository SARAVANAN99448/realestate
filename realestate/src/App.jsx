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
import EnquireNow from "./components/Enquire";
import DownloadButton from "./components/Download";
import RentalIncomeSteps from "./components/RentalIncomeSteps";
import AboutLeelaVentures from "./components/AboutLeelaVentures";
import GalleryCarousel from "./components/GalleryCarousel";
import Parkbottom from "./components/Parkbottom";
import BottomContact from "./components/BottomContact";
import Legend from "./components/Legend";

const App = () => {
    return (<>
        <section className="relative  " >

            <Topplots1 />
            <section className="overflow-x-auto md:overflow-x-visible  ">
                {/* Main road */}
                <Mainroad />
                <div className="flex justify-center md:ml-0 ml-40 md:pl-0 pl-7 relative ">
                    <Bottom1 />
                    <Bottom2 />
                    <Bottom3 />
                    <Bottom4 />
                    <Bottom5 />
                    <Bottom6 />
                    <Bottom7 />
                </div>
                {/* center road */}
                <div className="relative my-2 text-center mx-auto w-full max-w-5xl">
                    {/* Road Background */}
                    <div className="relative md:w-full w-[550px] h-10 bg-black rounded-md flex items-center justify-center">
                        {/* Center White Dashed Line */}
                        <div className="absolute top-1/2 left-0 w-full border-t-[5px] border-dashed border-white transform -translate-y-1/2"></div>

                        {/* MAIN ROAD Text */}
                        <p className="relative text-white font-extrabold text-[16px] md:text-xl tracking-wide bg-black px-4">
                        WIDE ROAD
                        </p>
                    </div>
                </div>
                <div className="   flex justify-center md:pl-28 md:ml-1  pl-48 ml-12 ">
                    {/* park */}
                    <div className="">
                        <div className='park2 md:w-52 w-32 h-32 bg-green-500 mt-1 flex items-center mr-6 '>
                            <p className='md:pl-28 md:pb-10  md:text-xl font-bold text-xl pl-18 pb-10 font-stretch-semi-expanded'>PARK</p>
                        </div>
                    </div>
                    <Bottom8 />
                    <Bottom9 />
                    <Bottom10 />
                    <Bottom11 />
                    <Bottom12 />
                </div>
                <div className=" ">
                    <Parkbottom/>
                </div>
            </section>
        </section>
        <EnquireNow />
        <DownloadButton />
        <Legend/>
        <RentalIncomeSteps/>
        <GalleryCarousel/>
        <About />
        <AboutLeelaVentures/>
        <ContactSection />
        <BottomContact/>
        
    </>
    );
};
export default App;
