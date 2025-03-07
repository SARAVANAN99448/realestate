import Navbar from "./Navbar"
import Overview from "./Overview"
import Amenities from "./Amenities"
import LocationAdvantages from "./LocationAdvantages"
export default function Hero() {
    const vedio = "https://drive.google.com/uc?export=download&id=1zqpXypdOBx6k85em1yofBRrvWp33ncS_";

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={vedio} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black mix-blend-multiply opacity-50"></div>

                {/* Navbar Floating on Video */}
                <Navbar />

                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-8 md:px-20">
                    <h1 className="text-3xl md:text-5xl font-bold hero-title">
                        India’s #1 Hill Station <br />
                        <span className="block mt-2 md:mt-4">Real Estate Platform</span>
                    </h1>

                    <p className="mt-4 text-sm md:text-lg">
                        Handpicked properties, detailed insights, unmatched investment <br /> opportunities – 
                        everything at your fingertips.
                    </p>

                </div>
            </div>
            <Overview />
            <Amenities />
            <LocationAdvantages />
        </>
    );
}
