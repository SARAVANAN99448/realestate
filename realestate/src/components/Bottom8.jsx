import React, { useState } from 'react';
import { db } from './Firebase'; // Ensure Firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';

const columns5 = [
    { numbers: [114, 115, 116, 117], last: 118, bg: ["bg-[#9c4e1a]", "bg-[#e3d91f]", "bg-[#e3d91f]", "bg-[#e3d91f]"] },
    { numbers: [106, 105, 104, 103, 102], last: 101, bg: ["bg-[#9c4e1a]", "bg-[#7152bf]", "bg-[#7152bf]", "bg-[#7152bf]", "bg-[#7152bf]"] },
];

const Bottom8 = () => {
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
            {columns5.map((col, index) => (
                <div key={index} className={`mt-1 ${index === 1 ? "mr-10" : ""}`}>
                    {col.numbers.map((num, i) => (
                        <div key={i} className={`w-10 h-15 border-3 border-black flex justify-center items-center ${col.bg[i]}`} onClick={() => handlePlotClick(num)}>
                            <p className="text-pink-500 cursor-pointer">{num}</p>
                        </div>
                    ))}
                    <div className="relative w-10 h-20 bg-[#9c4e1a] border-2 border-black cursor-pointer clip-path " onClick={() => handlePlotClick(col.last)}>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 font-bold">
                            {col.last}
                        </span>
                    </div>
                </div>
            ))}
            
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

export default Bottom8;
