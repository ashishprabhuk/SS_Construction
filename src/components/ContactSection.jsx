// import { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';

// const ContactSection= () => {
//   const [validated, setValidated] = useState(false);
//   const [recaptchaValue, setRecaptchaValue] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === false || !recaptchaValue) {
//       event.stopPropagation();
//       if (!recaptchaValue) alert('Please complete the reCAPTCHA verification');
//     } else {
//       // Handle form submission
//       const formData = new FormData(form);
//       const data = Object.fromEntries(formData.entries());
//       console.log(data);
//       alert('Message sent successfully!');
//       form.reset();
//       setRecaptchaValue(null);
//     }
//     setValidated(true);
//   };

//   return (
//     <Container fluid className="py-5 bg-light">
//       <Container className="mb-5">
//         <h2 className="text-center mb-5 display-4 fw-bold text-primary">
//           <FaBuilding className="me-2" />
//           Contact SS Ultra Readymix Concrete
//         </h2>

//         <Row className="g-4">
//           {/* Contact Information */}
//           <Col md={6} lg={5} className="mb-4">
//             <Card className="h-100 shadow">
//               <Card.Body className="p-4">
//                 <div className="mb-4">
//                   <h3 className="h4 fw-bold mb-3">
//                     <FaMapMarkerAlt className="text-primary me-2" />
//                     Our Location
//                   </h3>
//                   <address className="mb-0">
//                     <strong>SS ULTRA READYMIX CONCRETE</strong><br />
//                     <a
//                       href="https://goo.gl/maps/example"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-decoration-none text-dark"
//                     >
//                       41/2A2, Kollidam River Bed,<br />
//                       Kondayampettai, Thiruvanaikovil,<br />
//                       Trichy - 620005
//                     </a>
//                   </address>
//                 </div>

//                 <div className="mb-4">
//                   <h3 className="h4 fw-bold mb-3">
//                     <FaPhone className="text-primary me-2" />
//                     Contact Numbers
//                   </h3>
//                   <ul className="list-unstyled">
//                     <li>
//                       <a href="tel:9842459234" className="text-decoration-none text-dark">
//                         98424 59234
//                       </a>
//                     </li>
//                     <li>
//                       <a href="tel:8870536435" className="text-decoration-none text-dark">
//                         88705 36435
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="h4 fw-bold mb-3">
//                     <FaEnvelope className="text-primary me-2" />
//                     Email Address
//                   </h3>
//                   <a
//                     href="mailto:info@ssultraconcrete.com"
//                     className="text-decoration-none text-dark"
//                   >
//                     info@ssultraconcrete.com
//                   </a>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Contact Form */}
//           <Col md={6} lg={7}>
//             <Card className="shadow">
//               <Card.Body className="p-4">
//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                   <Row className="g-3">
//                     <Col md={6}>
//                       <Form.Group controlId="formName">
//                         <Form.Label>Full Name</Form.Label>
//                         <Form.Control
//                           required
//                           type="text"
//                           name="name"
//                           placeholder="Enter your name"
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           Please provide your name
//                         </Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>

//                     <Col md={6}>
//                       <Form.Group controlId="formPhone">
//                         <Form.Label>Contact Number</Form.Label>
//                         <Form.Control
//                           required
//                           type="tel"
//                           name="phone"
//                           placeholder="Enter your phone number"
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           Please provide a valid phone number
//                         </Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>

//                     <Col md={12}>
//                       <Form.Group controlId="formEmail">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control
//                           required
//                           type="email"
//                           name="email"
//                           placeholder="Enter your email"
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           Please provide a valid email address
//                         </Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>

//                     <Col md={12}>
//                       <Form.Group controlId="formMessage">
//                         <Form.Label>Message</Form.Label>
//                         <Form.Control
//                           required
//                           as="textarea"
//                           rows={4}
//                           name="message"
//                           placeholder="Enter your message"
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           Please enter your message
//                         </Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>

//                     <Col md={12} className="my-3">
//                       <ReCAPTCHA
//                         sitekey="YOUR_RECAPTCHA_SITE_KEY"
//                         onChange={(val) => setRecaptchaValue(val)}
//                       />
//                     </Col>

