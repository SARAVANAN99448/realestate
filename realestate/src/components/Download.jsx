import { useEffect, useState } from "react";
import { db } from "./Firebase"; // Import Firebase configuration
import { collection, addDoc, Timestamp } from "firebase/firestore";
import download from "../assets/images/download.pdf";

const DownloadButton = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showForm, setShowForm] = useState(false);
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      setMessage({ text: "Form submitted successfully!", type: "success" });

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Download the PDF
      const link = document.createElement("a");
      link.href = download;
      link.download = "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowForm(false); // Hide the form after submission
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage({ text: "Failed to submit. Try again!", type: "error" });
    }

    setLoading(false);
  };

  return (
    <>
      {/* Download Button */}
      <button
        className={`fixed md:bottom-10 bottom-10 md:left-10 left-5 text-[16px] bg-[#0D542B] text-white px-3 py-3 md:px-5 md:py-3 rounded-full shadow-lg hover:bg-[#fb9906] cursor-pointer transition z-50 ${
          isSticky ? "block" : "hidden"
        }`}
        onClick={() => setShowForm(true)}
        aria-label="Download Brochure"
      >
        Download Brochure
      </button>

      {/* Contact Form with Blur Effect */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-md px-4 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Contact Us</h2>

            {/* Success or Error Message */}
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
                className="w-full cursor-pointer bg-[#0D542B] text-white py-2 rounded-md hover:bg-[#3e6f53] transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit & Download"}
              </button>
            </form>

            {/* Close Button */}
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

export default DownloadButton;
