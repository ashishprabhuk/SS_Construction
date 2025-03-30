import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import itd from "../assets/Home/airport.png"; 
import airport from "../assets/Home/Airport_View_07.jpg";
import iocl from "../assets/Home/iocl.png";
import "./ProjectShowcase.css"

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Runway concrete,\nTrichy's New International Airport",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: airport,
      category: "Government",
      completionDate: "2024",
      highlights: [" Abrasion & Impact Resistance", "⁠Fast Setting & Workability", "High-Strength Concrete"]
    },
    {
      id: 2,
      title: "IOCL Gas Plant, Trichy",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: iocl,
      category: "Government",
      completionDate: "Ongoing",
      highlights: ["Infrastructure Development", "Foundation & Load-bearing Capacity", "Roads & Transportation Facilities"]
    },
    {
      id: 3,
      title: "Trichy Airport Terminal Building by ITD cementation ltd",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: itd,
      category: "Government",
      completionDate: "2024",
      highlights: ["Structural Strength & Load-Bearing Capacity", "Durability & Weather Resistance", "Speed & Efficiency in Construction"]
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <div className="showcase-container py-3">
      {/* Hero Section with Motion */}
      <Container className="text-center mb-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="hero-title">
            <motion.span 
              className="d-block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Building Excellence,
            </motion.span>
            <motion.span 
              className="d-block accent-text"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Delivering Results
            </motion.span>
          </h1>
        </motion.div>
      </Container>

      {/* Projects Grid with Motion */}
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="projects-grid"
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="project-card-wrapper"
            >
              <div className="project-card" onClick={() => handleProjectClick(project)}>
                <div className="project-image-container">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="view-details"
                    >
                      View Details
                    </motion.div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="category-badge">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-footer">
                    <span className="completion-date">Completed: {project.completionDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Project Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg"
        centered
        className="custom-modal"
      >
        {activeProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="d-flex align-items-center">
                {activeProject.title}
                <Badge id='modal-badge' className="ms-2">{activeProject.category}</Badge>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-image-container">
                <img 
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="modal-image"
                />
              </div>
  
              <h5 className="highlights-title">Project Highlights</h5>
              <Row className="highlights-container">
                {activeProject.highlights.map((highlight, index) => (
                  <Col key={index} md={4}>
                    <motion.div 
                      className="highlight-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <i className="bi bi-check-circle-fill highlight-icon"></i>
                      {highlight}
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <span className="completion-text">Completed: {activeProject.completionDate}</span>
              <Link to="/request">
                <Button className="request-button">Request Similar Project</Button>
              </Link>
            </Modal.Footer>
          </>
        )}
      </Modal>
      
      {/* Call to Action Section with Motion */}
      <Container className="mt-5 mb-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cta-card"
        >
          <Row>
            <Col md={8}>
              <motion.h2 
                className="cta-title"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to start your project?
              </motion.h2>
              <motion.p 
                className="cta-text"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Let's discuss how we can bring your vision to life with our expertise and dedication to excellence.
              </motion.p>
            </Col>
            <Col md={4} className="cta-button-container mt-4 mt-md-0">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button  className="cta-button">
                    Contact Us Today
                  </Button>
                </motion.div>
              </Link>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default ProjectShowcase;