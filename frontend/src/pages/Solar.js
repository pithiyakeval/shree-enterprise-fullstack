// src/pages/Solar.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SolarPage.css';

import solar1 from '../assets/gallery/solar1.jpg';
import solar2 from '../assets/gallery/solar2.jpg';
import solar3 from '../assets/gallery/solar3.jpg';

import solar25kw from '../assets/images/solar25kw.png';
import solar3kw from '../assets/images/solar3kw.png';
import solar5kw from '../assets/images/solar5kw.png';

const Solar = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="solar-page">
      {/* Hero Section */}
      <section className="solar-hero" data-aos="fade-up">
        <div className="container">
          <h1>☀️ Solar Power for a Brighter Future</h1>
          <p>
            Harness clean energy, reduce electricity bills, and contribute to a sustainable tomorrow with Shree Enterprise.
          </p>
          <h2>⚡ Bringing Solar to Every Home & Business</h2>
          <p>
            We deliver affordable, government-backed solar solutions for homes, villages, and commercial spaces across Gujarat.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="solar-benefits" data-aos="fade-up">
        <div className="container">
          <h2>🌟 Why Choose Solar?</h2>
          <ul className="benefits-list">
            <li>✅ Get up to 40% government subsidy under PM Surya Ghar Yojana</li>
            <li>✅ Save ₹1,500 – ₹4,000/month on electricity bills</li>
            <li>✅ Solar panels last 25+ years with minimal maintenance</li>
            <li>✅ Works even in remote & low-grid areas with hybrid systems</li>
            <li>✅ Zero fuel cost — sunlight is 100% free</li>
            <li>✅ Adds value to your property</li>
            <li>✅ Reduces pollution and carbon footprint</li>
            <li>✅ EMI/loan support available for easy financing</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>🔧 Our Solar Services</h2>
          <ul className="service-list">
            <li>✔️ Site survey & installation</li>
            <li>✔️ Government paperwork & subsidy help</li>
            <li>✔️ Inverter & grid integration</li>
            <li>✔️ Battery backup systems</li>
            <li>✔️ Annual Maintenance Contracts (AMC)</li>
          </ul>

          <p className="service-info">
            Our team ensures a smooth solar journey — from site inspection to post-installation maintenance.
          </p>
          <div className="service-details">
            <h4>⚙️ End-to-End Support Includes:</h4>
            <ul>
              <li>🔹 Load calculation & system design</li>
              <li>🔹 Net metering approval from DISCOM</li>
              <li>🔹 Remote monitoring setup via mobile app</li>
              <li>🔹 Training on how to monitor your solar system</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="solar-gallery" data-aos="fade-up">
        <div className="container">
          <h2>📷 Real Installations</h2>
          <div className="gallery-grid">
            <img src={solar1} alt="Installation 1" />
            <img src={solar2} alt="Installation 2" />
            <img src={solar3} alt="Installation 3" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>📦 Solar Panel Options</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src={solar25kw} alt="2.5kW System" />
              <h4>2.5 kW System</h4>
              <p>Perfect for 1BHK or low-usage homes. Produces approx. 10 units/day. Saves ₹1,500–₹2,000 monthly.</p>
            </div>
            <div className="product-card">
              <img src={solar3kw} alt="3kW System" />
              <h4>3 kW System</h4>
              <p>Great for medium homes. Generates ~12–14 units/day. Covers most household needs.</p>
            </div>
            <div className="product-card">
              <img src={solar5kw} alt="5kW System" />
              <h4>5 kW System</h4>
              <p>Suitable for large homes & businesses. Generates ~20 units/day. Can power ACs, fridges, lights & more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>🏆 Trusted Solar Brands</h2>
          <p>
            We partner with India’s top solar companies to deliver efficiency, safety, and long-lasting systems.
          </p>
          <ul className="brand-list">
            <li><strong>Adani Solar:</strong> India's largest solar panel manufacturer. High-quality mono PERC panels with 25-year performance warranty.</li>
            <li><strong>Waaree Energies:</strong> Ranked in the top 5 globally for module efficiency. Trusted by corporates, now powering your homes.</li>
          </ul>
        </div>
      </section>

      {/* Installation Timeline */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>🚧 Installation Timeline</h2>
          <ol className="install-steps">
            <li>📋 <strong>Site Survey:</strong> 1–2 days — load check, roof analysis</li>
            <li>📝 <strong>Documentation:</strong> 1–3 days — subsidy forms, net metering</li>
            <li>🔌 <strong>System Installation:</strong> 2–4 days — panels, inverter, grid sync</li>
            <li>✅ <strong>Inspection & Activation:</strong> 1–2 days — DISCOM approval</li>
          </ol>
          <p><em>Total Time: 5 to 10 working days from start to finish.</em></p>
        </div>
      </section>

      {/* Subsidy Section */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>💸 How Government Subsidy Works</h2>
          <p>Under the national Rooftop Solar Scheme (PM Surya Ghar), you can claim:</p>
          <ul>
            <li>☀️ ₹18,000/kW for systems up to 3kW</li>
            <li>☀️ ₹9,000/kW for 3kW to 10kW</li>
          </ul>
          <p>
            We help you file the paperwork with DISCOM and MNRE so your subsidy is credited directly to your account within 30–60 days post-installation.
          </p>
        </div>
      </section>

      {/* Cost Estimate */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>💰 What’s the Cost of Going Solar?</h2>
          <p>Here’s a rough idea of system prices (after subsidy):</p>
          <ul>
            <li>🔹 2.5 kW: ₹65,000 – ₹75,000</li>
            <li>🔹 3 kW: ₹80,000 – ₹95,000</li>
            <li>🔹 5 kW: ₹1.4L – ₹1.6L</li>
          </ul>
          <p>
            Costs vary based on roof type, structure material, brand, and battery/inverter add-ons. We provide a custom quote after your site survey.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="solar-section" data-aos="fade-up">
        <div className="container">
          <h2>💬 FAQs</h2>
          <div className="faq-container">
            <details>
              <summary>How much can I save monthly?</summary>
              <p>You can save up to 60–80% depending on your system size and power usage.</p>
            </details>
            <details>
              <summary>How long does installation take?</summary>
              <p>Generally, 2–4 days after paperwork and approval.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="solar-cta" data-aos="fade-up">
        <div className="container">
          <h2>📞 Start Your Solar Journey Today!</h2>
          <p>
            Book a free consultation on WhatsApp: <strong>+91 98988 12423</strong>
          </p>
        </div>
      </section>

      {/* Final Quote */}
      <section className="solar-quote" data-aos="fade-up">
        <div className="container">
          <blockquote>
            "The future is solar — clean, affordable, and powerful. Let’s bring solar energy to every home in Gujarat."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Solar;
