import React, { Component } from 'react';

export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
        <div className="locationWrapper">
        <h1>Locations</h1>
          <h4>Nashville North Location</h4>
          <h5>500 Puppy Way</h5>
          <h4>Nashville South Location</h4>
          <h5>500 Kitty Way</h5>
        </div>
      </div>
      </React.Fragment>
    );
  }
}