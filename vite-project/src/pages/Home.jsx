import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories'; // Added categories section
import FeaturedProducts from '../components/FeaturedProducts';
import CallToAction from '../components/CallToAction'; // Added CTA
import TrustFactors from '../components/TrustFactors';
import SearchBarSection from '../components/SearchBarSection';
import FeaturedBrands from '../components/FeaturedBrands'; // Added brands section

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchBarSection />
      <ProductCategories /> {/* Displays the categories section */}
      <FeaturedProducts /> {/* Showcases featured products */}
      <CallToAction /> {/* Encourages users to take immediate action */}
      <TrustFactors /> {/* Highlights trust factors */}
      <FeaturedBrands /> {/* Displays featured brands */}
    </>
  );
};

export default Home;