import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Card, Col, Row, Container } from 'react-bootstrap';
import map from "../assets/icon/map-pin-duotone.svg";
import phone from "../assets/icon/phone-duotone.svg";
import email from "../assets/icon/email.svg";
import "./ContactInfo.css";

const ContactInfo = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const cardStyle = {
    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
  };

  return (
    <Container>
      <Card className={`shadow-lg border-0 transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={cardStyle}>
        <Card.Body className="p-4">
          <Row className="g-4">
            {/* Location Section */}
            <Col md={4} className="d-flex flex-column align-items-center text-center">
              <div className="icon-wrapper bg-primary-soft rounded-circle p-3 mb-3">
                <img src={map} alt="map" />
              </div>
              <h3 className="h6 fw-bold mb-3">Our Location</h3>
              <address className="mb-0">
                <strong>SS ULTRA READYMIX CONCRETE</strong>
                <br />
                <a href="https://maps.app.goo.gl/58z7Tg47F45N1FQX8" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark hover-text-primary">
                  41/2A2, Kollidam River Bed,<br />
                  Kondayampettai, Thiruvanaikovil,<br />
                  Trichy - 620005
                </a>
              </address>
            </Col>

            {/* Contact Numbers Section */}
            <Col md={4} className="d-flex flex-column align-items-center text-center">
              <div className="icon-wrapper bg-primary-soft rounded-circle p-3 mb-3">
                <img src={phone} alt="phone" />
              </div>
              <h3 className="h6 fw-bold mb-3">Contact Numbers</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="tel:+91 9842459234" className="text-decoration-none text-dark hover-text-primary d-block">
                  +91 98424 59234
                  </a>
                </li>
                <li>
                  <a href="tel:+91 8870536435" className="text-decoration-none text-dark hover-text-primary d-block">
                  +91 88705 36435
                  </a>
                </li>
              </ul>
            </Col>

            {/* Email Section */}
            <Col md={4} className="d-flex flex-column align-items-center text-center">
              <div className="icon-wrapper bg-primary-soft rounded-circle p-3 mb-3">
                <img src={email} alt="email" />
              </div>
              <h3 className="h6 fw-bold mb-3">Email Address</h3>
              <a href="mailto:ssultrareadymix@gmail.com" className="text-decoration-none text-dark hover-text-primary">
                ssultrareadymix@gmail.com
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactInfo;
