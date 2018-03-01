import React, { Component } from 'react';

class AllLocations extends Component {

  constructor() {
    super();
    this.state = {
      allMyLocations: []
    }
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/api/locations')
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
            <h5 className="my-4 text-center text-lg-left">Available Set Locations</h5>
              <div className="row text-center text-lg-left">
                {this.state.allMyLocations.map((eachLocation, i) => {
                return(
                  <div className="col-lg-3 col-md-4 col-xs-6" key={i}>
                    {/* MAKE SURE EACH PICTURE HAS A LINK TO THEIR LOCAITON SHOW PAGE*/}
                    {/* Look up template literals to get the value of eachLocation._id*/ }
                      <a href={`/locations/${eachLocation._id}`} className="d-block mb-4 h-100">
                        <div id="martini"> <h5> {eachLocation.set_name}</h5>
                        </div>
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
