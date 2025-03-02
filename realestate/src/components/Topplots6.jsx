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
            setShowForm(false);
            setFormData({ name: '', email: '', mobile: '', message: '' })
        } catch (error) {
            console.error("Erroradding document:", error);
            alert("Failed to submit inquiry.");
        }
    };

    return (
        <section className="md:pl-32 absolute md:top-[76%] md:left-[12%] top-[60%] pl-2">
            <div className="md:right-[20%] md:bottom-[123%] bottom-[105%] right-[30%] absolute font-bold">
                <p className="md:text-[16px] text-[12px]">9.00 M WIDE ROAD</p>
            </div>
            <div>
                <div className="flex">
                    {row1.map(({ num, bg }) => (
                        <div key={num} className={`${bg} md:w-8 w-6 md:h-13 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer`} onClick={() => handleOpenForm(num)}>
                            <p className="text-pink-500 md:text-sm text-[10px]">{num}</p>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    {row2.map(({ num, bg }) => (
                        <div key={num} className={`${bg} md:w-8 w-6 md:h-13 h-10 md:border-1 border-1 border-black flex justify-center items-center cursor-pointer`} onClick={() => handleOpenForm(num)}>
                            <p className="text-pink-500 md:text-sm text-[10px]">{num}</p>
                        </div>
                    ))}
                </div>
            </div>

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
        </section>
    );
};

export default Topplots6;
