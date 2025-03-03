import React from 'react'
import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { services } from '../Models/Services'
import { FiCheckCircle } from 'react-icons/fi'

function ServiceCard() {
  return (
    <div>
      <Row className="g-4 d-flex flex-wrap justify-content-center">
            {services.map((service, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={4} className="d-flex">
                <Card className="h-100 shadow-sm border-0 overflow-hidden service-card w-100">
                  {/* Image Section */}
                  <div className="position-relative image-container">
                    <Image
                      src={service.image}
                      fluid
                      className="card-img-top service-image"
                      style={{ height: "200px", objectFit: "cover" }}
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
                        <p className="mb-0 text-muted features-label">
                          Key Features
                        </p>
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
    </div>
  )
}

export default ServiceCard
