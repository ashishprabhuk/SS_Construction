import { Form, Button, Container } from 'react-bootstrap'

export default function Request() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="mb-4">Request a Demo</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter company name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Preferred Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit Request
          </Button>
        </Form>
      </Container>
    </section>
  )
}