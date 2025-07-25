// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Shree Enterprise</h3>
        <p>Trusted Solar & Mandap Services in Saurashtra since 2018.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/solar">Solar Services</a></li>
          <li><a href="/mandap">Mandap Decoration</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>📍 Main Chowk, Nagichana, Taluka Mangrol, Junagadh, Gujarat – 362240</p>
        <p>📞 98988 12423</p>
        <p>📧 jagdishbhai.pithiya@gmail.com</p>

        <a
          className="whatsapp-link"
          href="https://wa.me/919898812423?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 WhatsApp Us
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shree Enterprise | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
