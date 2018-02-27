import React, { Component } from 'react';

class PostALocation extends Component {
  // constructor() {
  //   super();
	// 	this.state = {
	// 		name: '',
	// 		set_name: '',
  //     category: '',
  //     daily_fee: '',
  //     pic_url:'',
  //     description: ''
	// 	}
  //   this.onSubmit = this.onSubmit.bind(this);
  // }
  //
  //
  // onSubmit(e){
  //   e.preventDefault();
  //   // var _this = this;
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/locations/`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: this.state.name,
  //       set_name: this.state.set_name,
  //       category: this.state.category,
  //       daily_fee: this.state.daily_fee,
  //       pic_url: this.state.pic_url,
  //       description: this.state.description
  //       })
  //     }).then((res) => {
  //       return res.json()
  //     }).then((json) => {
  //       this.props.history.push('/api/locations');
  //     })
  //   }
  //


  render() {
    return (
      <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Create Another Film Set!
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                <br />
                <h3>Film Set Form</h3>
                <div id="newLoc_form">

                <form id="postLocation" action="http://localhost:8080/api/locations/">
                  <label>Name:</label>
                  <input name="name" placeholder= 'Name'/>
                  <br />

                  <label>Film Set Name:</label>
                  <input name="filmSetName" placeholder= 'Film Set Name'/>
                  <br />

                  <label>Category:</label>
                  <input name="category" placeholder= 'Category'/>
                  <br />

                  <label>Daily Fee:</label>
                  <input name="dailyfee" placeholder= 'Daily Fee'/>
                  <br />

                  <label>Pic URL:</label>
                  <input name="picURL" placeholder= 'Pic URL'/>
                  <br />

                  <label>Location Description:</label>
                  <input name="description" placeholder= 'Describe your film set..'/>
                  <br />
                  <button className="getInfo" type="submit">Submit</button>

                </form>
            </div>
        </div>
      </div>
    {/* <script>
      document.getElementById('getInfo').addEventlistener
      ('click', getInfo);

      function getInfo(){
       fetch('location.json')
      .then(res) => res.json())
      .then((data) => console.log(data))
    }

    </script> */}

      </div>
    );
  }
}

export default PostALocation;
