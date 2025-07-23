import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero" data-aos="fade-up">
        <h1>About Shree Enterprise</h1>
        <p>
          Serving our local community with excellence in <strong>Solar Panel Solutions</strong> and
          <strong> Mandap Decoration</strong> for over a decade.
        </p>
      </section>

      <section className="about-content" data-aos="fade-up" data-aos-delay="100">
        <h2>🌞 Solar Energy Mission</h2>
        <p>
          We empower rural homes and businesses with reliable, clean energy solutions using top-tier brands like Adani & Waaree. Our services include installation, government subsidy guidance, inverter & battery setup, and after-sales maintenance.
        </p>
      </section>

      <section className="about-content" data-aos="fade-up" data-aos-delay="200">
        <h2>🎪 Mandap Decoration Journey</h2>
        <p>
          With 5+ years of event decor experience, we’ve delivered unforgettable weddings, birthdays, engagements, and religious events. From thematic setups to last-minute arrangements — we bring ideas to life.
        </p>
      </section>

      <section className="about-values" data-aos="fade-up" data-aos-delay="300">
        <h2>💡 Why People Trust Us?</h2>
        <ul>
          <li>✅ 200+ Happy Customers</li>
          <li>✅ Transparent Pricing</li>
          <li>✅ Timely Delivery & Support</li>
          <li>✅ Trusted Family Business in Nagichana</li>
        </ul>
      </section>

      <section className="about-footer-note" data-aos="fade-up" data-aos-delay="400">
        <h3>🤝 Thank you for trusting Shree Enterprise</h3>
        <p>We’re here to light up your home and your special day.</p>
      </section>
    </div>
  );
};

export default AboutPage;
