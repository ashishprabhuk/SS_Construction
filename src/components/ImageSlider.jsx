// /* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import TextFlip from './TextFlip';
// import './ImageSlider.css';
// import TypingAnimation from './TypingAnimation';

// const ImageSlider = ({ images = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     // Only set up the interval if there are multiple images
//     if (images.length <= 1) return;

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
//   }, [currentIndex, images.length]);

//   const goToNext = () => {
//     setProgress(0);
//     setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index) => {
//     setProgress(0);
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="image-slider">
//       {/* Transparent Black Overlay */}
//       <div className="image-slider-overlay"></div>
  
//       <div className="image-slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((image, index) => (
//           <div 
//             key={index}
//             className="image-slider-slide"
//             style={{ backgroundImage: `url(${image})` }}
//           />
//         ))}
//       </div>
  
//       <div className="image-slider-text-overlay">
//         <TypingAnimation />
//       </div>
  
//       {/* Progress Bar */}
//       <div className="image-slider-progress">
//         <div className="image-slider-progress-bar" style={{ width: `${progress}%` }} />
//       </div>
  
//       {/* Pagination Dots */}
//       {images.length > 1 && (
//         <div className="image-slider-pagination">
//           {images.map((_, index) => (
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





// import { useState, useEffect, useRef } from 'react';
// import './ImageSlider.css';

// const TypingAnimation = () => {
//   return (
//     <div className="typing-container text-center">
//       <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
//         Experience the Extraordinary
//       </h1>
//       <p className="text-xl text-white/90 max-w-2xl mx-auto">
//         Discover a world of possibilities with our innovative solutions
//       </p>
//     </div>
//   );
// };

// const ImageSlider = ({ images = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isTouching, setIsTouching] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
  
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Reset progress when index changes
//   useEffect(() => {
//     setProgress(0);
//   }, [currentIndex]);

//   // Progress bar animation
//   useEffect(() => {
//     if (images.length <= 1 || isTouching) return;
    
//     intervalRef.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           goToNext();
//           return 0;
//         }
//         return prev + 0.5; // Slower progress for a more elegant feel
//       });
//     }, 50);
    
//     return () => clearInterval(intervalRef.current);
//   }, [currentIndex, images.length, isTouching]);

