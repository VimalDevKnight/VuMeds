import React from "react";
import "./PopularCategories.css";
import { FaCapsules, FaHeartbeat, FaBaby, FaLeaf, FaLungs } from "react-icons/fa";

const categories = [
  { name: "Pain Relief", icon: <FaCapsules /> },
  { name: "Diabetes Care", icon: <FaHeartbeat /> },
  { name: "Baby Care", icon: <FaBaby /> },
  { name: "Vitamins & Supplements", icon: <FaLeaf /> },
  { name: "Cold & Flu Medicines", icon: <FaLungs /> },
];

const PopularCategories = () => {
  return (
    <section className="popular-categories-section">
      <h2 className="categories-heading">Shop by Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{category.icon}</div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;