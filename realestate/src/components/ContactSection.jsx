import React, { useState } from "react";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to send message. Try again!");
    }

    setLoading(false);
  };

  return (
    <section className="w-full max-w-5xl mx-auto p-6 overflow-hidden md:mt-20 mt-10" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Google Map */}
        <div>
          <iframe
            title="Google Map"
            className="w-full h-96 rounded-lg shadow-lg"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287.2115439848396!2d75.74287886559219!3d13.34330920715673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad838a5af7f17%3A0x86f3682d10aaa225!2sSwarnagiri!5e0!3m2!1sen!2sin!4v1741240079080!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-[16px]">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
