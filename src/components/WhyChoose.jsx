import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section id="wcu-bgc" className="pb-5">
      <Container>
        <h3 id="plant-title" className="text-center mb-2 display-6">
          Why Choose Us
        </h3>
        <div id="fading-line" className="mb-5"></div>
        <Row>
          <Col md={4} className="mb-4">
            <Card id="wcu-box" className=" h-100 border-1">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <i className="bi bi-lightning-charge fs-1"></i>
                </div>
                <Card.Title>Title 1</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card id="wcu-box" className="h-100 border-1">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <i className="bi bi-shield-check fs-1"></i>
                </div>
                <Card.Title>Title 2</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card id="wcu-box" className="wcu-box h-100 border-1 ">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <i className="bi bi-graph-up fs-1"></i>
                </div>
                <Card.Title>Title 3</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChoose;
