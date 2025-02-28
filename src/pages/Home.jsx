import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";

export default function Home() {

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8MHwwfHx8Mg%3D%3D',
      title: 'Nature Beauty',
      description: 'Discover the amazing natural wonders of our planet',
      buttonText: 'Explore More'
    },
    {
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9ufGVufDB8MHwwfHx8Mg%3D%3D',
      title: 'Mountain Adventure',
      description: 'Experience the thrill of mountain climbing',
      buttonText: 'Start Adventure'
    },
    {
      image: 'https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8MHwwfHx8Mg%3D%3D',
      title: 'Ocean Life',
      description: 'Dive into the depths of marine life'
    }
  ];

  return (
    <>
      {/* Slider Section */}
      <section>
        <ImageSlider slides={slides} />
      </section>

      {/* Hero Section */}
      <section className="hero d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 mb-4 text-white">SS Construction</h1>
              <p className="lead mb-4 text-white-50">
                Empowering businesses with cutting-edge digital solutions
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Button as={Link} to="/services" variant="primary" size="lg">
                  Our Services
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  variant="outline-light"
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
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
                  <Card.Title>Fast Delivery</Card.Title>
                  <Card.Text>
                    Rapid implementation of solutions without compromising
                    quality
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
                  <Card.Title>Secure Solutions</Card.Title>
                  <Card.Text>
                    Enterprise-grade security for all your digital assets
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
                  <Card.Title>Proven Results</Card.Title>
                  <Card.Text>
                    Track record of successful implementations across industries
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
          <h2 className="mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-4 lead">
            Start your digital transformation journey today
          </p>
          <Button as={Link} to="/request" variant="outline-light" size="lg">
            Request Free Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
