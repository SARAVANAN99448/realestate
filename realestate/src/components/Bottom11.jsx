import React, { useState } from 'react';
import { db } from './Firebase'; // Ensure Firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';

const firstColumnNumbers2 = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const secondColumnNumbers2 = [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16];

const Bottom11 = () => {
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
            {[firstColumnNumbers2, secondColumnNumbers2].map((numbers, colIndex) => (
                <div key={colIndex} className={`mt-1 ${colIndex === 1 ? "pr-10" : ""}`}>
                    {numbers.map((num, index) => (
                        <div
                            key={index}
                            className={`md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer ${num === 35 || num === 26 ? "bg-[#9c4e1a]" : num >= 36 ? "bg-pink-300" : "bg-[#e3d91f]"}`}
                            onClick={() => handlePlotClick(num)}
                        >
                            <p className="text-pink-500 md:text-sm text-[10px]">{num}</p>
                        </div>
                    ))}
                </div>
            ))}
{showForm && (
                <div className="fixed top-0 left-0 md:w-full md:h-full w-[390px] h-[800px]   flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white md:p-6 p-10  rounded-lg shadow-lg md:w-[400px] w-[300px]">
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

export default Bottom11;
