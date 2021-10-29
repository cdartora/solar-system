import React, { Component } from 'react';
import data from './data/planets';
import Title from './Title'

class SolarSystem extends Component {
  render() { 

    return (
      <div data-testid="solar-system">
        
        <Title headline='Planetas' />

        {data.map(planet => { // map that renders every planet dinamically
          return (
            <>
              <h4>{planet.name}</h4>
              <img src={planet.image} alt={planet.name} />
            </>
          )
        })}

      </div>
    );

  }
}
 
export default SolarSystem;