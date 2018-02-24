import React, {Component} from 'react';

class IndexCategoryDrop extends Component{
  render(){
    return (
          <div>
            <div className="container">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Film Set Categories
                <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                      <li><a href="#">Homes & Residences</a></li>
                      <li><a href="#">Businesses</a></li>
                      <li><a href="#">Rural Areas</a></li>
                      <li><a href="#">Miscellaneous</a></li>
                  </ul>
              </div>
            </div>
          </div>
    )
  }
}

export default IndexCategoryDrop;
