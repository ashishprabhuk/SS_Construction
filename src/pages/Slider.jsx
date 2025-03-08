import { useState, useEffect } from 'react';
import banner6 from "../assets/Home/banner1.jpg";
import banner2 from "../assets/Home/banner2.jpg";
import banner3 from "../assets/Home/banner3.jpg";
import banner4 from "../assets/Home/banner4.jpg";
import banner5 from "../assets/Home/banner5.jpg";
import banner1 from "../assets/Home/banner6.png";
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: 'url(' + banner1 + ')',
      title: 'Quality Construction',
    },
    {
      image: 'url(' + banner2 + ')',
      title: 'Superior Service',
    },
    {
      image: 'url(' + banner3 + ')',
      title: 'Urban Excellence',
    },
    {
      image: 'url(' + banner4 + ')',
      title: 'Sustainable Living',
    },
    {
      image: 'url(' + banner5 + ')',
      title: 'Safety First',
    },
    {
      image: 'url(' + banner6 + ')',
      title: 'Innovative Solutions',
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased time between slides
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle transition between slides
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle next and previous slides
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ 
              backgroundImage: slide.image,
              backgroundPosition: '50% 50%'
            }}
          >
            <div className="content-overlay">
              <div 
                className={`slide-content ${index === currentIndex ? 'active' : ''}`}
              >
                <h1 className="title">{slide.title}</h1>
                <p className="subtitle">{slide.subtitle}</p>
                <button className="cta-button">Explore Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;