// // // HeroSection.jsx
// // import React, { useEffect } from 'react';
// // import './HeroSection.css';

// // const HeroSection = ({ images }) => {
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const parallaxElements = document.querySelectorAll('[data-parallax]');
// //       const scrollPosition = window.pageYOffset;

// //       parallaxElements.forEach(element => {
// //         const speed = parseFloat(element.getAttribute('data-parallax'));
// //         element.style.transform = `translateY(${scrollPosition * speed}px)`;
// //       });
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <section className="hero-section">
// //       <div className="hero-grid">
// //         {/* Main Image */}
// //         <div className="hero-main-image" data-parallax="0.3">
// //           <div className="image-overlay"></div>
// //           <img src={images[0]} alt="Construction Project" className="zoom-effect" />
// //         </div>

// //         {/* Right Side Image */}
// //         <div className="hero-right-image" data-parallax="0.2">
// //           <img src={images[1]} alt="Construction Team" />
// //         </div>

// //         {/* Text Content */}
// //         <div className="hero-text-content">
// //           <h1>Building Strong Foundations<br/>For Tomorrow</h1>
// //           <button className="hero-cta-button">
// //             Get Free Estimate
// //             <span className="button-glow"></span>
// //           </button>
// //         </div>

// //         {/* Additional Images */}
// //         <div className="hero-grid-image-3" data-parallax="0.4">
// //           <img src={images[2]} alt="Construction Site" />
// //         </div>
// //         <div className="hero-grid-image-4" data-parallax="0.25">
// //           <img src={images[3]} alt="Construction Materials" />
// //         </div>
// //         <div className="hero-grid-image-5" data-parallax="0.35">
// //           <img src={images[4]} alt="Modern Architecture" />
// //         </div>
// //         <div className="hero-grid-image-6" data-parallax="0.15">
// //           <img src={images[5]} alt="Completed Project" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React from 'react';
import banner1 from "../assets/Home/banner1.jpg";
import banner2 from "../assets/Home/banner2.jpg";
import banner3 from "../assets/Home/banner3.jpg";
import banner4 from "../assets/Home/banner4.jpg";
import banner5 from "../assets/Home/banner5.jpg";
import banner6 from "../assets/Home/banner6.png";
// import './Hero.css';

// const images = [
//   { url: banner1, caption: 'Project 1' },
//   { url: banner2, caption: 'Project 2' },
//   { url: banner3, caption: 'Project 3' },
//   { url: banner4, caption: 'Project 4' },
//   { url: banner5, caption: 'Project 5' },
//   { url: banner6, caption: 'Project 6' },
// ];

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       {/* Parallax Background using first banner as example */}
//       <div
//         className="parallax-bg"
//         style={{ backgroundImage: `url(${banner1})` }}
//       ></div>

//       {/* Overlay Content */}
//       <div className="overlay">
//         <h1>Building a Stronger Future</h1>
//         <p>Expert Cement Construction Services</p>
//         <button className="cta-button">Discover Our Projects</button>
//       </div>

//       {/* Mosaic Grid */}
//       <div className="mosaic-grid">
//         {images.map((image, index) => (
//           <div key={index} className="mosaic-item">
//             <img src={image.url} alt={`Mosaic ${index + 1}`} />
//             <div className="caption">{image.caption}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// HeroSection.jsx
// import React, { useEffect } from 'react';
// import './HeroSection.css';

// const HeroSection = ({ images }) => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.pageYOffset;
//       const parallaxElements = document.querySelectorAll('.parallax-layer');
      
//       parallaxElements.forEach(element => {
//         const depth = parseFloat(element.dataset.depth);
//         const offset = scrolled * depth;
//         element.style.transform = `translateZ(${offset}px) scale(${1 + depth})`;
//       });
//     };

//     const handleMouseMove = (e) => {
//       const x = (window.innerWidth - e.pageX * 2) / 50;
//       const y = (window.innerHeight - e.pageY * 2) / 50;
//       document.querySelector('.hero-grid').style.transform = 
//         `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <section className="hero-section">
//       <div className="hero-grid">
//         {/* Main Content */}
//         <div className="hero-main-content">
//           <h1>Building Tomorrow's Foundations Today</h1>
//           <button className="hero-cta">
//             Get Free Estimate <span className="arrow">→</span>
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="image-grid">
//           <div 
//             className="parallax-layer main-image" 
//             data-depth="0.1"
//             style={{ '--rotate': '-2deg' }}
//           >
//             <img src={images[0]} alt="Construction Site" />
//             <div className="image-shine"></div>
//           </div>

//           <div 
//             className="parallax-layer side-image top-right" 
//             data-depth="0.15"
//             style={{ '--rotate': '3deg' }}
//           >
//             <img src={images[1]} alt="Construction Team" />
//           </div>

//           <div 
//             className="parallax-layer bottom-left" 
//             data-depth="0.2"
//             style={{ '--rotate': '-4deg' }}
//           >
//             <img src={images[2]} alt="Modern Architecture" />
//           </div>

//           <div 
//             className="parallax-layer center-right" 
//             data-depth="0.12"
//             style={{ '--rotate': '2deg' }}
//           >
//             <img src={images[3]} alt="Building Materials" />
//           </div>

//           <div className="grid-overlay"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





import { motion } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';

const HeroSection = () => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: -10,
  });

  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
  ];

  return (
    <section className="hero-container">
      <div className="content-wrapper" ref={ref}>
        {/* Company Name & Tagline */}
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>SolidBase Constructions</h1>
          <p>Building Excellence Since 1995</p>
          <button className="cta-button">
            Request Consultation
          </button>
        </motion.div>

        {/* Image Grid */}
        <div className="image-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className={`grid-item item-${index + 1}`}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="image-wrapper">
                <img 
                  src={img} 
                  alt={`Construction showcase ${index + 1}`} 
                  className="grid-image"
                />
                <div className="image-overlay" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;