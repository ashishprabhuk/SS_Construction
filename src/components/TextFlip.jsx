/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './TextFlip.css';

const TextFlip = ({ words = ["quality", "service", "safety"], interval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFlipping(false);
      }, 500); 
      
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className="text-flip-container">
      <div className={`text-flip ${isFlipping ? 'flipping' : ''}`}>
        {words[currentIndex]}
      </div>
    </div>
  );
};

export default TextFlip;