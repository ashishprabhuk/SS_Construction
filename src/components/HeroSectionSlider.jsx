import React from 'react';
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider';
// import 'hero-slider/dist/hero-slider.css'; // Import the default CSS if available

const HeroSectionSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right" // Animation style for the slides
      orientation="horizontal" // Set slider orientation
      initialSlide={1} // Start from the second slide (0-indexed)
      style={{ backgroundColor: '#000' }} // Fallback background color
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 3000,
        height: '100vh', // Make the slider full viewport height
      }}
    >
      <Slide
        background={{
          backgroundImage: 'https://via.placeholder.com/1920x1080?text=Slide+1',
          backgroundAttachment: 'fixed',
        }}
      >
        <OverlayContainer>
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Explore our amazing content</p>
          </div>
        </OverlayContainer>
      </Slide>

      <Slide
        background={{
          backgroundImage: 'https://via.placeholder.com/1920x1080?text=Slide+2',
          backgroundAttachment: 'fixed',
        }}
      >
        <OverlayContainer>
          <div className="hero-content">
            <h1>Discover Our Services</h1>
            <p>Learn more about what we offer</p>
          </div>
        </OverlayContainer>
      </Slide>

      <Slide
        background={{
          backgroundImage: 'https://via.placeholder.com/1920x1080?text=Slide+3',
          backgroundAttachment: 'fixed',
        }}
      >
        <OverlayContainer>
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>Contact us to get started</p>
          </div>
        </OverlayContainer>
      </Slide>

      {/* Navigation buttons */}
      <Nav />
    </HeroSlider>
  );
};

export default HeroSectionSlider;
