import React, { useState, useEffect } from "react";
import './global.css'
const App = () => {
  const totalPlots = 20;
  const [plots, setPlots] = useState(Array(totalPlots).fill(false));

  useEffect(() => {
    const savedPlots = JSON.parse(localStorage.getItem("bookedPlots")) || Array(totalPlots).fill(false);
    setPlots(savedPlots);
  }, []);

  const bookPlot = (index) => {
    if (!plots[index]) {
      const updatedPlots = plots.map((plot, i) => (i === index ? true : plot));
      setPlots(updatedPlots);
      localStorage.setItem("bookedPlots", JSON.stringify(updatedPlots));
    }
  };

  const resetPlots = () => {
    const resetPlotsArray = Array(totalPlots).fill(false);
    setPlots(resetPlotsArray);
    localStorage.setItem("bookedPlots", JSON.stringify(resetPlotsArray));
  };

  return (
    <div className="relative p-4">
      <div className="grass w-full h-10 mb-4"></div>
      <h2 className="text-center text-2xl font-bold mb-4">Real Estate Plots</h2>
      <div className="grid grid-cols-5 gap-4 p-4 border-2 border-green-700 rounded-lg bg-green-100">
        {plots.map((isBooked, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex items-center justify-center border rounded-md text-white font-bold cursor-pointer transition duration-300 ${
              isBooked ? "bg-red-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={() => bookPlot(index)}
          >
            {isBooked ? "Booked" : `Plot ${index + 1}`}
          </div>
        ))}
      </div>
      <button
        onClick={resetPlots}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
      >
        Reset All Plots
      </button>
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
