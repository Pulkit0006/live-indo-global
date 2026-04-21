import { PhoneCall, Mail } from 'lucide-react';
import './FloatingButtons.css';

// Custom WhatsApp Icon since Lucide doesn't have a distinct brand one that looks exactly like WhatsApp
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const FloatingButtons = () => {
  return (
    <div className="floating-container">
      <a href="https://wa.me/919816377660" target="_blank" rel="noopener noreferrer" className="float-btn float-wa" aria-label="WhatsApp Us">
        <WhatsAppIcon />
      </a>
      <a href="tel:+919816377660" className="float-btn float-call" aria-label="Call Us">
        <PhoneCall size={24} />
      </a>
      <a href="mailto:hr@igms.co.in" className="float-btn float-email" aria-label="Email Us">
        <Mail size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
