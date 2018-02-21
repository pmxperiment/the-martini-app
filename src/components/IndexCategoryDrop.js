import React, {Component} from 'react';

class IndexCategoryDrop extends Component{
  render(){
    return (
          <div>

            <h1>
              this is the index category dropdown menu
            </h1>






            <div class="container">
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose A Film Set
                <span class="caret"></span></button>
                  <ul class="dropdown-menu">
                      <li><a href="#">Homes</a></li>
                      <li><a href="#">Businesses</a></li>
                      <li><a href="#">Rural</a></li>
                      <li><a href="#">Misc.</a></li>
                  </ul>
              </div>
            </div>

            <div>
              <img src="http://www.sterling.rmplc.co.uk/visions/2poolinthewater.jpg" class="rounded float-left" alt="..."></img>
              <img src="https://www.2croatia.com/photos/region/6/medium/hrvatsko_zagorje_seoski_turizam_135927jpg-9153.jpg" class="rounded float-right" alt="..."></img>
            </div>

          </div>
    )
  }
}

export default IndexCategoryDrop;
