import { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import offc from "../assets/icon/building-office-duotone.svg";
import Eye from "../assets/icon/eye-light.svg";
import Target from "../assets/icon/target-duotone.svg";
import Lab from "../assets/icon/flask-fill.svg";
import people from "../assets/icon/users-three-duotone.svg";
import check from "../assets/icon/check-circle-duotoneb.svg";
import profile from "../assets/About/Profile.jpg";
import ceo from "../assets/About/ceo.jpg";
import companyImage from "../assets/About/flag.jpg";
import lab from "../assets/About/labsc.jpg";
import "./AboutSection.css";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutSection = () => {

  const leader = [
    {
      name: "Er. S. Sakthivel",
      role: "Managing Director & CFO",
      description:
        "M.Tech (Structural Engineering) with 30+ years of experience. Founder of Arutjothi Constructions.",
      image: ceo,
    },
    {
      name: "Er. S. Srivarsan",
      role: "Chief Executive Officer",
      description:
        "B.E. Civil Engineering. Technology-driven leader focused on sustainable construction and operational excellence.",
      image: profile,
    },
  ];

  return (
    <Container fluid className="about-us-page">
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="hero-section text-center pt-5 pb-3 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h1
          className="display-4 fw-bold my-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.div
          className="section-underline"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>
        <motion.p
          className="lead mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Building Strong Foundations Since 2023
        </motion.p>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        id="overview"
        className="section-overview py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-4 d-flex gap-2 align-items-center">
                  <img src={offc} alt="offc" />
                  <div>Company Overview</div>
                </h2>
                <p className="lead pt-2">
                  SS Ultra Ready Mix Concrete is an established Ready Mix
                  Concrete Company in Tiruchirappalli, driven by experienced
                  professionals in the concrete industry.
                </p>
                <p className="lead pt-2">
                  We are committed to producing high-quality, cost-effective
                  products to suit every segment of the construction industry.
                </p>
              </motion.div>
            </Col>
            <Col md={6} className="text-center">
              <motion.img
                style={{ borderRadius: "20px" }}
                src={companyImage}
                alt="Company Overview"
                className="img-fluid"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        id="vision-mission"
        className="vision-mission py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <Container>
          <Row className="g-4 align-items-stretch">
            {" "}
            {/* Ensures equal column height */}
            <Col md={6} className="d-flex">
              <motion.div
                className="w-100" /* Ensures both cards take full width */
                variants={fadeIn}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="h-100 p-4 shadow-lg  vision-card "
                  style={{ borderRadius: "20px" }}
                >
                  <Card.Body>
                    <img
                      src={Eye}
                      alt="eye"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h3
                      className="pb-3 text-start"
                      style={{ letterSpacing: "2px", fontSize: "1.5rem" }}
                    >
                      Our Vision
                    </h3>
                    <Card.Text
                      className="text-secondary"
                      style={{ letterSpacing: "1px", fontSize: "1.2rem" }}
                    >
                      To be the leading provider of innovative, high-quality
                      ready-mix concrete solutions, delivering sustainable and
                      reliable products that drive the success of our clients
                      and contribute to building stronger communities.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} className="d-flex">
              <motion.div
                className="w-100"
                variants={fadeIn}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="h-100 p-4 mission-card shadow-lg"
                  style={{ borderRadius: "20px" }}
                >
                  <Card.Body>
                    <img
                      src={Target}
                      alt="target"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h3
                      className="pb-3 text-start"
                      style={{ letterSpacing: "2px", fontSize: "1.5rem" }}
                    >
                      Our Mission
                    </h3>
                    <motion.div variants={staggerChildren}>
                      <ListGroup
                        variant="flush"
                        className="text-start"
                        style={{ letterSpacing: "1px", fontSize: "1.2rem" }}
                      >
                        {[
                          "Deliver superior value to stakeholders",
                          "Exceptional customer service",
                          "Consistent quality products",
                          "Continuous team development",
                        ].map((item, index) => (
                          <motion.div key={index} variants={fadeIn}>
                            <ListGroup.Item className="d-flex align-items-center text-secondary">
                              <img
                                src={check}
                                alt="check"
                                className="me-2 flex-shrink-0"
                                style={{ width: "24px", height: "24px" }}
                              />
                              {item}
                            </ListGroup.Item>
                          </motion.div>
                        ))}
                      </ListGroup>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Lab Section */}
      <motion.section
        id="lab-section"
        className="lab-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Container>
          <Row className="align-items-center g-4">
            <Col md={7} className="text-center">
              <motion.img
                style={{ borderRadius: "20px" }}
                src={lab}
                alt="Our Laboratory"
                className="img-fluid"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              />
            </Col>
            <Col md={5} id="qal-para">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-4 d-flex align-items-center">
                  <img src={Lab} alt="quality" />
                  <div className="ms-2">Quality Assurance Lab</div>
                </h2>
                <motion.ul
                  className="lab-features list-unstyled text-start"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Consistent quality products & State-of-the-art in-house testing facility",
                    "New concrete product development",
                    "Trial mixes for new projects",
                    "Material quality testing",
                    "Highly skilled technicians",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="d-flex align-items-center"
                      variants={fadeIn}
                    >
                      <img
                        src={check}
                        alt="check"
                        className="text-success me-2 mt-1 flex-shrink-0 list-icon"
                      />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Management Section */}
      <motion.section
        id="management"
        className="management-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <Container>
          <motion.h2
            className="d-flex align-items-center gap-3 justify-content-center text-center mb-5 fw-bold text-dark"
            variants={fadeIn}
          >
            <img src={people} alt="people" />
            <div>Leadership Team</div>
          </motion.h2>
          <Row className="g-4 justify-content-center">
            {leader.map((leader, index) => (
              <Col key={index} xs={12} sm={10} md={6} lg={5}>
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="management-card shadow-lg h-100 text-center">
                    <Card.Img
                      variant="top"
                      src={leader.image}
                      className="leader-img"
                    />
                    <Card.Body className="leader-body">
                      <Card.Title className="fw-bold">{leader.name}</Card.Title>
                      <Card.Subtitle className="leader-desc leader-role mb-3">
                        {leader.role}
                      </Card.Subtitle>
                      <Card.Text className="text-secondary">
                        {leader.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>
    </Container>
  );
};

export default AboutSection;
