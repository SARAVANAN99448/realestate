import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import g1 from "../assets/images/g1.png";
import g2 from "../assets/images/g2.png";
import g3 from "../assets/images/g3.png";
import "../../src/global.css";

const images = [g1, g2, g3,];

const GalleryCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  return (
    <div className="w-full max-w-5xl mx-auto md:mt-20 mt-10">
      <h1 className="text-center text-[#fb9906] text-2xl md:text-3xl mb-2">Gallery</h1>
      <hr className="w-16 border-green-700 mx-auto mb-4" />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-64 object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Full-View Modal with Blur Effect */}
      {selectedIndex !== null && (
        <div className="fixed inset-0  bg-opacity-60 backdrop-blur-lg flex justify-center items-center z-50">
          <div className="relative flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4  cursor-pointer text-white p-3 rounded-full"
              onClick={() => setSelectedIndex(null)}
            >
              ✖
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                className="absolute left-5 bg-black cursor-pointer text-white p-3 rounded-full text-2xl"
                onClick={handlePrev}
              >
                ◀
              </button>
            )}

            {/* Image Display */}
            <img src={images[selectedIndex]} alt="Full View" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />

            {/* Next Button */}
            {selectedIndex < images.length - 1 && (
              <button
                className="absolute right-5 bg-black cursor-pointer text-white p-3 rounded-full text-2xl"
                onClick={handleNext}
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;
