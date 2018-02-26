import React, { Component } from 'react';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: {}
    }
  }
  componentDidMount() {
    // make a request to your API with the appropraite location id
    // FETCH to /api/locations/1.json
    // after fetching, set the state's location to be whatever you got back
  }

  render() {
    console.log(this.props)
    console.log(this.props.match.params.location_id)
    return (
    <div>
      <h2>
        this is a single location post for rent:
        { JSON.stringify(this.state.location) }
      </h2>
    </div>
    )
  }
}

export default Location;
