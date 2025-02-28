import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-4">About Us</h1>
        <Row>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </Col>
          <Col md={6}>
            <h2>Our Team</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore...</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}