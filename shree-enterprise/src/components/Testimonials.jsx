// src/components/Testimonials.jsx

import React from 'react';

const Testimonials = () => {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '80px 20px',
        borderRadius: '16px',
        maxWidth: '1100px',
        margin: '60px auto',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
      }}
      data-aos="fade-up"
    >
      <h2 style={{
        fontSize: '32px',
        fontWeight: '800',
        color: '#1c2d5a',
        marginBottom: '40px'
      }}>
        What Our Clients Say 💬
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center'
      }}>
        {[
          {
            text: "Superb service! They installed the solar system quickly and explained everything clearly.",
            name: "– Jethabhai Pithiya, Nagichana"
          },
          {
            text: "Beautiful mandap decoration! Our wedding looked like a dream. Highly recommended.",
            name: "–Jagmalbhai Borkhatariya , Junagadh"
          },
          {
            text: "Very humble team. Helped us with all the subsidy paperwork too. 5 stars!",
            name: "– Dineshbhai Nandha, Nagichana"
          }
        ].map((testimonial, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 200}
            style={{
              backgroundColor: '#f1f4f6',
              padding: '30px',
              borderRadius: '16px',
              maxWidth: '300px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              border: '1px solid #dceff6'
            }}
          >
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>{testimonial.text}</p>
            <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#2c3e50' }}>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
