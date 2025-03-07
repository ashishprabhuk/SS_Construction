// import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
// import ServiceStackCards from "./ServiceStackCards";
// import ServiceCard from "./ServiceCard";

// const ServicesSection = () => {
//   return (
//     <>
//       <div className="contact-section">
//       <Container>
//         {/* Section Header */}
//         <div className="section-header text-center">
//           <h2 className="display-4 fw-bold">Services Offered</h2>
//           <div className="section-underline"></div>
//         </div>

//         <Row className="mt-5">
//           <ServiceStackCards />
//         </Row>

//         <ServiceCard/>
//       </Container>
//     </div>
//     </>
//   );
// };

// export default ServicesSection;


import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import ServiceStackCards from "./ServiceStackCards";
import ServiceCard from "./ServiceCard";
import "./ServiceSection.css";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <Container>
        {/* Section Header with Animation */}
        <motion.div 
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-4 fw-bold">Services Offered</h2>
          <div className="section-underline"></div>
        </motion.div>

        <ServiceStackCards />
        <ServiceCard />
      </Container>
    </section>
  );
};

export default ServicesSection;