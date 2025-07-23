// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919898812423"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
