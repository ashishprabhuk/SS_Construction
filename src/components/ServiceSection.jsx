import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FiShield, FiCheckCircle } from 'react-icons/fi';
import "./ServiceSection.css"

const ServicesSection = () => {
  const services = [
    {
      title: 'SSURMC – FIBRE CON',
      advantages: [
        'Greatly reduces the Shrinkage Cracks',
        'Improve the water permeability into the concrete structure',
        'Enhance the durability of the building',
        'Value Added Concrete Products'
      ],
      icon: <FiShield />
    },
    {
      title: 'SSURMC – FIBRE CON',
      advantages: [
        'Greatly reduces the Shrinkage Cracks',
        'Improve the water permeability into the concrete structure',
        'Enhance the durability of the building',
        'Value Added Concrete Products'
      ],
      icon: <FiShield />
    },
    {
      title: 'SSURMC – FIBRE CON',
      advantages: [
        'Greatly reduces the Shrinkage Cracks',
        'Improve the water permeability into the concrete structure',
        'Enhance the durability of the building',
        'Value Added Concrete Products'
      ],
      icon: <FiShield />
    },
    {
      title: 'SSURMC – FIBRE CON',
      advantages: [
        'Greatly reduces the Shrinkage Cracks',
        'Improve the water permeability into the concrete structure',
        'Enhance the durability of the building',
        'Value Added Concrete Products'
      ],
      icon: <FiShield />
    },
    {
      title: 'SSURMC – FIBRE CON',
      advantages: [
        'Greatly reduces the Shrinkage Cracks',
        'Improve the water permeability into the concrete structure',
        'Enhance the durability of the building',
        'Value Added Concrete Products'
      ],
      icon: <FiShield />
    },
    // Add more service objects here
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-dark">
          Our Concrete Solutions
        </h2>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-btn text-white rounded-circle py-2 px-3">
                      {service.icon}
                    </div>
                    <Card.Title className="h4 ms-3 mb-0 text-dark">
                      {service.title}
                    </Card.Title>
                  </div>
                  
                  <ListGroup variant="flush">
                    {service.advantages.map((advantage, idx) => (
                      <ListGroup.Item key={idx} className="border-0 px-0 py-2">
                        <div className="d-flex align-items-start">
                          <FiCheckCircle className="text-success me-2 mt-1" />
                          <span className="text-secondary">{advantage}</span>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;