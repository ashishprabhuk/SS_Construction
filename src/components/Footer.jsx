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
        <Row className="g-4 mb-4">
          <Col lg={3} md={6} className="mb-3 d-flex">
            <div className="iso-certification rounded d-flex justify-content-center align-items-center">
              <img
                src={iso1}
                alt="OA Certification"
                className="img-fluid m-2 certification-img"
              />
              <img
                src={iso2}
                alt="AGAC Certification"
                className="img-fluid m-2 certification-img"
              />
              <img
                src={iso3}
                alt="IAF Certification"
                className="img-fluid m-2 certification-img"
              />
            </div>
          </Col>
        </Row>

        <Row>
        <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Address</h5>
            <address className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2" style={{ color: "#fff" }}></i>
              41/2A2, Kollidam River Bed,<br />
              Kondayampettai, Thiruvanaikovil,<br />
              Trichy - 620005
            </address>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-telephone me-2" style={{ color: "#fff" }}></i>
                <a href="tel:+919842459234" id="cont-a" className="text-secondary">+91 98424 59234</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2" style={{ color: "#fff" }}></i>
                <a href="tel:+918870536435" id="cont-a" className="text-secondary">+91 88705 36435</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Send Us A Message</h5>
            <div className="text-secondary">
              <i className="bi bi-envelope me-2" style={{ color: "#fff" }}></i>
              <a href="mailto:123@gmail.com" id="cont-a" className="text-secondary">ssultrareadymix@gmail.com</a>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Connect With Us</h5>
            <div className="d-flex flex-wrap gap-3 social-links">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" id="social-linkss" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-whatsapp" style={{ color: "#fff" }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" id="social-linkss" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-instagram" style={{ color: "#fff" }}></i>
              </a>
              <a href="mailto:info@example.com" id="social-linkss" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-envelope" style={{ color: "#fff" }}></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col className="text-center">
          <div className="fading-line"></div>
            <p className="mb-0 py-2 text-secondary">
              &copy; {new Date().getFullYear()} SS Construction. All rights reserved.<br className="d-md-none" />
              Developed by {" "}
              <a href="https://www.andrometa.in" className="text-white text-decoration-none hover-accent">
                <b>Andrometa</b>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}