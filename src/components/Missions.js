import React from 'react';
import '../App.css';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missao = missions.map((mission) => <MissionCard name = {mission.name} year = {mission.year} destination = {mission.destination} country = {mission.country} />);
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missao}
      </div>
    );
  }
}

export default Missions;
