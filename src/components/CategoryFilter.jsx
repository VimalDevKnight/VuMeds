import React from 'react';
import "./CategoryFilter.css"

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-filters">
      {categories.map((category) => (
        <div key={category} className="category-option">
          <input 
            type="checkbox" 
            id={category} 
            onChange={(e) => onSelectCategory(category, e.target.checked)} 
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;