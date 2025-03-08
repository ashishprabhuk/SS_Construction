// // /* eslint-disable no-unused-vars */
// // import React, { useState } from 'react';
// // import { Container, Row, Col, Card, Button, Modal, Badge, Nav } from 'react-bootstrap';
// // import itd from "../assets/Home/airport.png"; 
// // import airport from "../assets/Home/Airport_View_07.jpg";
// // import iocl from "../assets/Home/iocl.png";
// // import { Link } from 'react-router-dom';

// // const ProjectShowcase = () => {
// //   const projects = [
// //     {
// //       id: 1,
// //       title: "Airport Terminal Building",
// //       description: "A 12-story commercial building with sustainable design features and smart office technology.",
// //       imageUrl: airport,
// //       category: "Government",
// //       completionDate: "2024",
// //       highlights: [" Abrasion & Impact Resistance", "⁠Fast Setting & Workability", "High-Strength Concrete"]
// //     },
// //     {
// //       id: 2,
// //       title: "Indane gas by Indian oil Corporation limited (IOCL)",
// //       description: "A 12-story commercial building with sustainable design features and smart office technology.",
// //       imageUrl: iocl,
// //       category: "Government",
// //       completionDate: "Ongoing",
// //       highlights: ["Infrastructure Development", "Foundation & Load-bearing Capacity", "Roads & Transportation Facilities"]
// //     },
// //     {
// //       id: 3,
// //       title: "ITD cementation India ltd in Intl. Airport Terminal ",
// //       description: "A 12-story commercial building with sustainable design features and smart office technology.",
// //       imageUrl: itd,
// //       category: "Government",
// //       completionDate: "2024",
// //       highlights: ["Structural Strength & Load-Bearing Capacity", "Durability & Weather Resistance", "Speed & Efficiency in Construction"]
// //     },
// //   ];

// //   const categories = ["All", ...new Set(projects.map(project => project.category))];
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [showModal, setShowModal] = useState(false);
// //   const [activeProject, setActiveProject] = useState(null);

// //   const filteredProjects = activeCategory === "All" 
// //     ? projects 
// //     : projects.filter(project => project.category === activeCategory);

// //   const handleProjectClick = (project) => {
// //     setActiveProject(project);
// //     setShowModal(true);
// //   };

// //   const handleCloseModal = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <div className="bg-light py-5">
// //       {/* Hero Section */}
// //       <Container className="text-center mb-5">
// //         <h1 className="display-4 fw-bold">
// //           <span className="d-block">Building Excellence,</span>
// //           <span className="d-block" style={{color:"#01612B"}}>Delivering Results</span>
// //         </h1>
// //       </Container>

// //       {/* Category Filter */}
// //       {/* <Container className="mb-5">
// //         <Nav className="justify-content-center" variant="pills">
// //           {categories.map(category => (
// //             <Nav.Item key={category}>
// //               <Nav.Link 
// //                 active={activeCategory === category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className="mx-1"
// //               >
// //                 {category}
// //               </Nav.Link>
// //             </Nav.Item>
// //           ))}
// //         </Nav>
// //       </Container> */}

// //       {/* Projects Grid */}
// //       <Container>
// //         <Row>
// //           {filteredProjects.map(project => (
// //             <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
// //               <Card className="h-100 shadow-sm hover-card" style={{ transition: "transform 0.3s, box-shadow 0.3s" }}>
// //                 <Card.Img 
// //                   variant="top" 
// //                   src={project.imageUrl} 
// //                   alt={project.title} 
// //                   style={{ height: "200px", objectFit: "cover" }}
// //                 />
// //                 <Card.Body>
// //                   <Badge bg="success" className="mb-2">{project.category}</Badge>
// //                   <Card.Title>{project.title}</Card.Title>
// //                   {/* <Card.Text>{project.description}</Card.Text> */}
// //                 </Card.Body>
// //                 <Card.Footer className="d-flex justify-content-between align-items-center bg-white">
// //                   <small className="text-muted">Completed: {project.completionDate}</small>
// //                   <Button variant="outline-success" size="sm" onClick={() => handleProjectClick(project)}>
// //                     View Details
// //                   </Button>
// //                 </Card.Footer>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>

