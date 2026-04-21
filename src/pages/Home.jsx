import React from 'react';
import './Home.css';
import { ShieldCheck, CheckCircle, Search, Globe2, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">Indo Global Manpower Services (IGMS)</h1>
          <p className="hero-subtitle">Connecting skilled professionals with global opportunities. Your trusted partner for international manpower solutions.</p>
          <div className="hero-cta">
            <a href="tel:+919816377660" className="btn btn-primary">Call Now</a>
            <a href="https://wa.me/919816377660" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">WhatsApp Now</a>
            <a href="mailto:hr@igms.co.in" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Email Now</a>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="section section-light intro-section">
        <div className="container text-center">
          <h2 className="section-title">Global Manpower Solutions Worldwide</h2>
          <p className="section-subtitle">
            Indo Global Manpower Services provides professional manpower solutions across the globe. We connect skilled and unskilled workers with opportunities worldwide, ensuring quality service and reliable partnerships.
          </p>
          <div className="stats-grid mt-4">
            <div className="stat-card">
              <h3>5000+</h3>
              <p>Successful Placements</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-card">
              <h3>14+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title text-center">Why Indo Global?</h2>
          <div className="why-grid mt-4" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
            <div className="why-card" style={{padding: '30px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center'}}>
              <ShieldCheck size={48} className="value-icon mx-auto mb-2 text-primary" style={{margin: '0 auto 15px', color: 'var(--primary)'}} />
              <h4 style={{marginBottom: '10px', fontSize: '1.25rem'}}>MEA-Approved</h4>
              <p style={{color: 'var(--text-light)'}}>Approved recruitment agency with proven compliance and high standards.</p>
            </div>
            <div className="why-card" style={{padding: '30px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center'}}>
              <Award size={48} className="value-icon mx-auto mb-2" style={{margin: '0 auto 15px', color: 'var(--secondary)'}} />
              <h4 style={{marginBottom: '10px', fontSize: '1.25rem'}}>5000+ Placements</h4>
              <p style={{color: 'var(--text-light)'}}>A long-standing history of successful international placements globally.</p>
            </div>
            <div className="why-card" style={{padding: '30px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center'}}>
              <Globe2 size={48} className="value-icon mx-auto mb-2" style={{margin: '0 auto 15px', color: 'var(--accent)'}} />
              <h4 style={{marginBottom: '10px', fontSize: '1.25rem'}}>Strong Sector Presence</h4>
              <p style={{color: 'var(--text-light)'}}>Deep expertise in Oil & Gas, Civil, Mechanical, and Plant & Machinery sectors.</p>
            </div>
            <div className="why-card" style={{padding: '30px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center'}}>
              <CheckCircle size={48} className="value-icon mx-auto mb-2" style={{margin: '0 auto 15px', color: 'var(--success)'}} />
              <h4 style={{marginBottom: '10px', fontSize: '1.25rem'}}>Client-First Approach</h4>
              <p style={{color: 'var(--text-light)'}}>Transparent processes, reliable execution, and rapidly fast mobilization.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
