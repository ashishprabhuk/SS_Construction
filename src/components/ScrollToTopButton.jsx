import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UpArrow from "../assets/up-arrow-svgrepo-com.svg"; // Import SVG

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <Button 
        onClick={scrollToTop} 
        style={{ 
          position: "fixed", 
          zIndex: 100,
          bottom: "20px", 
          right: "20px", 
          padding: "10px",
          backgroundColor: "#ffdd0093", 
          color: "#000",
          border: "1px solid #000",
          boxShadow: "0 2px 4pxrgba(255, 221, 0, 0.24)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img src={UpArrow} alt="Scroll to Top" style={{ width: "15px", height: "15px" }} />
      </Button>
    )
  );
}
