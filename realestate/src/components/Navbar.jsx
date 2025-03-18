import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import swarnagiri from "../assets/images/Swarnagiri.png";
import leela from "../assets/images/LeelaaVentures.png";

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
      <div ref={observerRef} className="absolute top-10 w-full h-[10px]" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
        }`}
      >
        <div>
          <img src={swarnagiri} alt="" className="md:w-[250px] md:h-[150px] w-[100px] h-[100px] object-contain" />
        </div>

        {/* Center - Desktop Menu (No Change) */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <a href="#home" className="font-semibold cursor-pointer hover:underline">Home</a>
          <a href="#overview" className="font-semibold cursor-pointer hover:underline">Overview</a>
          <a href="#amenities" className="font-semibold cursor-pointer hover:underline">Amenities</a>
          <a href="#location" className="font-semibold cursor-pointer hover:underline">Location</a>
          <a href="#plots" className="font-semibold cursor-pointer hover:underline">Plots</a>
          <a href="#contact" className="font-semibold cursor-pointer hover:underline">Contact</a>
        </div>

        <div>
          <img src={leela} alt="" className="md:w-[200px] md:h-[100px] w-[60px] h-[70px] object-contain" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>

        {/* Mobile Menu (Top-Aligned, Compact & Blurred Background) */}
        <div
          className={`fixed inset-0  bg-opacity-50 backdrop-blur-md z-50 flex justify-end transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          onClick={() => setIsOpen(false)} // Close on outside click
        >
          <div
            className="bg-black bg-opacity-90 text-white w-60 h-full rounded-l-lg shadow-lg p-6 relative transition-transform"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-start space-y-6 mt-12">
              <a href="#home" className="font-semibold hover:underline cursor-pointer">Home</a>
              <a href="#overview" className="font-semibold hover:underline cursor-pointer">Overview</a>
              <a href="#amenities" className="font-semibold hover:underline cursor-pointer">Amenities</a>
              <a href="#location" className="font-semibold hover:underline cursor-pointer">Location</a>
              <a href="#plots" className="font-semibold hover:underline cursor-pointer">Plots</a>
              <a href="#contact" className="font-semibold hover:underline cursor-pointer">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
