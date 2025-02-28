import React, { useState } from 'react';
import { db } from './Firebase'; // Ensure Firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';

const getColors4 = (n) => {
    if (n === 94 || n === 86) return "bg-[#9c4e1a]";
    if (n >= 95 && n <= 100) return "bg-[#7152bf]";
    return "bg-[#e3d91f]";
};

// Define dynamic sizes for plots
const plotSizes = {
    94: "w-12 h-15",
    95: "w-12 h-15",
    96: "w-12 h-15",
    97: "w-12 h-15",
    98: "w-12 h-15",
    99: "w-12 h-15",
    100: "w-12 h-20", // Unique height for plot 100
    86: "w-10 h-10",
    85: "w-10 h-10",
    84: "w-10 h-10",
    83: "w-10 h-10",
    82: "w-10 h-10",
    81: "w-10 h-10",
    80: "w-10 h-10",
    79: "w-10 h-10",
    78: "w-10 h-10",
    77: "w-10 h-10",
    76: "w-10 h-10",
};

const firstColumnNumbers4 = [94, 95, 96, 97, 98, 99];
const secondColumnNumbers4 = [86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76];

const Bottom9 = () => {
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
            {[firstColumnNumbers4, secondColumnNumbers4].map((col, i) => (
                <div key={i} className={`mt-1 ${i === 1 ? "mr-10" : ""}`}>
                    {col.map((n, j) => (
                        <div key={j} className={`${plotSizes[n] || "w-10 h-10"} border-3 border-black flex justify-center items-center cursor-pointer ${getColors4(n)}`} onClick={() => handlePlotClick(n)}>
                            <p className="text-pink-500">{n}</p>
                        </div>
                    ))}
                    {i === 0 && (
                        <div className={`relative ${plotSizes[100]} bg-[#9c4e1a] border-2 border-black clip-path cursor-pointer`} onClick={() => handlePlotClick(100)}>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 font-bold">
                                100
                            </span>
                        </div>
                    )}
                </div>
            ))}

            {/* Contact Form */}
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-lg font-bold mb-4 text-center">Contact for Plot {selectedPlot}</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} 
                                className="block border border-gray-400 p-2 w-full rounded-md" required />
                            
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} 
                                className="block border border-gray-400 p-2 w-full rounded-md" required />
                            
                            <input type="tel" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} 
                                className="block border border-gray-400 p-2 w-full rounded-md" required />
                            
                            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} 
                                className="block border border-gray-400 p-2 w-full rounded-md h-24" required />

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

export default Bottom9;
