import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import swarnagiri from "../assets/images/Swarnagiri.png"
import leela from "../assets/images/LeelaaVentures.png"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: "-50px 0px 0px 0px" }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Invisible element to track scrolling */}
      <div ref={observerRef} className="absolute top-10 w-full h-[60px]" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
          }`}
      >
        <div className="">
          <img src={swarnagiri} alt="" className="w-[200px] h-[100px] object-contain"  />
        </div>

        {/* Center - Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <a href="#home" className="font-semibold cursor-pointer hover:underline">Home</a>
          <a href="#overview" className="font-semibold cursor-pointer hover:underline">Overview</a>
          <a href="#amenities" className="font-semibold cursor-pointer hover:underline">Amenities</a>
          <a href="#plots" className="font-semibold cursor-pointer hover:underline">Plots</a>
          <a href="#location" className="font-semibold cursor-pointer hover:underline">Location</a>
          <a href="#contact" className="font-semibold cursor-pointer hover:underline">Contact</a>
        </div>

        {/* Right */}
        <div className="">
          <img src={leela} alt="" className="w-[200px] h-[100px] object-contain" />
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4 space-y-4">
            <a href="#home" className="font-semibold hover:underline cursor-pointer">Home</a>
            <a href="#overview" className="font-semibold hover:underline cursor-pointer">Overview</a>
            <a href="#amenities" className="font-semibold hover:underline cursor-pointer">Amenities</a>
            <a href="#plots" className="font-semibold hover:underline cursor-pointer">Plots</a>
            <a href="#location" className="font-semibold hover:underline cursor-pointer">Location</a>
            <a href="#contact" className="font-semibold hover:underline cursor-pointer">Contact</a>
            {/* Right */}
            <div className="">
              <img src={leela} alt="" className="w-[200px] h-[130px] object-contain" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;