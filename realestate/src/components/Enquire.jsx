import { useState } from "react";

const EnquireNow = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Enquire Now Button */}
      <button
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-[#0D542B] cursor-pointer text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#fb9906] transition overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        Enquire Now
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

            {/* Contact Form */}
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded mb-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded mb-3"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded mb-3"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0D542B] text-white p-2 rounded hover:bg-[#3e6f53] cursor-pointer"
              >
                Submit
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
