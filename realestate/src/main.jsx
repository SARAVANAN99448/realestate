import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Contact from './components/contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>


      <Route path="/" element={<App />}></Route>
      <Route path="/contact" element={<Contact />}></Route>

    </Routes>
  </BrowserRouter>
)
