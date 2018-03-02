import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to='/home'>Home</Link>
        <br />
        <Link to={'/locations/:location_id'}>Locations</Link>
        <Link to={'/users/:user_id'}>User</Link>
      </header>
    )
  }
}

export default Header
