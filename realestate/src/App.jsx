import React, { useState, useEffect, useRef } from "react";
import "./global.css";

const App = () => {
  const totalPlots = 20;
  const [plots, setPlots] = useState(Array(totalPlots).fill(false));
  const [soldPlots, setSoldPlots] = useState(Array(totalPlots).fill(false));
  const [isAdmin, setIsAdmin] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const savedPlots = JSON.parse(localStorage.getItem("bookedPlots"));
      const savedSoldPlots = JSON.parse(localStorage.getItem("soldPlots"));
      const savedAdminStatus = JSON.parse(localStorage.getItem("isAdmin"));

      if (Array.isArray(savedPlots) && savedPlots.length === totalPlots) {
        setPlots(savedPlots);
      }
      if (Array.isArray(savedSoldPlots) && savedSoldPlots.length === totalPlots) {
        setSoldPlots(savedSoldPlots);
      }
      if (savedAdminStatus === true) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Error parsing localStorage data", error);
    }
  }, []);

  const markAsSold = () => {
    const plotNumber = parseInt(inputRef.current.value, 10);
    if (!isNaN(plotNumber) && plotNumber >= 1 && plotNumber <= totalPlots) {
      const updatedSoldPlots = [...soldPlots];
      updatedSoldPlots[plotNumber - 1] = true;
      setSoldPlots(updatedSoldPlots);
      localStorage.setItem("soldPlots", JSON.stringify(updatedSoldPlots));
      inputRef.current.value = "";
    } else {
      alert("Please enter a valid plot number (1-20).");
    }
  };

  const markAsUnsold = () => {
    const plotNumber = parseInt(inputRef.current.value, 10);
    if (!isNaN(plotNumber) && plotNumber >= 1 && plotNumber <= totalPlots) {
      const updatedSoldPlots = [...soldPlots];
      updatedSoldPlots[plotNumber - 1] = false;
      setSoldPlots(updatedSoldPlots);
      localStorage.setItem("soldPlots", JSON.stringify(updatedSoldPlots));
      inputRef.current.value = "";
    } else {
      alert("Please enter a valid plot number (1-20).");
    }
  };

  const handleAdminLogin = () => {
    const password = prompt("Enter Admin Password:");
    if (password === "admin123") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", JSON.stringify(true));
    } else {
      alert("Incorrect password!");
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.setItem("isAdmin", JSON.stringify(false));
  };

  return (
    <div className="relative p-4">
      <div className="grass w-full h-10 mb-4"></div>
      <h2 className="text-center text-2xl font-bold mb-4">Real Estate Plots</h2>

      <div className="grid grid-cols-5 gap-4 p-4 border-2 border-green-700 rounded-lg bg-green-100">
        {plots.map((_, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex items-center justify-center border rounded-md text-white font-bold 
            ${soldPlots[index] ? "bg-red-500" : "bg-green-500"}`}
          >
            {soldPlots[index] ? "Sold" : `Plot ${index + 1}`}
          </div>
        ))}
      </div>

      {isAdmin && (
        <div className="mt-4 flex items-center gap-2">
          <input
            ref={inputRef}
            type="number"
            min="1"
            max={totalPlots}
            placeholder="Enter Plot Number"
            className="p-2 border border-gray-400 rounded-md"
          />
          <button
            onClick={markAsSold}
            className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600"
          >
            Mark as Sold
          </button>
          <button
            onClick={markAsUnsold}
            className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
          >
            Mark as Unsold
          </button>
          <button
            onClick={handleAdminLogout}
            className="px-4 py-2 bg-gray-500 text-white font-bold rounded-md hover:bg-gray-600"
          >
            Logout
          </button>
        </div>
      )}

      {!isAdmin && (
        <button
          onClick={handleAdminLogin}
          className="mt-4 px-4 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600"
        >
          Login as Admin
        </button>
      )}

      <style>{`
        .grass {
          background: linear-gradient(to right, #228B22, #32CD32);
          border-radius: 0 0 10px 10px;
        }
      `}</style>
    </div>
  );
};

export default App;
