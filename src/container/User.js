import React, {Component} from 'react';
import PostALocation from '../components/PostALocation'

class UserLocGallery extends Component {
  constructor() {
    super();
    this.state = {
      User: { locations: [] }
    }
  }
  componentDidMount() {
    const REACT_APP_BACKEND_URL = 'http://localhost:8080';
    fetch(REACT_APP_BACKEND_URL + `/api/users/${this.props.match.params.user_id}`)
        .then(res => res.json())
        .then(json => {
          this.setState({ User: json });
        })
      }
      render() {
        return (
          <div>
            <PostALocation/>
            <div>
              <div className="container">
                <h5 className="my-4 text-center text-lg-left">Available Set Locations</h5>
                  <div className="row text-center text-lg-left">
                    {this.state.User.locations.map(eachLocation => {
                    return(
                      <div className="col-lg-3 col-md-4 col-xs-6">
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


export default UserLocGallery;
