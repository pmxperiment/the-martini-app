import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';



class App extends Component {
  render() {
    return (
    <div>
      <header>
        <div>
          <h2>MARTNI</h2>
        </div>
      </header>
      <div className='App'>
        <Header/>
        { MyRoutes }
      </div>
    </div>
    );
  }
}

export default App;
