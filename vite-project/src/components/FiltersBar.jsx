import React from "react";
import "./FiltersBar.css";
import { FaFilter, FaSort } from "react-icons/fa";

const FiltersBar = () => {
  return (
    <div className="filters-bar sticky-bar">
      <div className="filters-section">
        <FaFilter className="filter-icon" />
        <select className="filter-dropdown">
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
          <option value="same-day">Same Day Delivery</option>
          <option value="next-day">Next Day Delivery</option>
        </select>
      </div>
      <div className="sorting-section">
        <FaSort className="sort-icon" />
        <select className="sort-dropdown">
          <option value="popularity">Popularity</option>
          <option value="discounts">Highest Discounts</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;