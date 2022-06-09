import { Row, Col }from 'react-bootstrap/';
import TeamCard from '../TeamCard/TeamCard';
import './TeamList.scss';

function TeamList(props) {
  return (
    <Row xs={1} md={2} xl={4} className="g-1">
      {props.team.map(employee => (
        <Col>
           <TeamCard key={employee.id} employee={employee} />     
        </Col>
      ))}
    </Row>
  )
}

export default TeamList;