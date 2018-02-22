import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <div className='App'>
          <div id= 'martini'> <h1>Martini</h1>
        </div>
        <Header/>
        { MyRoutes }
      </div>
    </div>
    );
  }
}

export default App;
