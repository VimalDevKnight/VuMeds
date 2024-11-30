import React from 'react';
import "./PriceFilter.css"

const PriceFilter = ({ onChangePriceRange }) => {
  return (
    <div className="price-filter">
      <label>Price Range</label>
      <input 
        type="range" 
        min="0" 
        max="1000" 
        onChange={(e) => onChangePriceRange(e.target.value)} 
      />
    </div>
  );
};

export default PriceFilter;