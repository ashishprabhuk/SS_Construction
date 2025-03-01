import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaFlask, FaBookOpen, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    title: "Dedicated Technical Service",
    content: "On-site team providing pre & post concreting solutions at no cost",
    icon: <FaUsers size={48} />,
  },
  {
    title: "Quality Testing",
    content: "Slump test & cube casting with certified results",
    icon: <FaFlask size={48} />,
  },
  {
    title: "Expert Guidance",
    content: "Demonstrations for early curing & delayed finishing techniques",
    icon: <FaBookOpen size={48} />,
  },
  {
    title: "Mobile Testing Lab",
    content: "On-site cube tests & sieve analysis with instant reports",
    icon: <FaMobileAlt size={48} />,
  },
];

const ServiceStackCards = () => {
  return (
    <Container className="pt-2 pb-4">
      <Row className="g-4 flex-nowrap overflow-auto pb-4">
        {services.map((service, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="d-flex">
            <Card 
              className="h-100 shadow-lg border-0 rounded-4 service-card"
              style={{ minWidth: '250px' }}
            >
              <Card.Body className="text-center p-4 d-flex flex-column">
                <div className="icon-wrapper mb-3 mx-auto">
                  <span className="service-icon text-primary">
                    {service.icon}
                  </span>
                </div>
                <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                <Card.Text className="text-secondary">
                  {service.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceStackCards;
