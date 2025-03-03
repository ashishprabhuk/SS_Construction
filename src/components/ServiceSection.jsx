import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import ServiceStackCards from "./ServiceStackCards";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <>
      <div className="contact-section">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="display-4 fw-bold">Services Offered</h2>
          <div className="section-underline"></div>
        </div>

        <Row className="mt-5">
          <ServiceStackCards />
        </Row>

        <ServiceCard/>
      </Container>
    </div>
    </>
  );
};

export default ServicesSection;
