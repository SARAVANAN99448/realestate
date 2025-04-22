import Navbar from "./Navbar";
import Overview from "./Overview";
import Amenities from "./Amenities";
import LocationAdvantages from "./LocationAdvantages";
import Chikkamagaluru from "./Chikkamagaluru";
import ExperienceLife from "./ExperienceLife";
import InvestSwarnagiri from "./InvestSwarnagiri";
import TechnicalSpecifications from "./TechnicalSpecifications";
import vedio from "../assets/images/Swarnagiri.mp4";

export default function Hero() {
    return (
        <>
            <div id="hero-section" className="relative w-full h-screen overflow-hidden">
                {/* Responsive Background Video */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={vedio} type="video/mp4" />
                    </video>
                </div>

                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Navbar Floating on Video */}
                <div className="absolute top-0 left-0 w-full z-10">
                    <Navbar />
                </div>

                {/* Hero Text with Marquee Effect */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 md:px-28 overflow-hidden">
                <h1 className="text-3xl md:text-5xl font-bold animate-slide-in">
  Legacy in the Hills
</h1>
<p className="mt-4 text-sm md:text-lg animate-slide-in" style={{ animationDelay: '0.5s' }}>
  Premium plots nestled in Chikkamagaluru's foothills <br /> with world-class amenities and investment potential.
</p>

                </div>
            </div>

            <Overview />
            <Chikkamagaluru />
            <ExperienceLife />
            <InvestSwarnagiri />
            <Amenities />
            <TechnicalSpecifications />
            <LocationAdvantages />
        </>
    );
}
