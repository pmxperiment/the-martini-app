import React, { Component } from 'react';
import IndexCategoryDrop from './IndexCategoryDrop';
import AllLocations from './AllLocations';
import PostALocation from './PostALocation';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Users: []
    }
  }
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`).then((res) => {
    }).then((json) => {
      this.setState({Users:json});
      console.log(this.setState.Users);
    })
  }
  render() {
    return (
      <div>
          <div>
            <IndexCategoryDrop/>
          </div>
          <PostALocation/>
          <AllLocations/>
          <div>
          </div>

    </div>
    );
  }
}

export default Home;
