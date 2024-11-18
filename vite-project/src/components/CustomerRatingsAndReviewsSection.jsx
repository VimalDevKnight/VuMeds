import React from "react";
import "./CustomerRatingsAndReviewsSection.css";

const reviews = [
  { id: 1, product: "Paracetamol Tablets", rating: 5, review: "Very effective and delivered on time!" },
  { id: 2, product: "Vitamin C Tablets", rating: 4, review: "Good quality, great for immunity." },
  { id: 3, product: "Pain Reliever", rating: 5, review: "Helps relieve pain instantly!" },
  // Add more reviews here
];

const CustomerRatingsAndReviewsSection = () => {
  return (
    <section className="customer-reviews">
      <h2 className="reviews-heading">What Our Customers Say</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-product">{review.product}</p>
            <div className="review-rating">
              {"⭐".repeat(review.rating)} ({review.rating}/5)
            </div>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerRatingsAndReviewsSection;