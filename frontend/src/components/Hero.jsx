import React from 'react';
import './Hero.css'; // Optional: extra styles if needed

const Hero = () => {
  return (
    <section className="hero-section section" data-aos="fade-up">
      <div className="hero-content">
        <h1>Powering Your Life with <span className="highlight">Solar</span> & <span className="highlight">Style</span></h1>
        <p>Your trusted partner in clean energy and elegant event decoration across Gujarat.</p>
        <a href="/services" className="explore-btn">Explore Our Services</a>
      </div>
    </section>
  );
};

export default Hero;
