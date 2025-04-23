import React, { useEffect, useState } from 'react';
import { db } from "./Firebase"; // ✅ make sure this path is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 500 && !hasClosed) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasClosed]);

  const closePopup = () => {
    setShowPopup(false);
    setHasClosed(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: Timestamp.now(),
      });

      setMessage({ text: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowForm(false);
        setMessage({ text: "", type: "" });
      }, 2000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage({ text: "Failed to send message. Try again!", type: "error" });
    }

    setLoading(false);
  };

  return (
    <>
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40" />

          <div className="relative bg-white w-[90%] max-w-md mx-auto rounded-lg shadow-lg p-6 z-50 text-center">
            <p className="text-lg font-semibold text-red-600">
              Hurry! Limited Plots Left. Contact Us Now Before They're Gone!
            </p>

            <button
              onClick={() => {
                setShowForm(true);
                closePopup();
              }}
              className="mt-4 bg-[#0D542B] hover:bg-[#fb9906] text-white px-6 py-2 rounded-full transition text-sm font-medium"
            >
              Enquire Now
            </button>

            <button
              onClick={closePopup}
              className="absolute top-2 right-3 text-gray-700 text-2xl font-bold cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center px-4 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Contact Us</h2>

            {message.text && (
              <p className={`mb-2 text-${message.type === "success" ? "green" : "red"}-600`}>
                {message.text}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0D542B] text-white py-2 rounded-md hover:bg-[#3e6f53] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
