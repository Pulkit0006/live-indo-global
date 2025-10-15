import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Indo Global Manpower Services</h2>
          <p className="section-subtitle">Overseas Recruitment Agency (Approved by Ministry of External Affairs, Government of India)</p>
        </div>

        <div className="about-grid">
          <div className="about-card card">
            <h3>Who We Are</h3>
            <p>
              Indo Global Manpower Services (IGMS), established in 2025, is a professionally managed overseas recruitment agency approved by the Ministry of External Affairs, Government of India under Registration Certificate No. B-3135/HP/PER/100/5/11139/2025.
            </p>
            <p>
              Though officially registered in 2025, IGMS has been supplying manpower since 2012 for major Oil & Gas, Civil, and Mechanical projects across the Gulf, Europe, and Asia.
            </p>
          </div>

          <div className="about-card card">
            <h3>Clients & Projects</h3>
            <ul className="about-list">
              <li>Punj Lloyd, Larsen & Toubro (L&T), Galfar Oman, Medgulf Qatar</li>
              <li>Myanmar–China Pipeline Project (Punj Lloyd)</li>
              <li>Tankage Project, Kuwait (Punj Lloyd)</li>
              <li>ORPIC Project, Oman (Punj Lloyd)</li>
              <li>Pipeline Projects in Kuwait & Saudi Arabia (L&T)</li>
              <li>Solar Power Plant Projects</li>
            </ul>
            <p>
              We also supply manpower to Israel, Greece, Poland, and Russia, meeting global standards and client satisfaction.
            </p>
          </div>

          <div className="about-card card">
            <h3>Categories We Recruit</h3>
            <p>
              Mechanical, Civil, and Plant & Machinery (P&M) — operators, drivers, technicians, and other skilled professionals.
            </p>
          </div>
        </div>

        <div className="about-grid narrow">
          <div className="about-card card">
            <h3>Mission</h3>
            <p>
              To deliver ethical, transparent, and reliable recruitment solutions that connect skilled Indian manpower with the right international employers while maintaining full compliance with global standards.
            </p>
          </div>
          <div className="about-card card">
            <h3>Vision</h3>
            <p>
              To become one of the most trusted and recognized global leaders in manpower recruitment and human resource solutions, fostering long-term partnerships with our clients and empowering Indian professionals worldwide.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card card">
            <h3>Core Values</h3>
            <ul className="about-list two-col">
              <li><strong>Integrity</strong>: Honesty and ethics in all dealings.</li>
              <li><strong>Professionalism</strong>: Consistent quality and competence.</li>
              <li><strong>Transparency</strong>: Clear and compliant processes.</li>
              <li><strong>Quality</strong>: Focus on skilled, qualified manpower.</li>
              <li><strong>Reliability</strong>: Dependable and punctual services.</li>
              <li><strong>Client Satisfaction</strong>: Exceeding expectations.</li>
            </ul>
          </div>

          <div className="about-card card">
            <h3>Registration Details</h3>
            <ul className="about-list">
              <li><strong>Approved by</strong>: Ministry of External Affairs, Government of India</li>
              <li><strong>R.C. No.</strong>: B-3135/HP/PER/100/5/11139/2025</li>
              <li><strong>Date of Issue</strong>: 04 September 2025</li>
              <li><strong>Valid Until</strong>: 23 June 2030</li>
              <li><strong>Authorized Recruitment Limit</strong>: 100 Workers</li>
              <li><strong>Proprietor</strong>: Mr. Vinay Kumar Sharma</li>
              <li><strong>Approved Under</strong>: Section 11 of the Emigration Act, 1983</li>
            </ul>
          </div>
        </div>

        <div className="about-cta card">
          <h3>Send Your CV</h3>
          <p>Share your resume with us and we will reach out with suitable opportunities.</p>
          <div className="cta-actions">
            <a href="mailto:hr@igms.co.in?subject=CV Submission - IGMS&body=Please find my CV attached." className="btn btn-primary">Email: hr@igms.co.in</a>
            <a href="mailto:vinayigms76@gmail.com?subject=CV Submission - IGMS&body=Please find my CV attached." className="btn btn-primary">Email: vinayigms76@gmail.com</a>
            <a href="https://wa.me/919816377660?text=Hello, I want to submit my CV" className="btn btn-whatsapp">WhatsApp: +91 98163 77660</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
