import React, { useEffect, useState, useRef } from 'react';
import './Parallax.css';

const Parallax = ({ images }) => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const isInViewport = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInViewport.current) return;
      
      setScrollY(window.pageYOffset);
      
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      const scrollPosition = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax'));
        const direction = element.getAttribute('data-direction') || 'vertical';
        
        if (direction === 'vertical') {
          element.style.transform = `translateY(${scrollPosition * speed}px)`;
        } else if (direction === 'horizontal') {
          element.style.transform = `translateX(${scrollPosition * speed}px)`;
        } else if (direction === 'rotate') {
          element.style.transform = `rotate(${scrollPosition * speed * 0.02}deg)`;
        }
      });
    };

    const checkVisibility = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
      
      isInViewport.current = isVisible;
    };

    window.addEventListener('scroll', () => {
      checkVisibility();
      handleScroll();
    });
    
    window.addEventListener('resize', checkVisibility);
    
    // Initial check
    checkVisibility();
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-grid">
        {/* Floating abstract shapes for depth */}
        <div className="floating-shape shape-1" data-parallax="0.08" data-direction="rotate"></div>
        <div className="floating-shape shape-2" data-parallax="0.12" data-direction="horizontal"></div>
        <div className="floating-shape shape-3" data-parallax="0.05" data-direction="vertical"></div>
        
        {/* Main Image */}
        <div className="hero-main-image" data-parallax="0.1">
          <div className="image-overlay"></div>
          <img src={images[0]} alt="Construction Project" className="zoom-effect" />
        </div>

        {/* Right Side Image */}
        <div className="hero-right-image" data-parallax="0.14" data-direction="vertical">
          <div className="image-gradient-border"></div>
          <img src={images[1]} alt="Construction Team" />
        </div>

        {/* Text Content */}
        <div className="hero-text-content" data-parallax="0.04" data-direction="vertical">
          <div className="hero-preheading">Excellence in Construction</div>
          <h1>Building Strong Foundations<br/>For Tomorrow</h1>
          <p className="hero-subheading">Transforming visions into structures that stand the test of time</p>
          <div className="hero-buttons">
            <button className="hero-cta-button primary">
              Get Free Estimate
              <span className="button-glow"></span>
            </button>
            <button className="hero-cta-button secondary">
              View Projects
            </button>
          </div>
        </div>

        {/* Additional Images with staggered placement */}
        <div className="hero-grid-image hero-grid-image-3" data-parallax="0.18">
          <div className="image-frame"></div>
          <img src={images[2]} alt="Construction Site" />
        </div>
        <div className="hero-grid-image hero-grid-image-4" data-parallax="0.12" data-direction="horizontal">
          <img src={images[3]} alt="Construction Materials" />
        </div>
        <div className="hero-grid-image hero-grid-image-5" data-parallax="0.15" data-direction="vertical">
          <img src={images[4]} alt="Modern Architecture" />
        </div>
        <div className="hero-grid-image hero-grid-image-6" data-parallax="0.08" data-direction="horizontal">
          <img src={images[5]} alt="Completed Project" />
        </div>
        
        {/* Extra detail images for more visual interest */}
        {images[6] && (
          <div className="hero-grid-image hero-grid-image-7" data-parallax="0.22">
            <img src={images[6]} alt="Detail Shot" />
          </div>
        )}
        
        {/* Accent elements */}
        <div className="accent-line line-1" data-parallax="0.06" data-direction="horizontal"></div>
        <div className="accent-line line-2" data-parallax="0.09" data-direction="vertical"></div>
      </div>
      <div className="scroll-indicator" data-parallax="0.03">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Parallax;