import React, { Component } from 'react';
import IndexCategoryDrop from './IndexCategoryDrop';
import AllLocations from './AllLocations';


class Home extends Component {
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
