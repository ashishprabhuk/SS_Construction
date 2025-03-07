// import React from 'react'
// import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
// import { services } from '../Models/Services'
// import { FiCheckCircle } from 'react-icons/fi'
// import check from "../assets/icon/check-circle-duotone.svg";
// import "./ServiceCard.css";

// function ServiceCard() {
//   return (
//     <div>
//       <Row className="g-4 d-flex flex-wrap justify-content-center">
//             {services.map((service, index) => (
//               <Col key={index} xs={12} sm={6} md={6} lg={4} className="d-flex">
//                 <Card className="h-100 shadow-sm border-0 overflow-hidden service-card w-100">
//                   {/* Image Section */}
//                   <div className="position-relative image-container">
//                     <Image
//                       src={service.image}
//                       fluid
//                       className="card-img-top service-image"
//                       style={{ height: "200px", objectFit: "cover" }}
//                       alt={service.title}
//                     />
//                     <div className="position-absolute bottom-0 start-0 w-100 p-3 ">
//                       <Card.Title className="h4 mb-0 text-white title-overlay">
//                         {service.title}
//                       </Card.Title>
//                     </div>
//                   </div>

//                   <Card.Body className="p-4">
//                     <div className="d-flex align-items-center mb-3 icon-container">
//                       <div>
//                         <p className="mb-0 text-muted features-label">
//                           Key Features
//                         </p>
//                       </div>
//                     </div>

//                     <ListGroup variant="flush" className="border-top">
//                       {service.advantages.map((advantage, idx) => (
//                         <ListGroup.Item
//                           key={idx}
//                           className="border-0 px-0 py-2 d-flex align-items-start list-item"
//                         >
//                           {/* <FiCheckCircle className="text-success me-2 mt-1 flex-shrink-0 list-icon" /> */}
//                           <img src={check} alt="check" className="text-success me-2 mt-1 flex-shrink-0 list-icon"/>
//                           <span className="text-secondary">{advantage}</span>
//                         </ListGroup.Item>
//                       ))}
//                     </ListGroup>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//     </div>
//   )
// }

// export default ServiceCard



import React from 'react';
import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { services } from '../Models/Services';
import check from "../assets/icon/check-circle-duotone.svg";
import "./ServiceCard.css";
import { motion } from "framer-motion";

function ServiceCard() {
  return (
    <div className="service-card-container py-4">
      <Row className="g-4 d-flex flex-wrap justify-content-center">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={4} className="d-flex">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-100"
            >
              <Card className="h-100 border-0 service-card w-100">
                {/* Image Section with Hover Effect */}
                <div className="position-relative image-container overflow-hidden">
                  <Image
                    src={service.image}
                    fluid
                    className="card-img-top service-image"
                    alt={service.title}
                  />
                  <div className="service-overlay">
                    <Card.Title className="h4 mb-0 text-white title-overlay">
                      {service.title}
                    </Card.Title>
                  </div>
                </div>

                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0 features-label">Key Features</h5>
                  </div>

                  <ListGroup variant="flush" className="features-list">
                    {service.advantages.map((advantage, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                      >
                        <ListGroup.Item className="border-0 px-0 py-2 d-flex align-items-start list-item">
                          <img src={check} alt="check" className="check-icon me-2 mt-1" />
                          <span>{advantage}</span>
                        </ListGroup.Item>
                      </motion.div>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ServiceCard;