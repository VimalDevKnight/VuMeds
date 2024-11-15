// src/components/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css'; // External CSS file for styling
import { FaSearch, FaUpload, FaTruck } from 'react-icons/fa'; // Icons for the steps

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      {/* Section Title */}
      <h2 className="how-it-works-title">How It Works</h2>

      {/* Step-by-Step Process */}
      <div className="how-it-works-steps">
        {/* Step 1: Search for Medicines */}
        <div className="step">
          <FaSearch className="step-icon" />
          <p className="step-description">Search for medicines by name, salt, or brand.</p>
        </div>

        {/* Step 2: Upload Prescription */}
        <div className="step">
          <FaUpload className="step-icon" />
          <p className="step-description">Upload your prescription if needed.</p>
        </div>

        {/* Step 3: Enjoy Same-Day Delivery */}
        <div className="step">
          <FaTruck className="step-icon" />
          <p className="step-description">Place your order and enjoy same-day delivery.</p>
        </div>
      </div>

      {/* Optional Call-to-Action */}
      <div className="cta-button">
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default HowItWorks;
