import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Requirements from './pages/Requirements';
import SendCV from './pages/SendCV';
import Contact from './pages/Contact';
import Registration from './pages/Registration';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/send-cv" element={<SendCV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
