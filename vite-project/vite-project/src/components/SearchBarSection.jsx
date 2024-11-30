import React from "react";
import { motion } from "framer-motion";
import "./SearchBarSection.css";

const SearchBarSection = () => {
  return (
    <motion.section
      className="search-bar-section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="search-heading">Search for Your Medicines</h1>
      <p className="search-subheading">
        Find medicines by salt, generic, or brand name in seconds.
      </p>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Type salt name, generic name, or brand..."
        />
        <button className="search-button">Search</button>
      </div>
      {/* <div className="search-options">
        <button className="search-option active">Salt Name</button>
        <button className="search-option">Generic Name</button>
        <button className="search-option">Brand Name</button>
      </div> */}
    </motion.section>
  );
};

export default SearchBarSection;