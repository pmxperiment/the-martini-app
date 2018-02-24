import React, { Component } from 'react';
import UserLocGallery from '../components/UserLocGallery';
import PostALocation from '../components/PostALocation';



class User extends Component {
  constructor() {
    super();
    this.state = {
      User: []
    }
  }
  componentDidMount() {
    const REACT_APP_BACKEND_URL = 'http://localhost:8080';
    fetch(REACT_APP_BACKEND_URL + '/api/users/:user_id').then((res) => {
    }).then((json) => {
      this.setState({User:json});
      console.log(this.state.User);
    })
  }
  render() {
    return (
      <div>

        <div>

        </div>
      <PostALocation/>
        <div>
          <UserLocGallery/>
        </div>


    </div>
    );
  }
}

export default User;
