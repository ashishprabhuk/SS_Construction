import { Container, Card, Row, Col } from 'react-bootstrap'

export default function Services() {
  const services = [
    { title: 'Service 1', description: 'Services we do...' },
    { title: 'Service 2', description: 'Services we do...' },
    { title: 'Service 3', description: 'Services we do...' },
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