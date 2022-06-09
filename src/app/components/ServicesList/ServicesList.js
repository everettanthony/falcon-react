import { Row, Col }from 'react-bootstrap/';
import ServiceCard from '../ServiceCard/ServiceCard';

function ServicesList({ services }) {
  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {services.map(service => (
        <Col key={service.id}>
           <ServiceCard service={service} />     
        </Col>
      ))}
    </Row>
  )
}

export default ServicesList;