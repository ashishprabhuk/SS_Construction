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

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/el/bijimi", {
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

  if (formStatus === 'success') {
    return (
      <Container className="py-5">
        <Card className="shadow border-0">
          <Card.Body className="text-center p-5">
            <h2 className="text-success mb-4">Thank you for your submission!</h2>
            <p className="lead">We've received your quote request and will get back to you shortly.</p>
            <p className="text-muted">Note: If this is your first submission, please check your email to confirm your FormSubmit account.</p>
            <Button 
              variant="success" 
              className="mt-4 px-4 py-2"
              onClick={() => setFormStatus(null)}
            >
              Submit Another Request
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card >
        <Card.Body className="p-md-5 p-4">
          <h1 className="text-center mb-4 text-success">Request a Concrete Quote</h1>
          
          {formStatus === 'error' && (
            <Alert variant="danger" className="mb-4">
              {errorMessage}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            {/* Hidden field for subject */}
            <input type="hidden" name="_subject" value="New Concrete Quote Request" />

            {/* Contact Details Section */}
            <Card className="mb-4 border-0 bg-light">
              <Card.Body className="p-4">
                <h4 className="mb-4 border-bottom pb-2">Contact Information</h4>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formFullName">
                      <Form.Label className="fw-bold">Full Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formCompanyName">
                      <Form.Label className="fw-bold">Company Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="company"
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label className="fw-bold">Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formPhone">
                      <Form.Label className="fw-bold">Phone Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Concrete Specifications */}
            <Card className="mb-4 border-0 bg-light">
              <Card.Body className="p-4">
                <h4 className="mb-4 border-bottom pb-2">Concrete Specifications</h4>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formConcreteType">
                      <Form.Label className="fw-bold">Concrete Type <span className="text-danger">*</span></Form.Label>
                      <Form.Select 
                        name="concreteType" 
                        required
                        className="shadow-sm"
                      >
                        <option value="">Select Mix Type</option>
                        <option>Ready-Mix Concrete</option>
                        <option>Precast Concrete</option>
                        <option>High-Strength Concrete</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formGrade">
                      <Form.Label className="fw-bold">Grade/Strength <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        name="grade" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3">
                    <Form.Group controlId="formQuantity">
                      <Form.Label className="fw-bold">Quantity Needed (cubic meters) <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="number" 
                        step="0.1" 
                        name="quantity" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Delivery Information */}
            <Card className="mb-4 border-0 bg-light">
              <Card.Body className="p-4">
                <h4 className="mb-4 border-bottom pb-2">Delivery Details</h4>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formDate">
                      <Form.Label className="fw-bold">Preferred Date <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="date" 
                        name="preferredDate" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formTime">
                      <Form.Label className="fw-bold">Preferred Time</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="preferredTime" 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3">
                    <Form.Group controlId="formAddress">
                      <Form.Label className="fw-bold">Delivery Address <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="address" 
                        required 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Additional Requirements */}
            <Card className="mb-4 border-0 bg-light">
              <Card.Body className="p-4">
                <h4 className="mb-4 border-bottom pb-2">Additional Information</h4>
                <Row>
                  <Col>
                    <Form.Group controlId="formComments">
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="comments" 
                        placeholder="Any special requirements or comments..." 
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div className="text-center mt-4">
              <Button 
                variant="success" 
                type="submit" 
                size="lg"
                className="px-5 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RequestQuoteForm;