import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MandapPage.css';
import mandapVideo from '../assets/gallery/Mandap-video.mp4';

import mandap1 from '../assets/gallery/mandap1.jpg';
import mandap2 from '../assets/gallery/mandap2.jpg';
import mandap3 from '../assets/gallery/mandap3.jpg';
import mandap4 from '../assets/gallery/mandap4.jpg';
import mandap5 from '../assets/gallery/mandap5.jpg';
import mandap6 from '../assets/gallery/mandap6.jpg';
import mandap7 from '../assets/gallery/mandap7.jpg';
import mandap8 from '../assets/gallery/mandap8.jpg';

const Mandap = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const galleryImages = [mandap1, mandap2, mandap3, mandap4, mandap5, mandap6, mandap7, mandap8];

  return (
    <div className="mandap-page">
      {/* Hero Section */}
      <section className="mandap-hero" data-aos="fade-up">
        <div className="container">
          <h1>🎪 Traditional Mandap & Event Setup</h1>
          <p>We create magical and memorable events with elegant decoration, lighting, and traditional elements.</p>
          <h2>🎉 Making Every Moment Magical</h2>
          <p>From dream weddings to vibrant engagements and spiritual pujas — Shree Enterprise brings color, creativity, and culture to every celebration.</p>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="mandap-video" data-aos="zoom-in" style={{ padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 45%', maxWidth: '500px' }}>
            <video ref={videoRef} muted playsInline width="100%" style={{ borderRadius: '12px' }}>
              <source src={mandapVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div style={{ flex: '1 1 45%' }}>
            <h3>Step Into a World of Elegance</h3>
            <ul>
              <li>🎇 Nighttime ambient lighting</li>
              {/* <li>📐 Perfectly symmetrical setup</li> */}
              <li>🪔 Traditional touches with modern elegance</li>
              <li>🎵 Coordinated music & lighting transitions</li>
              {/* <li>📸 Seamless flow for photography & videography</li> */}
              <li>🌿 Eco-friendly material options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mandap-services" data-aos="fade-up">
        <div className="container">
          <h2>🎉 What We Offer</h2>
          <ul>
            <li>✨ Theme-based mandap decoration</li>
            <li>🎤 Stage setup with lights & backdrops</li>
            <li>📦 Material delivery & pickup</li>
            <li>📸 Photo booth & backdrop support</li>
            <li>🕯️ Wedding, engagement, garba, birthday & more</li>
            <li>💐 Wedding Mandap Setup with Theme Decoration</li>
            <li>🎂 Birthday Stage & Balloon Decoration</li>
            <li>🪔 Engagement, Haldi, Garba, and Pooja Mandaps</li>
            <li>📷 Photography Backdrop Design</li>
            <li>🌟 Lighting, Entry Gate, and Generator Setup</li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mandap-gallery" data-aos="fade-up">
        <div className="container">
          <h2>📷 Our Work</h2>
          <p style={{ marginBottom: '1rem' }}>
            Note: These photos are of real events we managed — not fancy catalog pictures. We work on-ground with dedication, especially for middle-class families. What you see is what we actually do. We don’t betray trust with filtered pictures — our work speaks for itself. 🙏
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {galleryImages.map((src, index) => (
              <div key={index} style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <img src={src} alt={`Mandap Setup ${index + 1}`} style={{ width: '100%', height: '250px', objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mandap-testimonials" data-aos="fade-up">
        <div className="container">
          <h2>💖 What Clients Say</h2>
          <blockquote>"They made our wedding day unforgettable! The mandap looked stunning and traditional. Highly recommended!"</blockquote>
          <cite>— Priya & Ramesh</cite>
          <blockquote>"Affordable, reliable and absolutely creative! Everyone complimented the decoration."</blockquote>
          <cite>— Mehul Patel</cite>
        </div>
      </section>

      {/* Themes Section */}
      <section className="mandap-themes" data-aos="fade-up">
        <div className="container">
          <h2>✨ Popular Decoration Themes</h2>
          <ul>
            <li>🌸 Floral Paradise (Fresh flowers)</li>
            <li>💛 Golden Royal (For weddings)</li>
            <li>🌿 Eco-Traditional (With banana leaves & diya)</li>
            <li>🌈 Color Pop (For birthday & kids' events)</li>
            <li>🔔 Temple Vibes (With brass bells & rangoli)</li>
          </ul>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="mandap-timeline" data-aos="fade-up">
        <div className="container">
          <h2>🗓️ Event Planning Timeline</h2>
          <ol>
            <li>📞 <strong>Booking:</strong> 30 days before for best themes</li>
            <li>🎨 <strong>Theme Finalization:</strong> 20 days before</li>
            <li>🏗️ <strong>Setup:</strong> 1–2 days before the event</li>
            <li>🎊 <strong>Event Execution:</strong> On the day</li>
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="mandap-faq" data-aos="fade-up">
        <div className="container">
          <h2>💬 Frequently Asked Questions</h2>
          <details>
            <summary>Can I see your past work before booking?</summary>
            <p>Yes, we can share images, videos, and even give you live setup tours if available nearby.</p>
          </details>
          <details>
            <summary>Do you provide decoration for outdoor venues?</summary>
            <p>Absolutely! We specialize in open-air setups too with waterproof decor.</p>
          </details>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mandap-cta" data-aos="fade-up">
        <div className="container">
          <h2>📞 Plan Your Event with Us</h2>
          <p>
            📧 Email: <strong>jagdishbhai.pithiya@gmail.com</strong><br />
            📱 WhatsApp: <strong>+91 98988 12423</strong>
          </p>
          <p>
            📧 Email: <strong>sarmanbhai.pithiya@gmail.com</strong><br />
            📱 WhatsApp: <strong>+91 99748 52378</strong>
          </p>
        </div>
      </section>

      {/* Final Quote */}
      <section className="mandap-quote" data-aos="zoom-in">
        <div className="container">
          <blockquote>
            "We don’t just decorate — we bring your dreams to life with art, light, and tradition. And we do it honestly, with no over-promising. Middle-class families are our biggest strength."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Mandap;