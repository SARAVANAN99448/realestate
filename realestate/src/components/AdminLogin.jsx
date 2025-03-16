import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminPassword = "admin123"; // Set your own secure password

    if (password === adminPassword) {
      localStorage.setItem("isAdmin", "true"); // Store login state
      navigate("/admin"); // Redirect to dashboard
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center  max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border text-black p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleLogin}
          className="bg-green-600 hover:bg-green-700 text-white mt-4 p-2 w-full rounded-md transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