//                     <Col md={12}>
//                       <Button
//                         variant="danger"
//                         type="submit"
//                         className="w-100 py-2"
//                       >
//                         Send Message
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Map Section */}
//         <Row className="mt-5">
//           <Col md={12}>
//             <Card className="shadow">
//               <Card.Body className="p-0">
//                 <iframe
//                   title="SS Ultra Location"
//                   width="100%"
//                   height="400"
//                   frameBorder="0"
//                   scrolling="no"
//                   marginHeight="0"
//                   marginWidth="0"
//                   src={`https://maps.google.com/maps?q=${encodeURIComponent("41/2A2, Kollidam River Bed, Kondayampettai, Thiruvanaikovil, Trichy - 620005")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
//                   style={{ border: 0 }}
//                   allowFullScreen
//                 ></iframe>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// };

// export default ContactSection;

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";

const ContactSection = () => {
  const [validated, setValidated] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false || !recaptchaValue) {
      event.stopPropagation();
      if (!recaptchaValue) alert("Please complete the reCAPTCHA verification");
    } else {
      // Handle form submission
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      alert("Message sent successfully!");
      form.reset();
      setRecaptchaValue(null);
    }
    setValidated(true);
  };

  return (
    <Container
      fluid
      className="py-5"
      style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}
    >
      <Container className="mb-5">
        <div className="text-center mb-5">
          <h2
            className="display-5 fw-bold text-uppercase mb-3"
            style={{ color: "#1A1A19" }}
          >
            <FaBuilding className="me-2" />
            Get in Touch
          </h2>
          <div
            className="underline mx-auto"
            style={{ width: "80px", height: "3px", backgroundColor: "#25D366" }}
          ></div>
        </div>

        <Row className="g-4">
          {/* Contact Information */}
          <Col md={6} lg={5}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-4">
                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-3">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    Our Location
                  </h3>
                  <address className="mb-0">
                    <strong>SS ULTRA READYMIX CONCRETE</strong>
                    <br />
                    <a
                      href="https://goo.gl/maps/example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      41/2A2, Kollidam River Bed,
                      <br />
                      Kondayampettai, Thiruvanaikovil,
                      <br />
                      Trichy - 620005
                    </a>
                  </address>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-bold mb-3">
                    <FaPhone className="text-primary me-2" />
                    Contact Numbers
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="tel:9842459234"
                        className="text-decoration-none text-dark"
                      >
                        98424 59234
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:8870536435"
                        className="text-decoration-none text-dark"
                      >
                        88705 36435
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="h5 fw-bold mb-3">
                    <FaEnvelope className="text-primary me-2" />
                    Email Address
                  </h3>
                  <a
                    href="mailto:info@ssultraconcrete.com"
                    className="text-decoration-none text-dark"
                  >
                    info@ssultraconcrete.com
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={6} lg={7}>
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className="border-0 shadow-sm"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          required
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          className="border-0 shadow-sm"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid phone number
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="border-0 shadow-sm"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email address
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="Enter your message"
                          className="border-0 shadow-sm"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your message
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={12} className="d-flex justify-content-center my-3">
                      <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                        onChange={(val) => setRecaptchaValue(val)}
                      />
                    </Col>

                    <Col md={12}>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 py-3 rounded-2 text-uppercase"
                        style={{
                          backgroundColor: "#25D366",
                          border: "1px solid #1A1A19",
                          color: "#1A1A19",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#1A1A19", e.target.style.color = "#fff")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#25D366", e.target.style.color = "#1A1A19")
                        }
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col>
            <Card
              className="shadow-lg border-0 overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              <Card.Body className="p-0">
                <iframe
                  title="SS Ultra Location"
                  width="100%"
                  height="400"
                  style={{
                    borderRadius: "20px",
                    border: "none",
                    margin: 0,
                    padding: 0,
                  }}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404758782659!2d78.7281406!3d10.856787499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf509526e876d%3A0x2fe25241025e8d4d!2sSS%20ULTRA%20READYMIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1740839277650!5m2!1sen!2sin`}
                  allowFullScreen
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactSection;
