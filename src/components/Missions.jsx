import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const cardMission = missions.map((mission) => (
      <MissionCard
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="containerMission">{cardMission}</div>
      </div>
    );
  }
}

export default Missions;
