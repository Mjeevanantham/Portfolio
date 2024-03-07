// src/components/TypingEffect.js
import React, { useState, useEffect } from 'react';
import './typing-effect.css'; // Import the CSS file


const TypingEffect = () => {
  const [text, setText] = useState('');
  const textToType = "Welcome to my portfolio, where creativity comes to life. Explore my work and get to know me better.";
  let charIndex = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setText((prevText) => prevText + textToType.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return <div className="typing-effect">{text}</div>;
};

export default TypingEffect;
