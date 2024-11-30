import React from "react";
import PropTypes from "prop-types"; // For prop validation
import "./ProductCard.css"; // Import the styles
import { FaShoppingCart } from "react-icons/fa"; // For the Add to Cart icon
import { Link } from "react-router-dom"; // For "View Details" linking

const ProductCard = ({ id, name, image, price, discountPrice, description, onAddToCart }) => {
  const discounted = discountPrice && discountPrice < price;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">
          {discounted ? (
            <>
              <span className="discount-price">₹{discountPrice}</span>
              <span className="original-price">₹{price}</span>
            </>
          ) : (
            <span className="price">₹{price}</span>
          )}
        </div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => onAddToCart(id)}>
            <FaShoppingCart /> Add to Cart
          </button>
          <Link to={`/product/${id}`} className="view-details-link">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPrice: PropTypes.number,
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
