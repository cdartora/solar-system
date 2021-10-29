import React, { Component } from 'react';

class MissionCard extends Component {
  render() { 
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card">

        <h4 data-testid="mission-name">{ name }</h4>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
        
      </div>
    );
  }
}
 
export default MissionCard;