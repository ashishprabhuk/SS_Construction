import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Container className="text-center py-5 mt-5">
      <h1 className="display-1 text-muted">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead mb-4">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Return to Home
      </Button>
    </Container>
  )
}