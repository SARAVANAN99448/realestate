import React, { useState } from 'react';
import { db } from './Firebase';
import { collection, addDoc } from 'firebase/firestore';

const s6 = [1, 2, 3, 4];

const Bottom7 = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });

    const handleNumberClick = (num) => {
        setSelectedNumber(num);
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "plotContacts"), {
                selectedNumber,
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
        <div className="p-1">
            {s6.map((num) => (
                <div key={num} className="bg-[#9c4e1a] w-10 h-10 border-3 border-black flex justify-center items-center cursor-pointer" onClick={() => handleNumberClick(num)}>
                    <p className="text-pink-500">{num}</p>
                </div>
            ))}

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-lg font-bold mb-4 text-center">Contact for Plot {selectedNumber}</h2>
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
        </div>
    );
};

export default Bottom7;
