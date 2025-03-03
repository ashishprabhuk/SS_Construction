import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import { plants } from "../Models/Plant";
import "./Plant.css";

const Plant = () => {
  return (
    <>
      <section id="plant-bgc" className="py-5">
        <Container>
          <h3 id="plant-title" className="text-center mb-3 display-6">
            Plants & Machineries
          </h3>
          <div className="section-underline" style={{marginBottom: '10px'}}></div>

          <Row className="g-4 mt-3">
            {plants.map((plant, index) => (
              <Col key={index} md={6} lg={6}>
                <Card className="h-100 shadow-sm border-0 overflow-hidden plant-card">
                  {/* Image Section */}
                  <div className="position-relative image-container">
                    <Image
                      src={plant.image}
                      fluid
                      className="card-img-top plant-image"
                      style={{ height: "300px", objectFit: "cover" }}
                      alt={plant.title}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 title-overlay">
                      <Card.Title className="h4 mb-0 text-white">
                        {plant.title}
                      </Card.Title>
                    </div>
                  </div>

                  <Card.Body className="p-4">
                    <p className="mb-2 text-muted"><strong>Make:</strong> {plant.make}</p>
                    <p className="mb-2 text-muted"><strong>Capacity:</strong> {plant.capacity}</p>
                    <p className="mb-3 text-muted"><strong>Availability:</strong> {plant.availability}</p>

                    <p className="text-muted features-label">Key Features</p>
                    <ListGroup variant="flush" className="border-top">
                      {plant.features?.map((feature, idx) => (
                        <ListGroup.Item
                          key={idx}
                          className="border-0 px-0 py-2 d-flex align-items-start list-item"
                        >
                          <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0 list-icon" />
                          <span className="text-secondary">{feature}</span>
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
        .plant-card {
          transition: all 0.3s ease-in-out;
          border-radius: 1rem;
          overflow: hidden;
        }

        .plant-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 1.5rem 3rem rgba(0,0,0,0.2)!important;
        }

        .image-container {
          overflow: hidden;
          border-radius: 1rem 1rem 0 0;
        }

        .plant-image {
          transition: all 0.4s ease-in-out;
        }

        .plant-card:hover .plant-image {
          transform: scale(1.08);
        }

        .title-overlay {
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          opacity: 1;
        }

        .features-label {
          font-weight: bold;
          color: #555;
        }

        .list-item {
          transition: all 0.3s ease-in-out;
        }

        .plant-card:hover .list-item {
          transform: translateX(8px);
        }

        .list-icon {
          transition: all 0.3s ease-in-out;
        }
        .plant-card:hover .list-icon {
          transform: scale(1.2);
        }
        `}</style>
      </section>
    </>
  );
};

export default Plant;