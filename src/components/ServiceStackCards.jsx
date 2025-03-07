// import { Container, Row, Col, Card } from 'react-bootstrap';
// import user_icon from "../assets/icon/users-light.svg";
// import notebook_icon from "../assets/icon/notebook-light.svg";
// import flask_icon from "../assets/icon/flask-light.svg";
// import truck_icon from "../assets/icon/truck-light.svg";
// import "./ServiceStackCards.css";

// const services = [
//   {
//     title: "Dedicated Technical Service",
//     content: "On-site team providing pre & post concreting solutions at no cost",
//     image: user_icon,
//   },
//   {
//     title: "Quality Testing",
//     content: "Slump test & cube casting with certified results",
//     image: flask_icon,
//   },
//   {
//     title: "Expert Guidance",
//     content: "Demonstrations for early curing & delayed finishing techniques",
//     image: notebook_icon,
//   },
//   {
//     title: "Mobile Testing Lab",
//     content: "On-site cube tests & sieve analysis with instant reports",
//     image: truck_icon,
//   },
// ];

// const ServiceStackCards = () => {
//   return (
//     <Container className="pt-2 pb-4">
//       <Row className="g-4 d-flex flex-wrap justify-content-center">
//         {services.map((service, index) => (
//           <Col key={index} xs={12} sm={6} md={6} lg={3} className="d-flex">
//             <Card 
//               className="h-100 shadow-md border-2 rounded-4 service-card"
//               style={{ minWidth: '250px' }}
//             >
//               <Card.Body className="text-center p-4 d-flex flex-column">
//                   <img className='mb-3 mx-auto' src={service.image} alt={service.title} />
//                 <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
//                 <Card.Text className="text-secondary">
//                   {service.content}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ServiceStackCards;



import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import user_icon from "../assets/icon/users-light.svg";
import notebook_icon from "../assets/icon/notebook-light.svg";
import flask_icon from "../assets/icon/flask-light.svg";
import truck_icon from "../assets/icon/truck-light.svg";
import "./ServiceStackCards.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "Dedicated Technical Service",
    content: "On-site team providing pre & post concreting solutions at no cost",
    image: user_icon,
  },
  {
    title: "Quality Testing",
    content: "Slump test & cube casting with certified results",
    image: flask_icon,
  },
  {
    title: "Expert Guidance",
    content: "Demonstrations for early curing & delayed finishing techniques",
    image: notebook_icon,
  },
  {
    title: "Mobile Testing Lab",
    content: "On-site cube tests & sieve analysis with instant reports",
    image: truck_icon,
  },
];

const ServiceStackCards = () => {
  return (
    <Container className="stack-cards-container py-4">
      <Row className="g-4 d-flex flex-wrap justify-content-center">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="d-flex">
            <motion.div 
              className="w-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-100 border-0 rounded-4 stack-card">
                <Card.Body className="text-center p-4 d-flex flex-column align-items-center">
                  <motion.div 
                    className="icon-container mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img src={service.image} alt={service.title} />
                  </motion.div>
                  <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-secondary">
                    {service.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceStackCards;