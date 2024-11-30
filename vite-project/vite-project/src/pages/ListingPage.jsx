import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import ProductGrid from '../components/ProductGrid';

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(['Painkillers', 'Antibiotics', 'Vitamins']);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);

  useEffect(() => {
    // Fetch products from an API or database
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (query) => {
    const results = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.genericName.toLowerCase().includes(query.toLowerCase()) ||
      product.saltName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const handleSelectCategory = (category, isChecked) => {
    const updatedCategories = isChecked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);

    setSelectedCategories(updatedCategories);

    const results = products.filter(product => 
      updatedCategories.every(c => product.categories.includes(c))
    );
    setFilteredProducts(results);
  };

  const handlePriceRangeChange = (price) => {
    setPriceRange(price);
    const results = products.filter(product => product.price <= price);
    setFilteredProducts(results);
  };

  return (
    <div className="searchable-product-listing-page">
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onSelectCategory={handleSelectCategory} />
      <PriceFilter onChangePriceRange={handlePriceRangeChange} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ListingPage;