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
        <section className="w-full max-w-4xl mx-auto p-6 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full">
                <h2 className="text-2xl font-bold mb-4 text-green-800">
                    Contact for Plot {selectedPlot}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full sm:w-96 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full sm:w-96 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full sm:w-96 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full sm:w-96 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="4"
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="text-red-500 py-2 px-4 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition w-full sm:w-auto"
                        >
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
