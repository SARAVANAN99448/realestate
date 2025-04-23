import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import AdminDashboard from './components/Admin/Admin.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';

createRoot(document.getElementById('root')).render(
  <ParallaxProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  </BrowserRouter>
  </ParallaxProvider>
)
