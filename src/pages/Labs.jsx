import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

export default function Labs() {
  const experiments = [
    { title: 'Research 1', status: 'Active', description: 'Some description about the desc' },
    { title: 'Research 2', status: 'Upcoming', description: 'Some description about the desc' },
    { title: 'Research 3', status: 'Completed', description: 'Some description about the desc' },
  ]

  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-4">Research Labs</h1>
        <Row>
          {experiments.map((exp, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Header>{exp.status}</Card.Header>
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Team: {index+1} researchers</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}