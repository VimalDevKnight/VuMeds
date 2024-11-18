import React from "react";
import "./FeaturedOffersBanner.css";

const offers = [
  "Flat 30% off on Vitamins!",
  "Buy 2 Get 1 Free on Painkillers!",
  "Free Delivery on Orders Above ₹500!",
  "Up to 50% Off on Diabetes Care Products!",
];

const FeaturedOffersBanner = () => {
  return (
    <section className="featured-offers-section">
      <div className="offers-banner">
        <div className="offers-content">
          {offers.map((offer, index) => (
            <div className="offer" key={index}>
              {offer}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffersBanner;