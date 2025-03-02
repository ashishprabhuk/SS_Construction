// import React from "react";
// import { Container, Row, Col, Table, Card } from "react-bootstrap";

// const PlantMachinery = () => {
//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4">Plant & Machinery</h2>

//       {/* Batching Plant Section */}
//       <Card className="mb-4 shadow-sm">
//         <Card.Body>
//           <Card.Title className="text-primary">Batching Plant</Card.Title>
//           <Table striped bordered hover responsive>
//             <tbody>
//               <tr>
//                 <td><strong>Make</strong></td>
//                 <td>AJAX</td>
//               </tr>
//               <tr>
//                 <td><strong>Model</strong></td>
//                 <td>IRB45</td>
//               </tr>
//               <tr>
//                 <td><strong>Hourly Production</strong></td>
//                 <td>45 Cum/Hr</td>
//               </tr>
//               <tr>
//                 <td><strong>Method of Mixing</strong></td>
//                 <td>Twin Shaft</td>
//               </tr>
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//       {/* Equipment List Section */}
//       <Card className="shadow-sm">
//         <Card.Body>
//           <Card.Title className="text-primary">Equipment List</Card.Title>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>Sl. No</th>
//                 <th>Equipment Name</th>
//                 <th>Make</th>
//                 <th>Capacity</th>
//                 <th>No. of Equipment Available</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 [1, "Batching Plant", "AJAX", "45 Cum per Hr", 1],
//                 [2, "Cement Feeding Blower", "Twin Lobe", "50HP", 1],
//                 [3, "Air Compressor", "ELGI", "5HP", 1],
//                 [4, "Silo", "-", "100mt", 2],
//                 [5, "DG", "Kirloskar", "125KVA", 1],
//                 [6, "Transit Mixer", "TATA", "8 Cum", 2],
//                 [7, "Transit Mixer", "Leyland", "8 Cum", 2],
//                 [8, "Pump", "SCWING", "SP1200", 1],
//                 [9, "BOOM Pump", "SCWING", "BP 350D", 1],
//                 [10, "Pump", "Putz", "1400", 1],
//                 [11, "Wheel Loader", "JCB", "-", 1]
//               ].map((item, index) => (
//                 <tr key={index}>
//                   <td>{item[0]}</td>
//                   <td>{item[1]}</td>
//                   <td>{item[2]}</td>
//                   <td>{item[3]}</td>
//                   <td>{item[4]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default PlantMachinery;




// import React from 'react';
// import { Card, Table, Row, Col } from 'react-bootstrap';

// const PlantMachinery = () => {
//   // Batching Plant Details Data
//   const batchingDetails = [
//     { id: 1, detail: 'Output Theoretical' },
//     { id: 2, detail: 'In Line Bin' },
//     { id: 3, detail: 'Charging Conveyor' },
//     { id: 4, detail: 'Cement/Filler Weighing System' },
//     { id: 5, detail: 'Water Weighing System' },
//     { id: 6, detail: 'Admixture Weighing System' },
//     { id: 7, detail: 'Mixer' },
//     { id: 8, detail: 'Maximum Size of Aggregate' },
//     { id: 9, detail: 'Water Sprinkling & Gravity Discharge System' },
//     { id: 10, detail: 'Air Compressor' },
//     { id: 11, detail: 'Screw Conveyor for Cement' },
//     { id: 12, detail: 'Cement Filling Hopper' },
//     { id: 13, detail: 'Control System' },
//     { id: 14, detail: 'Discharge Height' },
//   ];

//   // Equipment List Data
//   const equipmentList = [
//     { id: 1, name: 'Batching Plant', make: 'AJAX', capacity: '45 Cum/Hr', available: 1 },
//     { id: 2, name: 'Cement feeding Blower', make: 'Twin Lobe', capacity: '50HP', available: 1 },
//     { id: 3, name: 'Air Compressor', make: 'ELIGI', capacity: '5HP', available: 1 },
//     { id: 4, name: 'Silo', make: '', capacity: '100mt', available: 2 },
//     { id: 5, name: 'DG', make: 'Kirloskar', capacity: '125KVA', available: 1 },
//     { id: 6, name: 'Transit Mixer', make: 'TATA', capacity: '8Cum', available: 2 },
//     { id: 7, name: 'Transit Mixer', make: 'Leyland', capacity: '8Cum', available: 1 },
//     { id: 8, name: 'Pump', make: 'SCWING', capacity: 'SP1200', available: 1 },
//     { id: 9, name: 'BOOM Pump', make: 'SCWING', capacity: 'BP350D', available: 1 },
//     { id: 10, name: 'Pump', make: 'Putz', capacity: '1400', available: 1 },
//     { id: 11, name: 'Wheel loader', make: 'JCB', capacity: '', available: 1 },
//   ];

//   return (
//     <div className="p-4">
//       <h2 className="mb-4 text-primary">Plant & Machinery</h2>
      
//       {/* Batching Plant Section */}
//       <Card className="mb-4 shadow">
//         <Card.Header as="h5" className="bg-light">
//           Batching Plant - AJAX IRB45
//         </Card.Header>
//         <Card.Body>
//           <Row>
//             <Col md={6}>
//               <p><strong>Hourly Production:</strong> 45 Cum/Hr</p>
//               <p><strong>Mixing Method:</strong> Twin Shaft</p>
//               <p className="text-muted small">
//                 (First of Kind Mixing Technology Plant in Trichy City)
//               </p>
//             </Col>
//             <Col md={6}>
//               <div className="bg-info p-3 rounded mb-3 text-white">
//                 <h6>Better Mixing Quality</h6>
//                 <p className="mb-0 small">
//                   Three dimensional particle motion through intelligent mixing arm placement 
//                   creating high turbulence.
//                 </p>
//               </div>
//               <div className="bg-warning p-3 rounded">
//                 <h6>Advanced Control System</h6>
//                 <p className="mb-0 small">
//                   Fully automatic PLC with SCADA for inventory management, reporting, 
//                   and fault diagnosis.
//                 </p>
//               </div>
//             </Col>
//           </Row>

//           <h6 className="mt-4">Details</h6>
//           <Table striped bordered size="sm" className="mt-2">
//             <tbody>
//               {batchingDetails.map(item => (
//                 <tr key={item.id}>
//                   <td width="50">{item.id}</td>
//                   <td>{item.detail}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
          
//           <div className="mt-3">
//             <strong>SSCU:</strong> System Control and Supervision Unit
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Equipment List Section */}
//       <Card className="shadow">
//         <Card.Header as="h5" className="bg-light">
//           Equipment List
//         </Card.Header>
//         <Card.Body>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Equipment Name</th>
//                 <th>Make</th>
//                 <th>Capacity</th>
//                 <th>Available</th>
//               </tr>
//             </thead>
//             <tbody>
//               {equipmentList.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.make}</td>
//                   <td>{item.capacity}</td>
//                   <td>{item.available}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default PlantMachinery;


// import React from "react";
// import { Container, Row, Col, Table, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./PlantMachinery.css";

// const PlantMachinery = () => {
//   return (
//     <Container className="plant-machinery py-5">
//       <h2 className="text-center mb-4">Plant & Machinery</h2>
//       <Row>
//         <Col md={12} className="mb-4">
//           <Card className="shadow-lg p-3 mb-5 bg-white rounded">
//             <Card.Body>
//               <h4 className="mb-3">Batching Plant</h4>
//               <ul>
//                 <li><strong>Make:</strong> AJAX</li>
//                 <li><strong>Model:</strong> IRB45</li>
//                 <li><strong>Hourly Production:</strong> 45 Cum/Hr</li>
//                 <li><strong>Method of Mixing:</strong> Twin Shaft</li>
//                 <li><em>First of its kind Mixing Technology Plant in Trichy City</em></li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6} className="mb-4">
//           <Card className="feature-card shadow-lg">
//             <Card.Img variant="top" src="better-mixing-quality.jpg" alt="Better Mixing Quality" />
//             <Card.Body>
//               <Card.Title>Better Mixing Quality</Card.Title>
//               <Card.Text>
//                 All particles achieve a three-dimensional motion, thanks to intelligent
//                 placement of mixing arms that creates high turbulence in the mixture.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6} className="mb-4">
//           <Card className="feature-card shadow-lg">
//             <Card.Img variant="top" src="advanced-control-system.jpg" alt="Advanced Control System" />
//             <Card.Body>
//               <Card.Title>Advanced Control System</Card.Title>
//               <Card.Text>
//                 Fully automatic PLC control system with SCADA for inventory management,
//                 fault detection, and report generation.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <Card className="shadow-lg p-3 mb-5 bg-white rounded">
//             <Card.Body>
//               <h4 className="mb-3">Equipment Details</h4>
//               <Table striped bordered hover responsive>
//                 <thead>
//                   <tr>
//                     <th>Sl.No</th>
//                     <th>Equipment Name</th>
//                     <th>Make</th>
//                     <th>Capacity</th>
//                     <th>No. of Equipment Available</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>Batching Plant</td>
//                     <td>AJAX</td>
//                     <td>45 Cum per Hr</td>
//                     <td>1</td>
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Cement Feeding Blower</td>
//                     <td>Twin Lobe</td>
//                     <td>50 HP</td>
//                     <td>1</td>
//                   </tr>
//                   <tr>
//                     <td>3</td>
//                     <td>Air Compressor</td>
//                     <td>ELIGI</td>
//                     <td>5 HP</td>
//                     <td>1</td>
//                   </tr>
//                   <tr>
//                     <td>4</td>
//                     <td>Silo</td>
//                     <td>-</td>
//                     <td>100 mt</td>
//                     <td>2</td>
//                   </tr>
//                   <tr>
//                     <td>5</td>
//                     <td>DG</td>
//                     <td>Kirloskar</td>
//                     <td>125 KVA</td>
//                     <td>1</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PlantMachinery;



