import React from 'react';
import '../App.css';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    function retornaCard(mission) {
      const { name: n, year: y, country: c, destination: d } = mission;
      return (<MissionCard name={ n } year={ y } destination={ c } country={ d } />);
    }
    const missao = missions.map((mission) => retornaCard(mission));
    return (
      <div data-testid="missions" className="div-missions">
        <Title headline="Missões" />
        <div className="div-all-mission-cards">
          {missao}
        </div>
      </div>
    );
  }
}

export default Missions;
