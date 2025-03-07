// import { useState } from 'react';
// import { 
//   Container, 
//   Row, 
//   Col, 
//   Form, 
//   Button, 
//   Card, 
//   Alert
// } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './RequestQuoteForm.css';

// const RequestQuoteForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formStatus, setFormStatus] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setFormStatus(null);
//     setErrorMessage('');

//     const formData = new FormData(e.target);
    
//     // Add a timestamp to make each submission unique
//     formData.append('_timestamp', new Date().toISOString());

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/ashishprabhu2143@gmail.com", {
//         method: "POST",
//         headers: {
//           'Accept': 'application/json'
//         },
//         body: formData
//       });
      
//       const responseData = await response.json();
      
//       if (!response.ok) {
//         throw new Error(responseData.message || 'Submission failed');
//       }
      
//       setFormStatus('success');
//     } catch (error) {
//       setErrorMessage(error.message || 'There was an error submitting the form. Please try again.');
//       setFormStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (formStatus === 'success') {
//     return (
//       <Container fluid className="success-container">
//         <div className="success-content">
//           <div className="success-icon">✓</div>
//           <h2>Thank You!</h2>
//           <p>We've received your quote request and will get back to you shortly.</p>
//           <Button 
//             onClick={() => setFormStatus(null)}
//             className="new-button"
//           >
//             Submit Another Request
//           </Button>
//         </div>
//       </Container>
//     );
//   }

//   return (
//     <Container fluid className="form-container">
//       <Row className="justify-content-center">
//         <Col xl={10} lg={11}>
//           <div className="form-header">
//             <h1>Request a Concrete Quote</h1>
//             <div className="section-underline"></div>
//             <p>Fill out the form below to get a customized quote for your project</p>
//           </div>
          
//           {formStatus === 'error' && (
//             <div className="error-message">
//               <p>{errorMessage}</p>
//             </div>
//           )}
          
//           <Form onSubmit={handleSubmit} action="https://formsubmit.co/ssultrareadymix@gmail.com" method="POST" className="quote-form">
//             {/* Hidden fields for FormSubmit.co */}
//             <input type="hidden" name="_subject" value="New Concrete Quote Request" />
//             <input type="hidden" name="_template" value="table" />
//             <input type="hidden" name="_captcha" value="true" />
//             <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

//             <div className="form-section">
//               <div className="section-label">
//                 <span className="section-number">1</span>
//                 <h3>Contact Information</h3>
//               </div>
//               <div className="section-content">
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Full Name <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         type="text" 
//                         name="name" 
//                         required 
//                         placeholder="Enter your full name"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Company Name</Form.Label>
//                       <Form.Control 
//                         type="text" 
//                         name="company"
//                         placeholder="Your company (if applicable)"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Email <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         type="email" 
//                         name="email" 
//                         required 
//                         placeholder="your.email@example.com"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Phone Number <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         type="tel" 
//                         name="phone" 
//                         required 
//                         placeholder="(123) 456-7890"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//               </div>
//             </div>

//             <div className="form-section">
//               <div className="section-label">
//                 <span className="section-number">2</span>
//                 <h3>Concrete Specifications</h3>
//               </div>
//               <div className="section-content">
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Concrete Type <span className="required">*</span></Form.Label>
//                       <Form.Select 
//                         name="concreteType" 
//                         required
//                       >
//                         <option value="">Select Mix Type</option>
//                         <option>Ready-Mix Concrete</option>
//                         <option>Precast Concrete</option>
//                         <option>High-Strength Concrete</option>
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Grade/Strength <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         type="text" 
//                         name="grade" 
//                         required 
//                         placeholder="e.g., M25, C30/37"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col>
//                     <Form.Group className="form-field">
//                       <Form.Label>Quantity Needed (cubic meters) <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         type="number" 
//                         step="0.1" 
//                         name="quantity" 
//                         required 
//                         placeholder="e.g., 10.5"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//               </div>
//             </div>

//             <div className="form-section">
//               <div className="section-label">
//                 <span className="section-number">3</span>
//                 <h3>Delivery Details</h3>
//               </div>
//               <div className="section-content">
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Preferred Date <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         type="date" 
//                         name="preferredDate" 
//                         required 
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group className="form-field">
//                       <Form.Label>Preferred Time</Form.Label>
//                       <Form.Control 
//                         type="time" 
//                         name="preferredTime" 
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col>
//                     <Form.Group className="form-field">
//                       <Form.Label>Delivery Address <span className="required">*</span></Form.Label>
//                       <Form.Control 
//                         as="textarea" 
//                         rows={3} 
//                         name="address" 
//                         required 
//                         placeholder="Full delivery address including city, state/province, and postal code"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//               </div>
//             </div>

//             <div className="form-section">
//               <div className="section-label">
//                 <span className="section-number">4</span>
//                 <h3>Additional Information</h3>
//               </div>
//               <div className="section-content">
//                 <Row>
//                   <Col>
//                     <Form.Group className="form-field">
//                       <Form.Label>Special Requirements or Comments</Form.Label>
//                       <Form.Control 
//                         as="textarea" 
//                         rows={5} 
//                         name="comments" 
//                         placeholder="Any special requirements or comments..." 
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//               </div>
//             </div>

//             <div className="form-submit">
//               <Button 
//                 type="submit" 
//                 id="req-btn"
//                 className="submit-btn"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Processing...' : 'Get Your Quote'}
//               </Button>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RequestQuoteForm;





import { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  Button, 
  Card, 
  Alert
} from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RequestQuoteForm.css';

const RequestQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setErrorMessage('');

    const formData = new FormData(e.target);
    
    // Add a timestamp to make each submission unique
    formData.append('_timestamp', new Date().toISOString());

    try {
      const response = await fetch("https://formsubmit.co/ajax/ashishprabhu2143@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Submission failed');
      }
      
      setFormStatus('success');
    } catch (error) {
      setErrorMessage(error.message || 'There was an error submitting the form. Please try again.');
      setFormStatus('error');
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
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const successVariants = {
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

  if (formStatus === 'success') {
    return (
      <Container fluid className="success-container">
        <motion.div 
          className="success-content"
          initial="hidden"
          animate="visible"
          variants={successVariants}
        >
          <motion.div 
            className="success-icon"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1, 
              transition: { 
                delay: 0.2, 
                type: "spring", 
                stiffness: 200 
              }
            }}
          >
            ✓
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { delay: 0.3, duration: 0.4 } 
            }}
          >
            Thank You!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1, 
              transition: { delay: 0.5, duration: 0.4 } 
            }}
          >
            We've received your quote request and will get back to you shortly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { delay: 0.7, duration: 0.4 } 
            }}
          >
            <motion.button 
              onClick={() => setFormStatus(null)}
              className="new-button"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="form"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <Container fluid className="form-container">
          <Row className="justify-content-center">
            <Col xl={10} lg={11}>
              <motion.div 
                className="form-header"
                variants={sectionVariants}
              >
                <h1>Request a Concrete Quote</h1>
                <motion.div 
                  className="section-underline"
                  initial={{ width: 0 }}
                  animate={{ width: "80px", transition: { delay: 0.3, duration: 0.5 } }}
                ></motion.div>
                <p>Fill out the form below to get a customized quote for your project</p>
              </motion.div>
              
              <AnimatePresence>
                {formStatus === 'error' && (
                  <motion.div 
                    className="error-message"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <p>{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Form onSubmit={handleSubmit} action="https://formsubmit.co/ssultrareadymix@gmail.com" method="POST" className="quote-form">
                {/* Hidden fields for FormSubmit.co */}
                <input type="hidden" name="_subject" value="New Concrete Quote Request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                {/* Section 1: Contact Information */}
                <motion.div 
                  className="form-section"
                  variants={sectionVariants}
                >
                  <div className="section-label">
                    <motion.span 
                      className="section-number"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#0056b3",
                        transition: { duration: 0.2 }
                      }}
                    >1</motion.span>
                    <h3>Contact Information</h3>
                  </div>
                  <div className="section-content">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Full Name <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            required 
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="company"
                            placeholder="Your company (if applicable)"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Email <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email" 
                            required 
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Phone Number <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="phone" 
                            required 
                            placeholder="(123) 456-7890"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </motion.div>

                {/* Section 2: Concrete Specifications */}
                <motion.div 
                  className="form-section"
                  variants={sectionVariants}
                >
                  <div className="section-label">
                    <motion.span 
                      className="section-number"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#0056b3",
                        transition: { duration: 0.2 }
                      }}
                    >2</motion.span>
                    <h3>Concrete Specifications</h3>
                  </div>
                  <div className="section-content">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Concrete Type <span className="required">*</span></Form.Label>
                          <Form.Select 
                            name="concreteType" 
                            required
                          >
                            <option value="">Select Mix Type</option>
                            <option>Ready-Mix Concrete</option>
                            <option>Precast Concrete</option>
                            <option>High-Strength Concrete</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Grade/Strength <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            name="grade" 
                            required 
                            placeholder="e.g., M25, C30/37"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="form-field">
                          <Form.Label>Quantity Needed (cubic meters) <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="number" 
                            step="0.1" 
                            name="quantity" 
                            required 
                            placeholder="e.g., 10.5"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </motion.div>

                {/* Section 3: Delivery Details */}
                <motion.div 
                  className="form-section"
                  variants={sectionVariants}
                >
                  <div className="section-label">
                    <motion.span 
                      className="section-number"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#0056b3",
                        transition: { duration: 0.2 }
                      }}
                    >3</motion.span>
                    <h3>Delivery Details</h3>
                  </div>
                  <div className="section-content">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Preferred Date <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="date" 
                            name="preferredDate" 
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="form-field">
                          <Form.Label>Preferred Time</Form.Label>
                          <Form.Control 
                            type="time" 
                            name="preferredTime" 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="form-field">
                          <Form.Label>Delivery Address <span className="required">*</span></Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="address" 
                            required 
                            placeholder="Full delivery address including city, state/province, and postal code"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </motion.div>

                {/* Section 4: Additional Information */}
                <motion.div 
                  className="form-section"
                  variants={sectionVariants}
                >
                  <div className="section-label">
                    <motion.span 
                      className="section-number"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#0056b3",
                        transition: { duration: 0.2 }
                      }}
                    >4</motion.span>
                    <h3>Additional Information</h3>
                  </div>
                  <div className="section-content">
                    <Row>
                      <Col>
                        <Form.Group className="form-field">
                          <Form.Label>Special Requirements or Comments</Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={5} 
                            name="comments" 
                            placeholder="Any special requirements or comments..." 
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </motion.div>

                <motion.div 
                  className="form-submit"
                  variants={sectionVariants}
                >
                  <motion.button 
                    type="submit" 
                    id="req-btn"
                    className="submit-btn"
                    disabled={isSubmitting}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {isSubmitting ? 
                      <span>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          style={{ display: "inline-block", marginRight: "8px" }}
                        >⟳</motion.span>
                        Processing...
                      </span> : 
                      'Get Your Quote'
                    }
                  </motion.button>
                </motion.div>
              </Form>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default RequestQuoteForm;