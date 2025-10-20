import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌍',
      title: 'International Placements',
      description: 'We provide skilled manpower for international markets across various industries including construction, healthcare, IT, and hospitality.'
    },
    {
      icon: '👨‍🔧',
      title: 'Oil & Gas Workforce',
      description: 'Specialized recruitment for Oil & Gas projects with safety-compliant, experienced workforce across upstream and downstream.'
    },
    {
      icon: '👷',
      title: 'Skilled & Unskilled Workers',
      description: 'From certified professionals to reliable general workforce — operators, riggers, helpers, drivers, technicians, and more.'
    },
    {
      icon: '📋',
      title: 'Documentation Support',
      description: 'Complete assistance with visa processing, work permits, and all necessary documentation for international employment.'
    },
    {
      icon: '🤝',
      title: 'Employer Services',
      description: 'We help employers find the right talent for their projects with our comprehensive recruitment and placement services.'
    },
    {
      icon: '✈️',
      title: 'Relocation Support',
      description: 'End-to-end support for workers including travel arrangements, accommodation assistance, and initial settlement support.'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive manpower solutions tailored to meet global workforce demands
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card fade-in-up">
              <div className="service-icon">
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to Start Your Global Career?</h3>
          <p>Contact us today to explore opportunities worldwide</p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="https://wa.me/919816377660" className="btn btn-whatsapp">
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
