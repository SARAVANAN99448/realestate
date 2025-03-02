import React, { useState } from 'react';
import { db } from './Firebase'; // Ensure Firebase is properly configured
import { collection, addDoc } from 'firebase/firestore';

const row1 = [
    { number: 142, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 143, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 144, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 145, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 146, className: "bg-pink-300 md:w-[11.7%] w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 147, className: "bg-[#9c4e1a] w-15 h-10 md:border-1 border-1 border-black flex justify-center items-center topplots2 cursor-pointer" },
  ];

const row2 = [
    { number: 141, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 140, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 139, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 138, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 137, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 136, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 135, className: "bg-[#9c4e1a] md:w-10 w-7 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer" },
    { number: 134, className: "bg-[#9c4e1a] md:w-20 w-10 h-10 md:border-1 border-1 border-black flex justify-center items-center topplots2 cursor-pointer" },
  ];

const Topplots2 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPlot, setSelectedPlot] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <section className="md:ml-15 ml-10 md:pt-20 pt-12">
            <div className="flex">
                {row1.map((box) => (
                    <div key={box.number} className={box.className} onClick={() => handlePlotClick(box.number)}>
                        <p className='text-pink-500 md:text-sm text-[10px] '>{box.number}</p>
                    </div>
                ))}
            </div>
            <div className="flex">
                {row2.map((box) => (
                    <div key={box.number} className={box.className} onClick={() => handlePlotClick(box.number)}>
                        <p className='text-pink-500 md:text-sm text-[10px]'>{box.number}</p>
                    </div>
                ))}
            </div>

           {/* Contact Form */}
           {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-lg font-bold mb-4 text-center">Contact for Plot {selectedPlot}</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md" required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md" required />
                            <input type="tel" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md" required />
                            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="block border border-gray-400 p-2 w-full rounded-md h-24" required />
                            <div className="flex justify-between">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                                <button type="button" onClick={() => setShowForm(false)} className="text-red-500">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Topplots2;
