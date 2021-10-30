import React, { Component } from 'react';
import data from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {data.map((planet, i) => (
          <PlanetCard key={ i } planetName={ planet.name } planetImage={ planet.image } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