//   // Navigation functions
//   const goToNext = () => {
//     setProgress(0);
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index) => {
//     setProgress(0);
//     setCurrentIndex(index);
//   };

//   // Touch handlers
//   const handleTouchStart = (e) => {
//     setIsTouching(true);
//     setTouchStart(e.touches[0].clientX);
//     clearInterval(intervalRef.current);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     setIsTouching(false);
    
//     // Minimum swipe distance (px)
//     const MIN_SWIPE_DISTANCE = 50;
    
//     if (touchStart - touchEnd > MIN_SWIPE_DISTANCE) {
//       // Swipe left
//       goToNext();
//     } else if (touchEnd - touchStart > MIN_SWIPE_DISTANCE) {
//       // Swipe right
//       setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     }
//   };

//   // If no images, show placeholder
//   if (!images.length) {
//     return (
//       <div className="image-slider bg-gray-900 flex items-center justify-center">
//         <p className="text-white text-xl">No images to display</p>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="image-slider"
//       ref={sliderRef}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Gradient Overlay */}
//       <div className="image-slider-overlay"></div>
      
//       {/* Image Track */}
//       <div 
//         className="image-slider-track" 
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div 
//             key={index}
//             className="image-slider-slide"
//             style={{ backgroundImage: `url(${image})` }}
//           />
//         ))}
//       </div>
      
//       {/* Text Overlay */}
//       <div className="image-slider-text-overlay">
//         <TypingAnimation />
//       </div>
      
//       {/* Progress Bar */}
//       <div className="image-slider-progress">
//         <div 
//           className="image-slider-progress-bar" 
//           style={{ width: `${progress}%` }} 
//         />
//       </div>
      
//       {/* Pagination Dots */}
//       {images.length > 1 && (
//         <div className="image-slider-pagination">
//           {images.map((_, index) => (
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





// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './ImageSlider.css';

// const TypingAnimation = () => {
//   return (
//     <motion.div 
//       className="typing-container text-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.h1 
//         className="text-6xl md:text-7xl font-extrabold"
//         initial={{ y: 30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ 
//           duration: 0.8, 
//           type: "spring", 
//           stiffness: 100, 
//           damping: 15 
//         }}
//       >
//         Transform Your Vision
//       </motion.h1>
      
//       <motion.p 
//         className="text-xl md:text-2xl text-white/90 mt-6"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 0.9 }}
//         transition={{ 
//           duration: 0.8, 
//           delay: 0.3, 
//           type: "spring" 
//         }}
//       >
//         Extraordinary designs that captivate and inspire, creating unforgettable experiences
//       </motion.p>
      
//       <motion.div 
//         className="accent-line accent-line-left"
//         initial={{ width: 0, opacity: 0 }}
//         animate={{ width: "80px", opacity: 1 }}
//         transition={{ duration: 1, delay: 0.6 }}
//       />
      
//       <motion.div 
//         className="accent-line accent-line-right"
//         initial={{ width: 0, opacity: 0 }}
//         animate={{ width: "80px", opacity: 1 }}
//         transition={{ duration: 1, delay: 0.9 }}
//       />
//     </motion.div>
//   );
// };

// const ImageSlider = ({ images = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isTouching, setIsTouching] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Reset progress when index changes
//   useEffect(() => {
//     setProgress(0);
//   }, [currentIndex]);

//   // Progress bar animation
//   useEffect(() => {
//     if (images.length <= 1 || isTouching || isHovering) return;
    
//     intervalRef.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           goToNext();
//           return 0;
//         }
//         return prev + 0.4;
//       });
//     }, 50);
    
//     return () => clearInterval(intervalRef.current);
//   }, [currentIndex, images.length, isTouching, isHovering]);

//   // Navigation functions
//   const goToNext = () => {
//     setProgress(0);
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrevious = () => {
//     setProgress(0);
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setProgress(0);
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   // Touch handlers
//   const handleTouchStart = (e) => {
//     setIsTouching(true);
//     setTouchStart(e.touches[0].clientX);
//     clearInterval(intervalRef.current);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     setIsTouching(false);
    
//     // Minimum swipe distance (px)
//     const MIN_SWIPE_DISTANCE = 50;
    
//     if (touchStart - touchEnd > MIN_SWIPE_DISTANCE) {
//       // Swipe left
//       goToNext();
//     } else if (touchEnd - touchStart > MIN_SWIPE_DISTANCE) {
//       // Swipe right
//       goToPrevious();
//     }
//   };

//   // Mouse hover handlers
//   const handleMouseEnter = () => {
//     setIsHovering(true);
//     clearInterval(intervalRef.current);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowRight') {
//         goToNext();
//       } else if (e.key === 'ArrowLeft') {
//         goToPrevious();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   // Variants for slide animations
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.5 },
//         scale: { duration: 0.5 }
//       }
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//       scale: 1.05,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.5 }
//       }
//     })
//   };

//   // Dot animation variants
//   const dotVariants = {
//     inactive: { scale: 1, opacity: 0.2 },
//     active: { 
//       scale: 1.2, 
//       opacity: 1,
//       transition: { 
//         scale: { type: "spring", stiffness: 500, damping: 15 },
//         opacity: { duration: 0.2 }
//       } 
//     }
//   };

//   // If no images, show placeholder
//   if (!images.length) {
//     return (
//       <div className="image-slider bg-gradient-to-br from-purple-900 to-pink-600 flex items-center justify-center">
//         <motion.p 
//           className="text-white text-xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           No images to display
//         </motion.p>
//       </div>
//     );
//   }

//   return (
//     <motion.div 
//       className="image-slider"
//       ref={sliderRef}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Gradient Overlay */}
//       <div className="image-slider-overlay"></div>
      
//       {/* Animated Decorative Elements */}
//       <motion.div 
//         className="decorative-circle"
//         animate={{ 
//           y: [0, -15, 0],
//           scale: [1, 1.05, 1],
//           opacity: [0.7, 0.9, 0.7]
//         }}
//         transition={{ 
//           duration: 6, 
//           repeat: Infinity, 
//           ease: "easeInOut" 
//         }}
//       />
      
//       <motion.div 
//         className="decorative-dot"
//         animate={{ 
//           scale: [1, 1.5, 1],
//           opacity: [0.7, 1, 0.7] 
//         }}
//         transition={{ 
//           duration: 4, 
//           repeat: Infinity, 
//           ease: "easeInOut" 
//         }}
//       />
      
//       {/* Image Slides with Framer Motion */}
//       <AnimatePresence initial={false} custom={direction} mode="wait">
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           className="image-slider-single-slide"
//           style={{ 
//             backgroundImage: `url(${images[currentIndex]})`,
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         />
//       </AnimatePresence>
      
//       {/* Text Overlay */}
//       <div className="image-slider-text-overlay">
//         <TypingAnimation />
//       </div>
      
//       {/* Progress Bar */}
//       <div className="image-slider-progress">
//         <motion.div 
//           className="image-slider-progress-bar"
//           style={{ width: `${progress}%` }}
//           initial={{ x: '-100%' }}
//           animate={{ x: 0 }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>
      
//       {/* Pagination Dots */}
//       {images.length > 1 && (
//         <div className="image-slider-pagination">
//           {images.map((_, index) => (
//             <motion.button
//               key={index}
//               className="image-slider-dot"
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               variants={dotVariants}
//               initial="inactive"
//               animate={index === currentIndex ? "active" : "inactive"}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             />
//           ))}
//         </div>
//       )}
      
//       {/* Navigation Arrows */}
//       <motion.button
//         className="nav-arrow nav-arrow-left"
//         onClick={goToPrevious}
//         whileHover={{ scale: 1.1, x: -5 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </motion.button>
      
//       <motion.button
//         className="nav-arrow nav-arrow-right"
//         onClick={goToNext}
//         whileHover={{ scale: 1.1, x: 5 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </motion.button>
//     </motion.div>
//   );
// };

// export default ImageSlider;




import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images = [], textContent = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Default images and text if none provided
  const defaultImages = [
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080',
    '/api/placeholder/1920/1080',
  ];
  
  const defaultText = [
    { title: "Welcome to Our World", subtitle: "Discover amazing experiences" },
    { title: "Innovative Solutions", subtitle: "For your everyday needs" },
    { title: "Join Our Community", subtitle: "Be part of something special" },
  ];

  const sliderImages = images.length > 0 ? images : defaultImages;
  const sliderText = textContent.length > 0 ? textContent : defaultText;

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          </div>
        ))}
      </div>

      {/* Text animation overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        {sliderText.map((text, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ease-in-out transform ${
              index === currentIndex 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {text.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              {text.subtitle}
            </p>
          </div>
        ))}
        
        {/* Call to action button */}
        <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get Started
        </button>
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 z-20 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm transform -translate-y-1/2 transition-all hover:bg-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 z-20 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm transform -translate-y-1/2 transition-all hover:bg-white/30"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;