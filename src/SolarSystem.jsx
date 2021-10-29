import React, { Component } from 'react';
import data from './data/planets';

class SolarSystem extends Component {
  render() { 

    return (
      <div data-testid="solar-system">

        {data.map(planet => {

          return (
            <>
              <h3>{planet.name}</h3>
              <img src={planet.image} alt={planet.name} />
            </>
          )

        })}

      </div>
    );

  }
}
 
export default SolarSystem;