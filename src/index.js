import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
var _ = require('lodash');

const ourUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json?api_key=RGAPI-";

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
  }

  componentWillMount() {
    axios.get(ourUrl).then((data) => {
      champNames = data.data.data;
      let x = 0;
      Object.keys(champNames).map(function(key, index) {
        champArr.push(champNames[key]);
      });
    });
  }

  render() {
    return (
      <div>
        <form ></form>
        <button className="inputs" onClick={this.buttonClicked.bind(this)}>Find Champion</button>
        <p>{this.state.yourChamp.name}</p>
        <img src={_.has(this.state.yourChamp, 'image.sprite') ? `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${this.state.yourChamp.image.full}` : "http://i.imgur.com/xNLs83T.png"}/>
      </div>
    );
  }
}

render(<SearchButton/>, document.getElementById('ChampBox'));
