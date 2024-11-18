import React from "react";
import { motion } from "framer-motion";
import "./FeaturedBrands.css";
import brand1 from "../assets/Logos/abbott.png";
import brand2 from "../assets/Logos/mankind.png";
import brand3 from "../assets/Logos/Sunpharma.png";
import brand4 from "../assets/Logos/surya.png";
import brand5 from "../assets/Logos/Cipla.png";


const brands = [brand1, brand2, brand3, brand4, brand5];

const FeaturedBrands = () => {
  return (
    <motion.section
      className="featured-brands-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="brands-heading">We Deal With Trusted Brands</h2>
      <p className="brands-subheading">
        Partnering with the best to bring you quality healthcare products.
      </p>
      <div className="brands-carousel">
        {brands.map((brand, index) => (
          <motion.img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="brand-logo"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedBrands;