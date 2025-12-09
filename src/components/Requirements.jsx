// src/components/Requirements.jsx
import React, { useState } from "react";
import "./Requirements.css";

import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";

const Requirements = () => {
  const [previewSrc, setPreviewSrc] = useState(null);

  const openPreview = (src) => {
    setPreviewSrc(src);
  };

  const closePreview = () => {
    setPreviewSrc(null);
  };

  return (
    <section id="requirements" className="requirements-section">
      <div className="requirements-container">
        <div className="requirements-header">
          <h2>Requirements</h2>
          <p className="requirements-intro">
            To ensure a smooth experience, please review the key requirements below before getting started.
          </p>
        </div>

        {/* 🔹 Two Photos + Short Descriptions */}
        <div className="requirements-grid">
          <div className="requirement-card">
            <button
              className="requirement-image-wrapper"
              onClick={() => openPreview(photo1)}
              type="button"
            >
              <img
                src={photo1}
                alt="Requirement illustration 1"
                className="requirement-image"
              />
            </button>
            <h3>Basic Eligibility</h3>
            <p>
              Make sure you meet the basic criteria such as age, valid identification, and any prerequisites
              related to our services.
            </p>
          </div>

          <div className="requirement-card">
            <button
              className="requirement-image-wrapper"
              onClick={() => openPreview(photo2)}
              type="button"
            >
              <img
                src={photo2}
                alt="Requirement illustration 2"
                className="requirement-image"
              />
            </button>
            <h3>Documentation &amp; Details</h3>
            <p>
              Prepare all necessary documents and information in advance so that verification and processing
              can be completed quickly.
            </p>
          </div>
        </div>

        {/* 🔹 Summary Section */}
        <div className="requirements-summary">
          <h3>Summary of Requirements</h3>
          <p>Before proceeding, please ensure you:</p>
          <ul>
            <li>Meet the minimum eligibility criteria for our services.</li>
            <li>Have valid and up-to-date identification or supporting documents.</li>
            <li>Provide accurate contact details so we can reach you if needed.</li>
            <li>Understand the basic process, timelines, and any fees (if applicable).</li>
          </ul>
          <p>
            Having these requirements ready will help us serve you faster and create a smoother overall experience.
          </p>
        </div>
      </div>

      {/* 🔍 Image Preview Modal */}
      {previewSrc && (
        <div className="image-preview-backdrop" onClick={closePreview}>
          <div
            className="image-preview-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-preview-close"
              onClick={closePreview}
              type="button"
            >
              ✕
            </button>
            <img src={previewSrc} alt="Preview" className="image-preview-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Requirements;
