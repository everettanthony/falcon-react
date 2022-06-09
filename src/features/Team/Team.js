import { TEAM } from '../../app/data/team';
import TeamList from '../../app/components/TeamList/TeamList';
import CallUs from '../../app/components/CallUs/CallUs';
import './Team.scss';

function Team() {
  return (
    <div className="team">
      <div className="team-list">
        <TeamList team={TEAM} />
      </div>
      <CallUs />
    </div>
  );
}

export default Team;