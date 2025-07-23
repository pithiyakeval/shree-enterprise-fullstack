import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from "./pages/AboutPage";

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Solar from './pages/Solar';
import Mandap from './pages/Mandap';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/mandap" element={<Mandap />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
