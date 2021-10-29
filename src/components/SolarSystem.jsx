import React, { Component } from 'react';
import data from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() { 

    return (
      <div data-testid="solar-system">
        
        <Title headline='Planetas' />

        {data.map(planet => { // map that renders every planet card dinamically
          return (
            <PlanetCard planetName={ planet.name } planetImage={ planet.image }/>
          )
        })}

      </div>
    );

  }
}
 
export default SolarSystem;