// src/components/FeaturedProducts.jsx
import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Paracetamol Tablets',
      originalPrice: 70,
      discountedPrice: 50,
      discountPercentage: 30,
      imageUrl: 'https://phabcart.imgix.net/cdn/scdn/images/uploads/m0459_web.jpg?auto=compress&lossless=1&w=385',
    },
    {
      name: 'Aspirin Tablets',
      originalPrice: 120,
      discountedPrice: 90,
      discountPercentage: 25,
      imageUrl: 'https://www.maynepharma.com/wp-content/webp-express/webp-images/uploads/2022/05/Mayne-Pharma-Aspirin.png.webp',
    },
    {
      name: 'Ibuprofen Capsules',
      originalPrice: 150,
      discountedPrice: 110,
      discountPercentage: 20,
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322447105/UJ/PT/FU/190581688/ibuprofen-tablets-i-p-400-mg.png',
    },
    {
      name: 'Cough Syrup',
      originalPrice: 200,
      discountedPrice: 170,
      discountPercentage: 15,
      imageUrl: 'https://content.jdmagicbox.com/quickquotes/images_main/-1na0ga49.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit',
    },
  ];

  return (
    <section className="featured-products">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <span className="discount-badge">{product.discountPercentage}% Off</span>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="discounted-price">₹{product.discountedPrice}</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
