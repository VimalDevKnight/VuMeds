import React from "react";
import FiltersBar from "../components/FiltersBar";
import PopularCategories from "../components/PopularCategories";
import FeaturedOffersBanner from "../components/FeaturedOffersBanner";
import ProductCategories from "../components/ProductCategories";
import PersonalizedRecommendationsSection from "../components/PersonalizedRecommendationsSection";
import CustomerRatingsAndReviewsSection from "../components/CustomerRatingsAndReviewsSection";
import RecentlyViewedProductsSection from "../components/RecentlyViewedProductsSection";
import CallToActionSection from "../components/CallToActionSection";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <FiltersBar />
      <PopularCategories />
      <FeaturedOffersBanner />
      {/* <ProductCategories /> */}
      <PersonalizedRecommendationsSection />
      <CustomerRatingsAndReviewsSection />
      <RecentlyViewedProductsSection />
      <CallToActionSection />
    </div>
  );
};

export default Shop;