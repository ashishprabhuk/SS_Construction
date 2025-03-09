// import { useState, useEffect } from 'react';
// import banner1 from "../assets/Home/banner1.jpg";
// import banner2 from "../assets/Home/banner2.jpg";
// import banner3 from "../assets/Home/banner3.jpg";
// import banner4 from "../assets/Home/banner4.jpg";
// import banner5 from "../assets/Home/banner5.jpg";
// import banner6 from "../assets/Home/banner6.png";
// import styled, { keyframes } from 'styled-components';

// const slideData = [
//   {
//     title: "Quality Construction",
//     subtitle: "Explore Ocean Wonders",
//     bg: banner1,
//     color: "#006994"
//   },
//   {
//     title: "Safety",
//     subtitle: "Tropical Rainforests",
//     bg: banner2,
//     color: "#2A5A3C"
//   },
//   {
//     title: "Service",
//     subtitle: "Alpine Adventures",
//     bg: banner3,
//     color: "#4B6455"
//   },
//   {
//     title: "ROCKY WATERFALL",
//     subtitle: "Nature's Beauty",
//     bg: banner4,
//     color: "#2D7791"
//   },
//   {
//     title: "SUNSET",
//     subtitle: "Golden Hour",
//     bg: banner5,
//     color: "#B57F2E"
//   },
//   {
//     title: "WATERFALL",
//     subtitle: "Majestic Cascades",
//     bg: banner6,
//     color: "#3D3D3D"
//   }
// ];

// const wipeRight = keyframes`
//   0% { transform: translateX(100px); opacity: 0; }
//   100% { transform: translateX(0); opacity: 1; }
// `;

// const SliderContainer = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem 0;
//   overflow: hidden;
// `;

// const SlidesTrack = styled.div`
//   display: flex;
//   transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//   transform: translateX(${({ activeIndex }) => activeIndex * -100}%);
//   width: 100%;
// `;

// const SlideCard = styled.div`
//   position: relative;
//   border-radius: 25px;
//   overflow: hidden;
//   box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
//   transform-style: preserve-3d;
//   height: 500px;
//   flex: 0 0 100%;
//   background-size: cover;
//   background-position: center;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(45deg,
//       ${({ color }) => color}99,
//       ${({ color }) => color}dd);
//     mix-blend-mode: multiply;
//     z-index: 1;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: ${({ color }) => color};
//     mix-blend-mode: screen;
//     opacity: 0.1;
//   }
// `;

// const SlideContent = styled.div`
//   position: relative;
//   z-index: 2;
//   padding: 8rem;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   animation: ${wipeRight} 1s cubic-bezier(0.4, 0, 0.2, 1);
//   animation-fill-mode: both;
//   animation-delay: 0.3s;
// `;

// const ChunkyHeading = styled.h2`
//   font-size: 5rem;
//   font-weight: 900;
//   line-height: 1;
//   color: white;
//   margin: 0 0 1.5rem 0;
//   text-transform: uppercase;
//   letter-spacing: -2px;
//   text-shadow: 4px 4px 10px rgba(0,0,0,0.3);
//   transform: skewY(-3deg);

//   span {
//     display: block;
//     font-size: 2.5rem;
//     letter-spacing: 4px;
//     margin-top: 1rem;
//     opacity: 0.9;
//   }
// `;

// const Controls = styled.div`
//   position: absolute;
//   bottom: -3rem;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 1.5rem;
//   align-items: center;
//   z-index: 10;
// `;

// const NavButton = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   border: 2px solid white;
//   background: ${({ active }) => active ? 'white' : 'transparent'};
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     background: white;
//   }
// `;

// const ProgressBar = styled.div`
//   width: 200px;
//   height: 4px;
//   background: rgba(255,255,255,0.3);
//   border-radius: 2px;
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     height: 100%;
//     width: ${({ progress }) => progress}%;
//     background: white;
//     transition: width 0.3s ease;
//   }
// `;

// const SlideArrows = styled.div`
//   position: absolute;
//   width: 100%;
//   top: 50%;
//   left: 0;
//   transform: translateY(-50%);
//   display: flex;
//   justify-content: space-between;
//   padding: 0 2rem;
//   z-index: 10;
// `;

// const ArrowButton = styled.button`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background: rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(10px);
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   color: white;
//   font-size: 1.5rem;

//   &:hover {
//     background: rgba(255, 255, 255, 0.4);
//     transform: scale(1.1);
//   }
// `;

// export default function ModernSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [key, setKey] = useState(0); // Force re-render of slide content animation

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//     setKey(prevKey => prevKey + 1); // Reset animation
//   };

//   const nextSlide = () => {
//     goToSlide((activeIndex + 1) % slideData.length);
//   };

//   const prevSlide = () => {
//     goToSlide((activeIndex - 1 + slideData.length) % slideData.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     const progressInterval = setInterval(() => {
//       setProgress(prev => Math.min(prev + 1, 100));
//     }, 50);

//     return () => {
//       clearInterval(interval);
//       clearInterval(progressInterval);
//     };
//   }, [activeIndex]);

