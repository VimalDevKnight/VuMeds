import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import HowItWorks from '../components/HowItWorks';
import TrustFactors from '../components/TrustFactors';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <TrustFactors />
    </>
  );
};

export default Home;
