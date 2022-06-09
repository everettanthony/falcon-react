import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap/';
import './ServiceCard.scss';

function ServiceCard({ service }) {
  const { imageUrl, name, route, subTitle } = service;
  return (
    <Card className="service-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>
          <Link to={`${route}`}>{name}</Link>
        </Card.Title>      
        <Card.Text>
          {subTitle}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={`${route}`} className="btn card-btn">Learn More</Link>
      </Card.Footer>
    </Card>
  )
}

export default ServiceCard;