// //       {/* Project Modal */}
// //       <Modal show={showModal} onHide={handleCloseModal} size="lg">
// //         {activeProject && (
// //           <>
// //             <Modal.Header closeButton>
// //               <Modal.Title>
// //                 {activeProject.title}
// //                 <Badge bg="success" className="ms-2">{activeProject.category}</Badge>
// //               </Modal.Title>
// //             </Modal.Header>
// //             <Modal.Body>
// //               <img 
// //                 src={activeProject.imageUrl}
// //                 alt={activeProject.title}
// //                 className="img-fluid w-100"
// //                 style={{ height: "300px", objectFit: "cover" }}
// //               />
  
// //               <h5 className="mt-4 mb-3">Project Highlights</h5>
// //               <Row className='mt-0'>
// //                 {activeProject.highlights.map((highlight, index) => (
// //                   <Col className='mb-0' key={index} md={4}>
// //                     <p>
// //                       <i className="bi bi-check-circle-fill text-success me-2"></i>
// //                       {highlight}
// //                     </p>
// //                   </Col>
// //                 ))}
// //               </Row>
// //             </Modal.Body>
// //             <Modal.Footer className="d-flex justify-content-between">
// //               <span className="text-muted">Completed: {activeProject.completionDate}</span>
// //               <Link to="/request">
// //                 <Button variant="success">Request Similar Project</Button>
// //               </Link>
// //             </Modal.Footer>
// //           </>
// //         )}
// //       </Modal>
      
// //       {/* Call to Action Section */}
// //       <Container className="my-5">
// //         <Card style={{backgroundColor:"#281570"}} text="white" className="shadow">
// //           <Card.Body className="py-5 mx-3">
// //             <Row>
// //               <Col md={8}>
// //                 <h2 className="fw-bold">Ready to start your project?</h2>
// //                 <p className="lead">
// //                   Let&apos;s discuss how we can bring your vision to life with our expertise and dedication to excellence.
// //                 </p>
// //               </Col>
// //               <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
// //               <Link to="/contact" >
// //                 <Button variant="light" style={{backgroundColor:"#F8C301", border:'none'}} size="lg">
// //                   Contact Us Today
// //                 </Button>
// //                 </Link>
// //               </Col>
// //             </Row>
// //           </Card.Body>
// //         </Card>
// //       </Container>

// //       {/* Add some custom styles */}
// //       <style jsx>{`
// //         .hover-card:hover {
// //           transform: translateY(-5px);
// //           box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
// //           cursor: pointer;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ProjectShowcase;





// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Modal, Badge } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import itd from "../assets/Home/airport.png"; 
// import airport from "../assets/Home/Airport_View_07.jpg";
// import iocl from "../assets/Home/iocl.png";

// const ProjectShowcase = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Airport Terminal Building",
//       description: "A 12-story commercial building with sustainable design features and smart office technology.",
//       imageUrl: airport,
//       category: "Government",
//       completionDate: "2024",
//       highlights: [" Abrasion & Impact Resistance", "⁠Fast Setting & Workability", "High-Strength Concrete"]
//     },
//     {
//       id: 2,
//       title: "Indane gas by Indian oil Corporation limited (IOCL)",
//       description: "A 12-story commercial building with sustainable design features and smart office technology.",
//       imageUrl: iocl,
//       category: "Government",
//       completionDate: "Ongoing",
//       highlights: ["Infrastructure Development", "Foundation & Load-bearing Capacity", "Roads & Transportation Facilities"]
//     },
//     {
//       id: 3,
//       title: "ITD cementation India ltd in Intl. Airport Terminal ",
//       description: "A 12-story commercial building with sustainable design features and smart office technology.",
//       imageUrl: itd,
//       category: "Government",
//       completionDate: "2024",
//       highlights: ["Structural Strength & Load-Bearing Capacity", "Durability & Weather Resistance", "Speed & Efficiency in Construction"]
//     },
//   ];

