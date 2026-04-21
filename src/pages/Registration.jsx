import React from 'react';
import { Award, FileText, CheckCircle, ShieldCheck, User } from 'lucide-react';
import './Registration.css';

const Registration = () => {
  return (
    <div className="registration-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Registration Details</h1>
          <p className="page-subtitle">Ensuring compliance, trust, and transparency</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reg-intro text-center">
            <ShieldCheck size={64} className="shield-icon mx-auto mb-4" />
            <h2 className="mb-2">A Fully Licensed & Registered Entity</h2>
            <p className="max-w-2xl mx-auto text-light">
              We operate under strict compliance with domestic and international labor laws.
              Our credentials reflect our commitment to ethical recruitment practices.
            </p>
          </div>

          <div className="cert-grid mt-4">
            <div className="cert-card" style={{ gridColumn: '1 / -1', maxWidth: '600px', margin: '0 auto' }}>
              <FileText className="cert-icon mx-auto" />
              <h3>Ministry of External Affairs, Government of India</h3>
              <p>Indo Global Manpower Services is an officially approved Overseas Recruitment Agency.</p>
              <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <span className="reg-id" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FileText size={16} /> R.C. No: B-3135/HP/PER/200/5/11139/2025</span>
                <span className="reg-id" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16} /> Proprietor: Mr. Vinay Kumar Sharma</span>
                <span className="reg-id" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={16} /> Approved Under: Section 11 of the Emigration Act, 1983</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
