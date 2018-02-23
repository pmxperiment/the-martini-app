import React, { Component } from 'react';
import IndexCategoryDrop from './IndexCategoryDrop';
import AllLocations from './AllLocations';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      Users: []
    }
  }
  componentDidMount() {
    const REACT_APP_BACKEND_URL = 'http://localhost:8080';
    fetch(REACT_APP_BACKEND_URL + '/api/users').then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({Users:json});
      console.log(this.state.Users);
    })
  }
  render() {
    return (
      <div>
          <div>
            <IndexCategoryDrop/>
          </div>
          <AllLocations/>
          <div>
          </div>

    </div>
    );
  }
}

export default Home;
