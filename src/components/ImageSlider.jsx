/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import './ImageSlider.css';

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {

//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           goToNext();
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 50);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setProgress(0);
//     setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index) => {
//     setProgress(0);
//     setCurrentIndex(index);
//   };

//   return (
//     <div 
//       className="image-slider"
      
//     >
//       <div className="image-slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {slides.map((slide, index) => (
//           <div 
//             key={index}
//             className="image-slider-slide"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="image-slider-overlay">
//               <div className="image-slider-content">
//                 {slide.subtitle && (
//                   <span className="image-slider-subtitle">{slide.subtitle}</span>
//                 )}
//                 <h2 className="image-slider-title">{slide.title}</h2>
//                 <p className="image-slider-description">{slide.description}</p>
//                 {slide.buttonText && (
//                   <button className="image-slider-button">
//                     {slide.buttonText}
//                     <svg viewBox="0 0 24 24" width="20" height="20">
//                       <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
//                     </svg>
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="image-slider-progress">
//         <div className="image-slider-progress-bar" style={{ width: `${progress}%` }} />
//       </div>

//       {/* Navigation Arrows */}
//       {/* {slides.length > 1 && (
//         <>
//           <button 
//             className="image-slider-arrow image-slider-arrow-prev"
//             onClick={goToPrevious}
//             aria-label="Previous slide"
//           >
//             <svg viewBox="0 0 24 24" width="20" height="20">
//               <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
//             </svg>
//           </button>
//           <button 
//             className="image-slider-arrow image-slider-arrow-next"
//             onClick={goToNext}
//             aria-label="Next slide"
//           >
//             <svg viewBox="0 0 24 24" width="20" height="20">
//               <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
//             </svg>
//           </button>
//         </>
//       )} */}

//       {/* Pagination Dots */}
//       {slides.length > 1 && (
//         <div className="image-slider-pagination">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`image-slider-dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageSlider;

import { useState, useEffect } from 'react';
import TextFlip from './TextFlip';
import './ImageSlider.css';
import TypingAnimation from './TypingAnimation';

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only set up the interval if there are multiple images
    if (images.length <= 1) return;

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
  }, [currentIndex, images.length]);

  const goToNext = () => {
    setProgress(0);
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      {/* Transparent Black Overlay */}
      <div className="image-slider-overlay"></div>
  
      <div className="image-slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="image-slider-slide"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
  
      <div className="image-slider-text-overlay">
        <TypingAnimation />
      </div>
  
      {/* Progress Bar */}
      <div className="image-slider-progress">
        <div className="image-slider-progress-bar" style={{ width: `${progress}%` }} />
      </div>
  
      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="image-slider-pagination">
          {images.map((_, index) => (
            <button
              key={index}
              className={`image-slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );  
};

export default ImageSlider;