import React, { useState, useEffect, useRef } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  
  const slides = [
    {
      id: 1,
      image: "/api/placeholder/1600/900",
      title: "ROCKY WATERFALL",
      location: "ROCKY WATERFALL"
    },
    {
      id: 2,
      image: "/api/placeholder/1600/900",
      title: "PALAU - PACIFIC OCEAN",
      location: "PALAU - PACIFIC OCEAN"
    },
    {
      id: 3,
      image: "/api/placeholder/1600/900",
      title: "QUEPOS - COSTA RICA",
      location: "QUEPOS - COSTA RICA"
    },
    {
      id: 4,
      image: "/api/placeholder/1600/900",
      title: "MOUNTAIN VIEW",
      location: "MOUNTAIN VIEW"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToNextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Match this to your CSS transition time
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Main image slider */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute h-full w-full transition-opacity duration-800 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(1)'
            }}
          />
        ))}
        
        {/* Center mask/blend effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-3/5 w-3/5 overflow-hidden rounded-sm">
            {slides.map((slide, index) => (
              <div
                key={`mask-${slide.id}`}
                className={`absolute h-full w-full transition-opacity duration-800 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  mixBlendMode: 'luminosity',
                  filter: 'grayscale(1)'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Title overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-widest">BLEND MODE SLIDER</h1>
          <p className="mb-6 text-xl tracking-wider">Slides' and masks' background blend mode set to luminosity</p>
          <p className="text-xl tracking-wider">Slides' shouldRenderMask prop set to true</p>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform text-5xl text-white opacity-70 hover:opacity-100"
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform text-5xl text-white opacity-70 hover:opacity-100"
          aria-label="Next slide"
        >
          &#8250;
        </button>
        
        {/* Navigation dots */}
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 transform flex-col space-y-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              className={`h-6 w-1 transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Location labels */}
        <div className="absolute bottom-0 flex w-full justify-center">
          {slides.map((slide, index) => (
            <div
              key={`location-${slide.id}`}
              className={`px-8 py-4 text-center text-lg font-medium tracking-wider text-white transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => goToSlide(index)}
            >
              {slide.location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;