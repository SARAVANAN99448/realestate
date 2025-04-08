import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaWhatsapp } from "react-icons/fa"; 

const EnquireNow = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection && heroSection.getBoundingClientRect().bottom <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

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
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage({ text: "Failed to send message. Try again!", type: "error" });
    }

    setLoading(false);
  };

  return (
    <>
      {/* WhatsApp + Enquire Now Buttons */}
      {isSticky && (
        <div className="fixed bottom-10 right-10 flex gap-3 z-50">
          {/* Enquire Now Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#0D542B] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#fb9906] transition text-[16px]"
          >
            Enquire Now
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917349633544" // <-- Replace with your actual number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
          >
             <FaWhatsapp className="text-white" size={24} />
          </a>
        </div>
      )}

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex justify-center items-center px-4 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Contact Us</h2>

            {/* Message Feedback */}
            {message.text && (
              <p className={`text-${message.type === "success" ? "green" : "red"}-600 mb-2`}>
                {message.text}
              </p>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0D542B] text-white py-2 rounded-md hover:bg-[#3e6f53] transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquireNow;
