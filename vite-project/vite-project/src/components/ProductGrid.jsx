import React from 'react';
import "./ProductGrid.css"

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.genericName} | {product.saltName}</p>
          <p>{product.price}</p>
          <button className="add-to-cart">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;