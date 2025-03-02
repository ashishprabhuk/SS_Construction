import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import { plants } from "../Models/Plant";
import "./Plant.css";

const Plant = () => {
  return (
    <>
      <section id="plant-bgc" className="py-5">
        <Container>
          <h3 id="plant-title" className="text-center mb-2 display-6">
            Plants & Machineries
          </h3>
          <div id="fading-line" className="mb-5"></div>

          <Row className="g-4">
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
                    <div className="d-flex align-items-center mb-3 icon-container">
                      <div>
                        <p className="mb-0 text-muted features-label ">
                          Key Features
                        </p>
                      </div>
                    </div>

                    <ListGroup variant="flush" className="border-top">
                      {/* {plant.advantages.map((advantage, idx) => (
                        <ListGroup.Item
                          key={idx}
                          className="border-0 px-0 py-2 d-flex align-items-start list-item"
                        >
                          <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0 list-icon" />
                          <span className="text-secondary">{advantage}</span>
                        </ListGroup.Item>
                      ))} */}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <style>{`
        .plant-card {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center center;
        }

        .plant-card:hover .plant-image {
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

        .plant-card:hover .icon-wrapper {
          transform: rotate(360deg);
          background: #2d5d8c !important;
        }

        .features-label {
          transition: all 0.3s ease;
        }

        .plant-card:hover .features-label {
          transform: translateX(5px);
          color: #2d5d8c !important;
        }

        .list-item {
          transition: all 0.3s ease;
          }

          .plant-card:hover .list-item {
          transform: translateX(8px);
        }

        .list-icon {
          transition: all 0.3s ease;
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
