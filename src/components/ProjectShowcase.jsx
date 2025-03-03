/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge, Nav } from 'react-bootstrap';
import airport from "../assets/Home/airport.png"; 
import { Link } from 'react-router-dom';

const ProjectShowcase = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Airport Terminal",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: airport,
      category: "Government",
      completionDate: "January 2025",
      highlights: ["ISO Certified", "Advanced Concrete Technique", "Completed on schedule"]
    },
    {
      id: 2,
      title: "Airport Terminal",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: airport,
      category: "Commercial",
      completionDate: "January 2025",
      highlights: ["ISO Certified", "Advanced Concrete Technique", "Completed on schedule"]
    },
    {
      id: 3,
      title: "Airport Terminal",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: airport,
      category: "Residential",
      completionDate: "January 2025",
      highlights: ["ISO Certified", "Advanced Concrete Technique", "Completed on schedule"]
    },
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-light py-5">
      {/* Hero Section */}
      <Container className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          <span className="d-block">Building Excellence,</span>
          <span className="d-block" style={{color:"#01612B"}}>Delivering Results</span>
        </h1>
      </Container>

      {/* Category Filter */}
      {/* <Container className="mb-5">
        <Nav className="justify-content-center" variant="pills">
          {categories.map(category => (
            <Nav.Item key={category}>
              <Nav.Link 
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className="mx-1"
              >
                {category}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container> */}

      {/* Projects Grid */}
      <Container>
        <Row>
          {filteredProjects.map(project => (
            <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-card" style={{ transition: "transform 0.3s, box-shadow 0.3s" }}>
                <Card.Img 
                  variant="top" 
                  src={project.imageUrl} 
                  alt={project.title} 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Badge bg="success" className="mb-2">{project.category}</Badge>
                  <Card.Title>{project.title}</Card.Title>
                  {/* <Card.Text>{project.description}</Card.Text> */}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center bg-white">
                  <small className="text-muted">Completed: {project.completionDate}</small>
                  <Button variant="outline-success" size="sm" onClick={() => handleProjectClick(project)}>
                    View Details
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        {activeProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                {activeProject.title}
                <Badge bg="success" className="ms-2">{activeProject.category}</Badge>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="img-fluid w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
  
              <h5 className="mt-4 mb-3">Project Highlights</h5>
              <Row className='mt-0'>
                {activeProject.highlights.map((highlight, index) => (
                  <Col className='mb-0' key={index} md={4}>
                    <p>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {highlight}
                    </p>
                  </Col>
                ))}
              </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              <span className="text-muted">Completed: {activeProject.completionDate}</span>
              <Link to="/request">
                <Button variant="success">Request Similar Project</Button>
              </Link>
            </Modal.Footer>
          </>
        )}
      </Modal>
      
      {/* Call to Action Section */}
      <Container className="my-5">
        <Card style={{backgroundColor:"#281570"}} text="white" className="shadow">
          <Card.Body className="py-5">
            <Row>
              <Col md={8}>
                <h2 className="fw-bold">Ready to start your project?</h2>
                <p className="lead">
                  Let&apos;s discuss how we can bring your vision to life with our expertise and dedication to excellence.
                </p>
              </Col>
              <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
              <Link to="/contact" >
                <Button variant="light" style={{backgroundColor:"#F8C301", border:'none'}} size="lg">
                  Contact Us Today
                </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Add some custom styles */}
      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;