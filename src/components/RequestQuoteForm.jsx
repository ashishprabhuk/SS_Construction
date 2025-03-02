import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import "./RequestQuoteForm.css";
import { useState } from 'react';
import axios from 'axios';

const RequestQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = {};
    const formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name && element.name !== '') {
        formData[element.name] = element.value;
      }
    }

    try {
      await axios.post(
        // "https://formsubmit.co/ajax/ashishprabhu2143@gmail.com",
        "https://formsubmit.co/ajax/el/bijimi",
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setFormStatus('success');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'There was an error submitting the form. Please try again.');
      setFormStatus('error');
    }
    setIsSubmitting(false);
  };

  if (formStatus === 'success') {
    return (
      <Container className="quote-container my-5 p-4 bg-white rounded shadow text-center">
        <h2 style={{ color: "#25D366" }}>Thank you for your submission!</h2>
        <p>We&apos;ve received your quote request and will get back to you shortly.</p>
        <p>Note: If this is your first submission, please check your email to confirm your FormSubmit account.</p>
        <Button 
          onClick={() => setFormStatus(null)} 
          className="mt-3"
          style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
        >
          Submit Another Request
        </Button>
      </Container>
    );
  }

  return (
    <Container className="quote-container my-5 p-4 bg-white rounded shadow">
      <h1 className="text-center mb-4" style={{ color: "#25D366" }}>Request a Concrete Quote</h1>
      
      {formStatus === 'error' && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      
      <Form action={"https://formsubmit.co/el/bijimi"} method="POST" onSubmit={handleSubmit}>
        {/* Hidden field for subject */}
        <input type="hidden" name="_subject" value="New Concrete Quote Request" />

        {/* Contact Details Section */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Contact Information</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formFullName">
                <Form.Label className="required">Full Name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" name="company" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formEmail">
                <Form.Label className="required">Email</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formPhone">
                <Form.Label className="required">Phone Number</Form.Label>
                <Form.Control type="tel" name="phone" required />
              </Form.Group>
            </Col>
          </Row>
        </section>

        {/* Concrete Specifications */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Concrete Specifications</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formConcreteType">
                <Form.Label className="required">Concrete Type</Form.Label>
                <Form.Control as="select" name="concreteType" required>
                  <option value="">Select Mix Type</option>
                  <option>Ready-Mix Concrete</option>
                  <option>Precast Concrete</option>
                  <option>High-Strength Concrete</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formGrade">
                <Form.Label className="required">Grade/Strength</Form.Label>
                <Form.Control type="text" name="grade" required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formQuantity" className="mb-3">
            <Form.Label className="required">Quantity Needed (cubic meters)</Form.Label>
            <Form.Control type="number" step="0.1" name="quantity" required />
          </Form.Group>
        </section>

        {/* Delivery Information */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Delivery Details</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formDate">
                <Form.Label className="required">Preferred Date</Form.Label>
                <Form.Control type="date" name="preferredDate" required />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formTime">
                <Form.Label>Preferred Time</Form.Label>
                <Form.Control type="time" name="preferredTime" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formAddress" className="mb-3">
            <Form.Label className="required">Delivery Address</Form.Label>
            <Form.Control as="textarea" rows={3} name="address" required />
          </Form.Group>
        </section>

        {/* Additional Requirements */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Additional Information</h2>
          <Form.Group controlId="formComments">
            <Form.Control 
              as="textarea" 
              rows={5} 
              name="comments"
              placeholder="Any special requirements or comments..." 
            />
          </Form.Group>
        </section>

        <div className="text-center">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RequestQuoteForm;
