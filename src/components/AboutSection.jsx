import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaBuilding, FaEye, FaBullseye, FaUsers, FaFlask } from 'react-icons/fa';
import profile from "../assets/About/Profile.jpg"
import './AboutSection.css'; 

const AboutSection = () => {
  return (
    <Container fluid className="about-us-page bg-#FCF5EB">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-#FCF5EB">
        <h1 className="display-4 fw-bold mb-3">About Us</h1>
        <p className="lead">Building Strong Foundations Since 2020</p>
      </section>

      {/* Overview Section */}
      <section className="section-overview pt-2 pb-5  bg-#FCF5EB">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="section-title mb-4">
                <FaBuilding className="me-2" />
                Company Overview
              </h2>
              <p className="lead">
                SS Ultra Ready Mix Concrete is an established Ready Mix Concrete Company in Tiruchirappalli driven by rich experienced professionals in the Concrete Industry.
              </p>
              <p>
                We are committed to producing high-quality as well as cost-effective products to suit every segment of the Construction Industry.
              </p>
            </Col>
            <Col md={6}>
              {/* Add your company photo here */}
              <div className="about-image placeholder-image"></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission py-5 bg-light">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 vision-card">
                <Card.Body>
                  <FaEye className="display-4 text-primary mb-3" />
                  <h3>Our Vision</h3>
                  <Card.Text>
                    To be the leading provider of innovative, high-quality ready-mix concrete solutions, delivering sustainable and reliable products that drive the success of our clients and contribute to building stronger communities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="h-100 mission-card">
                <Card.Body>
                  <FaBullseye className="display-4 text-success mb-3" />
                  <h3>Our Mission</h3>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Deliver superior value to stakeholders</ListGroup.Item>
                    <ListGroup.Item>Exceptional customer service</ListGroup.Item>
                    <ListGroup.Item>Consistent quality products</ListGroup.Item>
                    <ListGroup.Item>Continuous team development</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lab Section */}
      <section className="lab-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">
            <FaFlask className="me-2" />
            Our Laboratory
          </h2>
          <Row className="g-4">
            <Col md={6}>
              <div className="lab-image placeholder-image"></div>
            </Col>
            <Col md={6}>
              <div className="lab-content">
                <h4>Quality Assurance Lab</h4>
                <ul className="lab-features">
                  <li>State-of-the-art in-house testing facility</li>
                  <li>New concrete product development</li>
                  <li>Trial mixes for new projects</li>
                  <li>Material quality testing</li>
                  <li>Highly skilled technicians</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Management Section */}
      <section className="management-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">
            <FaUsers className="me-2" />
            Leadership Team
          </h2>
          <Row className="g-4 justify-content-center">
            {/* Managing Director */}
            <Col md={6} lg={5}>
              <Card className="management-card h-100">
                <Card.Img variant="top" src={profile} />
                <Card.Body>
                  <Card.Title>Er. S. Sakthivel</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Managing Director & CFO
                  </Card.Subtitle>
                  <Card.Text>
                    M.Tech (Structural Engineering) with 30+ years experience. Founder of Arutjothi Constructions. Driving excellence in concrete production.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* CEO */}
            <Col md={6} lg={5}>
              <Card className="management-card h-100">
                <Card.Img variant="top" src={profile} />
                <Card.Body>
                  <Card.Title>Er. S. Srivarsan</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Chief Executive Officer
                  </Card.Subtitle>
                  <Card.Text>
                    B.E. Civil Engineering. Technology-driven leader focused on sustainable construction and operational excellence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default AboutSection;