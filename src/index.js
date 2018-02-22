import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
var _ = require('lodash');

const ourUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json?api_key=RGAPI-082dbc68-3edb-4ac3-9d02-59efc93d1d66";

//   apiKey: '082dbc68-3edb-4ac3-9d02-59efc93d1d66',
//   photo address: http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Urgot.png
let champArr = [];
let champNames;

class SearchButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      yourChamp: {},

    };
  }

  buttonClicked() {
    let ranNum = Math.floor(Math.random() * (champArr.length-1));
    let yourChamp = champArr[ranNum];
    this.setState({
      yourChamp: yourChamp
    });
    console.log(champArr[ranNum]);
  }

  componentWillMount() {
    axios.get(ourUrl).then((data) => {
      champNames = data.data.data;
      let x = 0;
      Object.keys(champNames).map(function(key, index) {
        champArr.push(champNames[key]);
      });
      //console.log(champArr);
      // console.log(champArr[1].name);
      console.log(champNames.Urgot);
    });
  }

  render() {
    console.log("It Works!!");
    return (
      <div>
        <form ></form>
        <button className="inputs" onClick={this.buttonClicked.bind(this)}>Find Champion</button>
        <p onClick = {()=>console.log("you did the thing")}>{this.state.yourChamp.name}</p>
        <img src={_.has(this.state.yourChamp, 'image.sprite') ? `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${this.state.yourChamp.image.full}` : "./download.jpeg"}/>
      </div>
    );
  }
}

render(<SearchButton/>, document.getElementById('ChampBox'));
