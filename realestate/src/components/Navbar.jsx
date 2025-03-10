import { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react"; // Import icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 bg-transparent">

      {/* Left - Logo/Icon */}
      <div className="text-white text-2xl">Swarnagiri</div>

      {/* Center - Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#" className="font-semibold cursor-pointer hover:underline">Home</a>
        <a href="#overview" className="font-semibold cursor-pointer hover:underline">Overview</a>
        <a href="#amenities" className="font-semibold cursor-pointer hover:underline">Amenities</a>
        <a href="#plots" className="font-semibold cursor-pointer hover:underline">Plots</a>
        <a href="#location" className="font-semibold cursor-pointer hover:underline">Location</a>
        <a href="#contact" className="font-semibold cursor-pointer hover:underline">Contact</a>
      </div>

      {/* Right - Social Icons (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300 cursor-pointer"><Facebook /></a>
        <a href="#" className="text-white hover:text-gray-300 cursor-pointer"><Twitter /></a>
        <a href="#" className="text-white hover:text-gray-300 cursor-pointer"><Instagram /></a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-xs bg-black bg-opacity-80 text-white rounded-lg flex flex-col items-center py-4 space-y-4">
          <a href="#" className="font-semibold hover:underline cursor-pointer">Home</a>
          <a href="#" className="font-semibold hover:underline cursor-pointer">Overview</a>
          <a href="#" className="font-semibold hover:underline cursor-pointer">Amenities</a>
          <a href="#" className="font-semibold hover:underline cursor-pointer">Plots</a>
          <a href="#" className="font-semibold hover:underline cursor-pointer">Location</a>
          <a href="#" className="font-semibold hover:underline cursor-pointer">Contact</a>
          {/* Social Icons in Mobile Menu */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300 cursor-pointer"><Facebook /></a>
            <a href="#" className="text-white hover:text-gray-300 cursor-pointer"><Twitter /></a>
            <a href="#" className="text-white hover:text-gray-300 cursor-pointer"><Instagram /></a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
