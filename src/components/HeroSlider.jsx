import { useState, useEffect } from "react";
import func from "../assets/Home/banner1.jpg";
import batchPlant from "../assets/Home/banner2.jpg";
import cementFill from "../assets/Home/banner3.jpg";
import flag from "../assets/Home/banner4.jpg";
import leyland from "../assets/Home/banner5.jpg";
import airport from "../assets/Home/banner6.png";
import styled, { keyframes } from "styled-components";

const slideData = [
  {
    title: "Delivering Quality Concrete",
    subtitle: "For Strong Construction",
    bg: airport,
    color: "#006994",
  },
  {
    title: "Safety First",
    subtitle: "Engineered for Safety",
    bg: leyland,
    color: "#B57F2E",
  },
  {
    title: "Sustainable Living",
    subtitle: "Building a Greener Future",
    bg: flag,
    color: "#2A5A3C",
  },
  {
    title: "Innovative Solutions",
    subtitle: "Pioneering Concrete Technologies",
    bg: cementFill,
    color: "#2D7791",
  },
  {
    title: "Urban Excellence",
    subtitle: "Strengthening Cityscapes",
    bg: batchPlant,
    color: "#3D3D3D",
  },
  {
    title: "Superior Service",
    subtitle: "Excellence in Every Batch",
    bg: func,
    color: "#4B6455",
  }
];

const wipeRight = keyframes`
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  max-width: 1200px;
  margin: 10px auto;
  padding: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 8px;
    margin: 10px;
    margin-top: 20px;
  }
`;

const SlidesTrack = styled.div`
  display: flex;
  border-radius: 12px;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ activeIndex }) => activeIndex * -100}%);
  width: 100%;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const SlideCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0 0 0;
  box-shadow: 0 15px 30px -12px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  height: 450px;
  flex: 0 0 100%;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
    margin: 10px 0 0 0;
    border-radius: 8px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      45deg,
      ${({ color }) => color}99,
      ${({ color }) => color}dd
    );
    mix-blend-mode: multiply;
    z-index: 1;
    @media (max-width: 768px) {
      border-radius: 8px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ color }) => color};
    mix-blend-mode: screen;
    opacity: 0.1;

    @media (max-width: 768px) {
      border-radius: 8px;
    }
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 12px;
  padding: 3rem 8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${wipeRight} 1s cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    padding: 5rem 3.5rem;
    border-radius: 8px;
  }
`;

const ChunkyHeading = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  color: white;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  transform: skewY(-3deg);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-size: 2rem;
    letter-spacing: 3px;
    margin-top: 0.6rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin-top: 0.4rem;
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.2rem;
  align-items: center;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 0.5rem;
    gap: 0.8rem;
  }
`;

const NavButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${({ active }) => (active ? "white" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-width: 1px;
  }

  &:hover {
    transform: scale(1.1);
    background: white;
  }
`;

const ProgressBar = styled.div`
  width: 180px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 120px;
    height: 2px;
  }

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

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const ArrowButton = styled.button`
  width: 48px;
  height: 48px;
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
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
`;

export default function ModernSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0); 

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
    setKey((prevKey) => prevKey + 1);
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
    <SliderContainer style={{borderRadius: '12px'}}>
      <SlidesTrack activeIndex={activeIndex} style={{borderRadius: '12px'}}>
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
        {/* <ProgressBar progress={progress} /> */}
      </Controls>
    </SliderContainer>
  );
}
