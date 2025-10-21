import React from 'react';
import './Services.css';
import oilImage from '../assets/oil.jpg';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'International Placements',
      description: 'We provide skilled manpower for international markets across various industries including construction, healthcare, IT, and hospitality.'
    },
    {
      image: oilImage,
      title: 'Oil & Gas Workforce',
      description: 'Specialized recruitment for oil and gas industry with certified, experienced professionals for drilling, refining, petrochemical, and offshore operations.'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Skilled & Unskilled Workers',
      description: 'From certified professionals to reliable general workforce — operators, riggers, helpers, drivers, technicians, and more.'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Documentation Support',
      description: 'Complete assistance with visa processing, work permits, and all necessary documentation for international employment.'
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Employer Services',
      description: 'We help employers find the right talent for their projects with our comprehensive recruitment and placement services.'
    },
    {
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Pan India Reach',
      description: 'IGMS has a pan India network and can mobilize workers from anywhere in India.'
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
                <img src={service.image} alt={service.title} className="service-photo" />
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
