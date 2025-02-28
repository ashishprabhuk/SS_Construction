import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import iaf from "../assets/iaf.png";
import uaf from "../assets/logo3.png";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <Container>
        <Row>
          <Col className="mb-1">
            <h5 className="text-white mb-4">
              SS Construction - Build Right, Build Strong
            </h5>
          </Col>
          <Col className="mb-1">
            <p className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="mb-1 d-flex justify-content-center">
            <Nav className="mt-1">
              <Nav.Link
                as={Link}
                to="/request"
                className="btn btn-outline-light"
                id="req-btn"
              >
                Request a Quote
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="iso-certification bg-white p-3 rounded">
              <img
                src={iaf}
                alt="ISO Certification"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
              <img
                src={uaf}
                alt="ISO Certification"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>
          </Col>
        </Row>

        <Container fluid className="bg-dark text-white py-4">
          <Row className="w-100 justify-content-between px-3">
            <Col md={2} className="mb-1 text-center text-md-start">
              <h6 className="text-white mb-3">Contact Us</h6>
              <p className="text-secondary mb-2">
                <i className="bi bi-telephone me-2"></i> +91 1234567890
              </p>
            </Col>

            <Col md={3} className="mb-1 text-center text-md-start">
              <h6 className="text-white mb-3">Email</h6>
              <p className="text-secondary mb-2">
                <i className="bi bi-envelope me-2"></i> 123@gmail.com
              </p>
            </Col>

            <Col md={3} className="mb-1 text-center text-md-start">
              <h6 className="text-white mb-3">Find Us Here</h6>
              <p className="text-secondary mb-2">
                <i className="bi bi-geo-alt me-2"></i> 123, Lorem Ipsum, Dolor
                Sit, Amet
              </p>
            </Col>

            <Col md={2} className="mb-1 text-center text-md-start">
              <h6 className="text-white mb-3">Connect</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <i className="bi bi-github fs-5"></i>
                </a>
                <a href="mailto:info@example.com" className="text-secondary">
                  <i className="bi bi-envelope fs-5"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Row className="pt-2">
          <Col className="text-center">
            <div className="fading-line"></div>
            <p className="text-secondary mb-2">
              &copy; {new Date().getFullYear()} All rights reserved. Developed
              by {" "}
              <b>
                <a
                  className="text-decoration-none text-secondary"
                  id="dev-link"
                  href="https://www.andrometa.in"
                >
                  Andrometa
                </a>
              </b>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
