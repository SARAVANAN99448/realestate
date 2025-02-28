import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./Firebase";

const db = getFirestore(app);

const plotsColumn1 = [
    { number: 226, bgColor: "bg-[#9c4e1a]", height: "h-20", extraClass: "for226" },
    { number: 227, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 228, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 229, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
];

const plotsColumn2 = [
    { number: 225, bgColor: "bg-[#9c4e1a]", height: "h-20", extraClass: "for225" },
    { number: 224, bgColor: "bg-[#9c4e1a]", height: "h-10", extraClass: "for224" },
    { number: 223, bgColor: "bg-[#9c4e1a]", height: "h-10", extraClass: "for223" },
    { number: 222, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 221, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 220, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
    { number: 219, bgColor: "bg-[#e3d91f]", height: "h-10", extraClass: "" },
];

const Topplots3 = () => {
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
        <section className='pr-20 pl-32'>
            <div className="flex">
                <div className="mt-28 pt-2">
                    {plotsColumn1.map((plot) => (
                        <div key={plot.number}
                            className={`${plot.bgColor} w-10 ${plot.height} border-3 border-black flex justify-center items-center cursor-pointer ${plot.extraClass}`}
                            onClick={() => handleOpenForm(plot.number)}
                        >
                            <p className='text-pink-500'>{plot.number}</p>
                        </div>
                    ))}
                </div>

                <div>
                    {plotsColumn2.map((plot) => (
                        <div key={plot.number}
                            className={`${plot.bgColor} w-10 ${plot.height} border-3 border-black flex justify-center items-center cursor-pointer ${plot.extraClass}`}
                            onClick={() => handleOpenForm(plot.number)}
                        >
                            <p className='text-pink-500'>{plot.number}</p>
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

export default Topplots3;
