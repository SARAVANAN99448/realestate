import React, { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { app } from "./Firebase"; // Ensure correct path

const db = getFirestore(app);

const row1 = [
    { num: 178, bg: "bg-pink-300" },
    { num: 179, bg: "bg-pink-300" },
    { num: 180, bg: "bg-pink-300" },
    { num: 181, bg: "bg-pink-300" },
    { num: 182, bg: "bg-pink-300" },
    { num: 183, bg: "bg-pink-300" },
    { num: 184, bg: "bg-pink-300" },
    { num: 185, bg: "bg-pink-300" },
    { num: 186, bg: "bg-pink-300" },
    { num: 187, bg: "bg-pink-300" },
    { num: 188, bg: "bg-[#9c4e1a]" },
];

const row2 = [
    { num: 177, bg: "bg-[#9c4e1a]" },
    { num: 176, bg: "bg-[#9c4e1a]" },
    { num: 175, bg: "bg-[#9c4e1a]" },
    { num: 174, bg: "bg-[#9c4e1a]" },
    { num: 173, bg: "bg-[#9c4e1a]" },
    { num: 172, bg: "bg-[#9c4e1a]" },
    { num: 171, bg: "bg-[#9c4e1a]" },
    { num: 170, bg: "bg-[#9c4e1a]" },
    { num: 169, bg: "bg-[#9c4e1a]" },
    { num: 168, bg: "bg-[#9c4e1a]" },
    { num: 167, bg: "bg-[#9c4e1a]" },
];

const Topplots6 = () => {
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
            console.error("Erroradding document:", error);
            alert("Failed to submit inquiry.");
        }
    };

    return (
        <section className="pl-32 absolute top-[56%] left-[13.5%]">
            <div className="right-[27%] bottom-[120%] absolute font-bold">
                <p>9.00 M WIDE ROAD</p>
            </div>
            <div>
                <div className="flex">
                    {row1.map(({ num, bg }) => (
                        <div key={num} className={`${bg} md:w-9.5 w-6.5 h-13 border-3 border-black flex justify-center items-center cursor-pointer`} onClick={() => handleOpenForm(num)}>
                             <p className="text-pink-500">{num}</p>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    {row2.map(({ num, bg }) => (
                        <div key={num} className={`${bg} md:w-9.5 w-6.5 h-13 border-3 border-black flex justify-center items-center cursor-pointer`} onClick={() => handleOpenForm(num)}>
                             <p className="text-pink-500">{num}</p>
                        </div>
                    ))}
                </div>
            </div>

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-lg font-bold mb-4">Contact for Plot {selectedPlot}</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="block border p-2 mb-2 w-full" required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="block border p-2 mb-2 w-full" required />
                            <input type="tel" name="mobile" placeholder="Your Mobile" value={formData.mobile} onChange={handleChange} className="block border p-2 mb-2 w-full" required />
                            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="block border p-2 mb-2 w-full" required />
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                            <button type="button" onClick={handleCloseForm} className="text-red-500 ml-4">Close</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Topplots6;
