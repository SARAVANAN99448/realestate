import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [plotSubmissions, setPlotSubmissions] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) {
      navigate("/admin-login");
    } else {
      fetchSubmissions();
    }
  }, [navigate]);

  const fetchSubmissions = async () => {
    // Fetch Plot Contacts
    const plotSnapshot = await getDocs(collection(db, "plotContacts"));
    const plotData = plotSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPlotSubmissions(plotData);

    // Fetch Normal Contacts
    const contactSnapshot = await getDocs(collection(db, "contacts"));
    const contactData = contactSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setContactSubmissions(contactData);
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Sheet for Plot Contacts
    const plotSheet = XLSX.utils.json_to_sheet(plotSubmissions);
    XLSX.utils.book_append_sheet(workbook, plotSheet, "Plot Contacts");

    // Sheet for Normal Contacts
    const contactSheet = XLSX.utils.json_to_sheet(contactSubmissions);
    XLSX.utils.book_append_sheet(workbook, contactSheet, "Normal Contacts");

    XLSX.writeFile(workbook, "admin_contacts.xlsx");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h2 className="text-2xl font-bold text-center sm:text-left">Admin Dashboard</h2>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white p-2 px-4 rounded cursor-pointer transition"
        >
          Logout
        </button>
      </div>

      {/* Export Button */}
      <button 
        onClick={exportToExcel} 
        className="bg-green-500 hover:bg-green-600 text-white p-2 px-4 rounded cursor-pointer mb-4 transition w-full sm:w-auto"
      >
        Export to Excel
      </button>

      {/* Plot Contacts Table */}
      <h3 className="text-xl font-semibold mt-6 mb-3">Plot Contacts</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Plot</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {plotSubmissions.length === 0 ? (
              <tr><td colSpan="6" className="text-center p-4">No data available</td></tr>
            ) : (
              plotSubmissions.map((entry, index) => (
                <tr key={index} className="border hover:bg-gray-100 transition">
                  <td className="border p-2">{entry.plotNumber}</td>
                  <td className="border p-2">{entry.name}</td>
                  <td className="border p-2">{entry.email}</td>
                  <td className="border p-2">{entry.mobile}</td>
                  <td className="border p-2">{entry.message}</td>
                  <td className="border p-2">{new Date(entry.timestamp.seconds * 1000).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Normal Contacts Table */}
      <h3 className="text-xl font-semibold mt-6 mb-3">General Contacts</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {contactSubmissions.length === 0 ? (
              <tr><td colSpan="4" className="text-center p-4">No data available</td></tr>
            ) : (
              contactSubmissions.map((entry, index) => (
                <tr key={index} className="border hover:bg-gray-100 transition">
                  <td className="border p-2">{entry.name}</td>
                  <td className="border p-2">{entry.email}</td>
                  <td className="border p-2">{entry.message}</td>
                  <td className="border p-2">{new Date(entry.timestamp.seconds * 1000).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
