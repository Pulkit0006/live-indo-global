import React from 'react';
import { MessageCircle, Mail, FileText } from 'lucide-react';
import './SendCV.css';

const SendCV = () => {
  return (
    <div className="sendcv-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Send Your CV</h1>
          <p className="page-subtitle">Take the next step in your career journey</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container form-container">
          <div className="cv-form-wrapper text-center" style={{ padding: '3rem 2rem' }}>
            <FileText size={48} className="mx-auto mb-4 text-primary" style={{ opacity: 0.8 }} />
            <h2 className="mb-4 text-primary">Submit Your Application</h2>
            <p className="mb-4 text-light max-w-2xl mx-auto">
              Ready to apply for our open roles? For the fastest response, please send your up-to-date CV directly to our HR team via email or WhatsApp.
            </p>
            
            <div className="direct-contact-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '2rem auto 0 auto' }}>
              <a 
                href="https://wa.me/919816377660" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ padding: '1rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
              >
                <MessageCircle size={24} /> Submit via WhatsApp
              </a>
              
              <a 
                href="mailto:hr@igms.co.in" 
                className="btn btn-primary"
                style={{ padding: '1rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', backgroundColor: '#0f172a' }}
              >
                <Mail size={24} /> Submit via Email
              </a>
            </div>
            
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0', marginTop: '3rem' }}>
              <p className="text-sm text-light">
                <strong>Note:</strong> Please mention the role you are applying for and your total years of experience when sending the message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SendCV;
