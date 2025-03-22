import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import * as XLSX from "xlsx";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [plotSubmissions, setPlotSubmissions] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [soldPlots, setSoldPlots] = useState([]);
  const [newPlotNumber, setNewPlotNumber] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) {
      navigate("/admin-login");
    } else {
      fetchSubmissions();
      fetchSoldPlots();
    }
  }, [navigate]);

  const fetchSubmissions = async () => {
    const plotSnapshot = await getDocs(collection(db, "plotContacts"));
    setPlotSubmissions(plotSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    const contactSnapshot = await getDocs(collection(db, "contacts"));
    setContactSubmissions(contactSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const fetchSoldPlots = async () => {
    const snapshot = await getDocs(collection(db, "soldPlots"));
    setSoldPlots(snapshot.docs.map((doc) => ({
        id: doc.id,
        plotNumber: doc.data().plotNumber,
        status: doc.data().status || "unsold" // Ensure status is fetched
    })));
};


const markAsSold = async () => {
  if (!newPlotNumber) return;
  try {
      await addDoc(collection(db, "soldPlots"), { 
          plotNumber: Number(newPlotNumber), // ✅ Convert to number
          status: "sold" 
      });

      setSoldPlots([...soldPlots, { plotNumber: Number(newPlotNumber), status: "sold" }]);
      setNewPlotNumber("");
  } catch (error) {
      console.error("Error marking plot as sold:", error);
  }
};




  const removeSoldPlot = async (id) => {
    await deleteDoc(doc(db, "soldPlots", id));
    setSoldPlots(soldPlots.filter((plot) => plot.id !== id));
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const plotSheet = XLSX.utils.json_to_sheet(plotSubmissions);
    XLSX.utils.book_append_sheet(workbook, plotSheet, "Plot Contacts");
    const contactSheet = XLSX.utils.json_to_sheet(contactSubmissions);
    XLSX.utils.book_append_sheet(workbook, contactSheet, "General Contacts");
    XLSX.writeFile(workbook, "admin_contacts.xlsx");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button onClick={handleLogout} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white p-2 px-4 rounded">
          Logout
        </button>
      </div>

      <button onClick={exportToExcel} className="bg-green-500 cursor-pointer hover:bg-green-600 text-white p-2 px-4 rounded mb-4">
        Export to Excel
      </button>

      {/* Manage Sold Plots */}
      <h3 className="text-xl font-semibold mt-6 mb-3">Manage Sold Plots</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={newPlotNumber}
          onChange={(e) => setNewPlotNumber(e.target.value)}
          placeholder="Enter Plot Number"
          className="border p-2 rounded"
        />
        <button onClick={markAsSold} className="bg-blue-500 text-white p-2 rounded cursor-pointer">
          Mark as Sold
        </button>
      </div>

      <ul className="mt-4">
        {soldPlots.length === 0 ? (
          <p>No sold plots recorded.</p>
        ) : (
          soldPlots.map((plot) => (
            <li key={plot.id} className="flex justify-between items-center border p-2 rounded">
              Plot {plot.plotNumber}
              <button onClick={() => removeSoldPlot(plot.id)} className="bg-red-500 cursor-pointer text-white p-1 px-2 rounded">
                Remove
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Plot Inquiry Submissions */}
      <h3 className="text-xl font-semibold mt-6 mb-3">Plot Inquiry Submissions</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
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
              <tr>
                <td colSpan="6" className="text-center p-4">No data available</td>
              </tr>
            ) : (
              plotSubmissions.map((entry) => (
                <tr key={entry.id} className="border">
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

      {/* General Contact Submissions */}
      <h3 className="text-xl font-semibold mt-6 mb-3">General Contact Submissions</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {contactSubmissions.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">No data available</td>
              </tr>
            ) : (
              contactSubmissions.map((entry) => (
                <tr key={entry.id} className="border">
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
    </div>
  );
};

export default AdminDashboard;
