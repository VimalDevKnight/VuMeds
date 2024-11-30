import React from "react";
import "./CallToActionSection.css";

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Save More with VuMeds!</h2>
        <p className="cta-subheading">
          Sign up for exclusive discounts and personalized offers.
        </p>
        <button className="cta-btn">Create Account</button>
      </div>
    </section>
  );
};

export default CallToActionSection;