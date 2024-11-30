import React from "react";
import { motion } from "framer-motion";
import { FaPills, FaLeaf, FaShower, FaBaby, FaRegSmile } from "react-icons/fa";
import "./ProductCategories.css";

const categories = [
  { name: "Pain Relief", icon: <FaPills /> },
  { name: "Vitamins & Supplements", icon: <FaLeaf /> },
  { name: "Personal Care", icon: <FaShower /> },
  { name: "Baby Care", icon: <FaBaby /> },
  { name: "Skin Care", icon: <FaRegSmile /> },
];

const ProductCategories = () => {
  return (
    <section className="product-categories-section">
      <h2 className="categories-heading">Shop by Category</h2>
      <p className="categories-subheading">
        Find medicines easily by choosing from our categories.
      </p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="category-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="category-icon">{category.icon}</div>
            <p className="category-name">{category.name}</p>
          </motion.div>
        ))}
      </div>
      <button className="explore-btn">Explore All Categories</button>
    </section>
  );
};

export default ProductCategories;