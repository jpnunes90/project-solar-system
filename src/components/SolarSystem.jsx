import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetas = planets.map((planet, index) => (<PlanetCard
      key={ index }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        {planetas}
      </div>
    );
  }
}

export default SolarSystem;
