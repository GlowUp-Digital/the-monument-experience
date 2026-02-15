import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EntranceSequence from './components/EntranceSequence';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-wrapper">
      {loading ? (
        <EntranceSequence onComplete={() => setLoading(false)} />
      ) : (
        /* The fragment below ensures everything renders once loading is false */
        <div className="fade-in-content">
          <Navbar />
          <main className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home if path is wrong */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;