//   return (
//     <SliderContainer>
//       <SlidesTrack activeIndex={activeIndex}>
//         {slideData.map((slide, index) => (
//           <SlideCard
//             key={index}
//             style={{ backgroundImage: `url(${slide.bg})` }}
//             color={slide.color}
//           >
//             {index === activeIndex && (
//               <SlideContent key={key}>
//                 <ChunkyHeading>
//                   {slide.title}
//                   <span>{slide.subtitle}</span>
//                 </ChunkyHeading>
//               </SlideContent>
//             )}
//           </SlideCard>
//         ))}
//       </SlidesTrack>

//       <SlideArrows>
//         <ArrowButton onClick={prevSlide}>←</ArrowButton>
//         <ArrowButton onClick={nextSlide}>→</ArrowButton>
//       </SlideArrows>

//       <Controls>
//         {slideData.map((_, index) => (
//           <NavButton
//             key={index}
//             active={activeIndex === index}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//         <ProgressBar progress={progress} />
//       </Controls>
//     </SliderContainer>
//   );
// }

import { useState, useEffect } from "react";
import banner1 from "../assets/Home/banner1.jpg";
import banner2 from "../assets/Home/banner2.jpg";
import banner3 from "../assets/Home/banner3.jpg";
import banner4 from "../assets/Home/banner4.jpg";
import banner5 from "../assets/Home/banner5.jpg";
import banner6 from "../assets/Home/banner6.png";
import styled, { keyframes } from "styled-components";

const slideData = [
  {
    title: "Quality Construction",
    subtitle: "Building Strong Foundations",
    bg: banner1,
    color: "#006994",
  },
  {
    title: "Safety First",
    subtitle: "Engineered for Safety",
    bg: banner2,
    color: "#2A5A3C",
  },
  {
    title: "Superior Service",
    subtitle: "Excellence in Every Batch",
    bg: banner3,
    color: "#4B6455",
  },
  {
    title: "Sustainable Living",
    subtitle: "Building a Greener Future",
    bg: banner4,
    color: "#2D7791",
  },
  {
    title: "Innovative Solutions",
    subtitle: "Pioneering Concrete Technologies",
    bg: banner5,
    color: "#B57F2E",
  },
  {
    title: "Urban Excellence",
    subtitle: "Strengthening Cityscapes",
    bg: banner6,
    color: "#3D3D3D",
  },
];

const wipeRight = keyframes`
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const SlidesTrack = styled.div`
  display: flex;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ activeIndex }) => activeIndex * -100}%);
  width: 100%;
`;

const SlideCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0 0 0;
  box-shadow: 0 15px 30px -12px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  height: 450px; /* Reduced height */
  flex: 0 0 100%;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${({ color }) => color}99,
      ${({ color }) => color}dd
    );
    mix-blend-mode: multiply;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ color }) => color};
    mix-blend-mode: screen;
    opacity: 0.1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 3rem 8rem; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${wipeRight} 1s cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
  animation-delay: 0.3s;
`;

const ChunkyHeading = styled.h2`
  font-size: 4rem; /* Reduced font size */
  font-weight: 900;
  line-height: 1;
  color: white;
  margin: 0 0 1rem 0; /* Reduced margin */
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  transform: skewY(-3deg);

  span {
    display: block;
    font-size: 2rem; /* Reduced font size */
    letter-spacing: 3px;
    margin-top: 0.6rem; /* Reduced margin */
    opacity: 0.9;
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 1rem; /* Moved up */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.2rem; /* Reduced gap */
  align-items: center;
  z-index: 10;
`;

const NavButton = styled.button`
  width: 10px; /* Reduced size */
  height: 10px; /* Reduced size */
  border-radius: 50%;
  border: 2px solid white;
  background: ${({ active }) => (active ? "white" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: white;
  }
`;

const ProgressBar = styled.div`
  width: 180px; /* Reduced width */
  height: 3px; /* Reduced height */
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ progress }) => progress}%;
    background: white;
    transition: width 0.3s ease;
  }
`;

const SlideArrows = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 10;
`;

const ArrowButton = styled.button`
  width: 48px; /* Reduced size */
  height: 48px; /* Reduced size */
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.2rem; /* Reduced font size */

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
`;

export default function ModernSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0); // Force re-render of slide content animation

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
    setKey((prevKey) => prevKey + 1); // Reset animation
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % slideData.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + slideData.length) % slideData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [activeIndex]);

  return (
    <SliderContainer>
      <SlidesTrack activeIndex={activeIndex}>
        {slideData.map((slide, index) => (
          <SlideCard
            key={index}
            style={{ backgroundImage: `url(${slide.bg})` }}
            color={slide.color}
          >
            {index === activeIndex && (
              <SlideContent key={key}>
                <ChunkyHeading>
                  {slide.title}
                  <span>{slide.subtitle}</span>
                </ChunkyHeading>
              </SlideContent>
            )}
          </SlideCard>
        ))}
      </SlidesTrack>

      <SlideArrows>
        <ArrowButton onClick={prevSlide}>←</ArrowButton>
        <ArrowButton onClick={nextSlide}>→</ArrowButton>
      </SlideArrows>

      <Controls>
        {slideData.map((_, index) => (
          <NavButton
            key={index}
            active={activeIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
        <ProgressBar progress={progress} />
      </Controls>
    </SliderContainer>
  );
}
