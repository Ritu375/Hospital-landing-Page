
// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from "react-bootstrap";


// import toothIcon from '../images/tooth.svg';
// import lungsIcon from '../images/lungs.svg';
// import brainIcon from '../images/brain.svg';
// import childIcon from '../images/child.svg';

// const services = [
//   {
//     title: "Dental Care",
//     icon: toothIcon,
//   },
//   {
//     title: "Pulmonary",
//     icon: lungsIcon,
//   },
//   {
//     title: "Neurological",
//     icon: brainIcon,
//   },
//   {
//     title: "Pediatrics",
//     icon: childIcon,
//   },
// ];

// const OurServices = () => {
//   const [hoveredCard, setHoveredCard] = useState(null); 

//   return (
//     <Container className="text-center py-5 our-services-section">
//       <h2 style={{ color: '#003B79' }} className='mb-4'>Our Services</h2>
//       <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "600px", color: "#003B79" }}>
//         We provide the most full medical services, so every person could<br/>
//         have the opportunity to receive qualitative medical help.
//       </p>
//       <Row className="g-4 justify-content-center">
//         {services.map((service, idx) => (
//           <Col xs={12} sm={6} md={3} key={idx}>
//             <Card
//               className="h-100 shadow-sm service-card"
//               style={{
//                 transition: 'all 0.3s ease',
//                 transform: hoveredCard === idx ? 'scale(1.05)' : 'scale(1)',
//               }}
//               onMouseEnter={() => setHoveredCard(idx)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
//                 <img src={service.icon} alt={service.title} className="service-icon" />
//                 <h5 className="mt-3 fw-bold">{service.title}</h5>
//                 {hoveredCard === idx && (
//                   <button className="btn btn-light mt-3 btn-sm learn-more-btn">
//                     Learn More →
//                   </button>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default OurServices;

import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

import toothIcon from '../images/tooth.svg';
import lungsIcon from '../images/lungs.svg';
import brainIcon from '../images/brain.svg';
import childIcon from '../images/child.svg';

const services = [
  { title: "Dental Care", icon: toothIcon },
  { title: "Pulmonary", icon: lungsIcon },
  { title: "Neurological", icon: brainIcon },
  { title: "Pediatrics", icon: childIcon },
];

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null); 

  return (
    <Container className="text-center py-5 mb-5 our-services-section">
      <h2 className='mb-4' style={{ color: '#003B79' }}>Our Services</h2>
      <p className="mb-5 mx-auto" style={{ maxWidth: "600px", color: "#002348" }}>
        We provide the most full medical services, so every person could<br/>
        have the opportunity to receive qualitative medical help.
      </p>
      <Row className="g-4 justify-content-center">
        {services.map((service, idx) => (
          <Col xs={12} sm={6} md={4} lg={3} key={idx}>
            <Card
              className="h-100 service-card shadow-sm"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                <img src={service.icon} alt={service.title} className="service-icon mb-3" />
                <h5 className="fw-bold">{service.title}</h5>
                {hoveredCard === idx && (
                  <button className="btn btn-light btn-sm learn-more-btn mt-3">
                    Learn More →
                  </button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="my-5"></div>
    </Container>
  );
};

export default OurServices;
