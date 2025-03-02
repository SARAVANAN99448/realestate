import React, { useState } from 'react';
import { db } from './Firebase';
import { collection, addDoc } from 'firebase/firestore';

const columns10 = [
    [110, 111, 112, 113],
    [109, 108, 107]
];

// Define width & height in Tailwind class format
const plotSizes = {
    110: "md:w-10 w-7 h-10",
    111: "md:w-10 w-7 h-10",
    112: "md:w-10 w-7 h-10",
    113: "md:w-10 w-7 h-10",
    109: "md:w-10 w-7 h-14",
    108: "md:w-10 w-7 h-14",
    107: "md:w-10 w-7 h-12"
};

const getColors10 = (num) => {
    if ([110, 109, 107].includes(num)) return "bg-[#9c4e1a]";
    if ([111, 112, 113].includes(num)) return "bg-[#e3d91f]";
    if ([108].includes(num)) return "bg-[#7152bf]";
    return "bg-pink-300";
};

const Bottom3 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPlot, setSelectedPlot] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });

    const handlePlotClick = (number) => {
        setSelectedPlot(number);
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "plotContacts"), {
                plotNumber: selectedPlot,
                ...formData,
                timestamp: new Date()
            });
            alert("Inquiry submitted successfully!");
            setShowForm(false);
            setFormData({ name: '', email: '', mobile: '', message: '' });
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <div className="flex">
            {columns10.map((column, colIndex) => (
                <div key={colIndex} className={`mt-1 ${colIndex === 1 ? 'mr-10' : ''}`}>
                    {column.map((num) => (
                        <div
                            key={num}
                            className={`${getColors10(num)} ${plotSizes[num] || "w-10 h-10"} md:border-1 border-1 border-black flex justify-center items-center cursor-pointer`}
                            onClick={() => handlePlotClick(num)}
                        >
                            <p className="text-pink-500 md:text-sm text-[10px]">{num}</p>
                        </div>
                    ))}
                </div>
            ))}
            {showForm && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-fit w-fit ">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-[350px] max-h-[80vh] overflow-y-auto mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">Contact for Plot {selectedPlot}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md" required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md" required />
        <input type="tel" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md" required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md h-20" required />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          <button type="button" onClick={() => setShowForm(false)} className="text-red-500">Close</button>
        </div>
      </form>
    </div>
  </div>
)}



        </div>
    );
};

export default Bottom3;
