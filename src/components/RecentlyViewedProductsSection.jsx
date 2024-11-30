import React, { useEffect, useState } from 'react';

const RecentlyViewedProductsSection = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    // Fetch the product IDs from localStorage
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];

    // Fetch product details for the recently viewed products
    if (viewedProducts.length > 0) {
      fetchProductsByIds(viewedProducts).then(setRecentlyViewed);
    }
  }, []);

  const fetchProductsByIds = async (ids) => {
    // Assuming you're fetching data from an API or database
    const response = await fetch(`/api/products?ids=${ids.join(',')}`);
    const data = await response.json();
    return data;
  };

  return (
    <div className="recently-viewed-section">
      {recentlyViewed.length > 0 ? (
        <div>
          <h3>Your Recently Viewed Items</h3>
          <div className="recently-viewed-products">
            {recentlyViewed.map(product => (
              <div key={product.id} className="recently-viewed-product-card">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No recently viewed products.</p>
      )}
    </div>
  );
};

export default RecentlyViewedProductsSection;