import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ssLogo from "../assets/sscon.png";
import "./Header.css";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      className="header bg-#FCF5EB"
      variant="light"
      expand="lg"
      fixed="top"
    >
      <Container className="mx-2" fluid>
        <Navbar.Brand as={Link} to="/" className="me-0">
          <img src={ssLogo} alt="Tech Innovators" width="80" height="50" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleNavClick}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/labs" onClick={handleNavClick}>
              Labs
            </Nav.Link>
          </Nav>

          <Link
            to="/request"
            className="btn btn-outline-light"
            id="req-btn"
            onClick={handleNavClick}
          >
            Request a quote
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
