import Navbar from "./Navbar";
import Overview from "./Overview";
import Amenities from "./Amenities";
import LocationAdvantages from "./LocationAdvantages";
import ImageCom from "./ImageCom";

export default function Hero() {
    // const videoUrl =
    //     "https://www.youtube.com/embed/IuAib-ZAl2Y?autoplay=1&loop=1&mute=1&playlist=IuAib-ZAl2Y&playsinline=1&modestbranding=1&controls=0&showinfo=0&rel=0&disablekb=1&fs=0";

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video using YouTube iframe */}
                <div className="absolute inset-0 w-full h-full">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src=""
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black mix-blend-multiply opacity-50"></div>

                {/* Navbar Floating on Video */}
                <div className="absolute top-0 left-0 w-full z-10">
                    <Navbar />
                </div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 md:px-20">
                    <h1 className="text-3xl md:text-5xl font-bold hero-title">
                        India’s #1 Hill Station <br />
                        <span className="block mt-2 md:mt-4">Real Estate Platform</span>
                    </h1>

                    <p className="mt-4 text-sm md:text-lg">
                        Handpicked properties, detailed insights, unmatched investment <br /> opportunities – everything at your fingertips.
                    </p>
                </div>
            </div>

            <Overview />
             <ImageCom/>
            <Amenities />
            <LocationAdvantages />
        </>
    );
}
