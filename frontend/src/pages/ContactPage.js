import React, { useEffect } from 'react';
import './ContactPage.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="contact-page">
      <h2>📞 Get in Touch</h2>
      <p className="contact-intro">
        We'd love to help you with your solar needs or event planning. Reach out through the form below or directly via call or email. Our team is ready to assist you with fast and friendly support!
      </p>

      <div className="contact-container">
        {/* 📝 Contact Form */}
        <div className="contact-form" data-aos="fade-right">
          <h3>📝 Send Us a Message</h3>
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="example@email.com" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" required />

            <label>Your Message</label>
            <textarea placeholder="How can we help you?" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* 📍 Contact Info */}
        <div className="contact-info" data-aos="fade-left">
          <h3>📍 Our Office</h3>
          <p><FaMapMarkerAlt /> Main Chowk, Nagichana,<br />Taluka - Mangrol, District - Junagadh, Gujarat – 362240</p>

          <h3>📞 Phone</h3>
          <p><FaPhoneAlt /> +91 98988 12423</p>

          <h3>📧 Email</h3>
          <p><FaEnvelope /> jagdishbhai.pithiya@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
