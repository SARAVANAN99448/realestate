import React, { useState } from "react";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import Topplots3 from "./Topplots3";
import Topplots4 from "./Topplots4";
import Topplots5 from "./Topplots5";
import Topplots6 from "./Topplots6";
import Park from "./Park";

const plots = [
    { id: 158, color: "bg-[#9c4e1a]", column: 1, extraClass: "topplot1", height: "h-[18%]" },
    { id: 159, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 160, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 161, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 162, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 163, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 164, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 165, color: "bg-[#7152BF]", column: 1, height: "h-13" },
    { id: 166, color: "bg-[#9c4e1a]", column: 1, height: "h-13" },
    { id: 157, color: "bg-[#9c4e1a]", column: 2, height: "h-20", mt: "mt-7", extraClass: "topplot1" },
    { id: 156, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 155, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 154, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 153, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 152, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 151, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 150, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 149, color: "bg-[#e3d91f]", column: 2, height: "h-11" },
    { id: 148, color: "bg-[#9c4e1a]", column: 2, height: "h-11" },
];

const Topplots1 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPlot, setSelectedPlot] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });

    const handlePlotClick = (plotId) => {
        setSelectedPlot(plotId);
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
        <>
            <section className="flex justify-center pl-10">
                <div className="left-[48%] top-[27%] rotate-270 absolute font-bold">
                    <p>12.00 M WIDE ROAD</p>
                </div>
                <Topplots3 />
                <Topplots4 />
                <Topplots5 />
                <div className="flex ml-10">
                    {[1, 2].map((col) => (
                        <div key={col}>
                            {plots
                                .filter((plot) => plot.column === col)
                                .map((plot) => (
                                    <div
                                        key={plot.id}
                                        className={`w-10 border-3 border-black flex justify-center items-center cursor-pointer ${plot.height} ${plot.mt || ""} ${plot.color} ${plot.extraClass || ""}`}
                                        onClick={() => handlePlotClick(plot.id)}
                                    >
                                        <p className="text-pink-500">{plot.id}</p>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
                <Park />
            </section>
            <Topplots6 />

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
        </>
    );
};

export default Topplots1;