import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./Firebase";

const db = getFirestore(app);

const column1 = [211, 212, 213, 214, 215, 216, 217, 218];
const column2 = [210, 209, 208, 207, 206, 205, 204, 203];

const Topplots4 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPlot, setSelectedPlot] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleOpenForm = (plotNumber) => {
        setSelectedPlot(plotNumber);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedPlot(null);
        setFormData({ name: "", email: "", mobile: "", message: "" });
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
            });
            alert("Inquiry submitted successfully!");
            handleCloseForm();
        } catch (error) {
            console.error("Error adding document:", error);
            alert("Failed to submit inquiry.");
        }
    };

    return (
        <section className='h-fit'>
            {/* Road Label */}
            <div className="absolute right-[64.5%] top-[27%] rotate-270 font-bold">
                <p>9.00 M WIDE ROAD</p>
            </div>

            <div className="flex pr-20">
                <div>
                    {column1.map((num) => (
                        <div key={num}
                            className="bg-pink-300 w-10 h-10 border-3 border-black flex justify-center items-center cursor-pointer"
                            onClick={() => handleOpenForm(num)}
                        >
                             <p className="text-pink-500">{num}</p>
                        </div>
                    ))}
                </div>

                <div>
                    {column2.map((num) => (
                        <div key={num}
                            className="bg-pink-300 w-10 h-10 border-3 border-black flex justify-center items-center cursor-pointer"
                            onClick={() => handleOpenForm(num)}
                        >
                             <p className="text-pink-500">{num}</p>
                        </div>
                    ))}
                </div>
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
                                <button type="button" onClick={handleCloseForm} className="text-red-500">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Topplots4;
