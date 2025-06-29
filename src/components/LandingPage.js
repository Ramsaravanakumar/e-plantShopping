import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <img 
          src="/images/hero-bg.jpg" 
          alt="House Plant Store"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to Green Haven</h1>
          <p>Your one-stop destination for beautiful and healthy houseplants</p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
