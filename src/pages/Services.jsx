import { Container, Card, Row, Col } from 'react-bootstrap'

export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Custom web solutions...' },
    { title: 'Mobile Apps', description: 'iOS and Android development...' },
    { title: 'Cloud Solutions', description: 'Cloud infrastructure...' },
  ]

  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-5">Our Services</h1>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}