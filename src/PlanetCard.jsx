import React, { Component } from 'react';

class PlanetCard extends Component {
  render() { 
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">

        <h3 data-testid="planet-name">{ planetName }</h3>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />

      </div>
    );
  }
}
 
export default PlanetCard;