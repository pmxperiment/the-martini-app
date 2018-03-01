import React, { Component } from 'react';

class PostALocation extends Component {
  constructor() {
    super();
		this.state = {
			name: '',
			set_name: '',
      category: '',
      daily_fee: '',
      pic_url:'',
      contact_info: '',
      description: ''
		}
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e){
    //e.preventDefault();
    console.log({
      set_name: this.state.set_name,
      category: this.state.category,
      daily_fee: this.state.daily_fee,
      pic_url: this.state.pic_url,
      contact_info: this.state.contact_info,
      description: this.state.description
      })
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/locations/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        set_name: this.state.set_name,
        category: this.state.category,
        daily_fee: this.state.daily_fee,
        pic_url: this.state.pic_url,
        contact_info: this.state.contact_info,
        description: this.state.description
        })
      }).then((res) => {
        console.log("server res: ", res)
        return res.json()
      }).then((json) => {
        console.log("post test: ", json)
        //this.props.history.push('/locations');
      })
    }



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

                <form id="postLocation" >

                  <label>Name:</label>
                  <input name="name" placeholder= 'Name'
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value})}
                  />
                  <br />

                  <label>Film Set Name:</label>
                  <input name="filmSetName" placeholder= 'Film Set Name'
                  value={this.state.set_name}
                  onChange={e => this.setState({ set_name: e.target.value})}
                  />
                  <br />

                  <label>Category:</label>
                  <input name="category" placeholder= 'Category'
                  value={this.state.category}
                  onChange={e => this.setState({ category: e.target.value })}
                  />
                  <br />

                  <label>Daily Fee:</label>
                  <input name="dailyfee" placeholder= 'Daily Fee'
                  value={this.state.daily_fee}
                  onChange={e => this.setState({ daily_fee: e.target.value })}
                  />
                  <br />

                  <label>Pic URL:</label>
                  <input name="picURL" placeholder= 'Pic URL'
                  value={this.state.pic_url}
                  onChange={e => this.setState({ pic_url: e.target.value})}
                  />
                  <br />

                  <label>Contact Info:</label>
                  <input name="picURL" placeholder= 'Contact Info'
                  value={this.state.contact_info}
                  onChange={e => this.setState({ contact_info: e.target.value})}
                  />
                  <br />

                  <label>Location Description:</label>
                  <input name="description" placeholder= 'Describe your film set..'
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                  />
                  <br />
                  <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>

                </form>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default PostALocation;
