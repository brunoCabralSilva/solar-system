import React from 'react';
import '../App.css';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    function retornaCard(objeto) {
      const { name: n, year: y, country: c, destination: d } = objeto;
      return (<MissionCard name={ n } year={ y } country={ c } destination={ d } />);
    }
    const missao = missions.map((mission) => retornaCard(mission));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missao}
      </div>
    );
  }
}

export default Missions;
