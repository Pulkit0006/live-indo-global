import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Office Location</h2>
          <p className="section-subtitle">
            Visit us at our headquarters in Una, Himachal Pradesh
          </p>
        </div>
        
        <div className="location-content">
          <div className="location-info">
            <div className="location-card card">
              <div className="location-icon">
                <span>📍</span>
              </div>
              <h3>Office Address</h3>
              <div className="address-details">
                <p><strong>Indo Global Manpower Services (IGMS)</strong></p>
                <p>SCO 1 & 2, 3rd Floor, Jiwan Market</p>
                <p>Una, Himachal Pradesh – 174303, India</p>
              </div>
            </div>
            
            <div className="location-card card">
              <div className="location-icon">
                <span>🕒</span>
              </div>
              <h3>Office Hours</h3>
              <div className="hours-details">
                <p><strong>Monday - Saturday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            
            <div className="location-card card">
              <div className="location-icon">
                <span>🌍</span>
              </div>
              <h3>Why Una, Himachal Pradesh?</h3>
              <div className="location-benefits">
                <p>• Strategic location in Northern India</p>
                <p>• Easy access to major cities</p>
                <p>• Beautiful and peaceful environment</p>
                <p>• Close to international borders</p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=SCO%201%20%26%202,%203rd%20Floor,%20Jiwan%20Market,%20Una,%20Himachal%20Pradesh%20%E2%80%93%20174303,%20India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indo Global Manpower Services - Office Location"
            ></iframe>
            <div className="map-overlay">
              <div className="map-content">
                <h3>📍 Una, Himachal Pradesh</h3>
                <p>Our office is located in the beautiful state of Himachal Pradesh, known for its scenic beauty and strategic location.</p>
                <div className="map-actions">
                  <a 
                    href="https://www.google.com/maps?q=SCO%201%20%26%202,%203rd%20Floor,%20Jiwan%20Market,%20Una,%20Himachal%20Pradesh%20%E2%80%93%20174303,%20India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on Google Maps
                  </a>
                  <a 
                    href="https://wa.me/919816377660?text=Hi,%20please%20share%20directions%20to%20SCO%201%20%26%202,%203rd%20Floor,%20Jiwan%20Market,%20Una,%20Himachal%20Pradesh%20%E2%80%93%20174303,%20India" 
                    className="btn btn-whatsapp"
                  >
                    WhatsApp Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
