import React, { useState } from "react";
import "./DynamicProductGridWithTabs.css";

const tabs = [
  { name: "All Medicines", category: "all" },
  { name: "Best Sellers", category: "best-sellers" },
  { name: "New Arrivals", category: "new-arrivals" },
  { name: "Top Discounts", category: "top-discounts" },
];

const products = [
  { id: 1, name: "Paracetamol", price: "₹30", category: "all" },
  { id: 2, name: "Diabetes Care Kit", price: "₹200", category: "best-sellers" },
  { id: 3, name: "Vitamin C Tablets", price: "₹150", category: "new-arrivals" },
  { id: 4, name: "Pain Reliever", price: "₹50", category: "top-discounts" },
  // Add more product objects here
];

const DynamicProductGridWithTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = products.filter(
    (product) => product.category === activeTab || activeTab === "all"
  );

  return (
    <section className="dynamic-product-grid">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${activeTab === tab.category ? "active" : ""}`}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicProductGridWithTabs;