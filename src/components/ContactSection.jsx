// // import { useState } from "react";
// // import { Container, Row, Col, Form, Button } from "react-bootstrap";
// // import {
// //   FaPaperPlane,
// //   FaComments
// // } from "react-icons/fa";
// // import "./ContactSection.css";
// // import send from "../assets/icon/telegram-logo-duotone.svg";
// // import sends from "../assets/icon/paper-plane-right-fill.svg";
// // import ContactInfo from "./ContactInfo";

// // const ContactSection = () => {
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [formStatus, setFormStatus] = useState(null);
// //   const [errorMessage, setErrorMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setFormStatus(null);

// //     const formData = new FormData(e.target);
// //     const formDataObject = Object.fromEntries(formData.entries());

// //     try {
// //       const response = await fetch("https://formsubmit.co/ajax/ssultrareadymix@gmail.com", {
// //         method: "POST",
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(formDataObject)
// //       });

// //       if (!response.ok) {
// //         throw new Error('Server responded with an error');
// //       }

// //       setFormStatus('success');
// //     } catch (error) {
// //       setErrorMessage('There was an error submitting the form. Please try again.');
// //       setFormStatus('error');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="contact-section">
// //       <Container>
// //         {/* Section Header */}
// //         <div className="section-header text-center">
// //           <h2 className="display-4 fw-bold">Get in Touch</h2>
// //           <div className="section-underline"></div>
// //         </div>

// //         {/* Contact Info Card - Top Section */}
// //         <ContactInfo />

// //         {/* Form Section - Integrated directly on page */}
// //         <Row className="mt-5">
// //           <Col lg={12} className="mx-auto">
// //             <div className="integrated-form-section">
// //               <div className="form-header">
// //                 <div className="form-icon-wrapper">
// //                   <img src={send} alt="send" />
// //                 </div>
// //                 <h3 className="form-title h4">Send Us a Message</h3>
// //                 <p className="text-muted">We&apos;d love to hear from you. Fill out the form below to get in touch.</p>
// //               </div>

// //               <Form noValidate onSubmit={handleSubmit} className="integrated-form">
// //                 <Row className="g-4">
// //                   <Col md={3}>
// //                     <Form.Group controlId="formName" className="form-group">
// //                       <Form.Label className="form-label">Full Name</Form.Label>
// //                       <Form.Control
// //                         required
// //                         type="text"
// //                         name="name"
// //                         placeholder="Enter your name"
// //                         className="bottom-border-input"
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         Please provide your name
// //                       </Form.Control.Feedback>
// //                     </Form.Group>
// //                   </Col>

// //                   <Col md={3}>
// //                     <Form.Group controlId="formPhone" className="form-group">
// //                       <Form.Label className="form-label">Contact Number</Form.Label>
// //                       <Form.Control
// //                         required
// //                         type="tel"
// //                         name="phone"
// //                         placeholder="Enter your phone number"
// //                         className="bottom-border-input"
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         Please provide a valid phone number
// //                       </Form.Control.Feedback>
// //                     </Form.Group>
// //                   </Col>

// //                   <Col md={5}>
// //                     <Form.Group controlId="formEmail" className="form-group">
// //                       <Form.Label className="form-label">Email Address</Form.Label>
// //                       <Form.Control
// //                         required
// //                         type="email"
// //                         name="email"
// //                         placeholder="Enter your email"
// //                         className="bottom-border-input"
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         Please provide a valid email address
// //                       </Form.Control.Feedback>
// //                     </Form.Group>
// //                   </Col>

// //                   <Col md={12}>
// //                     <Form.Group controlId="formMessage" className="form-group">
// //                       <Form.Label className="form-label">Message</Form.Label>
// //                       <Form.Control
// //                         required
// //                         as="textarea"
// //                         rows={4}
// //                         name="message"
// //                         placeholder="Enter your message"
// //                         className="bottom-border-textarea"
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         Please enter your message
// //                       </Form.Control.Feedback>
// //                     </Form.Group>
// //                   </Col>

// //                   <Col md={12} className="text-center d-flex justify-content-center">
// //                     <Button
// //                       variant="primary"
// //                       type="submit"
// //                       id="req-btn"
// //                       className="submit-button d-flex gap-2 align-items-center justify-content-center py-3 px-4"
// //                     >
// //                       {/* <FaPaperPlane className="me-2" /> */}
// //                       <img src={sends} alt="send" />
// //                       <div>
// //                        Send Message
// //                       </div>
// //                     </Button>
// //                   </Col>
// //                 </Row>
// //               </Form>
// //             </div>
// //           </Col>
// //         </Row>

// //         {/* Map Section */}
// //         <div className="map-container">
// //           <iframe
// //             title="SS Ultra Location"
// //             className="map-iframe"
// //             src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404758782659!2d78.7281406!3d10.856787499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf509526e876d%3A0x2fe25241025e8d4d!2sSS%20ULTRA%20READYMIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1740839277650!5m2!1sen!2sin`}
// //             allowFullScreen
// //           />
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default ContactSection;

