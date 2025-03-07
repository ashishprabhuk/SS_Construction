import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./WhyChoose.css";

function WhyChoose() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(1, 97, 43, 0.2)",
      backgroundColor: "#e8fff1",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.05, color: "#01612B" }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="wcu-bgc" className="pb-5">
      <Container>
        <motion.h1 
          className="display-6 text-center fw-bold my-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h1>
        <motion.div 
          className="section-underline"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ margin: "0 auto" }}
        ></motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="mt-5">
            {[
              {
                icon: "bi-lightning-charge",
                title: "On-Time Delivery",
                text: "We understand that time is critical in construction. Our efficient logistics ensure your concrete is delivered exactly when you need it."
              },
              {
                icon: "bi-shield-check",
                title: "Uncompromising Quality",
                text: "We blend top-grade materials with advanced mixing techniques to deliver concrete that meets the highest industry standards."
              },
              {
                icon: "bi-graph-up",
                title: "Cost-Effective Excellence",
                text: "We offer exceptional value with competitive pricing, proving that quality doesn't have to come at a premium."
              }
            ].map((item, index) => (
              <Col md={4} className="mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="h-100"
                >
                  <Card id="wcu-box" className="h-100 border-1">
                    <Card.Body className="text-center">
                      <motion.div 
                        className="mb-3" 
                        style={{ color: "#01612B" }}
                        variants={iconVariants}
                      >
                        <i className={`bi ${item.icon} fs-1`}></i>
                      </motion.div>
                      <motion.div variants={titleVariants}>
                        <Card.Title>{item.title}</Card.Title>
                      </motion.div>
                      <Card.Text className="text-secondary">
                        {item.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChoose;