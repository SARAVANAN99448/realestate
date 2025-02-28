import React, { useState } from 'react';
import { db } from './Firebase';
import { collection, addDoc } from 'firebase/firestore';

const getColors3 = (num) => {
    if (num === 65 || num === 56) return "bg-[#9c4e1a]";
    if (num >= 66 && num <= 75) return "bg-[#e3d91f]";
    return "bg-pink-300";
};
const firstColumnNumbers3 = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
const secondColumnNumbers3 = [56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46];

const Bottom10 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPlot, setSelectedPlot] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });

    const handlePlotClick = (num) => {
        setSelectedPlot(num);
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
            {[firstColumnNumbers3, secondColumnNumbers3].map((numbers, colIndex) => (
                <div key={colIndex} className={`mt-1 ${colIndex === 1 ? "mr-10" : ""}`}>
                    {numbers.map((num, index) => (
                        <div
                            key={index}
                            className={`w-10 h-10 border-3 border-black flex justify-center items-center cursor-pointer ${getColors3(num)}`}
                            onClick={() => handlePlotClick(num)}
                        >
                            <p className="text-pink-500">{num}</p>
                        </div>
                    ))}
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

export default Bottom10;
