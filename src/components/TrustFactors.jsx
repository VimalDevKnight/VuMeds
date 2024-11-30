// src/components/TrustFactors.jsx
import React from "react";
import "./TrustFactors.css";
import { FaStar } from "react-icons/fa";

const TrustFactors = () => {
  const testimonials = [
    {
      img: "customer1.jpg",
      quote: "Great service and fast delivery! The discount made a big difference.",
      name: "Amit S.",

    },
    {
      img: "customer2.jpg",
      quote: "Excellent support, very satisfied!",
      name: "Neha P.",
    },
    {
      img: "customer3.jpg",
      quote: "Quick delivery and great prices on medicines.",
      name: "Rohan M.",
    },
  ];

  return (
    <section className="trust-factors-section">
      <h2 className="trust-factors-title">What Our Customers Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img
              src={testimonial.img}
              alt={`Customer ${index + 1}`}
              className="testimonial-avatar"
            />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustFactors;
