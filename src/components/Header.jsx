import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ssLogo from '../assets/sscon.png';
import "./Header.css";

export default function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container className="mx-2" fluid>
        {/* Left-aligned Logo */}
        <Navbar.Brand as={Link} to="/" className="me-0">
          <img src={ssLogo} alt="Tech Innovators" width="100" height="50" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center-aligned Main Navigation */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/labs">Labs</Nav.Link>
          </Nav>

          {/* Right-aligned CTA */}
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/request" 
              className="btn btn-outline-light"
              id="req-btn"
            >
               Request a quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}