// import { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import map from "../assets/icon/map-pin-duotone.svg";
// import phone from "../assets/icon/phone-duotone.svg";
// import email from "../assets/icon/email.svg";
// import "./ContactSection.css";

// const ContactSection = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formStatus, setFormStatus] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setFormStatus(null);

//     const formData = new FormData(e.target);
//     const formDataObject = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/ssultrareadymix@gmail.com",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formDataObject),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Server responded with an error");
//       }

//       setFormStatus("success");
//     } catch (error) {
//       setErrorMessage(
//         "There was an error submitting the form. Please try again."
//       );
//       setFormStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="contact-section py-5">
//       <Container>
//         {/* Modern Header with gradient underline */}
//         <div className="section-header text-center mb-5">
//           <h2 className="fw-bold display-4 mb-3">Contact Us</h2>
//           <div className="gradient-underline mx-auto"></div>
//           <div className="section-underline"></div>
//           <p className="text-muted mt-3 lead">
//             We're here to help with any questions you might have
//           </p>
//         </div>

//         {/* Main Content Container */}
//         <div className="contact-container">
//           <Row className="g-4">
//             {/* Left side - Contact Information */}
//             <Col lg={5}>
//               <Card className="contact-info-card h-100 border-0 shadow-sm">
//                 <Card.Body className="p-4">
//                   <div className="contact-card-content">
//                     <h3 className="contact-card-title mb-4">Let's Connect</h3>

//                     <div className="contact-items">
//                       <div className="contact-item d-flex align-items-center mb-4">
//                         <div className="contact-icon-circle">
//                           <img src={map} alt="map" />
//                         </div>
//                         <div className="ms-3">
//                           <h4 className="fs-5 mb-1">Location</h4>
//                           <p className="mb-0 text-muted">
//                             SS Ultra Readymix Concrete
//                           </p>
//                           <a
//                             href="https://maps.app.goo.gl/58z7Tg47F45N1FQX8"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-decoration-none text-dark hover-text-primary"
//                           >
//                             41/2A2, Kollidam River Bed,
//                             <br />
//                             Kondayampettai, Thiruvanaikovil,
//                             <br />
//                             Trichy - 620005
//                           </a>
//                         </div>
//                       </div>

//                       <div className="contact-item d-flex align-items-center mb-4">
//                         <div className="contact-icon-circle">
//                           <img src={phone} alt="map" />
//                         </div>
//                         <div className="ms-3">
//                           <h4 className="fs-5 mb-1">Phone</h4>
//                           <p className="mb-0 text-muted">+91 99999 88888</p>
//                           <ul className="list-unstyled mb-0">
//                             <li className="mb-2">
//                               <a
//                                 href="tel:+91 9842459234"
//                                 className="text-decoration-none text-dark hover-text-primary d-block"
//                               >
//                                 +91 98424 59234
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 href="tel:+91 8870536435"
//                                 className="text-decoration-none text-dark hover-text-primary d-block"
//                               >
//                                 +91 88705 36435
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>

//                       <div className="contact-item d-flex align-items-center mb-4">
//                         <div className="contact-icon-circle">
//                           <img src={email} alt="map" />
//                         </div>
//                         <div className="ms-3">
//                           <h4 className="fs-5 mb-1">Email</h4>
//                           <a
//                             href="mailto:ssultrareadymix@gmail.com"
//                             className="text-decoration-none text-dark hover-text-primary"
//                           >
//                             ssultrareadymix@gmail.com
//                           </a>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="contact-social mt-5">
//                       <h4 className="fs-5 mb-3">Follow Us</h4>
//                       <div className="social-icons d-flex gap-3">
//                         <a href="#" className="social-icon-link">
//                           <i className="bi bi-whatsapp"></i>
//                         </a>
//                         <a href="#" className="social-icon-link">
//                           <i className="bi bi-instagram"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* Right side - Contact Form */}
//             <Col lg={7}>
//               <Card className="contact-form-card border-0 shadow-sm">
//                 <Card.Body className="p-4 p-lg-5">
//                   {formStatus === "success" ? (
//                     <div className="text-center success-message py-5">
//                       <div className="success-icon mb-4">
//                         <i className="bi bi-check-circle-fill"></i>
//                       </div>
//                       <h3 className="mb-3">Thank You!</h3>
//                       <p className="text-muted">
//                         Your message has been sent successfully. We'll get back
//                         to you soon.
//                       </p>
//                       <Button
//                         variant="outline-primary"
//                         className="mt-3"
//                         onClick={() => setFormStatus(null)}
//                       >
//                         Send Another Message
//                       </Button>
//                     </div>
//                   ) : (
//                     <>
//                       <h3 className="form-title mb-4">Send a Message</h3>

//                       {formStatus === "error" && (
//                         <div className="alert alert-danger" role="alert">
//                           {errorMessage}
//                         </div>
//                       )}

