import React, {Component} from 'react';
import {Link} from 'react-router';

var allMvc = ['React','Angular','Django','Flask','Angular2'];

export default class MvcList extends Component {

 state = {searchString: ''}

 handleChange = (e) => {
   this.setState({
     searchString: e.target.value
   })
 }



  render() {
    // console.log(this.state.searchString);
    let mainLibrary;
    let newAllMvc = allMvc;


  var searchString = this.state.searchString.trim().toLowerCase();
  // console.log(searchString);
    if (searchString != "") {
      // console.log('yeee');
        newAllMvc = allMvc.filter(function(item){

        return item.toLowerCase().match(searchString);
      });

    }
      mainLibrary = newAllMvc.map(function(item, index){
        return (
          <ul key={index}>
            <li className="li-mvc">{item}</li>
          </ul>
        );
      });



    return (
      <div className="search-wrap">
        <h2>Search for framework</h2>
        <input type="text"  value={this.state.searchString} onChange={this.handleChange}  className="input-field" placeholder="Type at least first two letters"/>
        {mainLibrary}
      </div>
    )

  }
}
