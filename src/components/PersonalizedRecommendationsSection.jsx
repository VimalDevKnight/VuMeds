import React from "react";
import "./PersonalizedRecommendationsSection.css";

const recommendedProducts = [
  { id: 1, name: "Diabetes Care Kit", price: "₹500" },
  { id: 2, name: "Vitamin C Tablets", price: "₹150" },
  { id: 3, name: "Pain Reliever", price: "₹50" },
  // Add more personalized product objects here
];

const PersonalizedRecommendationsSection = () => {
  return (
    <section className="personalized-recommendations">
      <h2 className="recommendations-heading">Recommended for You</h2>
      <p className="recommendations-subheading">
        Based on your recent searches and orders.
      </p>
      <div className="product-carousel">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalizedRecommendationsSection;