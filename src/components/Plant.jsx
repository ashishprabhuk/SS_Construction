// import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
// import { FiCheckCircle } from "react-icons/fi";
// import { plants } from "../Models/Plant";
// import "./Plant.css";

// const Plant = () => {
//   return (
//     <>
//       <section id="plant-bgc" className="py-5">
//         <Container>
//           <h1 className="display-6 text-center fw-bold my-3">
//           Plants & Machineries
//         </h1>
//           <div className="section-underline" style={{marginBottom: '10px'}}></div>

//           <Row className="g-4 mt-3">
//             {plants.map((plant, index) => (
//               <Col key={index} md={6} lg={4}>
//                 <Card className="h-100 shadow-sm border-0 overflow-hidden plant-card">
//                   {/* Image Section */}
//                   <div className="position-relative image-container">
//                     <Image
//                       src={plant.image}
//                       fluid
//                       className="card-img-top plant-image"
//                       style={{ height: "300px", objectFit: "cover" }}
//                       alt={plant.title}
//                     />
//                     <div className="position-absolute bottom-0 start-0 w-100 p-3 ">
//                       <Card.Title className="h4 mb-0 text-white plants-overlay">
//                         {plant.title}
//                       </Card.Title>
//                     </div>
//                   </div>

//                   <Card.Body className="p-4">
//                     <p className="mb-2 text-muted"><strong>Make:</strong> {plant.make}</p>
//                     <p className="mb-2 text-muted"><strong>Capacity:</strong> {plant.capacity}</p>
//                     <p className="mb-3 text-muted"><strong>Availability:</strong> {plant.availability}</p>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         <style>{`
//         .plant-card {
//           transition: all 0.3s ease-in-out;
//           border-radius: 1rem;
//           overflow: hidden;
//         }

//         .plant-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 1.5rem 3rem rgba(0,0,0,0.2)!important;
//         }

//         .image-container {
//           overflow: hidden;
//           border-radius: 1rem 1rem 0 0;
//         }

//         .plant-image {
//           transition: all 0.4s ease-in-out;
//         }

//         .plant-card:hover .plant-image {
//           transform: scale(1.08);
//         }

//         .title-overlay {
//           background: linear-gradient(transparent, rgba(0,0,0,0.8));
//           opacity: 1;
//         }

//         .features-label {
//           font-weight: bold;
//           color: #555;
//         }

//         .list-item {
//           transition: all 0.3s ease-in-out;
//         }

//         .plant-card:hover .list-item {
//           transform: translateX(8px);
//         }

//         .list-icon {
//           transition: all 0.3s ease-in-out;
//         }
//         .plant-card:hover .list-icon {
//           transform: scale(1.2);
//         }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Plant;



import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { plants } from "../Models/Plant";

const Plant = () => {
  return (
    <>
      <section id="plant-machinery-section" className="py-5">
        <Container>
          <h1 className="plant-main-heading display-6 text-center fw-bold my-3">
            Plants & Machineries
          </h1>
          <div className="plant-section-divider" style={{ margin: "0 auto 30px", width: "80px", height: "4px", background: "#3498db", borderRadius: "2px" }}></div>

          <Row className="g-4 mt-3">
            {plants.map((plant, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="plant-item-card h-100 border-0 overflow-hidden">
                  {/* Image Section */}
                  <div className="plant-image-wrapper position-relative">
                    <Image
                      src={plant.image}
                      fluid
                      className="plant-thumbnail"
                      alt={plant.title}
                    />
                    <div className="plant-title-overlay position-absolute w-100 p-3">
                      <Card.Title className="plant-item-title h4 mb-0">
                        {plant.title}
                      </Card.Title>
                    </div>
                  </div>

                  <Card.Body className="plant-item-details p-4">
                    <p className="plant-spec-item mb-2"><span className="plant-spec-label">Make:</span> {plant.make}</p>
                    <p className="plant-spec-item mb-2"><span className="plant-spec-label">Capacity:</span> {plant.capacity}</p>
                    <p className="plant-spec-item mb-3"><span className="plant-spec-label">Availability:</span> {plant.availability}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <style>{`
          /* Base Styles */
          #plant-machinery-section {
            background-color: #f8f9fa;
            padding: 5rem 0;
          }

          .plant-main-heading {
            color: #2c3e50;
            margin-bottom: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          /* Card Styles */
          .plant-item-card {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            background: white;
            position: relative;
            overflow: hidden;
          }

          .plant-item-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 22px 40px rgba(0, 0, 0, 0.1);
          }

          /* Image Styles */
          .plant-image-wrapper {
            overflow: hidden;
            height: 280px;
          }

          .plant-thumbnail {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.65s cubic-bezier(0.33, 1, 0.68, 1);
          }

          .plant-item-card:hover .plant-thumbnail {
            transform: scale(1.12);
          }

          .plant-title-overlay {
            bottom: 0;
            left: 0;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
            padding: 30px 20px 20px;
          }

          .plant-item-title {
            color: white;
            font-weight: 600;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          /* Details Styles */
          .plant-item-details {
            padding: 1.75rem;
          }

          .plant-spec-item {
            color: #555;
            font-size: 1rem;
            line-height: 1.5;
            transition: transform 0.3s ease;
          }

          .plant-item-card:hover .plant-spec-item {
            transform: translateX(6px);
          }

          .plant-spec-label {
            font-weight: 600;
            color: #2c3e50;
            margin-right: 4px;
          }
        `}</style>
      </section>
    </>
  );
};

export default Plant;