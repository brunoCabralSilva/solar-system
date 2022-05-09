import React from 'react';
import '../App.css';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    function retornaPlanetCard(imagem, nome) {
      return (<PlanetCard planetImage={ imagem } planetName={ nome } />);
    }
    const planeta = Planets.map((p) => retornaPlanetCard(p.image, p.name));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div id = "planetas">
          { planeta }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