//   const categories = ["All", ...new Set(projects.map(project => project.category))];
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [showModal, setShowModal] = useState(false);
//   const [activeProject, setActiveProject] = useState(null);

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   const handleProjectClick = (project) => {
//     setActiveProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         duration: 0.8,
//         delay: 0.2
//       }
//     }
//   };

//   const categoryVariants = {
//     inactive: { scale: 1, opacity: 0.7 },
//     active: { scale: 1.05, opacity: 1 }
//   };

//   return (
//     <div className="showcase-container py-5">
//       {/* Hero Section with Motion */}
//       <Container className="text-center mb-5">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           <h1 className="hero-title">
//             <motion.span 
//               className="d-block"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               Building Excellence,
//             </motion.span>
//             <motion.span 
//               className="d-block accent-text"
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Delivering Results
//             </motion.span>
//           </h1>
//         </motion.div>
//       </Container>

//       {/* Category Filter with Motion */}
//       <Container className="mb-5">
//         <motion.div 
//           className="category-container"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           {categories.map(category => (
//             <motion.button
//               key={category}
//               className={`category-pill ${activeCategory === category ? 'active' : ''}`}
//               onClick={() => setActiveCategory(category)}
//               variants={categoryVariants}
//               initial="inactive"
//               animate={activeCategory === category ? "active" : "inactive"}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>
//       </Container>

//       {/* Projects Grid with Motion */}
//       <Container>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="projects-grid"
//         >
//           {filteredProjects.map(project => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 transition: { duration: 0.3 }
//               }}
//               className="project-card-wrapper"
//             >
//               <div className="project-card" onClick={() => handleProjectClick(project)}>
//                 <div className="project-image-container">
//                   <img 
//                     src={project.imageUrl} 
//                     alt={project.title} 
//                     className="project-image"
//                   />
//                   <div className="project-overlay">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       className="view-details"
//                     >
//                       View Details
//                     </motion.div>
//                   </div>
//                 </div>
//                 <div className="project-content">
//                   <div className="category-badge">{project.category}</div>
//                   <h3 className="project-title">{project.title}</h3>
//                   <div className="project-footer">
//                     <span className="completion-date">Completed: {project.completionDate}</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </Container>

//       {/* Project Modal */}
//       <Modal 
//         show={showModal} 
//         onHide={handleCloseModal} 
//         size="lg"
//         centered
//         className="custom-modal"
//       >
//         {activeProject && (
//           <>
//             <Modal.Header closeButton>
//               <Modal.Title className="d-flex align-items-center">
//                 {activeProject.title}
//                 <Badge className="modal-badge ms-2">{activeProject.category}</Badge>
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="modal-image-container">
//                 <img 
//                   src={activeProject.imageUrl}
//                   alt={activeProject.title}
//                   className="modal-image"
//                 />
//               </div>
  
//               <h5 className="highlights-title">Project Highlights</h5>
//               <Row className="highlights-container">
//                 {activeProject.highlights.map((highlight, index) => (
//                   <Col key={index} md={4}>
//                     <motion.div 
//                       className="highlight-item"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <i className="bi bi-check-circle-fill highlight-icon"></i>
//                       {highlight}
//                     </motion.div>
//                   </Col>
//                 ))}
//               </Row>
//             </Modal.Body>
//             <Modal.Footer className="modal-footer">
//               <span className="completion-text">Completed: {activeProject.completionDate}</span>
//               <Link to="/request">
//                 <Button className="request-button">Request Similar Project</Button>
//               </Link>
//             </Modal.Footer>
//           </>
//         )}
//       </Modal>
      
//       {/* Call to Action Section with Motion */}
//       <Container className="my-5">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="cta-card"
//         >
//           <Row>
//             <Col md={8}>
//               <motion.h2 
//                 className="cta-title"
//                 initial={{ x: -30, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 Ready to start your project?
//               </motion.h2>
//               <motion.p 
//                 className="cta-text"
//                 initial={{ x: -30, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 Let's discuss how we can bring your vision to life with our expertise and dedication to excellence.
//               </motion.p>
//             </Col>
//             <Col md={4} className="cta-button-container">
//               <Link to="/contact">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button className="cta-button">
//                     Contact Us Today
//                   </Button>
//                 </motion.div>
//               </Link>
//             </Col>
//           </Row>
//         </motion.div>
//       </Container>

//       {/* Custom CSS */}
//       <style jsx>{`
//         .showcase-container {
//           background-color: #f9f9f9;
//           font-family: 'Poppins', sans-serif;
//         }
        
//         .hero-title {
//           font-size: 3.5rem;
//           font-weight: 800;
//           margin-bottom: 2rem;
//           line-height: 1.2;
//         }
        
//         .accent-text {
//           color: #01612B;
//           position: relative;
//         }
        
//         .category-container {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           flex-wrap: wrap;
//           margin-bottom: 2rem;
//         }
        
//         .category-pill {
//           background: none;
//           border: 2px solid #01612B;
//           color: #01612B;
//           border-radius: 30px;
//           padding: 0.5rem 1.5rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
        
//         .category-pill.active {
//           background-color: #01612B;
//           color: white;
//           box-shadow: 0 4px 12px rgba(1, 97, 43, 0.2);
//         }
        
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//           gap: 2rem;
//         }
        
//         .project-card {
//           background-color: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//           cursor: pointer;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           transition: all 0.3s ease;
//         }
        
//         .project-image-container {
//           position: relative;
//           overflow: hidden;
//           height: 220px;
//         }
        
//         .project-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }
        
//         .project-card:hover .project-image {
//           transform: scale(1.05);
//         }
        
//         .project-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(1, 97, 43, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }
        
//         .project-card:hover .project-overlay {
//           opacity: 1;
//         }
        
//         .view-details {
//           color: white;
//           font-weight: 600;
//           border: 2px solid white;
//           padding: 0.5rem 1.5rem;
//           border-radius: 30px;
//         }
        
//         .project-content {
//           padding: 1.5rem;
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .category-badge {
//           display: inline-block;
//           background-color: rgba(1, 97, 43, 0.1);
//           color: #01612B;
//           font-size: 0.8rem;
//           font-weight: 600;
//           padding: 0.3rem 0.8rem;
//           border-radius: 20px;
//           margin-bottom: 0.8rem;
//         }
        
//         .project-title {
//           font-size: 1.25rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #333;
//         }
        
//         .project-footer {
//           margin-top: auto;
//           border-top: 1px solid #f0f0f0;
//           padding-top: 1rem;
//         }
        
//         .completion-date {
//           color: #888;
//           font-size: 0.9rem;
//         }
        
//         /* Custom Modal Styling */
//         .custom-modal .modal-content {
//           border-radius: 16px;
//           overflow: hidden;
//           border: none;
//           box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
//         }
        
//         .modal-badge {
//           background-color: #01612B;
//           font-weight: 500;
//           padding: 0.4rem 0.8rem;
//           border-radius: 6px;
//         }
        
//         .modal-image-container {
//           border-radius: 12px;
//           overflow: hidden;
//           margin-bottom: 1.5rem;
//         }
        
//         .modal-image {
//           width: 100%;
//           height: 300px;
//           object-fit: cover;
//         }
        
//         .highlights-title {
//           font-weight: 700;
//           color: #333;
//           margin-bottom: 1.5rem;
//           position: relative;
//           padding-bottom: 0.5rem;
//         }
        
//         .highlights-title:after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 50px;
//           height: 3px;
//           background-color: #01612B;
//         }
        
//         .highlights-container {
//           margin-top: 1rem;
//         }
        
//         .highlight-item {
//           margin-bottom: 1rem;
//           display: flex;
//           align-items: flex-start;
//           gap: 0.5rem;
//         }
        
//         .highlight-icon {
//           color: #01612B;
//           font-size: 1.1rem;
//           margin-top: 0.2rem;
//         }
        
//         .modal-footer {
//           border-top: 1px solid #f0f0f0;
//         }
        
//         .completion-text {
//           color: #666;
//           font-weight: 500;
//         }
        
//         .request-button {
//           background-color: #01612B;
//           border: none;
//           border-radius: 8px;
//           padding: 0.6rem 1.5rem;
//           font-weight: 600;
//           box-shadow: 0 4px 12px rgba(1, 97, 43, 0.2);
//           transition: all 0.3s ease;
//         }
        
//         .request-button:hover {
//           background-color: #014a21;
//           transform: translateY(-2px);
//           box-shadow: 0 6px 15px rgba(1, 97, 43, 0.3);
//         }
        
//         /* Call to Action */
//         .cta-card {
//           background: linear-gradient(135deg, #281570 0%, #3a1e9c 100%);
//           color: white;
//           border-radius: 16px;
//           padding: 3rem;
//           box-shadow: 0 15px 50px rgba(40, 21, 112, 0.3);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .cta-card:before {
//           content: '';
//           position: absolute;
//           top: -50px;
//           right: -50px;
//           width: 200px;
//           height: 200px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.05);
//           z-index: 0;
//         }
        
//         .cta-title {
//           font-size: 2.2rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           position: relative;
//           z-index: 1;
//         }
        
//         .cta-text {
//           font-size: 1.1rem;
//           opacity: 0.9;
//           margin-bottom: 0;
//           position: relative;
//           z-index: 1;
//         }
        
//         .cta-button-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 1;
//         }
        
//         .cta-button {
//           background-color: #F8C301;
//           color: #281570;
//           border: none;
//           border-radius: 50px;
//           padding: 0.8rem 2rem;
//           font-size: 1.1rem;
//           font-weight: 700;
//           box-shadow: 0 10px 20px rgba(248, 195, 1, 0.3);
//           transition: all 0.3s ease;
//         }
        
//         .cta-button:hover {
//           background-color: #ffcd1d;
//           transform: translateY(-3px);
//           box-shadow: 0 15px 25px rgba(248, 195, 1, 0.4);
//         }
        
//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .hero-title {
//             font-size: 2.5rem;
//           }
          
//           .cta-card {
//             padding: 2rem;
//           }
          
//           .cta-title {
//             font-size: 1.8rem;
//           }
          
//           .cta-button-container {
//             margin-top: 2rem;
//             justify-content: flex-start;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProjectShowcase;





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
      title: "Airport Terminal Building",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: airport,
      category: "Government",
      completionDate: "2024",
      highlights: [" Abrasion & Impact Resistance", "⁠Fast Setting & Workability", "High-Strength Concrete"]
    },
    {
      id: 2,
      title: "Indane gas by Indian oil Corporation limited (IOCL)",
      description: "A 12-story commercial building with sustainable design features and smart office technology.",
      imageUrl: iocl,
      category: "Government",
      completionDate: "Ongoing",
      highlights: ["Infrastructure Development", "Foundation & Load-bearing Capacity", "Roads & Transportation Facilities"]
    },
    {
      id: 3,
      title: "ITD cementation India ltd in Intl. Airport Terminal ",
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
    <div className="showcase-container py-5">
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
      <Container className="my-5">
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
            <Col md={4} className="cta-button-container">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="cta-button">
                    Contact Us Today
                  </Button>
                </motion.div>
              </Link>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Custom CSS remains unchanged */}
            <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default ProjectShowcase;