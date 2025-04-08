import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const BottomContact = () => {
  return (
    <div className="bg-black py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visit Us</h2>

        {/* Contact Sections in Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Site Office */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Visit Our Site Office</h3>
            <p className="flex items-center mt-2 text-gray-700">
              <FaPhoneAlt className="mr-2 text-blue-600" /> +91 7349633544
            </p>
            <p className="flex items-center mt-1 text-gray-700">
              <FaEnvelope className="mr-2 text-red-600" /> info@leelaventures.com
            </p>
            <p className="flex items-center mt-1 text-gray-700">
              <FaGlobe className="mr-2 text-green-600" /> 
              <a href="https://www.leelaventures.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                www.leelaventures.com
              </a>
            </p>
          </div>

          {/* Marketing Bureau */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Marketing Bureau</h3>
            <p className="flex items-center mt-1 text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              Swarnagiri, Naraganhalli, en route to Hirekolale Lake, Chikkamagaluru
            </p>
          </div>

          {/* City Office */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">City Office</h3>
            <p className="flex items-center mt-1 text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              Leelaa Ventures Pvt. Ltd., #81, 1st Floor, 5th Main Road, Ganganagar, Bangalore, Karnataka - 560 320
            </p>
          </div>
        </div>

        {/* Disclaimer Inside "Visit Us" Section */}
        <div className="mt-8 p-4 bg-black rounded-md text-sm text-white">
          <p>
            <strong>Disclaimer :</strong> This brochure is conceptual in nature and is by no means a legal offering.
            The promoters have the right to change, alter, or add any specifications mentioned herein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomContact;
