import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Indo Global Manpower Services (IGMS)</h3>
            <p>
              Connecting skilled professionals with global opportunities. 
              Your trusted partner for international manpower solutions.
            </p>
            <div className="social-links">
              <a href="https://wa.me/916230233660" target="_blank" rel="noopener noreferrer">
                <span>💬</span> WhatsApp
              </a>
              <a href="tel:+911975297755">
                <span>📞</span> Call
              </a>
              <a href="mailto:hr@igms.co.in">
                <span>📧</span> Email
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>International Placements</li>
              <li>Skilled Workers</li>
              <li>Documentation Support</li>
              <li>Employer Services</li>
              <li>Relocation Support</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><strong>📍 Address:</strong></p>
              <p>SCO 1 & 2, 3rd Floor, Jiwan Market, Una, Himachal Pradesh – 174303, India</p>
              <p><strong>📞 Phone:</strong></p>
              <p>+91 98163 77660 / 01975-297755</p>
              <p><strong>💬 WhatsApp:</strong></p>
              <p>+91-98163 77660</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Indo Global Manpower Services. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
