import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Speak directly with our team to discuss your manpower needs.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <h2 className="mb-4 text-primary">Get In Touch</h2>
              <p className="mb-4 text-light">
                Indo Global Manpower Services (IGMS)<br/>
                Connecting skilled professionals with global opportunities.
              </p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div className="info-text">
                    <h4>Office Address</h4>
                    <p>SCO 1 & 2, 3rd Floor, Jiwan Market<br/>Una, Himachal Pradesh – 174303, India</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="info-text">
                    <h4>Phone Numbers</h4>
                    <p>+91 98163 77660<br/>01975-297755</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div className="info-text">
                    <h4>Email Address</h4>
                    <p>hr@igms.co.in<br/>vinayigms76@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><Clock size={24} /></div>
                  <div className="info-text">
                    <h4>Office Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <form className="contact-form">
                <h3 className="mb-4">Send Us a Message</h3>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map pointing to Una HP */}
      <section className="map-section">
        <iframe 
          title="Office Location"
          src="https://maps.google.com/maps?q=Jiwan%20Market,%20Una,%20Himachal%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
