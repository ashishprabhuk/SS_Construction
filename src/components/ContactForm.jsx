import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold">LET'S CONNECT</h2>

      <Row className="mb-5 text-center">
        {/* Office Location */}
        <Col xs={12} md={3} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#999"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
          <h5 className="fw-bold text-uppercase small">OUR MAIN OFFICE</h5>
          <p className="small">
            SoHo 94 Broadway St New
            <br />
            York, NY 10001
          </p>
        </Col>

        {/* Phone Number */}
        <Col xs={12} md={3} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#999"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </div>
          <h5 className="fw-bold text-uppercase small">PHONE NUMBER</h5>
          <p className="small">
            234-9876-5400
            <br />
            888-0123-4567 (Toll Free)
          </p>
        </Col>

        {/* Fax */}
        <Col xs={12} md={3} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#999"
              className="bi bi-social"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <h5 className="fw-bold text-uppercase small">FAX</h5>
          <p className="small">1-234-567-8900</p>
        </Col>

        {/* Mail */}
        <Col xs={12} md={3}>
          <div className="d-flex justify-content-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#999"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </div>
          <h5 className="fw-bold text-uppercase small">MAIL</h5>
          <p className="small">ssultrareadymix@gmail.com</p>
        </Col>
      </Row>

      <Row>
        {/* Contact Form */}
        <Col md={6} className="mb-4 mb-md-0">
          <h3 className="fw-bold mb-1">GET A FREE CASE EVALUATION TODAY!</h3>
          <p className="small mb-4">AVAILABLE 24 HOURS A DAY!</p>

          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                className="bg-light border rounded-0"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter a valid email address"
                className="bg-light border rounded-0"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                className="bg-light border rounded-0"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>

            <Button
              variant="light"
              className="border rounded-0 px-4"
              type="submit"
              style={{ boxShadow: "none" }}
            >
              Submit
            </Button>
          </Form>
        </Col>

        {/* Map */}
        <Col md={6}>
          <h3 className="fw-bold mb-1">WE ARE HERE</h3>
          <p className="small">MON-FRI 8:30AM-5PM / PHONES ARE OPEN 24/7</p>
          <div>
            <iframe
              title="SS Ultra Location"
              className="map-iframe"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404758782659!2d78.7281406!3d10.856787499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf509526e876d%3A0x2fe25241025e8d4d!2sSS%20ULTRA%20READYMIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1740839277650!5m2!1sen!2sin`}
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
