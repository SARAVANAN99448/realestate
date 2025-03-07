const DownloadButton = () => {
    const handleDownload = () => {
      const pdfUrl = "/sample.pdf"; // Replace with actual PDF URL
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "document.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button
        className="fixed bottom-5 left-5 cursor-pointer bg-[#0D542B] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#fb9906] transition"
        onClick={handleDownload}
      >
        Download Brochure
      </button>
    );
  };
  
  export default DownloadButton;
  