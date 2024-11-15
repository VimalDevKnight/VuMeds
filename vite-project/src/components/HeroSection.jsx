import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="hero-title">Exclusive Discounts on Medicines</h5>
            <p className="hero-description">Up to 30% off on all products</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/163944/pexels-photo-163944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="hero-title">Same-Day Delivery</h5>
            <p className="hero-description">Quick and reliable delivery at your doorstep</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="hero-title">Upload Your Prescription</h5>
            <p className="hero-description">Easily order medicines by uploading your prescription</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;
