// /* eslint-disable no-unused-vars */
// import { Container, Row, Col, Nav } from "react-bootstrap";
// import "./Footer.css";
// import { Link } from "react-router-dom";
// import agac from "../assets/Footer/agac-bg.png";
// import iaf from "../assets/Footer/iaf-bg.png";
// import oa from "../assets/Footer/oa.jpeg";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light pt-5 mt-2">
//       <Container>
//         {/* <Row>
//           <Col className="mb-1">
//             <h5 className="text-white mb-4">
//               SS Construction - Build Right, Build Strong
//             </h5>
//           </Col>
//           <Col className="mb-1">
//             <p className="text-secondary">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry.
//             </p>
//           </Col>
//         </Row> */}

//         {/* <Row>
//           <Col className="mb-1 d-flex justify-content-center">
//             <Nav className="mt-1">
//               <Nav.Link
//                 as={Link}
//                 to="/request"
//                 className="btn btn-outline-light"
//                 id="req-btn"
//               >
//                 Request a Quote
//               </Nav.Link>
//             </Nav>
//           </Col>
//         </Row> */}

//         <Row>
//           <Col className="d-flex flex-column justify-content-center align-items-center">
//             <div className="iso-certification p-3 rounded d-flex flex-wrap justify-content-center">
//               <img
//                 src={agac}
//                 alt="ISO Certification"
//                 className="img-fluid m-2"
//                 style={{ maxHeight: "100px" }}
//               />
//               <img
//                 src={iaf}
//                 alt="ISO Certification"
//                 className="img-fluid m-2"
//                 style={{ maxHeight: "100px" }}
//               />
//               <img
//                 src={oa}
//                 alt="ISO Certification"
//                 className="img-fluid m-2"
//                 style={{ maxHeight: "100px" }}
//               />
//             </div>
//           </Col>
//         </Row>

//         <Container fluid className="bg-dark text-white py-4">
//           <Row className="w-100 justify-content-between px-3">
//             <Col md={2} className="mb-1 text-center text-md-start">
//               <h6 className="text-white mb-3">Contact Us</h6>
//               <p className="text-secondary mb-2">
//                 <i className="bi bi-telephone me-2"></i> +91 9842459234
//               </p>
//               <p className="text-secondary mb-2">
//                 <i className="bi bi-telephone me-2"></i> +91 8870536435
//               </p>
//             </Col>

//             <Col md={3} className="mb-1 text-center text-md-start">
//               <h6 className="text-white mb-3">Email</h6>
//               <p className="text-secondary mb-2">
//                 <i className="bi bi-envelope me-2"></i> 123@gmail.com
//               </p>
//             </Col>

//             <Col md={3} className="mb-1 text-center text-md-start">
//               <h6 className="text-white mb-3">Find Us Here</h6>
//               <p className="text-secondary mb-2">
//                 <i className="bi bi-geo-alt me-2"></i> 41/2A2, Kollidam River
//                 Bed, Kondayampettai, Thiruvanaikovil, Trichy - 620005
//               </p>
//             </Col>

//             <Col md={2} className="mb-1 text-center text-md-start">
//               <h6 className="text-white mb-3">Connect</h6>
//               <div className="d-flex justify-content-center justify-content-md-start gap-3">
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-secondary"
//                 >
//                   <i className="bi bi-twitter fs-5"></i>
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-secondary"
//                 >
//                   <i className="bi bi-linkedin fs-5"></i>
//                 </a>
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-secondary"
//                 >
//                   <i className="bi bi-github fs-5"></i>
//                 </a>
//                 <a href="mailto:info@example.com" className="text-secondary">
//                   <i className="bi bi-envelope fs-5"></i>
//                 </a>
//               </div>
//             </Col>
//           </Row>
//         </Container>

//         <Row className="pt-2">
//           <Col className="text-center">
//             <div className="fading-line"></div>
//             <p className="text-secondary mb-2">
//               &copy; {new Date().getFullYear()} All rights reserved. Developed
//               by{" "}
//               <b>
//                 <a
//                   className="text-decoration-none text-secondary"
//                   id="dev-link"
//                   href="https://www.andrometa.in"
//                 >
//                   Andrometa
//                 </a>
//               </b>
//               .
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }


/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import iso1 from "../assets/Footer/iso-14001-2015.svg";
import iso2 from "../assets/Footer/iso-45001-2018.svg";
import iso3 from "../assets/Footer/iso-9001-2015.svg";

export default function Footer() {
  return (
    <footer className="bg-dark text-light footer-wrapper">
      <Container className="pt-5 pb-2">
        <Row className="g-4 mb-4">
          <Col lg={3} md={6} className="mb-3">
            <div className="iso-certification rounded d-flex justify-content-center align-items-center">
              <img
                src={iso1}
                alt="OA Certification"
                className="img-fluid m-2 certification-img"
              />
              <img
                src={iso2}
                alt="AGAC Certification"
                className="img-fluid m-2 certification-img"
              />
              <img
                src={iso3}
                alt="IAF Certification"
                className="img-fluid m-2 certification-img"
              />
            </div>
          </Col>
        </Row>

        <Row>
        <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Address</h5>
            <address className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2" style={{ color: "#fff" }}></i>
              41/2A2, Kollidam River Bed,<br />
              Kondayampettai, Thiruvanaikovil,<br />
              Trichy - 620005
            </address>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-telephone me-2" style={{ color: "#fff" }}></i>
                <a href="tel:+919842459234" id="cont-a" className="text-secondary">+91 98424 59234</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2" style={{ color: "#fff" }}></i>
                <a href="tel:+918870536435" id="cont-a" className="text-secondary">+91 88705 36435</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Send Us A Message</h5>
            <div className="text-secondary">
              <i className="bi bi-envelope me-2" style={{ color: "#fff" }}></i>
              <a href="mailto:123@gmail.com" id="cont-a" className="text-secondary">123@gmail.com</a>
            </div>
          </Col>

          

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-uppercase text-white mb-4">Connect With Us</h5>
            <div className="d-flex flex-wrap gap-3 social-links">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" id="social-linkss" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-whatsapp" style={{ color: "#fff" }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" id="social-linkss" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-instagram" style={{ color: "#fff" }}></i>
              </a>
              <a href="mailto:info@example.com" id="social-linkss" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-envelope" style={{ color: "#fff" }}></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col className="text-center">
          <div className="fading-line"></div>
            <p className="mb-0 py-2 text-secondary">
              &copy; {new Date().getFullYear()} SS Construction. All rights reserved.<br className="d-md-none" />
              Developed by {" "}
              <a href="https://www.andrometa.in" className="text-white text-decoration-none hover-accent">
                <b>Andrometa</b>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

// import { Container, Row, Col, Nav } from "react-bootstrap";
// import "./Footer.css";
// import agac from "../assets/Footer/agac-bg.png";
// import iaf from "../assets/Footer/iaf-bg.png";
// import oa from "../assets/Footer/oa.jpeg";

// export default function Footer() {
//   return (
//     <footer className="bg-#111B21 text-light pt-4 mt-3">
//       <Container>
//         {/* Certification Images Section */}
//         <Row className="mb-4">
//           <Col className="d-flex justify-content-center">
//             <div className="iso-certification">
//               <img
//                 src={agac}
//                 alt="AGAC Certification"
//                 className="img-fluid"
//               />
//               <img
//                 src={iaf}
//                 alt="IAF Certification"
//                 className="img-fluid"
//               />
//               <img
//                 src={oa}
//                 alt="OA Certification"
//                 className="img-fluid"
//               />
//             </div>
//           </Col>
//         </Row>

//         {/* Contact Information Section */}
//         <Row className="justify-content-between contact-section">
//           <Col md={3} sm={6} className="contact-info mb-3">
//             <h6 className="text-white mb-3">Contact Us</h6>
//             <p className="text-secondary mb-2">
//               <i className="bi bi-telephone me-2"></i> +91 9842459234
//             </p>
//             <p className="text-secondary mb-2">
//               <i className="bi bi-telephone me-2"></i> +91 8870536435
//             </p>
//           </Col>

//           <Col md={3} sm={6} className="contact-info mb-3">
//             <h6 className="text-white mb-3">Email</h6>
//             <p className="text-secondary mb-2">
//               <i className="bi bi-envelope me-2"></i> 123@gmail.com
//             </p>
//           </Col>

//           <Col md={3} sm={6} className="contact-info mb-3">
//             <h6 className="text-white mb-3">Find Us Here</h6>
//             <p className="text-secondary mb-2">
//               <i className="bi bi-geo-alt me-2"></i> 41/2A2, Kollidam River
//               Bed, Kondayampettai, Thiruvanaikovil, Trichy - 620005
//             </p>
//           </Col>

//           <Col md={3} sm={6} className="contact-info mb-3">
//             <h6 className="text-white mb-3">Connect</h6>
//             <div className="d-flex social-links gap-3">
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-secondary"
//                 aria-label="Twitter"
//               >
//                 <i className="bi bi-twitter fs-5"></i>
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-secondary"
//                 aria-label="LinkedIn"
//               >
//                 <i className="bi bi-linkedin fs-5"></i>
//               </a>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-secondary"
//                 aria-label="GitHub"
//               >
//                 <i className="bi bi-github fs-5"></i>
//               </a>
//               <a 
//                 href="mailto:info@example.com" 
//                 className="text-secondary"
//                 aria-label="Email"
//               >
//                 <i className="bi bi-envelope fs-5"></i>
//               </a>
//             </div>
//           </Col>
//         </Row>
        
//         {/* Copyright Section */}
//         <Row>
//           <Col className="text-center">
//             <div className="fading-line"></div>
//             <p className="text-secondary py-2 mb-0">
//               &copy; {new Date().getFullYear()} All rights reserved. Developed
//               by{" "}
//               <a
//                 className="text-decoration-none"
//                 id="dev-link"
//                 href="https://www.andrometa.in"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Andrometa
//               </a>
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }