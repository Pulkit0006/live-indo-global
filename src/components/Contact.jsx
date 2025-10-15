import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi, I'm ${formData.name}. ${formData.message} Contact: ${formData.email}, ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919816377660?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to start your global career journey? Contact us today!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <div className="contact-icon">
                <span>📞</span>
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our team</p>
              <a href="tel:+911975297755" className="contact-link">
                01975-297755
              </a>
            </div>
            
            <div className="contact-card card">
              <div className="contact-icon">
                <span>💬</span>
              </div>
              <h3>WhatsApp</h3>
              <p>Quick response via WhatsApp</p>
              <a 
                href="https://wa.me/919816377660" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link whatsapp-link"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="contact-card card">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <h3>Email Us</h3>
              <p>Send your CV and requirements</p>
              <a href="mailto:hr@igms.co.in" className="contact-link">
                hr@igms.co.in
              </a>
              <br />
              <a href="mailto:vinayigms76@gmail.com" className="contact-link">
                vinayigms76@gmail.com
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form card">
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you via WhatsApp</p>
              
              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your requirements or questions"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Global Career?</h3>
            <p>Join thousands of successful professionals who have found their dream jobs through our services</p>
            <div className="cta-buttons">
              <a href="tel:+911975297755" className="btn btn-primary btn-large">
                Call Now
              </a>
              <a 
                href="https://wa.me/919816377660?text=Hi, I'm interested in your manpower services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-large"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
