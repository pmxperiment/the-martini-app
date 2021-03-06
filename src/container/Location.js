import React, { Component } from 'react';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: {}
    }
  }
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/locations/${this.props.match.params.location_id}`)
    .then(res => res.json())
    .then((json) => {
      console.log(this.props.match.params.location_id)
      console.log(json)
      this.setState({location:json});
    })
  }


    onDelete(){
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/locations/${this.props.match.params.location_id}`,
      {
        method: 'DELETE'
      }).then((response) => {
        this.props.history.push('/');
        console.log(response);
      });
      //this.props.history.push('/');
    }


  render() {
    return (

      <div>
        <br />
            <h1> {this.state.location.set_name}</h1>
            <img src= { this.state.location.pic_url }/>
          <h2> { this.state.location.daily_fee } </h2>
          <h3> { this.state.location.contact_info } </h3>
          <h4> { this.state.location.description } </h4>
          <button className="btn btn-primary" onClick={e => this.onDelete()}>Delete</button>

      </div>
    )
  }
}

export default Location;
