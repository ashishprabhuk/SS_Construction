import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ssLogo from "../assets/sscon.png";
import scroll from "../assets/Footer/scroll-light.svg";
import "./Header.css";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      className="header bg-#FCF5EB border-bottom border-1 border-dark"
      variant="light"
      expand="lg"
      fixed="top"
    >
      <Container className="mx-2" fluid>
        <Navbar.Brand as={Link} to="/" className="me-0">
          <img src={ssLogo} alt="Tech Innovators" width="100" height="60" />
        </Navbar.Brand>

        <button
          className={`menu-toggle ${expanded ? "open" : ""}`}
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>

          <Link
            to="/request"
            className="btn btn-outline-light"
            id="req-btn"
            onClick={() => setExpanded(false)}
          >
            <img src={scroll} alt="scroll"/>
            Request a quote
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
