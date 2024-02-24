// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Commands from './components/Commands';
import UpdatesPage from './components/Updates';
import FAQPage from './components/FAQ';
import Developers from './components/Developers.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes basename="/Discord-Bot-Website">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
