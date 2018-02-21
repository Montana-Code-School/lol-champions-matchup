import React, {Component} from 'react';
import {render} from 'react-dom';


let query = 1;
const before = "https://na1.api.riotgames.com/lol/static-data/v3/champions/";
const after = "?locale=en_US&champData=image&api_key=RGAPI-3ff47e8c-88b0-4f8d-a108-280272dd665d";
let request = before + query + after;

class SearchButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "" };
  }

  buttonClicked() {
    console.log("Don't touch me asshole.");
    fetch(request, {
      mode: 'no-cors'
    }).then(data => {
      console.log(data.image);
    //   return results.json();
    // }).then(data => {
    //   let qResults = data.results.map(())
    });
  }

  render() {
    console.log("It Works!!");
    return (
      <div>
        <input id= "inputText" type= "text" name= "name" onChange= {this.onNameChange}></input>
        <button className="inputs" onClick={this.buttonClicked}>Search Champions</button>
      </div>
    );
  }
}

render(<SearchButton/>, document.getElementById('ChampBox')
);
