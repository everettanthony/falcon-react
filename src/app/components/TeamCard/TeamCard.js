import { Card } from 'react-bootstrap/';
import './TeamCard.scss';

function TeamCard(props) {
  const { employee } = props;

  return (
    <Card className="team-card">
      <Card.Body>
        <Card.Title>
          <a href={`mailto:${employee.email}`}>{employee.name}</a>
        </Card.Title>  
        <Card.Subtitle>{employee.title}</Card.Subtitle>    
        <Card.Text>
          <a href={`tel:${employee.phone}`} className="card-phone">{employee.phone}</a>
          <a href={`mailto:${employee.email}`} className="card-email">{employee.email}</a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TeamCard;