import React, { Component } from 'react';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      allMyLocations: []
    }
  }
  componentDidMount() {
    const REACT_APP_BACKEND_URL = 'http://localhost:8080';
    fetch(REACT_APP_BACKEND_URL + '/api/locations')
        .then(res => res.json())
        .then(json => {
          this.setState({allMyLocations: json});
          console.log(this.state.allMyLocations);
      // LOOK AT YOUR PAST FETCH REQUESTS (NEED RETURN RES.JSON)
      // this.setState({Location:json});
      // console.log(this.state.Location);
    }).then((locationsJson) => {

    })
  }
  render() {
    return (
      <h2>
        this is a single location post for rent
        { JSON.stringify(this.state.allMyLocations)}
      </h2>
    );
  }
}

export default Location;
