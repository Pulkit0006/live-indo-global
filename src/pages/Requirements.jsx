import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Requirements.css';

import req1Img from '../assets/req1.jpeg';
import req2Img from '../assets/req2.jpeg';
import req3Img from '../assets/requirement3.jpeg';

const requirementFlyers = [
  {
    id: 1,
    title: "L&T UAE - TIIC Project",
    image: req1Img
  },
  {
    id: 2,
    title: "L&T Saudi Arabia - Delhi Interview",
    image: req2Img
  },
  {
    id: 3,
    title: "L&T Saudi Arabia",
    image: req3Img
  }
];

const Requirements = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <div className="requirements-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Current Requirements</h1>
          <p className="page-subtitle">Explore our latest global opportunities</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="pamphlets-section">
            <div className="pamphlet-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {requirementFlyers.map((flyer) => (
                <div key={flyer.id} className="pamphlet-card" onClick={() => setExpandedImage(flyer.image)}>
                  <div className="pamphlet-img-container">
                    <img 
                      src={flyer.image} 
                      alt={flyer.title} 
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = `https://placehold.co/600x800/e2e8f0/475569?text=Requirement+${flyer.id}`;
                      }} 
                    />
                    <div className="click-to-enlarge">Click to Enlarge</div>
                  </div>
                  <div className="pamphlet-info">
                    <h4>{flyer.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {expandedImage && (
        <div className="lightbox-overlay" onClick={() => setExpandedImage(null)}>
          <button className="lightbox-close" onClick={() => setExpandedImage(null)}>
            <X size={32} />
          </button>
          <img 
            src={expandedImage} 
            alt="Enlarged Requirement Flyer" 
            className="lightbox-image" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Requirements;
