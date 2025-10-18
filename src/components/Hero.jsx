import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Global Manpower Solutions
              <span className="highlight"> Worldwide</span>
            </h1>
            <p className="hero-subtitle">
              Indo Global Manpower Services provides professional manpower solutions 
              across the globe. We connect skilled and unskilled workers with opportunities worldwide, 
              ensuring quality service and reliable partnerships.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-large">
                Get Started
              </a>
              <a href="https://wa.me/919816377660" className="btn btn-whatsapp btn-large">
                WhatsApp Us
              </a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Successful Placements</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3>14+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
