import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import { slides } from "../Models/Slides";
import { images } from "../Models/RollerImages";
import ImageRoller from "../components/ImageRoller";

export default function Home() {
  return (
    <>
      {/* Slider Section */}
      <section className="hero">
        <ImageSlider slides={slides} />
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Body className="text-center">
                  <div className="mb-3 text-primary">
                    <i className="bi bi-lightning-charge fs-1"></i>
                  </div>
                  <Card.Title>Title 1</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Body className="text-center">
                  <div className="mb-3 text-primary">
                    <i className="bi bi-shield-check fs-1"></i>
                  </div>
                  <Card.Title>Title 2</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Body className="text-center">
                  <div className="mb-3 text-primary">
                    <i className="bi bi-graph-up fs-1"></i>
                  </div>
                  <Card.Title>Title 3</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <Container className="text-center">
          <h2 className="mb-4">Some CTA Title?</h2>
          <p className="mb-4 lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Button as={Link} to="/request" variant="outline-light" size="lg">
            Click here for inquiries
          </Button>
        </Container>
      </section>

      <section className="roller py-1">
      <h4 className="text-center mt-2 mb-5 display-6 fw-bold text-dark">
          Building Success Together
        </h4>
        <ImageRoller images={images} slideDuration={20} imageWidth={150} />
      </section>
    </>
  );
}
