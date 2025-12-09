import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Requirements from './components/Requirements'; // ✅ Add this import
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Requirements /> {/* ✅ Added Requirements section */}
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
