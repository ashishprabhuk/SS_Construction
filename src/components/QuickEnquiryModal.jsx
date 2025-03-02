/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RequestQuoteForm from './RequestQuoteForm';

const QuickEnquiryModal = ({ show, onHide }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setTimeout(onHide, 2000); 
  };

  useEffect(() => {
    if (!show) setFormSubmitted(false);
  }, [show]);

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          {formSubmitted ? 'Thank You!' : 'Quick Enquiry'}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        {!formSubmitted ? (
          <RequestQuoteForm id="quickEnquiryForm" onSuccess={handleFormSubmit} />
        ) : (
          <div className="text-center py-4">
            <h4 className="text-success">✓ Request Submitted Successfully!</h4>
            <p>We&apos;ll contact you shortly</p>
          </div>
        )}
      </Modal.Body>

      {!formSubmitted && (
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button 
            variant="primary" 
            type="submit"
            form="quickEnquiryForm"
          >
            Submit Enquiry
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default QuickEnquiryModal;