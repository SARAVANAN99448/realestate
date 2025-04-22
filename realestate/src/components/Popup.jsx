import React, { useEffect, useState } from 'react';

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasClosed, setHasClosed] = useState(false); // local memory (not sessionStorage)

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
    setHasClosed(true); // after close, won't show again even if user scrolls
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40" />

        {/* Popup Content */}
        <div className="relative bg-white w-[90%] max-w-md mx-auto rounded-lg shadow-lg p-6 z-50 text-center">
          <p className="text-lg font-semibold text-red-600">
            Hurry! Limited Plots Left. Contact Us Now Before They're Gone!
          </p>
          <button
            onClick={closePopup}
            className="absolute top-2 right-3 text-gray-700 text-2xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>
      </div>
    )
  );
};

export default PopupMessage;