import { Card, Table, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './PlantMachinery.css'; 
import mixingQualityImg from '../assets/Footer/chi.jpg';
import controlSystemImg from '../assets/Footer/acs.png';

const PlantMachinery = () => {
  const batchingDetails = [
        { id: 1, detail: 'Output Theoretical' },
        { id: 2, detail: 'In Line Bin' },
        { id: 3, detail: 'Charging Conveyor' },
        { id: 4, detail: 'Cement/Filler Weighing System' },
        { id: 5, detail: 'Water Weighing System' },
        { id: 6, detail: 'Admixture Weighing System' },
        { id: 7, detail: 'Mixer' },
        { id: 8, detail: 'Maximum Size of Aggregate' },
        { id: 9, detail: 'Water Sprinkling & Gravity Discharge System' },
        { id: 10, detail: 'Air Compressor' },
        { id: 11, detail: 'Screw Conveyor for Cement' },
        { id: 12, detail: 'Cement Filling Hopper' },
        { id: 13, detail: 'Control System' },
        { id: 14, detail: 'Discharge Height' },
      ];

      const equipmentList = [
        { id: 1, name: 'Batching Plant', make: 'AJAX', capacity: '45 Cum/Hr', available: 1 },
        { id: 2, name: 'Cement feeding Blower', make: 'Twin Lobe', capacity: '50HP', available: 1 },
        { id: 3, name: 'Air Compressor', make: 'ELIGI', capacity: '5HP', available: 1 },
        { id: 4, name: 'Silo', make: 'NA', capacity: '100mt', available: 2 },
        { id: 5, name: 'DG', make: 'Kirloskar', capacity: '125KVA', available: 1 },
        { id: 6, name: 'Transit Mixer', make: 'TATA', capacity: '8Cum', available: 2 },
        { id: 7, name: 'Transit Mixer', make: 'Leyland', capacity: '8Cum', available: 1 },
        { id: 8, name: 'Pump', make: 'SCWING', capacity: 'SP1200', available: 1 },
        { id: 9, name: 'BOOM Pump', make: 'SCWING', capacity: 'BP350D', available: 1 },
        { id: 10, name: 'Pump', make: 'Putz', capacity: '1400', available: 1 },
        { id: 11, name: 'Wheel loader', make: 'JCB', capacity: 'NA', available: 1 },
      ];

  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    initial: { scale: 1 }
  };

  return (
    <div className="p-4 modern-container">
      <h2 className="mb-4 section-title">Plant & Machinery</h2>
      <div id="fading-line"></div>
      
      <motion.div whileHover={{ scale: 1.005 }}>
        <Card className="mb-4 modern-card">
          <Card.Header className="modern-card-header">
            <h3 className="mb-0">AJAX IRB45 Batching Plant</h3>
            <div className="accent-line"></div>
          </Card.Header>
          <Card.Body>
            <Row className="g-4">
              <Col md={6}>
                <div className="specs-box">
                  <div className="spec-item">
                    <span className="spec-label">Hourly Production</span>
                    <span className="spec-value">45 Cum/Hr</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mixing Method</span>
                    <span className="spec-value">Twin Shaft</span>
                  </div>
                  <div className="badge-modern">
                    First in Trichy City
                  </div>
                </div>

                <Table className="modern-table mt-4">
                  <tbody>
                    {batchingDetails.map(item => (
                      <tr key={item.id}>
                        <td className="table-index">{item.id}</td>
                        <td className="table-detail">{item.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>

              <Col md={6}>
                <motion.div 
                  className="feature-card"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  <Image 
                    src={mixingQualityImg} 
                    fluid 
                    className="feature-image"
                    alt="Mixing quality visualization"
                  />
                  <div className="feature-content">
                    <h5>Better Mixing Quality</h5>
                    <p>
                      3D particle motion through intelligent mixing arm placement 
                      creating optimal turbulence for consistent mixture quality.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="feature-card mt-4"
                  variants={cardVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  <Image 
                    src={controlSystemImg} 
                    fluid 
                    className="feature-image"
                    alt="Control system interface"
                  />
                  <div className="feature-content">
                    <h5>Smart Control System</h5>
                    <p>
                      AI-enhanced PLC with SCADA integration, real-time monitoring, 
                      and predictive maintenance capabilities.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </motion.div>

      {/* Equipment List Section */}
      <motion.div whileHover={{ scale: 1.005 }}>
        <Card className="modern-card">
          <Card.Header className="modern-card-header">
            <h3 className="mb-0">Equipment Inventory</h3>
            <div className="accent-line"></div>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table className="modern-table hover-table">
                <thead className="table-header">
                  <tr>
                    <th>#</th>
                    <th>Equipment</th>
                    <th>Brand</th>
                    <th>Capacity</th>
                    <th>Units</th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentList.map(item => (
                    <motion.tr 
                      key={item.id}
                      whileHover={{ backgroundColor: '#f8f9fa' }}
                    >
                      <td className="table-index">{item.id}</td>
                      <td>{item.name}</td>
                      <td><span className="brand-badge">{item.make}</span></td>
                      <td>{item.capacity}</td>
                      <td><span className="unit-count">{item.available}</span></td>
                    </motion.tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};

export default PlantMachinery;