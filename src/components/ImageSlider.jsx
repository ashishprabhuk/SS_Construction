// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const images = [
//   { src: "https://placehold.co/800x400/png", text: "Slide 1: Welcome to our site" },
//   { src: "https://placehold.co/600x400/0072bb/FFFFFF/png", text: "Slide 2: Explore our services" },
//   { src: "https://placehold.co/600x400/1a1a1a/FFFFFF/png", text: "Slide 3: Contact us for more" }
// ];

// const ImageSlider = () => {
//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop
//         className="rounded-lg overflow-hidden"
//       >
//         {images.map((slide, index) => (
//           <SwiperSlide key={index} className="relative">
//             <img src={slide.src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
//               {slide.text}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;


import { useState, useEffect } from 'react';
import './ImageSlider.css';

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              className="slide" 
              key={index}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.buttonText && (
                  <button className="slide-button">{slide.buttonText}</button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-controls">
          <button className="arrow-button prev" onClick={goToPrevious}>&#10094;</button>
          <button className="arrow-button next" onClick={goToNext}>&#10095;</button>
        </div>

        <div className="dots-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;