import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import { services } from '../Models/Services';

const ServicesSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-dark">
          Services We Do
        </h2>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden service-card">
                {/* Image Section */}
                <div className="position-relative image-container">
                  <Image 
                    src={service.image} 
                    fluid 
                    className="card-img-top service-image"
                    style={{ height: '200px', objectFit: 'cover' }}
                    alt={service.title}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 title-overlay">
                    <Card.Title className="h4 mb-0 text-white">
                      {service.title}
                    </Card.Title>
                  </div>
                </div>

                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3 icon-container">
                    <div>
                      <p className="mb-0 text-muted features-label ">Key Features</p>
                    </div>
                  </div>
                  
                  <ListGroup variant="flush" className="border-top">
                    {service.advantages.map((advantage, idx) => (
                      <ListGroup.Item 
                        key={idx} 
                        className="border-0 px-0 py-2 d-flex align-items-start list-item"
                      >
                        <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0 list-icon" />
                        <span className="text-secondary">{advantage}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .service-card {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 1rem;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 1.5rem 3rem rgba(0,0,0,0.2)!important;
        }

        .image-container {
          overflow: hidden;
          border-radius: 1rem 1rem 0 0;
        }

        .service-image {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center center;
        }

        .service-card:hover .service-image {
          transform: scale(1.08);
        }

        .title-overlay {
          transition: all 0.3s ease;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          opacity: 1;
        }

        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .service-card:hover .icon-wrapper {
          transform: rotate(360deg);
          background: #2d5d8c !important;
        }

        .features-label {
          transition: all 0.3s ease;
        }

        .service-card:hover .features-label {
          transform: translateX(5px);
          color: #2d5d8c !important;
        }

        .list-item {
          transition: all 0.3s ease;
        }

        .service-card:hover .list-item {
          transform: translateX(8px);
        }

        .list-icon {
          transition: all 0.3s ease;
        }

        .service-card:hover .list-icon {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;