// src/components/WhatsAppCTA.jsx
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './WhatsAppCTA.css';

const WhatsAppCTA = () => {
  const phoneNumber = '+917084431861'; 

  return (
    <div className="whatsapp-cta">
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <WhatsAppIcon className="whatsapp-icon" />
        <span className="chat-label">Chat Now</span>
      </a>
    </div>
  );
};

export default WhatsAppCTA;