//                       <Form
//                         noValidate
//                         onSubmit={handleSubmit}
//                         className="contact-form"
//                       >
//                         <Row className="g-4">
//                           <Col md={6}>
//                             <Form.Group controlId="formName">
//                               <Form.Label>Full Name</Form.Label>
//                               <Form.Control
//                                 required
//                                 type="text"
//                                 name="name"
//                                 placeholder="John Doe"
//                                 className="form-input"
//                               />
//                             </Form.Group>
//                           </Col>

//                           <Col md={6}>
//                             <Form.Group controlId="formEmail">
//                               <Form.Label>Email Address</Form.Label>
//                               <Form.Control
//                                 required
//                                 type="email"
//                                 name="email"
//                                 placeholder="john@example.com"
//                                 className="form-input"
//                               />
//                             </Form.Group>
//                           </Col>

//                           <Col md={6}>
//                             <Form.Group controlId="formPhone">
//                               <Form.Label>Phone Number</Form.Label>
//                               <Form.Control
//                                 required
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="+91 98765 43210"
//                                 className="form-input"
//                               />
//                             </Form.Group>
//                           </Col>

//                           <Col md={6}>
//                             <Form.Group controlId="formSubject">
//                               <Form.Label>Subject</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 name="subject"
//                                 placeholder="How can we help you?"
//                                 className="form-input"
//                               />
//                             </Form.Group>
//                           </Col>

//                           <Col md={12}>
//                             <Form.Group controlId="formMessage">
//                               <Form.Label>Your Message</Form.Label>
//                               <Form.Control
//                                 required
//                                 as="textarea"
//                                 rows={5}
//                                 name="message"
//                                 placeholder="Write your message here..."
//                                 className="form-input"
//                               />
//                             </Form.Group>
//                           </Col>

//                           <Col md={12}>
//                             <Button
//                               variant="primary"
//                               type="submit"
//                               className="submit-button"
//                               disabled={isSubmitting}
//                             >
//                               {isSubmitting ? (
//                                 <>
//                                   <span
//                                     className="spinner-border spinner-border-sm me-2"
//                                     role="status"
//                                     aria-hidden="true"
//                                   ></span>
//                                   Sending...
//                                 </>
//                               ) : (
//                                 <>
//                                   <i className="bi bi-send-fill me-2"></i>
//                                   Send Message
//                                 </>
//                               )}
//                             </Button>
//                           </Col>
//                         </Row>
//                       </Form>
//                     </>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>

//         {/* Map Section */}
//         <div className="map-container mt-5 rounded shadow-sm overflow-hidden">
//           <iframe
//             title="SS Ultra Location"
//             className="map-iframe"
//             src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404758782659!2d78.7281406!3d10.856787499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf509526e876d%3A0x2fe25241025e8d4d!2sSS%20ULTRA%20READYMIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1740839277650!5m2!1sen!2sin`}
//             allowFullScreen
//           />
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ContactSection;




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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ssultrareadymix@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        }
      );

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      setFormStatus("success");
    } catch (error) {
      setErrorMessage(
        "There was an error submitting the form. Please try again."
      );
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
          <h2 className="fw-bold display-4 mb-3">Contact Us</h2>
          <div className="gradient-underline mx-auto"></div>
          <div className="section-underline"></div>
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
                            <p className="mb-0 text-muted">
                              SS Ultra Readymix Concrete
                            </p>
                            <a
                              href="https://maps.app.goo.gl/58z7Tg47F45N1FQX8"
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
                            <p className="mb-0 text-muted">+91 99999 88888</p>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-2">
                                <a
                                  href="tel:+91 9842459234"
                                  className="text-decoration-none text-dark hover-text-primary d-block"
                                >
                                  +91 98424 59234
                                </a>
                              </li>
                              <li>
                                <a
                                  href="tel:+91 8870536435"
                                  className="text-decoration-none text-dark hover-text-primary d-block"
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
                              className="text-decoration-none text-dark hover-text-primary"
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
                        <h4 className="fs-5 mb-3">Follow Us</h4>
                        <div className="social-icons d-flex gap-3">
                          <motion.a 
                            href="#" 
                            className="social-icon-link"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="bi bi-whatsapp"></i>
                          </motion.a>
                          <motion.a 
                            href="#" 
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
                  <Card.Body className="p-4 p-lg-5">
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
                          <Button
                            variant="outline-primary"
                            className="mt-3"
                            onClick={() => setFormStatus(null)}
                          >
                            Send Another Message
                          </Button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <>
                        <h3 className="form-title mb-4">Send a Message</h3>

                        {formStatus === "error" && (
                          <motion.div 
                            className="alert alert-danger" 
                            role="alert"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            {errorMessage}
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
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="form-input"
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={6}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formEmail">
                                  <Form.Label>Email Address</Form.Label>
                                  <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="form-input"
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={6}>
                              <motion.div variants={formInputVariants}>
                                <Form.Group controlId="formPhone">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control
                                    required
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    className="form-input"
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
                                    required
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    placeholder="Write your message here..."
                                    className="form-input"
                                  />
                                </Form.Group>
                              </motion.div>
                            </Col>

                            <Col md={12}>
                              <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                <Button
                                  variant="primary"
                                  type="submit"
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