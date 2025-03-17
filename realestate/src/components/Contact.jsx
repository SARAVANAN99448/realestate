import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlot = location.state?.plotNumber || "Unknown";
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "plotContacts"), {
                plotNumber: selectedPlot,
                ...formData,
                timestamp: new Date(),
            });
            alert("Inquiry submitted successfully!");
            navigate(-1);
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <section className="w-full h-screen flex justify-center items-center bg-opacity-50 backdrop-blur-md">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-6 text-center w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-green-800">
                    Contact for Plot {selectedPlot}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your email"
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your mobile number"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                        placeholder="Your message"
                        required
                    ></textarea>

                    {/* Buttons */}
                    <div className="flex justify-between mt-2">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="text-red-500 cursor-pointer py-2 px-4 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-green-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
