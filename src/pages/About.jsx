import React from 'react';
import { Shield, Building, Globe, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Indo Global Manpower Services</h1>
          <p className="page-subtitle">Overseas Recruitment Agency (Approved by Ministry of External Affairs, Government of India)</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container overflow-wrapper">
          <div className="about-grid">
            <div className="about-content">
              <h2>Who We Are</h2>
              <p>Indo Global Manpower Services (IGMS) is a professionally managed overseas recruitment agency approved by the Ministry of External Affairs, Government of India under Registration Certificate No. <strong>B-3135/HP/PER/200/5/11139/2025</strong>.</p>
              <p>IGMS has been supplying manpower since 2012 for major Oil & Gas, Civil, and Mechanical projects across the Gulf, Europe, and Asia.</p>

              <h3 className="mt-4 mb-2" style={{ color: 'var(--primary)' }}>Clients & Projects</h3>
              <ul style={{ listStylePosition: 'inside', lineHeight: '1.8' }}>
                <li><strong>Punj Lloyd, Larsen & Toubro (L&T), Galfar Oman, Medgulf Qatar</strong></li>
                <li>Myanmar–China Pipeline Project (Punj Lloyd)</li>
                <li>Tankage Project, Kuwait (Punj Lloyd)</li>
                <li>ORPIC Project, Oman (Punj Lloyd)</li>
                <li>Pipeline Projects in Kuwait & Saudi Arabia (L&T)</li>
                <li>Solar Power Plant Projects</li>
              </ul>
              <p className="mt-2">We also supply manpower to Israel, Greece, Poland, and Russia, meeting global standards and client satisfaction.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1541888045-81fedc6e6e23?auto=format&fit=crop&w=800&q=80" alt="Industrial Projects" className="rounded-img shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title text-center">Categories We Recruit</h2>
          <p className="section-subtitle text-center mb-4">Skilled and Unskilled Workers across various sectors</p>
          <div className="values-grid">
            <div className="value-item">
              <Building className="value-icon mx-auto" />
              <h4>Oil & Gas</h4>
            </div>
            <div className="value-item">
              <Briefcase className="value-icon mx-auto" />
              <h4>Mechanical</h4>
            </div>
            <div className="value-item">
              <Building className="value-icon mx-auto" />
              <h4>Civil Engineering</h4>
            </div>
            <div className="value-item">
              <Shield className="value-icon mx-auto" />
              <h4>Plant & Machinery</h4>
            </div>
          </div>
          <p className="text-center mt-4 text-light">Including operators, drivers, technicians, and field staff.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
