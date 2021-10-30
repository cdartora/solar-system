import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import data from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">

        <Title headline="Missões" />

        {data.map((mission) => (
          <MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            destination={ mission.destination }
            country={ mission.country }
          />
        ))}

      </div>
    );
  }
}

export default Missions;
