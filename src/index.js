import React, {Component} from 'react';
import {render} from 'react-dom';


const buttonStyle = {
  size: '30px 30px 30px 30px'
};
class SearchButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "" };
  }
  buttonClicked() {
    console.log('button worked');
  }




  render() {


    console.log("Don't touch me asshole.");
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
