import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <Globe size={28} />
            <span className="logo-title">INDO GLOBAL</span>
          </div>
          <p className="footer-desc">
            Indo Global Manpower Services (IGMS) connects skilled professionals with global opportunities. Your trusted partner for international manpower solutions.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/18GqrZ6xy4/" target="_blank" rel="noopener noreferrer" className="social-icon"><FacebookIcon /></a>
            <a href="#" className="social-icon"><TwitterIcon /></a>
            <a href="#" className="social-icon"><LinkedinIcon /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Location</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/registration">Registration Details</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Info</h4>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" style={{marginTop: '4px'}} />
              <span>SCO 1 & 2, 3rd Floor, Jiwan Market<br/>Una, Himachal Pradesh – 174303, India</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 98163 77660<br/>01975-297755</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>hr@igms.co.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Indo Global Manpower Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
