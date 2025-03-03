import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import { sliderImages } from "../Models/Slides";
import { images } from "../Models/RollerImages";
import ImageRoller from "../components/ImageRoller";
import Plant from "../components/Plant";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <div className="home-page">
      {/* Slider Section */}
      <section className="hero">
        <ImageSlider images={sliderImages} />
      </section>


        <WhyChoose/>
      

      <section>
        <Plant />
      </section>

      <section className="roller py-3">
        <h3 id="plant-title" className="text-center mb-3 display-6">
            Our Esteemed Associates
          </h3>
          <div className="section-underline"></div>
        <ImageRoller images={images} slideDuration={20} imageWidth={150} />
      </section>
    </div>
  );
}
