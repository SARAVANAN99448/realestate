import React, { useState } from 'react';
import { db } from './Firebase'; // Ensure Firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';

const firstColumn = [
    { number: 132, className: "bg-[#9c4e1a] w-28 h-24 border-3 border-black relative flex justify-center items-center next-path cursor-pointer" },
    { number: 131, className: "bg-[#9c4e1a] w-15 h-24 border-3 border-black relative flex justify-center items-center cursor-pointer" },
];

const secondColumn = [
    { number: 130, className: "bg-[#9c4e1a] w-10 h-10 border-3 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 129, className: "bg-pink-300 w-10 h-10 border-3 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 128, className: "bg-pink-300 w-10 h-10 border-3 border-black relative flex justify-center items-center cursor-pointer" },
    { number: 127, className: "bg-pink-300 w-10 h-10 border-3 border-black relative flex justify-center items-center cursor-pointer" },
];

const Bottom1 = () => {
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
            {/* First Column */}
            <div className="flex-col">
                <div className="flex">
                    {firstColumn.map((box) => (
                        <div key={box.number} className={box.className} onClick={() => handlePlotClick(box.number)}>
                            <p className="relative text-pink-500">{box.number}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#9c4e1a] w-full h-17 border-3 border-black relative flex justify-center items-center next-path cursor-pointer" onClick={() => handlePlotClick(133)}>
                    <p className="relative text-pink-500">133</p>
                </div>
            </div>

            {/* Second Column */}
            <div className="mt-1 mr-10">
                {secondColumn.map((box) => (
                    <div key={box.number} className={box.className} onClick={() => handlePlotClick(box.number)}>
                        <p className="relative text-pink-500">{box.number}</p>
                    </div>
                ))}
            </div>

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

export default Bottom1;
