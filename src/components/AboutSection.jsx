import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import {
  FaBuilding,
  FaEye,
  FaBullseye,
  FaUsers,
  FaFlask,
} from "react-icons/fa";
import profile from "../assets/About/Profile.jpg";
import ceo from "../assets/About/ceo.jpg";
import companyImage from "../assets/About/flag.jpg";
import lab from "../assets/About/labsc.jpg";
import "./AboutSection.css";
import { FiCheckCircle } from "react-icons/fi";

const AboutSection = () => {
  return (
    <Container fluid className="about-us-page bg-light">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <h1 className="display-4 fw-bold my-3">About Us</h1>
        <p className="lead">Building Strong Foundations Since 2020</p>
      </section>

      {/* Overview Section */}
      <section className="section-overview py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="section-title mb-4 d-flex align-items-center">
                <FaBuilding className="me-2" /> Company Overview
              </h2>
              {/* <div id="fading-line" className="mb-5"></div> */}
              <p className="lead pt-2">
                SS Ultra Ready Mix Concrete is an established Ready Mix Concrete
                Company in Tiruchirappalli, driven by experienced professionals
                in the concrete industry.
              </p>
              <p className="lead pt-2">
                We are committed to producing high-quality, cost-effective
                products to suit every segment of the construction industry.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                style={{ borderRadius: "20px" }}
                src={companyImage}
                alt="Company Overview"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card
                className="h-100 p-4 vision-card"
                style={{ borderRadius: "20px" }}
              >
                <Card.Body>
                  <FaEye className="display-4 text-primary mb-3" />
                  <h3
                    className="pb-3"
                    style={{
                      letterSpacing: "2px",
                      textAlign: "start",
                      fontSize: "1.5rem",
                    }}
                  >
                    Our Vision
                  </h3>
                  <Card.Text
                    className="text-secondary"
                    style={{ letterSpacing: "1px", fontSize: "1.2rem" }}
                  >
                    To be the leading provider of innovative, high-quality
                    ready-mix concrete solutions, delivering sustainable and
                    reliable products that drive the success of our clients and
                    contribute to building stronger communities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                className="h-100 p-4 mission-card"
                style={{ borderRadius: "20px" }}
              >
                <Card.Body>
                  <FaBullseye className="display-4 text-success mb-3" />
                  <h3
                    className="pb-3"
                    style={{
                      letterSpacing: "2px",
                      textAlign: "start",
                      fontSize: "1.5rem",
                    }}
                  >
                    Our Mission
                  </h3>
                  <ListGroup
                    variant="flush"
                    className="text-start"
                    style={{ letterSpacing: "1px", fontSize: "1.2rem" }}
                  >
                    <ListGroup.Item className="d-flex align-items-center text-secondary">
                      <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                      Deliver superior value to stakeholders
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center text-secondary">
                      <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                      Exceptional customer service
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center text-secondary">
                      <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                      Consistent quality products
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center text-secondary">
                      <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                      Continuous team development
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lab Section */}
      <section className="lab-section py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">
            <FaFlask className="me-2" /> Our Laboratory
          </h2>
          <Row className="align-items-center g-4">
            <Col md={7} className="text-center">
              <img
                style={{ borderRadius: "20px" }}
                src={lab}
                alt="Our Laboratory"
                className="img-fluid"
              />
            </Col>
            <Col md={5} id="qal-para">
              <h4 className="pb-2">Quality Assurance Lab</h4>
              <ul className="lab-features list-unstyled text-start">
                <li className="d-flex align-items-center">
                  <FiCheckCircle className="text-success me-2 flex-shrink-0" />
                  Consistent quality products & State-of-the-art in-house
                  testing facility
                </li>
                <li className="d-flex align-items-center">
                  <FiCheckCircle className="text-success me-2 flex-shrink-0" />
                  New concrete product development
                </li>
                <li className="d-flex align-items-center">
                  <FiCheckCircle className="text-success me-2 flex-shrink-0" />
                  Trial mixes for new projects
                </li>
                <li className="d-flex align-items-center">
                  <FiCheckCircle className="text-success me-2 flex-shrink-0" />
                  Material quality testing
                </li>
                <li className="d-flex align-items-center">
                  <FiCheckCircle className="text-success me-2 flex-shrink-0" />
                  Highly skilled technicians
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Management Section */}
      <section className="management-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold text-dark">
            <FaUsers className="me-2 display-6 text-primary" /> Leadership Team
          </h2>
          <Row className="g-4 justify-content-center">
            {[
              {
                name: "Er. S. Sakthivel",
                role: "Managing Director & CFO",
                description:
                  "M.Tech (Structural Engineering) with 30+ years of experience. Founder of Arutjothi Constructions. Driving excellence in concrete production.",
                image: ceo,
              },
              {
                name: "Er. S. Srivarsan",
                role: "Chief Executive Officer",
                description:
                  "B.E. Civil Engineering. Technology-driven leader focused on sustainable construction and operational excellence.",
                image: profile,
              },
            ].map((leader, index) => (
              <Col key={index} xs={12} sm={10} md={6} lg={5}>
                <Card className="management-card shadow-lg h-100 text-center">
                  <Card.Img
                    variant="top"
                    src={leader.image}
                    className="leader-img"
                  />
                  <Card.Body className="leader-body">
                    <Card.Title className="fw-bold">{leader.name}</Card.Title>
                    <Card.Subtitle className="leader-role mb-3">
                      {leader.role}
                    </Card.Subtitle>
                    <Card.Text className="text-secondary">
                      {leader.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default AboutSection;
