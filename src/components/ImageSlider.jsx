/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import './ImageSlider.css';

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide functionality
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       goToNext();
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         <div
//           className="slide-container"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div 
//               className="slide" 
//               key={index}
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="slide-content">
//                 <h2>{slide.title}</h2>
//                 <p>{slide.description}</p>
//                 {slide.buttonText && (
//                   <button className="slide-button">{slide.buttonText}</button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="slider-controls">
//           <button className="arrow-button prev" onClick={goToPrevious}>&#10094;</button>
//           <button className="arrow-button next" onClick={goToNext}>&#10095;</button>
//         </div>

//         <div className="dots-container">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setProgress(0);
    setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  return (
    <div className="modern-slider">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="content">
                {slide.subtitle && <span className="subtitle" style={{ fontSize: '1.5rem' }}>{slide.subtitle}</span>}
                <h2 className="title text-center" style={{ fontSize: '4rem' }}>{slide.title}</h2>
                <p className="description text-center" style={{ fontSize: '1.25rem' }}>{slide.description}</p>
                {slide.buttonText && (
                  <button className="modern-btn">
                    {slide.buttonText}
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;