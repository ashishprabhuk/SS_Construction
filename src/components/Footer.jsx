/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import iso1 from "../assets/Footer/iso-14001-2015.svg";
import iso2 from "../assets/Footer/iso-45001-2018.svg";
import iso3 from "../assets/Footer/iso-9001-2015.svg";

export default function Footer() {
  return (
    <footer className="bg-dark text-light footer-wrapper">
      <Container className="pt-5 pb-2">
        {/* ISO Certifications Section */}
        <Row className="g-4 mb-4">
          <Col
            lg={3}
            md={6}
            className="mb-3 d-flex justify-content-center align-items-center"
          >
            <div className="iso-certification d-flex gap-3">
              <img
                src={iso1}
                alt="OA Certification"
                className="img-fluid certification-img"
              />
              <img
                src={iso2}
                alt="AGAC Certification"
                className="img-fluid certification-img"
              />
              <img
                src={iso3}
                alt="IAF Certification"
                className="img-fluid certification-img"
              />
            </div>
          </Col>
        </Row>

        {/* Address, Contact, Message & Social Links */}
        <Row className="g-4">
          {/* Address */}
          <Col lg={3} md={6} className="h-100">
            <h5 className="text-uppercase text-white mb-4">Address</h5>
            <a href="https://maps.app.goo.gl/58z7Tg47F45N1FQX8" style={{textDecoration:'none'}} className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2 text-white"></i>
              41/2A2, Kollidam River Bed,
              <br />
              Kondayampettai, Thiruvanaikovil,
              <br />
              Trichy - 620005
            </a>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6} className="h-100">
            <h5 className="text-uppercase text-white mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-telephone me-2 text-white"></i>
                <a
                  href="tel:+919842459234"
                  className="text-secondary text-decoration-none"
                >
                  +91 98424 59234
                </a>
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2 text-white"></i>
                <a
                  href="tel:+918870536435"
                  className="text-secondary text-decoration-none"
                >
                  +91 88705 36435
                </a>
              </li>
            </ul>
          </Col>

          {/* Send Message */}
          <Col lg={3} md={6} className="h-100">
            <h5 className="text-uppercase text-white mb-4">
              Send Us A Message
            </h5>
            <div className="text-secondary">
              <i className="bi bi-envelope me-2 text-white"></i>
              <a
                href="mailto:ssultrareadymix@gmail.com"
                className="text-secondary text-decoration-none"
              >
                ssultrareadymix@gmail.com
              </a>
            </div>
          </Col>

          {/* Social Links */}
          <Col lg={3} md={6} className="h-100">
            <h5 className="text-uppercase text-white mb-4">Connect With Us</h5>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <a
                href="https://wa.me/7010076370"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-whatsapp text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/ssultrareadymixconcrete/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-instagram text-white"></i>
              </a>
              <a
                href="mailto:ssultrareadymix@gmail.com"
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-envelope text-white"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="pt-4">
          <Col className="text-center">
            <div className="fading-line"></div>
            <p className="mb-0 py-2 text-secondary">
              &copy; {new Date().getFullYear()} SS Ultra Readymix Concrete. All rights
              reserved.
              <br className="d-md-none" />
              Developed by{" "}
              <a
                href="https://www.andrometa.in"
                className="text-white text-decoration-none"
              >
                <b>Andrometa</b>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
