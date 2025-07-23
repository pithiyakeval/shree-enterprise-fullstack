import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import solar from "../assets/home/solar-thumb.jpg"
import mandap from "../assets/home/mandap-thumb.jpg"

import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

import './ServicesPage.css';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      {/* 🔷 Hero Section */}
      <h2 className="services-heading" data-aos="fade-up">Our Services</h2>
      <p className="services-intro" data-aos="fade-up" data-aos-delay="100">
        At <strong>Shree Enterprise</strong>, we proudly offer two trusted services: 
        <strong> Solar Energy Solutions</strong> for rural homes & businesses, and
        <strong> Mandap Decoration Services</strong> for your special occasions.
      </p>

      {/* 🔶 Cards Section */}
      <div className="service-card-container">
        {/* Solar Card */}
        <div className="service-card" data-aos="zoom-in">
          <img src={solar} alt="Solar Service" />
          <div className="card-content">
            <h3>Solar Panel Services</h3>
            <p>
              ✔ Installation<br />
              ✔ Government Subsidy Help<br />
              ✔ Maintenance & AMC<br />
              ✔ Consultation & Cost Saving Plans
            </p>
            <Link to="/solar" className="btn-service">Explore Solar Services</Link>
          </div>
        </div>

        {/* Mandap Card */}
        <div className="service-card" data-aos="zoom-in" data-aos-delay="150">
          <img src={mandap} alt="Mandap Service" />
          <div className="card-content">
            <h3>Mandap Decoration</h3>
            <p>
              ✔ Wedding Mandaps<br />
              ✔ Birthday & Event Setup<br />
              ✔ Stage Lighting<br />
              ✔ Custom Themes & Entry Gates
            </p>
            <Link to="/mandap" className="btn-service mandap-btn">Explore Mandap Services</Link>
          </div>
        </div>
      </div>

      {/* ⭐ Why Choose Us */}
      <div className="why-choose" data-aos="fade-up">
        <h2>🌟 Why Choose Shree Enterprise?</h2>
        <ul>
          <li>✅ 200+ Happy Customers in Saurashtra</li>
          <li>✅ Professional & Reliable Work</li>
          <li>✅ Affordable Pricing</li>
          <li>✅ 24×7 Support & Flexibility</li>
          <li>✅ Hassle-free Government Subsidy Process</li>
        </ul>
      </div>

      {/* 🧑‍💬 Testimonials Section */}
      <Testimonials />

      {/* 📬 Contact Form */}
      <ContactForm />

    
    </div>
  );
};

export default ServicesPage;
