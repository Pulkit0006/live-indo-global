import React from 'react';
import { Globe, Users, Briefcase, FileText, Building, MapPin, CheckCircle } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    icon: <Globe size={40} />,
    title: 'International Placements',
    desc: 'We provide skilled manpower for international markets across various industries including construction, healthcare, IT, and hospitality.'
  },
  {
    icon: <Building size={40} />,
    title: 'Oil & Gas Workforce',
    desc: 'Specialized recruitment for the oil and gas industry with certified, experienced professionals for drilling, refining, petrochemical, and offshore operations.'
  },
  {
    icon: <Users size={40} />,
    title: 'Skilled & Unskilled Workers',
    desc: 'From certified professionals to a reliable general workforce — operators, riggers, helpers, drivers, technicians, and more.'
  },
  {
    icon: <FileText size={40} />,
    title: 'Documentation Support',
    desc: 'Complete assistance with visa processing, work permits, and all necessary documentation for international employment.'
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Employer Services',
    desc: 'We help employers find the right talent for their projects with our comprehensive recruitment and placement services.'
  },
  {
    icon: <MapPin size={40} />,
    title: 'Pan India Reach',
    desc: 'IGMS has a extensive pan-India network and infrastructure, enabling us to mobilize workers quickly from anywhere in India.'
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Comprehensive solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="services-grid">
            {servicesList.map((srv, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
