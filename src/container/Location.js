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
    const REACT_APP_BACKEND_URL = 'http://localhost:8080';
    fetch(`${REACT_APP_BACKEND_URL}/api/locations/${this.props.match.params.location_id}`)
    .then(res => res.json())
    .then((json) => {
      this.setState({location:json});
      console.log(this.state.location);
    })
  }

  render() {
    // console.log(this.props)
    // console.log(this.props.match.params.location_id)
    return (

    <div>
      <br />
          <h1> {this.state.location.set_name}</h1>
          <img src= { this.state.location.pic_url }/>
        <h2> { this.state.location.daily_fee } Per Day </h2>
        <h4> { this.state.location.description } </h4>
    </div>
    )
  }
}

export default Location;
