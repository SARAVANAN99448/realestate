import { useEffect, useState } from "react";
import download from "../assets/images/download.pdf"
const DownloadButton = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  const handleDownload = () => {
    const pdfUrl = download; // Replace with actual PDF URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className={`fixed bottom-10 left-10 text-[16px] bg-[#0D542B] text-white px-5 py-3 md:px-5 md:py-3 rounded-full shadow-lg hover:bg-[#fb9906] cursor-pointer transition z-50 ${
        isSticky ? "block" : "hidden"
      }`}
      onClick={handleDownload}
      aria-label="Download Brochure"
    >
      Download Brochure
    </button>
  );
};

export default DownloadButton;