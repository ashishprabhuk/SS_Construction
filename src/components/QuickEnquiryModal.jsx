/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { 
  Modal, 
  Button, 
  Form, 
  Row, 
  Col,
  Container
} from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuickEnquiryModal = ({ show, onHide }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Reset form state when modal is closed
  useEffect(() => {
    if (!show) {
      setFormStatus(null);
      setIsSubmitting(false);
      setErrorMessage('');
    }
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    setErrorMessage('');

    const formData = new FormData(e.target);
    
    // Add a timestamp to make each submission unique
    formData.append('_timestamp', new Date().toISOString());

    try {
      const response = await fetch("https://formsubmit.co/ajax/ssultrareadymix@gmail.com", {
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
      setTimeout(onHide, 3000); // Close modal after 3 seconds on success
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
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
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

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
    >
      <Modal.Header className='d-flex justify-content-center align-items-center' closeButton>
        <Modal.Title className="d-flex justify-content-center align-items-center text-dark text-center fw-bold">
          {formStatus === 'success' ? 'Thank You!' : 'Quick Enquiry'}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <AnimatePresence mode="wait">
          {formStatus === 'success' ? (
            <motion.div 
              className="text-center py-4"
              key="success"
              initial="hidden"
              animate="visible"
              variants={successVariants}
            >
              <motion.div 
                className="success-icon mb-3"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1, 
                  transition: { 
                    delay: 0.2, 
                    type: "spring", 
                    stiffness: 200 
                  }
                }}
                style={{ 
                  fontSize: "3rem", 
                  color: "#28a745", 
                  display: "inline-block" 
                }}
              >
                ✓
              </motion.div>
              <motion.h4
                className="text-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: 0.3, duration: 0.4 } 
                }}
              >
                Request Submitted Successfully!
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1, 
                  transition: { delay: 0.5, duration: 0.4 } 
                }}
              >
                We've received your request and will get back to you shortly.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <Container fluid>
                <AnimatePresence>
                  {formStatus === 'error' && (
                    <motion.div 
                      className="error-message mb-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <Form onSubmit={handleSubmit} id="quickEnquiryForm" action="https://formsubmit.co/ssultrareadymix@gmail.com" method="POST">
                  {/* Hidden fields for FormSubmit.co */}
                  <input type="hidden" name="_subject" value="New Quick Enquiry" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  {/* Contact Information */}
                  <motion.div variants={sectionVariants}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            required 
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="company"
                            placeholder="Your company (if applicable)"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </motion.div>

                  <motion.div variants={sectionVariants}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email" 
                            required 
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="phone" 
                            required 
                            placeholder="(123) 456-7890"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </motion.div>

                  {/* Concrete Specifications */}
                  <motion.div variants={sectionVariants}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Concrete Type <span className="required">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            name="concreteType" 
                            required 
                            placeholder="Enter Mix Type"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Quantity Needed (cubic meters) <span className="text-danger">*</span></Form.Label>
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
                  </motion.div>

                  {/* Delivery Address and Date */}
                  <motion.div variants={sectionVariants}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Preferred Date <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="date" 
                            name="preferredDate" 
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Delivery Address <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={2} 
                            name="address" 
                            required 
                            placeholder="Full delivery address"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </motion.div>

                  {/* Special Requirements or Comments */}
                  <motion.div variants={sectionVariants}>
                    <Form.Group className="mb-3">
                      <Form.Label>Special Requirements or Comments</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="comments" 
                        placeholder="Any special requirements or comments..." 
                      />
                    </Form.Group>
                  </motion.div>
                </Form>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal.Body>

      {formStatus !== 'success' && (
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <motion.button 
            className="btn btn-success"
            type="submit"
            form="quickEnquiryForm"
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
              'Submit Enquiry'
            }
          </motion.button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default QuickEnquiryModal;