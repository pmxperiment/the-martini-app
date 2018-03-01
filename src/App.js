import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>
      <div className='App'>
          <div id= 'martini'> <Link to='/'><h1>Martini</h1></Link>
        </div>
        <Header/>
        { MyRoutes }
      </div>
    </div>
    );
  }
}

export default App;
