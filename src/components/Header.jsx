import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ssLogo from "../assets/sscon.png";
import scroll from "../assets/icon/scroll-light.svg";
import home from "../assets/icon/house-line-duotone.svg";
import service from "../assets/icon/gear.svg";
import about from "../assets/icon/info-duotone.svg";
import contact from "../assets/icon/address-book-duotone.svg";
import "./Header.css";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      className="header"
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
          <Nav className="mx-auto mobile-nav">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              <div className="d-flex align-items-center gap-1 nav-item-mobile">
                <img src={home} alt="home" />
                <div>Home</div>
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={() => setExpanded(false)}
            >
              <div className="d-flex align-items-center gap-1 nav-item-mobile">
                <img src={service} alt="service" />
                <div>Services</div>
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              <div className="d-flex align-items-center gap-1 nav-item-mobile">
                <img src={about} alt="about" />
                <div>About</div>
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              <div className="d-flex align-items-center gap-1 nav-item-mobile">
                <img src={contact} alt="contact" />
                <div>Contact</div>
              </div>
            </Nav.Link>
          </Nav>

          <Link
            to="/request"
            className="btn btn-outline-light mobile-quote-btn"
            id="req-btn"
            onClick={() => setExpanded(false)}
          >
            <div className="scroll-img d-flex align-content-center gap-1 text-center">
              <img src={scroll} alt="scroll" className="scroll-img" />
              Request a quote
            </div>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}