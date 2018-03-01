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
                      <li>Homes & Residences</li>
                      <li>Businesses</li>
                      <li>Rural Areas</li>
                      <li>Miscellaneous</li>
                  </ul>
              </div>
            </div>
          </div>
    )
  }
}

export default IndexCategoryDrop;
