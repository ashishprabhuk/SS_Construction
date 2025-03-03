import { Container, Row, Col, Card } from 'react-bootstrap';
import user_icon from "../assets/Services/users-light.png";
import notebook_icon from "../assets/Services/notebook-light.png";
import flask_icon from "../assets/Services/flask-light.png";
import truck_icon from "../assets/Services/truck-light.png";
import "./ServiceStackCards.css";

const services = [
  {
    title: "Dedicated Technical Service",
    content: "On-site team providing pre & post concreting solutions at no cost",
    image: user_icon,
  },
  {
    title: "Quality Testing",
    content: "Slump test & cube casting with certified results",
    image: flask_icon,
  },
  {
    title: "Expert Guidance",
    content: "Demonstrations for early curing & delayed finishing techniques",
    image: notebook_icon,
  },
  {
    title: "Mobile Testing Lab",
    content: "On-site cube tests & sieve analysis with instant reports",
    image: truck_icon,
  },
];

const ServiceStackCards = () => {
  return (
    <Container className="pt-2 pb-4">
      <Row className="g-4 d-flex flex-wrap justify-content-center">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="d-flex">
            <Card 
              className="h-100 shadow-md border-2 rounded-4 service-card"
              style={{ minWidth: '250px' }}
            >
              <Card.Body className="text-center p-4 d-flex flex-column">
                  <img className='mb-3 mx-auto' src={service.image} alt={service.title} />
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
