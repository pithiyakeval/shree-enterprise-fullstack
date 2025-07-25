import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HelpPage.css';

const HelpPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="help-page">
      {/* 🔹 Hero Section */}
      <section className="help-hero" data-aos="fade-up">
        <h2>Help & Support</h2>
        <p className="help-intro">
          Whether you’re planning your dream event or installing a solar panel system —
          <strong> Shree Enterprise is here to guide you at every step.</strong><br />
          We understand that timely support is crucial, and that’s why we offer
          <strong> fast, friendly, and expert assistance</strong> for all your needs.
        </p>

        <p className="help-intro">
          Explore common queries below or <strong>reach out directly via WhatsApp or email</strong> for personalized help.
          We ensure smooth coordination, no matter how small or large the request.
        </p>
      </section>

      {/* 🔹 Solar Technical Help */}
      <section className="help-section" data-aos="fade-up" data-aos-delay="100">
        <h2>🔧 Solar Service Assistance</h2>
        <ul>
          <li>🌞 Subsidy form filling & documentation</li>
          <li>⚡ Inverter installation & grid connection</li>
          <li>🧾 AMC & maintenance queries</li>
          <li>🔍 Site inspection & feasibility analysis</li>
          <li>📦 Equipment upgrades (panels, inverters)</li>
          <li>🔄 Battery backup consultation</li>
          <li>🛠 Warranty claims & support</li>
        </ul>
        <p>📞 WhatsApp us at <strong>+91 98988 12423</strong></p>
      </section>

      {/* 🔹 Mandap Help */}
      <section className="help-section" data-aos="fade-up" data-aos-delay="200">
        <h2>🎪 Mandap Service Support</h2>
        <ul>
          <li>🎯 Custom event themes & decorations</li>
          <li>🪔 Stage lighting, gates & entry setup</li>
          <li>⏱️ 24×7 availability for urgent event needs</li>
          <li>🎉 On-site coordination & team management</li>
          <li>📷 Photography & backdrop setup guidance</li>
          <li>💡 Power & generator arrangements (if required)</li>
          <li>📦 Decor material delivery & pickup support</li>
        </ul>
        <p>📧 Email: <strong>jagdishbhai.pithiya@gmail.com</strong></p>
      </section>

      {/* 🔹 FAQ Section */}
      <section className="help-faq" data-aos="fade-up" data-aos-delay="300">
        <h2>❓ Frequently Asked Questions</h2>

        <details><summary>📌 How to book a Mandap Decoration service?</summary><p>You can book via our contact form or WhatsApp at <strong>+91 98988 12423</strong>.</p></details>
        <details><summary>📌 Do you provide solar installation in rural areas?</summary><p>Yes! We specialize in helping villages install solar systems with full subsidy support.</p></details>
        <details><summary>📌 How long does a solar panel installation take?</summary><p>Usually 2–4 days after a site visit and paperwork approval.</p></details>
        <details><summary>📌 How can I contact customer support?</summary><p>Email us at <strong>jagdishbhai.pithiya@gmail.com</strong> or call <strong>+91 98988 12423</strong>.</p></details>
        <details><summary>📌 What are the benefits of installing solar panels at home?</summary><p>Save on bills, get subsidy benefits, and boost property value while supporting the environment.</p></details>
        <details><summary>📌 Do I get any government subsidy for solar installation?</summary><p>Yes! Gujarat Govt & MNRE offer 20–40% subsidies. We assist with full documentation.</p></details>
        <details><summary>📌 What brand of solar panels do you use?</summary><p>We use Adani Solar and Waaree — both offer high performance and warranty.</p></details>
        <details><summary>📌 Do you provide AMC or post-installation service?</summary><p>Yes, we provide AMC contracts and support after installation for repairs and checks.</p></details>
        <details><summary>📌 Can I install solar panels in a small village or farm house?</summary><p>Absolutely. We visit and suggest systems based on your usage and space.</p></details>
        <details><summary>📌 Can I customize the decoration theme as per my choice?</summary><p>Yes. You can choose ready themes or suggest your own — we design accordingly.</p></details>
        <details><summary>📌 How long before the event should I book mandap services?</summary><p>Best to book 15–30 days in advance. We also accept urgent bookings based on availability.</p></details>
        <details><summary>📌 Do you provide decoration for small events like birthdays or puja?</summary><p>Yes, we do! We handle all kinds of events like haldi, mundan, garba, etc.</p></details>
        <details><summary>📌 What locations do you cover for events?</summary><p>We work in Nagichana, Mangrol, Junagadh & surrounding villages. Travel included.</p></details>
        <details><summary>📌 What if I need decoration urgently for tomorrow?</summary><p>We’re available for urgent needs. Just call/WhatsApp us and we’ll try to help.</p></details>
      </section>

      {/* 🔹 Scroll to Top Button */}
      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ⬆️ Back to Top
        </button>
      )}
    </div>
  );
};

export default HelpPage;
