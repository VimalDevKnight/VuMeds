import React from "react";
import { motion } from "framer-motion";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="cta-heading">Ready to Shop?</h2>
      <p className="cta-subheading">
        Explore our wide range of medicines and health products at discounted prices.
      </p>
      <div className="cta-buttons">
        <motion.button
          className="primary-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Shopping
        </motion.button>
        <motion.button
          className="secondary-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CallToAction;