import React, { Component } from 'react';


class PostALocation extends Component {
  render() {
    return (
      <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Create Another Film Set!
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <form >
                <br />
                <h3>Film Set Form</h3>
                <div id="newLoc_form">

                <label>Name:</label>
                <input placeholder= 'Name'/>
                <br />

                <label>Film Set Name:</label>
                <input placeholder= 'Film Set Name'/>
                <br />

                <label>Category:</label>
                <input placeholder= 'Category'/>
                <br />

                <label>Daily Fee:</label>
                <input placeholder= 'Daily Fee'/>
                <br />

                <label>Pic URL:</label>
                <input placeholder= 'Pic URL'/>
                <br />

                <label>Location Description:</label>
                <input placeholder= 'Describe your film set..'/>
                <br />
                <button className="btn btn-primary">Submit</button>

                </div>
              </form>
        </div>
      </div>
      </div>
    );
  }
}

export default PostALocation;
