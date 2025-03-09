import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import { sliderImages } from "../Models/Slides";
import { images } from "../Models/RollerImages";
import ImageRoller from "../components/ImageRoller";
import Plant from "../components/Plant";
import WhyChoose from "../components/WhyChoose";
import ProjectShowcase from "../components/ProjectShowcase";
import BlenderModeSlider from "../components/BlenderModeSlider";
import Slider from "./Slider";
import HeroSection from "../components/HeroSection";
import Parallax from "../components/Parallax";
import HeroGrid from "../components/HeroGrid";
import HeroSectionSlider from "../components/HeroSectionSlider";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  const textContent = [
    { title: "Custom Title 1", subtitle: "Custom subtitle text here" },
    { title: "Custom Title 2", subtitle: "Another custom subtitle" },
    { title: "Custom Title 3", subtitle: "Your third custom subtitle" },
  ];
  return (
    <div className="home-page">
      <section className="hero">
        <HeroSlider />
      </section>

      <WhyChoose />

      <ProjectShowcase/>

      <section>
        <Plant />
      </section>

      <section className="roller py-3">
        <h1 className="display-6 text-center fw-bold my-3">Our Esteemed Associates</h1>
        <div className="section-underline"></div>
        <ImageRoller images={images} slideDuration={20} imageWidth={150} />
      </section>
    </div>
  );
}
