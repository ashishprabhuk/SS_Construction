import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';
import "./ContactInfo.css"

const ContactInfo = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Col md={12} lg={10} className="mb-4">
      <Card 
        className={`shadow-lg border-0 overflow-hidden transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{
          transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
        }}
      >
        <Card.Body className="p-4 p-xl-5">
          <Row className="g-4">
            {/* Location Section */}
            <Col md={4} className="border-end border-2 border-light">
              <div className="h-100 pe-3">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrapper bg-primary-soft rounded-circle p-3">
                    <FaMapMarkerAlt className="text-primary fs-5" />
                  </div>
                  <h3 className="h6 fw-bold mb-0 ms-3">Our Location</h3>
                </div>
                <address className="mb-0">
                  <strong>SS ULTRA READYMIX CONCRETE</strong>
                  <br />
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark hover-text-primary"
                  >
                    41/2A2, Kollidam River Bed,
                    <br />
                    Kondayampettai, Thiruvanaikovil,
                    <br />
                    Trichy - 620005
                  </a>
                </address>
              </div>
            </Col>

            {/* Contact Numbers Section */}
            <Col md={4} className="border-end border-2 border-light">
              <div className="h-100 px-3">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrapper bg-primary-soft rounded-circle p-3">
                    <FaPhone className="text-primary fs-5" />
                  </div>
                  <h3 className="h6 fw-bold mb-0 ms-3">Contact Numbers</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      href="tel:9842459234"
                      className="text-decoration-none text-dark hover-text-primary d-block"
                    >
                      98424 59234
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:8870536435"
                      className="text-decoration-none text-dark hover-text-primary d-block"
                    >
                      88705 36435
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Email Section */}
            <Col md={4}>
              <div className="h-100 ps-3">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrapper bg-primary-soft rounded-circle p-3">
                    <FaEnvelope className="text-primary fs-5" />
                  </div>
                  <h3 className="h6 fw-bold mb-0 ms-3">Email Address</h3>
                </div>
                <a
                  href="mailto:info@ssultraconcrete.com"
                  className="text-decoration-none text-dark hover-text-primary"
                >
                  info@ssultraconcrete.com
                </a>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ContactInfo;