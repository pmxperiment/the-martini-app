import React, { Component } from 'react';

class AllLocations extends Component {

  constructor() {
    super();
    this.state = {
      allMyLocations: []
    }
  }
  componentDidMount() {
    const REACT_APP_BACKEND_URL = 'http://localhost:8080';
    fetch(REACT_APP_BACKEND_URL + '/api/locations')
        .then(res => res.json())
        .then(json => {
          this.setState({allMyLocations: json});
          console.log(this.state.allMyLocations);
          this.state.allMyLocations.map(eachLocation => {
            console.log(eachLocation.pic_url);
          })
    }).then((locationsJson) => {

    })
  }

  render() {
    return (

      <div>
        <div>
          <div className="container">
            <h5 className="my-4 text-center text-lg-left">put (set name)here put (daily_fee)here</h5>
              <div className="row text-center text-lg-left">
                {this.state.allMyLocations.map(eachLocation => {
                return(
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    {/* MAKE SURE EACH PICTURE HAS A LINK TO THEIR LOCAITON SHOW PAGE*/}
                    {/* Look up template literals to get the value of eachLocation._id*/ }
                    <a href={`/locations/${eachLocation._id}`} className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={eachLocation.pic_url}/>
                    </a>
                  </div>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>

    )
  }
}

export default AllLocations;
