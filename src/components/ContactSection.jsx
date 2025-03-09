import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import map from "../assets/icon/map-pin-duotone.svg";
import phone from "../assets/icon/phone-duotone.svg";
import email from "../assets/icon/email.svg";
import "./ContactSection.css";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const [invalidFields, setInvalidFields] = useState({});

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const validateForm = (formData) => {
    const errors = [];
    const invalidFields = {};

    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').replace(/\D/g, ''); // Remove non-digits
    const message = formData.get('message').trim();

    // Name validation
    if (!name) {
      errors.push('Full Name is required');
      invalidFields.name = true;
    } else if (name.length < 2) {
      errors.push('Name must be at least 2 characters');
      invalidFields.name = true;
    }

    // Email validation
    if (!email) {
      errors.push('Email is required');
      invalidFields.email = true;
    } else if (!isValidEmail(email)) {
      errors.push('Invalid email format');
      invalidFields.email = true;
    }

    // Phone validation
    if (!phone) {
      errors.push('Phone number is required');
      invalidFields.phone = true;
    } else if (!isValidPhone(phone)) {
      errors.push('Phone must be a valid 10-digit Indian number starting with 6-9');
      invalidFields.phone = true;
    }

    // Message validation
    if (!message) {
      errors.push('Message is required');
      invalidFields.message = true;
    } else if (message.length < 10) {
      errors.push('Message must be at least 10 characters');
      invalidFields.message = true;
    }

    return { errors, invalidFields };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setErrorMessages([]);
    setInvalidFields({});

    const formData = new FormData(e.target);
    const validation = validateForm(formData);

    if (validation.errors.length > 0) {
      setErrorMessages(validation.errors);
      setInvalidFields(validation.invalidFields);
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ssultrareadymix@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );

      if (!response.ok) throw new Error("Submission failed");
      
      setFormStatus("success");
      e.target.reset(); // Reset form on success
    } catch (error) {
      setErrorMessages(["There was an error submitting the form. Please try again."]);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const formInputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.5 }
    }
  };

  const successMessageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15 
      }
    }
  };

  return (
    <section className="contact-section py-5">
      <Container>
        {/* Modern Header with gradient underline */}
        <motion.div 
          className="section-header text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="fw-bold display-4 mb-3 pt-3">Contact Us</h2>
          <motion.div
          className="section-underline"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>
          <p className="text-muted mt-3 lead">
            We're here to help with any questions you might have
          </p>
        </motion.div>

        {/* Main Content Container */}
        <motion.div 
          className="contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Row className="g-4">
            {/* Left side - Contact Information */}
            <Col lg={5}>
              <motion.div variants={itemVariants}>
                <Card className="contact-info-card h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="contact-card-content">
                      <h3 className="contact-card-title mb-4">Let's Connect</h3>

                      <div className="contact-items">
                        <motion.div 
                          className="contact-item d-flex align-items-center mb-4"
                          variants={itemVariants} 
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <div className="contact-icon-circle">
                            <img src={map} alt="map" />
                          </div>
                          <div className="ms-3">
                            <h4 className="fs-5 mb-1">Location</h4>
                            <p className="mb-0 text-muted fw-bold">
                              SS Ultra Readymix Concrete
                            </p>
                            <a
                              href="https://maps.app.goo.gl/58z7Tg47F45N1FQX8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-muted hover-text-primary"
                            >
                              41/2A2, Kollidam River Bed,
                              <br />
                              Kondayampettai, Thiruvanaikovil,
                              <br />
                              Trichy - 620005
                            </a>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="contact-item d-flex align-items-center mb-4"
                          variants={itemVariants}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <div className="contact-icon-circle">
                            <img src={phone} alt="phone" />
                          </div>
                          <div className="ms-3">
                            <h4 className="fs-5 mb-1">Phone</h4>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-2">
                                <a
                                  href="tel:+91 9842459234"
                                  className="text-decoration-none text-muted text-dark hover-text-success d-block"
                                >
                                  +91 98424 59234
                                </a>
                              </li>
                              <li>
                                <a
                                  href="tel:+91 8870536435"
                                  className="text-decoration-none text-muted text-dark hover-text-success d-block"
                                >
                                  +91 88705 36435
                                </a>
                              </li>
                            </ul>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="contact-item d-flex align-items-center mb-4"
                          variants={itemVariants}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <div className="contact-icon-circle">
                            <img src={email} alt="email" />
                          </div>
                          <div className="ms-3">
                            <h4 className="fs-5 mb-1">Email</h4>
                            <a
                              href="mailto:ssultrareadymix@gmail.com"
                              className="text-decoration-none text-muted hover-text-primary"
                            >
                              ssultrareadymix@gmail.com
                            </a>
                          </div>
                        </motion.div>
                      </div>

                      <motion.div 
                        className="contact-social mt-5"
                        variants={itemVariants}
                      >
                        <h4 className="fs-5 mb-2">Follow Us</h4>
                        <div className="social-icons d-flex gap-3">
                          <motion.a 
                            href="https://wa.me/7010076370"
                            className="social-icon-link"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="bi bi-whatsapp"></i>
                          </motion.a>
                          <motion.a 
                            href="https://www.instagram.com/ssultrareadymixconcrete/" 
                            className="social-icon-link"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="bi bi-instagram"></i>
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Right side - Contact Form */}
            <Col lg={7}>
              <motion.div variants={itemVariants}>
                <Card className="contact-form-card border-0 shadow-sm">
                  <Card.Body className="p-4 mb-4">
                    {formStatus === "success" ? (
                      <motion.div 
                        className="text-center success-message py-5"
                        initial="hidden"
                        animate="visible"
                        variants={successMessageVariants}
                      >
                        <div className="success-icon mb-4">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                        <h3 className="mb-3">Thank You!</h3>
                        <p className="text-muted">
                          Your message has been sent successfully. We'll get back
                          to you soon.
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a href="/contact">
                          <Button
                            variant="outline-primary"
                            className="mt-3"
                            onClick={() => setFormStatus(null)}
                          >
                            Send Another Message
                          </Button>
                            </a>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <>
                        <h3 className="contact-card-title mb-4">Send Message</h3>

                        {formStatus === "error" && (
                          <motion.div 
                            className="alert alert-danger" 
                            role="alert"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            <ul className="mb-0 ps-3">
                              {errorMessages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        <Form
                          noValidate
                          onSubmit={handleSubmit}
                          className="contact-form"
                        >
                          <Row className="g-4">
                            <Col md={6}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formName">
                                <Form.Label>Full Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className={`form-input ${invalidFields.name ? 'is-invalid' : ''}`}
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={6}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className={`form-input ${invalidFields.email ? 'is-invalid' : ''}`}
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={6}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formPhone">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 XXXXX XXXXX"
                                    className={`form-input ${invalidFields.phone ? 'is-invalid' : ''}`}
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={6}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formSubject">
                                  <Form.Label>Subject</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="subject"
                                    placeholder="How can we help you?"
                                    className="form-input"
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={12}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formMessage">
                                  <Form.Label>Your Message</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    placeholder="Write your message here..."
                                    className={`form-input ${invalidFields.message ? 'is-invalid' : ''}`}
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={12} className="d-flex justify-content-center">
                              <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                <Button
                                  variant="primary"
                                  type="submit"
                                  id="req-btn"
                                
                                  className="submit-button"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting ? (
                                    <>
                                      <span
                                        className="spinner-border spinner-border-sm me-2"
                                        role="status"
                                        aria-hidden="true"
                                      ></span>
                                      Sending...
                                    </>
                                  ) : (
                                    <>
                                      <i className="bi bi-send-fill me-2"></i>
                                      Send Message
                                    </>
                                  )}
                                </Button>
                              </motion.div>
                            </Col>
                          </Row>
                        </Form>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="map-container mt-5 rounded shadow-sm overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={mapVariants}
        >
          <iframe
            title="SS Ultra Location"
            className="map-iframe"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404758782659!2d78.7281406!3d10.856787499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf509526e876d%3A0x2fe25241025e8d4d!2sSS%20ULTRA%20READYMIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1740839277650!5m2!1sen!2sin`}
            allowFullScreen
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;