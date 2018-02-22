import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';

const request= "http://ddragon.leagueoflegends.com/cdn/7.15.1/data/en_US/champion.json?api_key=RGAPI-3ff47e8c-88b0-4f8d-a108-280272dd665d";

class SearchButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      champion: {},
      allChamps: {},
      search: "",
      champNames: []
    };
  }

  onNameChange(e) {
    let valueLower = String(e.target.value).toLowerCase();
    let champNames = Object.keys(this.state.allChamps);
    champNames = champNames
      .map(name => name.toLowerCase())
      .filter((name => name.includes(valueLower)));
      this.setState({
        champNames: champNames
      });
  }

  componentWillMount() {
    axios.get(request).then((data) =>{
      console.log(data);
      this.setState({
        allChamps: data.data.data
      });
    })
  }

  render() {
    return (
      <div>
        <input id= "inputText" type= "text" name= "name" onChange={(e) => this.onNameChange(e)}></input>
        <button className="inputs" onClick={() => this.onButtonClick()}>Search Champions</button>
        {this.state.champNames.map(name => <p>{name}</p>)}
      </div>
    );
  }
}

render(<SearchButton/>, document.getElementById('ChampBox'));
