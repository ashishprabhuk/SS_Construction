import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section id="wcu-bgc" className="pb-5">
      <Container>
        <h3 id="plant-title" className="text-center mb-3 display-6">
          Why Choose Us
        </h3>
        <div className="section-underline"></div>
        <Row>
          <Col md={4} className="mb-4">
            <Card id="wcu-box" className=" h-100 border-1">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <i className="bi bi-lightning-charge fs-1"></i>
                </div>
                <Card.Title>On-Time Delivery</Card.Title>
                <Card.Text className="text-secondary">
                  We understand that time is critical in construction. Our efficient logistics ensure your concrete is delivered exactly when you need it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card id="wcu-box" className="h-100 border-1">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <i className="bi bi-shield-check fs-1"></i>
                </div>
                <Card.Title>Uncompromising Quality</Card.Title>
                <Card.Text className="text-secondary">
                  We blend top-grade materials with advanced mixing techniques to deliver concrete that meets the highest industry standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card id="wcu-box" className="wcu-box h-100 border-1 ">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <i className="bi bi-graph-up fs-1"></i>
                </div>
                <Card.Title>Cost-Effective Excellence</Card.Title>
                <Card.Text className="text-secondary">
                We offer exceptional value with competitive pricing, proving that quality doesn&apos;t have to come at a premium.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChoose;
