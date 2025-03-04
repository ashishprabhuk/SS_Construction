import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaPaperPlane,
  FaComments
} from "react-icons/fa";
import "./ContactSection.css";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/ssultrareadymix@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject)
      });
      
      if (!response.ok) {
        throw new Error('Server responded with an error');
      }
      
      setFormStatus('success');
    } catch (error) {
      setErrorMessage('There was an error submitting the form. Please try again.');
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="display-4 fw-bold">Get in Touch</h2>
          <div className="section-underline"></div>
        </div>

        {/* Contact Info Card - Top Section */}
        <ContactInfo />

        {/* Form Section - Integrated directly on page */}
        <Row className="mt-5">
          <Col lg={12} className="mx-auto">
            <div className="integrated-form-section">
              <div className="form-header">
                <div className="form-icon-wrapper">
                  <FaComments className="form-icon" />
                </div>
                <h3 className="form-title h4">Send Us a Message</h3>
                <p className="text-muted">We&apos;d love to hear from you. Fill out the form below to get in touch.</p>
              </div>

              <Form noValidate onSubmit={handleSubmit} className="integrated-form">
                <Row className="g-4">
                  <Col md={3}>
                    <Form.Group controlId="formName" className="form-group">
                      <Form.Label className="form-label">Full Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="bottom-border-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group controlId="formPhone" className="form-group">
                      <Form.Label className="form-label">Contact Number</Form.Label>
                      <Form.Control
                        required
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="bottom-border-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid phone number
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={5}>
                    <Form.Group controlId="formEmail" className="form-group">
                      <Form.Label className="form-label">Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="bottom-border-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="formMessage" className="form-group">
                      <Form.Label className="form-label">Message</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Enter your message"
                        className="bottom-border-textarea"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your message
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={12} className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      id="req-btn"
                      className="submit-button py-3 px-4"
                    >
                      <FaPaperPlane className="me-2" /> Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            title="SS Ultra Location"
            className="map-iframe"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404758782659!2d78.7281406!3d10.856787499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf509526e876d%3A0x2fe25241025e8d4d!2sSS%20ULTRA%20READYMIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1740839277650!5m2!1sen!2sin`}
            allowFullScreen
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;