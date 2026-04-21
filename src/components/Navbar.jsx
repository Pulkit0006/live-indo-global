import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

import logoImg from '../assets/realigms.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logoImg} alt="IGMS Logo" className="logo-icon" style={{ height: '85px', width: 'auto' }} />
            <div className="logo-text">
              <span className="logo-title">INDO GLOBAL</span>
              <span className="logo-subtitle">Manpower Services</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-links desktop-only">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
            <NavLink to="/requirements" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Requirements</NavLink>
            <NavLink to="/send-cv" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Send CV</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
          </div>

          <div className="navbar-actions desktop-only">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="mobile-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className="mobile-link" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" className="mobile-link" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/requirements" className="mobile-link" onClick={closeMenu}>Requirements</NavLink>
        <NavLink to="/send-cv" className="mobile-link" onClick={closeMenu}>Send CV</NavLink>
        <NavLink to="/contact" className="mobile-link" onClick={closeMenu}>Contact</NavLink>
        <Link to="/contact" className="btn btn-primary mobile-btn" onClick={closeMenu}>Get in Touch</Link>
      </div>
    </header>
  );
};

export default Navbar;
