import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./WhyChoose.css";

function WhyChoose() {
  const wcu = [
    {
      icon: "bi-lightning-charge",
      title: "On-Time Delivery",
      text: "We understand that time is critical in construction. Our efficient logistics ensure your concrete is delivered exactly when you need it.",
    },
    {
      icon: "bi-shield-check",
      title: "Uncompromising Quality",
      text: "We blend top-grade materials with advanced mixing techniques to deliver concrete that meets the highest industry standards.",
    },
    {
      icon: "bi-graph-up",
      title: "Cost-Effective Excellence",
      text: "We offer exceptional value with competitive pricing, proving that quality doesn't have to come at a premium.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const borderVariants = {
    hidden: { width: 0 },
    visible: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <section id="wcu-bgc">
      <Container>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2
              className="heading-title fw-bold display-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              className="section-underline"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-muted fs-5 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We provide exceptional concrete solutions backed by expertise and
              reliability.
            </motion.p>
          </Col>
        </Row>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="g-4">
            {wcu.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className="feature-card p-4"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="icon-container"
                    variants={iconContainerVariants}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </motion.div>
                  <h3 className="feature-title text-center">{item.title}</h3>
                  <p className="feature-text text-center mb-0">{item.text}</p>
                  <motion.div
                    className="border-animation"
                    variants={borderVariants}
                  ></motion.div>
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
